---
{
  "type": "Metadata Field",
  "title": "Identificador específico",
  "description": "Campo descrito como «Identificador específico». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L30",
  "tags": [
    "metadata",
    "identifier_of_work"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L30"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L903"
    }
  ],
  "field": {
    "name": "identifier_of_work",
    "predicate": "::Vocab::RDAW.identifierOfWork",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/legal_documents.rb",
        "line": 30,
        "predicate": "::Vocab::RDAW.identifierOfWork",
        "multiple": true
      }
    ],
    "label": "Identificador específico",
    "labelVariants": [
      "Identificador específico"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Identificador específico». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 903
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `identifier_of_work`.
- Predicado declarado: `::Vocab::RDAW.identifierOfWork`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Identificador específico». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
