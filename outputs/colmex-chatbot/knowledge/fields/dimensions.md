---
{
  "type": "Metadata Field",
  "title": "Dimensiones",
  "description": "Campo descrito como «Dimensiones». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L73",
  "tags": [
    "metadata",
    "dimensions"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L73"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/thesis.es.yml#L40"
    }
  ],
  "field": {
    "name": "dimensions",
    "predicate": "::Vocab::RDAM.dimensions",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 73,
        "predicate": "::Vocab::RDAM.dimensions",
        "multiple": false
      }
    ],
    "label": "Dimensiones",
    "labelVariants": [
      "Dimensiones"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Dimensiones». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/thesis.es.yml",
        "line": 40
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `dimensions`.
- Predicado declarado: `::Vocab::RDAM.dimensions`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Dimensiones». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
