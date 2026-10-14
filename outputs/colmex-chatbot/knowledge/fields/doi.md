---
{
  "type": "Metadata Field",
  "title": "doi",
  "description": "Identificador DOI.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L53",
  "tags": [
    "metadata",
    "doi"
  ],
  "status": "stable",
  "generated": {
    "by": "process:hyrax-schema-extractor",
    "at": "2026-10-09T20:27:23.573601Z"
  },
  "verified": [
    {
      "by": "process:source-extraction",
      "at": "2026-10-09T20:27:23.573601Z"
    }
  ],
  "sources": [
    {
      "id": "definition",
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L53"
    }
  ],
  "field": {
    "name": "doi",
    "predicate": "::RDF::Vocab::BF2.Doi",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 53,
        "predicate": "::RDF::Vocab::BF2.Doi",
        "multiple": false
      }
    ],
    "label": "doi",
    "labelVariants": [
      "doi"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Identificador DOI.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `doi`.
- Predicado declarado: `::RDF::Vocab::BF2.Doi`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Identificador DOI.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
