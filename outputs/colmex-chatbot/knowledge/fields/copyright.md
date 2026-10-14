---
{
  "type": "Metadata Field",
  "title": "Copyright",
  "description": "Campo descrito como «Copyright». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/series.rb#L5",
  "tags": [
    "metadata",
    "copyright"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/series.rb#L5"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/book.es.yml#L21"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/book_chapter.es.yml#L30"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/video.es.yml#L30"
    }
  ],
  "field": {
    "name": "copyright",
    "predicate": "::Vocab::RDAM.copyrightDate",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/series.rb",
        "line": 5,
        "predicate": "::Vocab::RDAM.copyrightDate",
        "multiple": true
      }
    ],
    "label": "Copyright",
    "labelVariants": [
      "Copyright"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Copyright». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/book.es.yml",
        "line": 21
      },
      {
        "path": "config/locales/book_chapter.es.yml",
        "line": 30
      },
      {
        "path": "config/locales/video.es.yml",
        "line": 30
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `copyright`.
- Predicado declarado: `::Vocab::RDAM.copyrightDate`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Copyright». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
