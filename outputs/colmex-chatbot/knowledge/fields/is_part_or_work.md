---
{
  "type": "Metadata Field",
  "title": "Sección o suplemento",
  "description": "Campo descrito como «Sección o suplemento». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/analytics_type_one.rb#L6",
  "tags": [
    "metadata",
    "is_part_or_work"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/analytics_type_one.rb#L6"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/article.es.yml#L31"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/book_chapter.es.yml#L28"
    }
  ],
  "field": {
    "name": "is_part_or_work",
    "predicate": "::Vocab::RDAZ.hasRelatedWorkOfWork",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/analytics_type_one.rb",
        "line": 6,
        "predicate": "::Vocab::RDAZ.hasRelatedWorkOfWork",
        "multiple": true
      }
    ],
    "label": "Sección o suplemento",
    "labelVariants": [
      "Sección o suplemento"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Sección o suplemento». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/article.es.yml",
        "line": 31
      },
      {
        "path": "config/locales/book_chapter.es.yml",
        "line": 28
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `is_part_or_work`.
- Predicado declarado: `::Vocab::RDAZ.hasRelatedWorkOfWork`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Sección o suplemento». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
