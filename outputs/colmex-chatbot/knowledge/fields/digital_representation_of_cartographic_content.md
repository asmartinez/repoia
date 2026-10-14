---
{
  "type": "Metadata Field",
  "title": "Datos geoespaciales",
  "description": "Campo descrito como «Datos geoespaciales». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/map.rb#L21",
  "tags": [
    "metadata",
    "digital_representation_of_cartographic_content"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/map.rb#L21"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/map.es.yml#L26"
    }
  ],
  "field": {
    "name": "digital_representation_of_cartographic_content",
    "predicate": "::Vocab::RDAM.digitalRepresentationOfCartographicContent",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/map.rb",
        "line": 21,
        "predicate": "::Vocab::RDAM.digitalRepresentationOfCartographicContent",
        "multiple": true
      }
    ],
    "label": "Datos geoespaciales",
    "labelVariants": [
      "Datos geoespaciales"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Datos geoespaciales». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/map.es.yml",
        "line": 26
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `digital_representation_of_cartographic_content`.
- Predicado declarado: `::Vocab::RDAM.digitalRepresentationOfCartographicContent`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Datos geoespaciales». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
