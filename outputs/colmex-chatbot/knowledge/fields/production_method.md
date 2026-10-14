---
{
  "type": "Metadata Field",
  "title": "Medio de producción",
  "description": "Campo descrito como «Medio de producción». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/research_data.rb#L36",
  "tags": [
    "metadata",
    "production_method"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/research_data.rb#L36"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/research_data.es.yml#L16"
    }
  ],
  "field": {
    "name": "production_method",
    "predicate": "::Vocab::RDAM.production_method",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/research_data.rb",
        "line": 36,
        "predicate": "::Vocab::RDAM.production_method",
        "multiple": true
      }
    ],
    "label": "Medio de producción",
    "labelVariants": [
      "Medio de producción"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Medio de producción». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/research_data.es.yml",
        "line": 16
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `production_method`.
- Predicado declarado: `::Vocab::RDAM.production_method`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Medio de producción». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
