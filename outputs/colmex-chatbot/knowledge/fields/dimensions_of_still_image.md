---
{
  "type": "Metadata Field",
  "title": "Dimensiones de la fotografía",
  "description": "Campo descrito como «Dimensiones de la fotografía». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/photography.rb#L16",
  "tags": [
    "metadata",
    "dimensions_of_still_image"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/photography.rb#L16"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/photography.es.yml#L23"
    }
  ],
  "field": {
    "name": "dimensions_of_still_image",
    "predicate": "::Vocab::RDAM.dimensionsOfStillImage",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/photography.rb",
        "line": 16,
        "predicate": "::Vocab::RDAM.dimensionsOfStillImage",
        "multiple": true
      }
    ],
    "label": "Dimensiones de la fotografía",
    "labelVariants": [
      "Dimensiones de la fotografía"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Dimensiones de la fotografía». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/photography.es.yml",
        "line": 23
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `dimensions_of_still_image`.
- Predicado declarado: `::Vocab::RDAM.dimensionsOfStillImage`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Dimensiones de la fotografía». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
