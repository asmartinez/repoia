---
{
  "type": "Metadata Field",
  "title": "Tema del hecho criminal",
  "description": "Campo descrito como «Tema del hecho criminal». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L25",
  "tags": [
    "metadata",
    "subject_timespan"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L25"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L902"
    }
  ],
  "field": {
    "name": "subject_timespan",
    "predicate": "::Vocab::RDAW.subjectTimeSpan",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/legal_documents.rb",
        "line": 25,
        "predicate": "::Vocab::RDAW.subjectTimeSpan",
        "multiple": true
      }
    ],
    "label": "Tema del hecho criminal",
    "labelVariants": [
      "Tema del hecho criminal"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Tema del hecho criminal». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 902
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `subject_timespan`.
- Predicado declarado: `::Vocab::RDAW.subjectTimeSpan`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Tema del hecho criminal». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
