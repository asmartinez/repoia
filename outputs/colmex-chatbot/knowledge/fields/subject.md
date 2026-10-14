---
{
  "type": "Metadata Field",
  "title": "Tema",
  "description": "Temas del contenido. Una etiqueta temática no prueba que la obra adopte una posición sobre ese tema.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L35",
  "tags": [
    "metadata",
    "subject"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L35"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L830"
    }
  ],
  "field": {
    "name": "subject",
    "predicate": "::Vocab::RDAW.subjectRelationship",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 35,
        "predicate": "::Vocab::RDAW.subjectRelationship",
        "multiple": true
      }
    ],
    "label": "Tema",
    "labelVariants": [
      "Tema"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Temas del contenido. Una etiqueta temática no prueba que la obra adopte una posición sobre ese tema.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 830
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `subject`.
- Predicado declarado: `::Vocab::RDAW.subjectRelationship`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Temas del contenido. Una etiqueta temática no prueba que la obra adopte una posición sobre ese tema.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
