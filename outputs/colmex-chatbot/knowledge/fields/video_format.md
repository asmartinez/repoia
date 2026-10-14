---
{
  "type": "Metadata Field",
  "title": "Formato del video",
  "description": "Campo descrito como «Formato del video». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/video.rb#L12",
  "tags": [
    "metadata",
    "video_format"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/video.rb#L12"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/video.es.yml#L28"
    }
  ],
  "field": {
    "name": "video_format",
    "predicate": "::Vocab::RDAM.videoFormat",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/video.rb",
        "line": 12,
        "predicate": "::Vocab::RDAM.videoFormat",
        "multiple": true
      }
    ],
    "label": "Formato del video",
    "labelVariants": [
      "Formato del video"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Formato del video». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/video.es.yml",
        "line": 28
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `video_format`.
- Predicado declarado: `::Vocab::RDAM.videoFormat`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Formato del video». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
