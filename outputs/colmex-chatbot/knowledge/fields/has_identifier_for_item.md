---
{
  "type": "Metadata Field",
  "title": "Número de expediente o caso",
  "description": "Campo descrito como «Número de expediente o caso». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L85",
  "tags": [
    "metadata",
    "has_identifier_for_item"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L85"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L915"
    }
  ],
  "field": {
    "name": "has_identifier_for_item",
    "predicate": "::Vocab::RDAI.hasIdentifierForItem",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/legal_documents.rb",
        "line": 85,
        "predicate": "::Vocab::RDAI.hasIdentifierForItem",
        "multiple": true
      }
    ],
    "label": "Número de expediente o caso",
    "labelVariants": [
      "Número de expediente o caso"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Número de expediente o caso». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 915
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `has_identifier_for_item`.
- Predicado declarado: `::Vocab::RDAI.hasIdentifierForItem`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Número de expediente o caso». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
