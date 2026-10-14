---
{
  "type": "Metadata Field",
  "title": "Detalles de codificación del formato",
  "description": "Campo descrito como «Detalles de codificación del formato». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L76",
  "tags": [
    "metadata",
    "encoding_format_details"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L76"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/thesis.es.yml#L43"
    }
  ],
  "field": {
    "name": "encoding_format_details",
    "predicate": "::Vocab::RDAM.detailsOfEncodingFormat",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 76,
        "predicate": "::Vocab::RDAM.detailsOfEncodingFormat",
        "multiple": true
      }
    ],
    "label": "Detalles de codificación del formato",
    "labelVariants": [
      "Detalles de codificación del formato"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Detalles de codificación del formato». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/thesis.es.yml",
        "line": 43
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `encoding_format_details`.
- Predicado declarado: `::Vocab::RDAM.detailsOfEncodingFormat`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Detalles de codificación del formato». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
