---
{
  "type": "Metadata Field",
  "title": "Serie",
  "description": "Campo descrito como «Serie». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/series.rb#L10",
  "tags": [
    "metadata",
    "title_of_series"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/series.rb#L10"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/book.es.yml#L22"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/book_chapter.es.yml#L31"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/video.es.yml#L31"
    }
  ],
  "field": {
    "name": "title_of_series",
    "predicate": "::Vocab::RDAM.titleOfSeries",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/series.rb",
        "line": 10,
        "predicate": "::Vocab::RDAM.titleOfSeries",
        "multiple": true
      }
    ],
    "label": "Serie",
    "labelVariants": [
      "Serie"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Serie». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/book.es.yml",
        "line": 22
      },
      {
        "path": "config/locales/book_chapter.es.yml",
        "line": 31
      },
      {
        "path": "config/locales/video.es.yml",
        "line": 31
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `title_of_series`.
- Predicado declarado: `::Vocab::RDAM.titleOfSeries`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Serie». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
