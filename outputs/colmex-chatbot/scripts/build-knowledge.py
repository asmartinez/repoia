"""Rebuild the machine-derived OKF inventory from a local Colmex Hyrax checkout.
Usage: python3 scripts/build-knowledge.py /path/to/colmex_hyrax
Hand-maintained guide files are never overwritten. Frontmatter is JSON, a YAML subset.
"""
from pathlib import Path
import sys,re,json,subprocess,urllib.request,datetime,hashlib
root=Path(sys.argv[1]).resolve(); dest=Path(__file__).resolve().parents[1]/'knowledge'
sha=subprocess.check_output(['git','rev-parse','HEAD'],cwd=root,text=True).strip()
now=datetime.datetime.now(datetime.timezone.utc).isoformat().replace('+00:00','Z')
base=f'https://github.com/ColmexBDCV/colmex_hyrax/blob/{sha}/'
fields={};labels={};label_sources={};models={}
for p in sorted((root/'config/locales').glob('*.es.yml')):
 stack=[]
 for line_no,line in enumerate(p.read_text().splitlines(),1):
  m=re.match(r'^(\s*)([a-zA-Z_][\w.-]*):\s*(.*?)\s*$',line)
  if not m:continue
  indent=len(m[1]); key=m[2]; value=m[3]
  while stack and stack[-1][0]>=indent:stack.pop()
  path=[s[1] for s in stack]+[key]
  if value and len(path)>=4 and path[-4:-1]==['hyrax','base','show']:
   labels.setdefault(key,[])
   text=value.strip('"\'')
   if text not in labels[key]:labels[key].append(text)
   label_sources.setdefault(key,[]).append({'path':str(p.relative_to(root)),'line':line_no})
  if not value:stack.append((indent,key))
for p in sorted((root/'app/models').rglob('*.rb')):
 for i,line in enumerate(p.read_text().splitlines(),1):
  m=re.search(r'property\s+:(\w+),\s*predicate:\s*(.*?)(?:,\s*(multiple|class_name):|\s+do\s+\|index\||$)',line)
  if not m:continue
  name,predicate=m[1],m[2].strip();card=re.search(r'multiple:\s*(true|false)',line)
  fields.setdefault(name,{'name':name,'predicate':predicate,'multiple':card[1]=='true' if card else None,'definitions':[]})['definitions'].append({'path':str(p.relative_to(root)),'line':i,'predicate':predicate,'multiple':card[1]=='true' if card else None})
for p in sorted((root/'app/models').glob('*.rb')):
 text=p.read_text()
 if 'Hyrax::WorkBehavior' in text or 'Hyrax::CollectionBehavior' in text:
  model=re.search(r'class\s+(\w+)',text)[1]
  models[model]={'file':str(p.relative_to(root)),'includes':re.findall(r'^\s*include\s+([^\n]+)',text,re.M)}
