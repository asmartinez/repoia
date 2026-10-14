---
{
  "type": "Metadata Field",
  "title": "Declaración de responsabilidad",
  "description": "Campo descrito como «Declaración de responsabilidad». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L59",
  "tags": [
    "metadata",
    "responsibility_statement"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L59"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L857"
    }
  ],
  "field": {
    "name": "responsibility_statement",
    "predicate": "::Vocab::RDAM.statementOfResponsibilityRelatingToTitleProper",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 59,
        "predicate": "::Vocab::RDAM.statementOfResponsibilityRelatingToTitleProper",
        "multiple": false
      }
    ],
    "label": "Declaración de responsabilidad",
    "labelVariants": [
      "Declaración de responsabilidad"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Declaración de responsabilidad». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 857
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `responsibility_statement`.
- Predicado declarado: `::Vocab::RDAM.statementOfResponsibilityRelatingToTitleProper`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Declaración de responsabilidad». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
