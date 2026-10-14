---
{
  "type": "Metadata Field",
  "title": "Agencia fotográfica",
  "description": "Campo descrito como «Agencia fotográfica». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/photography.rb#L11",
  "tags": [
    "metadata",
    "photographer_corporate_body_of_work"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/photography.rb#L11"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/photography.es.yml#L22"
    }
  ],
  "field": {
    "name": "photographer_corporate_body_of_work",
    "predicate": "::Vocab::RDAA.photographerCorporateBodyOfWork",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/photography.rb",
        "line": 11,
        "predicate": "::Vocab::RDAA.photographerCorporateBodyOfWork",
        "multiple": true
      }
    ],
    "label": "Agencia fotográfica",
    "labelVariants": [
      "Agencia fotográfica"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Agencia fotográfica». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/photography.es.yml",
        "line": 22
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `photographer_corporate_body_of_work`.
- Predicado declarado: `::Vocab::RDAA.photographerCorporateBodyOfWork`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Agencia fotográfica». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