u='https://repositorio.colmex.mx/advanced'
html=urllib.request.urlopen(u,timeout=20).read().decode()
inputs=set(re.findall(r'<input[^>]*name="([^"]+)"',html))
searchable=sorted((inputs & set(fields))-{'label','relative_path','import_url','depositor','date_uploaded','date_modified'})
# Known typo targets an unindexed parent_works_titles field: do not expose it as reliable.
ambiguities={
 'interviewer':'La etiqueta española dice Entrevistado, pero el predicado indica entrevistador. No intercambiar roles sin confirmar el registro.',
 'interviewee':'La etiqueta española dice Entrevistador, pero el predicado indica entrevistado. No intercambiar roles sin confirmar el registro.',
 'date_created':'El nombre sugiere creación y las ayudas genéricas dicen creación, pero el predicado local indica publicación. En colecciones y otros tipos hay que comprobar la práctica catalográfica.',
 'degree_program':'La etiqueta dice Grado, el nombre sugiere programa y el predicado institución otorgante. No equiparar estas tres cosas sin evidencia.',
 'date_of_presentation_of_the_thesis':'La etiqueta indica presentación, pero el predicado indica año de otorgamiento del grado. Documentar ambas interpretaciones.',
 'subject_conacyt':'La etiqueta dice Persona del CONACYT, pero el predicado indica público destinatario. Requiere revisión.',
 'based_near':'La propiedad usa geographicCoverage; el campo geographic_coverage usa FOAF based_near. Hay solapamiento y etiquetas potencialmente inconsistentes.',
 'geographic_coverage':'El predicado FOAF based_near no equivale por sí solo a una definición validada de cobertura temática.',
 'table_of_contents':'La etiqueta Contenido se usa con wholePartWorkRelationship. Su valor puede ser texto de índice, no un enlace estructurado a capítulos.',
 'publisher':'La etiqueta Editorial usa publicationStatement: puede contener una declaración completa, no sólo una entidad editora.',
 'period':'El predicado indica designación del último fascículo o parte de una secuencia, no necesariamente período histórico tratado.'
}
meaning={
 'creator':'Autoría de la obra; no una persona sobre la que trata.', 'has_creator':'Creador; puede ser una responsabilidad creativa más amplia que la autoría.',
 'subject':'Temas del contenido. Una etiqueta temática no prueba que la obra adopte una posición sobre ese tema.',
 'subject_person':'Persona tratada como tema, distinta de la autoría.', 'subject_family':'Familia tratada como tema.', 'subject_corporate':'Organismo tratado como tema.', 'subject_work':'Obra tratada como tema.',
 'description':'Resumen o sumario de catálogo. No es el documento completo.', 'table_of_contents':'Información del contenido o índice de la obra; puede servir para descubrir capítulos.',
 'temporary_coverage':'Período al que se refiere el contenido; distinto del año de publicación.', 'date_created':'Fecha de publicación según el predicado de la aplicación; confirmar el uso por tipo.',
 'date_uploaded':'Fecha de incorporación del registro; no fecha original del material.', 'date_modified':'Fecha de modificación del registro; no fecha del contenido.',
 'director':'Supervisor o director de tesis, distinto del autor.', 'academic_degree':'Grado académico asociado a una tesis.', 'institution':'Institución otorgante según el predicado.',
 'editor':'Persona editora del texto, distinta de la editorial.', 'translator':'Agente responsable de la traducción.', 'interviewer':'Agente entrevistador según el predicado.', 'interviewee':'Agente entrevistado según el predicado.',
 'language':'Idioma del contenido; mantener la etiqueta original para filtros exactos.', 'identifier':'Identificador de la manifestación según la definición RDF local.',
 'handle':'Identificador persistente Handle; no confundir con la dirección de la ficha Hyrax.', 'doi':'Identificador DOI.', 'isbn':'Identificador ISBN de la edición o manifestación.', 'issn':'Identificador de publicación seriada.',
 'provenance':'Procedencia del recurso.', 'contained_in':'Relación de inclusión; el sentido exacto debe confirmarse en los valores y la catalogación.',
 'related_work_of_work':'Otra obra relacionada; no prueba equivalencia, duplicidad o identidad.', 'is_finding_aid_for':'Relación con un instrumento de descripción archivística.',
 'beginning':'Inicio del hecho o intervalo descrito según la etiqueta local.', 'ending':'Fin del hecho o intervalo descrito según la etiqueta local.',
 'extension':'Extensión física o intelectual: páginas, fojas u otras unidades; no asumir páginas.', 'resource_type':'Etiqueta del tipo de recurso; puede diferir de la clase técnica Hyrax.',
 'title':'Título propiamente dicho.', 'alternate_title':'Título variante o alternativo.', 'rights_statement':'Declaración de derechos.', 'license':'Licencia o derechos de uso.',
}
def doc(path,meta,body):
 path.parent.mkdir(parents=True,exist_ok=True)
 path.write_text('---\n'+json.dumps(meta,ensure_ascii=False,indent=2)+'\n---\n'+body+'\n')
for name,f in fields.items():
 lab=labels.get(name,[name]); f.update(label=lab[0],labelVariants=lab,searchable=name in searchable,ambiguity=ambiguities.get(name,''))
 if len({d['predicate'] for d in f['definitions']})>1 or len({str(d['multiple']) for d in f['definitions']})>1:f['ambiguity'] += ' Existen declaraciones locales con predicados o cardinalidades distintos. Consulte cada definición antes de asumir un significado único.'
 definition=meaning.get(name, f'Campo descrito como «{lab[0]}». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.')
 f['meaning']=definition
 f['labelSources']=label_sources.get(name,[])
 meta={'type':'Metadata Field','title':lab[0],'description':definition,'resource':base+f['definitions'][0]['path']+'#L'+str(f['definitions'][0]['line']),'tags':['metadata',name],'status':'draft' if f['ambiguity'] else 'stable','generated':{'by':'process:hyrax-schema-extractor','at':now},'verified':[{'by':'process:source-extraction','at':now}],'sources':[{'id':'definition' if n==0 else 'definition-'+str(n+1),'resource':base+d['path']+'#L'+str(d['line'])} for n,d in enumerate(f['definitions'])],'field':f}
 meta['sources'] += [{'resource':base+d['path']+'#L'+str(d['line'])} for d in f['labelSources']]
 body=f'# Schema\n\n- Nombre técnico: `{name}`.\n- Predicado declarado: `{f["predicate"]}`.\n- Cardinalidad explícita: {f["multiple"] if f["multiple"] is not None else "no especificada en la declaración; depende del framework"}.\n- Presente en el formulario avanzado observado: {f["searchable"]}. Esto confirma exposición, no integridad o calidad de todos sus valores.\n\n{definition}[^definition]\n'
 if f['ambiguity']:body+='\n# Ambiguity\n\n'+f['ambiguity']+'\n'
 body+='\nLa verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.\n\n[^definition]: Definición en el código de Colmex Hyrax.'
 doc(dest/'fields'/f'{name}.md',meta,body)
def snake(name):
 return re.sub(r'(?<!^)(?=[A-Z])','_',name).lower()
