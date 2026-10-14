---
{
  "type": "Metadata Field",
  "title": "Restricción de acceso del ítem",
  "description": "Campo descrito como «Restricción de acceso del ítem». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L116",
  "tags": [
    "metadata",
    "item_access_restrictions"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L116"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/thesis.es.yml#L48"
    }
  ],
  "field": {
    "name": "item_access_restrictions",
    "predicate": "::Vocab::RDAI.restrictionsOnAccessToItem",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 116,
        "predicate": "::Vocab::RDAI.restrictionsOnAccessToItem",
        "multiple": true
      }
    ],
    "label": "Restricción de acceso del ítem",
    "labelVariants": [
      "Restricción de acceso del ítem"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Restricción de acceso del ítem». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/thesis.es.yml",
        "line": 48
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `item_access_restrictions`.
- Predicado declarado: `::Vocab::RDAI.restrictionsOnAccessToItem`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Restricción de acceso del ítem». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
