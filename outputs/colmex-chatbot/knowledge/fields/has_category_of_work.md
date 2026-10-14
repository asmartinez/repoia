---
{
  "type": "Metadata Field",
  "title": "Categoría de obra",
  "description": "Campo descrito como «Categoría de obra». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L123",
  "tags": [
    "metadata",
    "has_category_of_work"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L123"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L929"
    }
  ],
  "field": {
    "name": "has_category_of_work",
    "predicate": "::Vocab::RDAW.hasCategoryOfwork",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 123,
        "predicate": "::Vocab::RDAW.hasCategoryOfwork",
        "multiple": true
      }
    ],
    "label": "Categoría de obra",
    "labelVariants": [
      "Categoría de obra"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Categoría de obra». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 929
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `has_category_of_work`.
- Predicado declarado: `::Vocab::RDAW.hasCategoryOfwork`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Categoría de obra». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