def related_files(m):
 paths={m['file']};pending=list(m['includes'])
 while pending:
  module=pending.pop().strip(':').split('::')[-1]
  found=list((root/'app/models/concerns').rglob(snake(module)+'.rb'))
  for p in found:
   rel=str(p.relative_to(root))
   if rel in paths:continue
   paths.add(rel);pending+=re.findall(r'^\s*include\s+([^\n]+)',p.read_text(),re.M)
 return sorted(paths)
for model,m in models.items():
 paths=related_files(m)
 profile_fields=sorted(name for name,f in fields.items() if any(d['path'] in paths for d in f['definitions']))
 form=root/('app/forms/hyrax/'+snake(model)+'_form.rb')
 if model=='Collection':form=root/'app/forms/hyrax/forms/collection_form.rb'
 terms=[]
 if form.exists():
  for block in re.findall(r'self\.terms\s*\+=\s*\[([^\]]*)\]',form.read_text(),re.S):terms += re.findall(r':(\w+)',block)
 sources=[{'resource':base+path} for path in paths]
 if form.exists():sources.append({'resource':base+str(form.relative_to(root))})
 doc(dest/'materials'/f'{model}.md',{'type':'Material Profile','title':model,'description':f'Perfil de {model} en Colmex Hyrax.','resource':base+m['file'],'generated':{'by':'process:hyrax-schema-extractor','at':now},'sources':sources,'model':model,'modules':m['includes'],'fields':profile_fields,'explicitFormTerms':sorted(set(terms))},f'# Schema\n\nClase técnica `{model}`. Módulos compartidos: '+', '.join(m['includes'])+'.\n\nCampos declarados localmente o incorporados por módulos identificados:\n'+', '.join('`'+f+'`' for f in profile_fields)+'\n\nTérminos añadidos explícitamente al formulario: '+', '.join(terms)+'.\n\nEsta extracción no incluye propiedades adicionales aportadas por dependencias externas ni evaluación completa del formulario Rails. La clase técnica no equivale necesariamente a una etiqueta de tipo de recurso. Consulte los [campos](/fields/index.md).')
for p in sorted((root/'config/authorities').glob('*.yml')):
 values=re.findall(r'^\s+- id:\s*(.+)$',p.read_text(),re.M)
 if values:doc(dest/'vocabularies'/f'{p.stem}.md',{'type':'Vocabulary','title':p.stem,'description':'Valores identificados en la autoridad local; no equivalen automáticamente a facetas públicas.','resource':base+str(p.relative_to(root)),'sources':[{'resource':base+str(p.relative_to(root))}],'generated':{'by':'process:authority-extraction','at':now},'values':values},'# Valores declarados\n\n'+''.join('- '+v+'\n' for v in values)+'\nNo usar como valores de facetas sin confirmar su presencia y campo en el catálogo público.')
(dest/'fields/index.md').write_text('# Campos\n\n'+''.join(f'- [{fields[k]["label"]}]({k}.md) — `{k}`\n' for k in sorted(fields)))
(dest/'materials/index.md').write_text('# Perfiles\n\n'+''.join(f'- [{k}]({k}.md)\n' for k in sorted(models)))
manifest={'okfVersion':'0.2','sourceCommit':sha,'generatedAt':now,'fieldCount':len(fields),'modelCount':len(models),'advancedForm':u,'advancedObservedAt':now,'searchFields':['all_fields']+searchable,'excludedSearchFields':{'parent_works_titles':'Nombre configurado no coincide con parent_work_titles indexado; no validado.'},'catalogController':base+'app/controllers/catalog_controller.rb','sourceFiles':{str(p.relative_to(root)):hashlib.sha256(p.read_bytes()).hexdigest() for folder,pattern in [('app/models','*.rb'),('app/forms','*.rb'),('app/indexers','*.rb'),('config/locales','*.es.yml'),('config/authorities','*.yml')] for p in (root/folder).rglob(pattern)}}
(dest/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
(dest/'index.md').write_text('---\n{"okf_version":"0.2"}\n---\n# Conocimiento del repositorio Colmex\n\n- [Campos](fields/index.md) — inventario de definiciones, etiquetas y ambigüedades.\n- [Perfiles](materials/index.md) — tipos técnicos de materiales.\n- [Búsqueda](guides/search.md) — selección de herramientas y condiciones.\n- [Evidencia](guides/evidence.md) — alcance de las explicaciones y comparaciones.\n- [Calidad](guides/quality.md) — distinguir alertas, errores confirmados y decisiones válidas.\n- [Relaciones](guides/relationships.md) — personas, obras, lugares y contextos.\n- [Mantenimiento](guides/maintenance.md) — actualización y revisión.\n')
previous=(dest/'log.md').read_text() if (dest/'log.md').exists() else ''
entry='## '+now[:10]+'\n\n- **'+('Update' if previous else 'Creation')+'**: Extracción de '+str(len(fields))+' propiedades y '+str(len(models))+' perfiles desde '+sha+'. No constituye aprobación humana de sus significados.\n\n'
(dest/'log.md').write_text('# Actualizaciones\n\n'+entry+previous.removeprefix('# Actualizaciones\n\n'))
print(json.dumps({'fields':len(fields),'models':len(models),'searchFields':len(searchable)+1,'sourceCommit':sha}))
