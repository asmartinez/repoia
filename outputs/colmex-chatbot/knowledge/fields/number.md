---
{
  "type": "Metadata Field",
  "title": "Número",
  "description": "Campo descrito como «Número». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/analytics_type_two.rb#L21",
  "tags": [
    "metadata",
    "number"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/analytics_type_two.rb#L21"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/article.es.yml#L35"
    }
  ],
  "field": {
    "name": "number",
    "predicate": "::Vocab::RDAM.numberingWithinSubseries",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/analytics_type_two.rb",
        "line": 21,
        "predicate": "::Vocab::RDAM.numberingWithinSubseries",
        "multiple": true
      }
    ],
    "label": "Número",
    "labelVariants": [
      "Número"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Número». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/article.es.yml",
        "line": 35
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `number`.
- Predicado declarado: `::Vocab::RDAM.numberingWithinSubseries`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Número». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
