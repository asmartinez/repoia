---
{
  "type": "Metadata Field",
  "title": "Tema obra",
  "description": "Obra tratada como tema.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L38",
  "tags": [
    "metadata",
    "subject_work"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L38"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L843"
    }
  ],
  "field": {
    "name": "subject_work",
    "predicate": "::Vocab::RDAW.subjectWork",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 38,
        "predicate": "::Vocab::RDAW.subjectWork",
        "multiple": true
      }
    ],
    "label": "Tema obra",
    "labelVariants": [
      "Tema obra"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Obra tratada como tema.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 843
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `subject_work`.
- Predicado declarado: `::Vocab::RDAW.subjectWork`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Obra tratada como tema.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
