---
{
  "type": "Metadata Field",
  "title": "Tipo de ilustraciones",
  "description": "Campo descrito como «Tipo de ilustraciones». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L63",
  "tags": [
    "metadata",
    "type_of_illustrations"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L63"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L863"
    }
  ],
  "field": {
    "name": "type_of_illustrations",
    "predicate": "::Vocab::RDAE.illustrativeContent",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 63,
        "predicate": "::Vocab::RDAE.illustrativeContent",
        "multiple": true
      }
    ],
    "label": "Tipo de ilustraciones",
    "labelVariants": [
      "Tipo de ilustraciones"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Tipo de ilustraciones». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 863
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `type_of_illustrations`.
- Predicado declarado: `::Vocab::RDAE.illustrativeContent`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Tipo de ilustraciones». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
