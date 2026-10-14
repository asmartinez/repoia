---
{
  "type": "Metadata Field",
  "title": "Título uniforme u original",
  "description": "Campo descrito como «Título uniforme u original». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L111",
  "tags": [
    "metadata",
    "subject_uniform_title"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L111"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L917"
    }
  ],
  "field": {
    "name": "subject_uniform_title",
    "predicate": "::Vocab::RDAW.subjectUniformTitle",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 111,
        "predicate": "::Vocab::RDAW.subjectUniformTitle",
        "multiple": false
      }
    ],
    "label": "Título uniforme u original",
    "labelVariants": [
      "Título uniforme u original"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Título uniforme u original». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 917
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `subject_uniform_title`.
- Predicado declarado: `::Vocab::RDAW.subjectUniformTitle`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Título uniforme u original». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
