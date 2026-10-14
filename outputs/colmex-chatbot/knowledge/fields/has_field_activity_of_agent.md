---
{
  "type": "Metadata Field",
  "title": "Función",
  "description": "Campo descrito como «Función». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L105",
  "tags": [
    "metadata",
    "has_field_activity_of_agent"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L105"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L895"
    }
  ],
  "field": {
    "name": "has_field_activity_of_agent",
    "predicate": "::Vocab::RDAU.hasFieldOfActivityofAgent",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 105,
        "predicate": "::Vocab::RDAU.hasFieldOfActivityofAgent",
        "multiple": true
      }
    ],
    "label": "Función",
    "labelVariants": [
      "Función"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Función». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 895
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `has_field_activity_of_agent`.
- Predicado declarado: `::Vocab::RDAU.hasFieldOfActivityofAgent`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Función». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
