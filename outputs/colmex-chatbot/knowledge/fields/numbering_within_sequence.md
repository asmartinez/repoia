---
{
  "type": "Metadata Field",
  "title": "Volumen/número",
  "description": "Campo descrito como «Volumen/número». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/series.rb#L15",
  "tags": [
    "metadata",
    "numbering_within_sequence"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/series.rb#L15"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/book.es.yml#L23"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/book_chapter.es.yml#L32"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/video.es.yml#L32"
    }
  ],
  "field": {
    "name": "numbering_within_sequence",
    "predicate": "::Vocab::RDAM.numberingOfSequence",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/series.rb",
        "line": 15,
        "predicate": "::Vocab::RDAM.numberingOfSequence",
        "multiple": true
      }
    ],
    "label": "Volumen/número",
    "labelVariants": [
      "Volumen/número",
      "Número"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Volumen/número». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/book.es.yml",
        "line": 23
      },
      {
        "path": "config/locales/book_chapter.es.yml",
        "line": 32
      },
      {
        "path": "config/locales/video.es.yml",
        "line": 32
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `numbering_within_sequence`.
- Predicado declarado: `::Vocab::RDAM.numberingOfSequence`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Volumen/número». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
