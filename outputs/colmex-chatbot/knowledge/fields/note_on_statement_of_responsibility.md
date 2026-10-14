---
{
  "type": "Metadata Field",
  "title": "Nota sobre declaración de responsabilidad",
  "description": "Campo descrito como «Nota sobre declaración de responsabilidad». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L119",
  "tags": [
    "metadata",
    "note_on_statement_of_responsibility"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L119"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L869"
    }
  ],
  "field": {
    "name": "note_on_statement_of_responsibility",
    "predicate": "::Vocab::RDAM.noteOnStatementOfResposibility",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 119,
        "predicate": "::Vocab::RDAM.noteOnStatementOfResposibility",
        "multiple": true
      }
    ],
    "label": "Nota sobre declaración de responsabilidad",
    "labelVariants": [
      "Nota sobre declaración de responsabilidad"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Nota sobre declaración de responsabilidad». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 869
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `note_on_statement_of_responsibility`.
- Predicado declarado: `::Vocab::RDAM.noteOnStatementOfResposibility`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Nota sobre declaración de responsabilidad». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
