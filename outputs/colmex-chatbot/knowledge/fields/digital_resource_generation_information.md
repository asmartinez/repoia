---
{
  "type": "Metadata Field",
  "title": "Información de generación de recursos digitales",
  "description": "Campo descrito como «Información de generación de recursos digitales». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L77",
  "tags": [
    "metadata",
    "digital_resource_generation_information"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L77"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/thesis.es.yml#L39"
    }
  ],
  "field": {
    "name": "digital_resource_generation_information",
    "predicate": "::Vocab::RDAM.detailsOfGenerationOfDigitalResource",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 77,
        "predicate": "::Vocab::RDAM.detailsOfGenerationOfDigitalResource",
        "multiple": true
      }
    ],
    "label": "Información de generación de recursos digitales",
    "labelVariants": [
      "Información de generación de recursos digitales"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Información de generación de recursos digitales». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/thesis.es.yml",
        "line": 39
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `digital_resource_generation_information`.
- Predicado declarado: `::Vocab::RDAM.detailsOfGenerationOfDigitalResource`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Información de generación de recursos digitales». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
