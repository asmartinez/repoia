---
{
  "type": "Metadata Field",
  "title": "Restricción de uso del ítem",
  "description": "Campo descrito como «Restricción de uso del ítem». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L117",
  "tags": [
    "metadata",
    "item_use_restrictions"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L117"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/thesis.es.yml#L49"
    }
  ],
  "field": {
    "name": "item_use_restrictions",
    "predicate": "::Vocab::RDAI.restrictionsOnUseOfItem",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 117,
        "predicate": "::Vocab::RDAI.restrictionsOnUseOfItem",
        "multiple": true
      }
    ],
    "label": "Restricción de uso del ítem",
    "labelVariants": [
      "Restricción de uso del ítem"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Restricción de uso del ítem». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/thesis.es.yml",
        "line": 49
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `item_use_restrictions`.
- Predicado declarado: `::Vocab::RDAI.restrictionsOnUseOfItem`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Restricción de uso del ítem». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
