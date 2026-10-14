---
{
  "type": "Metadata Field",
  "title": "Organismo acusado o demandado",
  "description": "Campo descrito como «Organismo acusado o demandado». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L75",
  "tags": [
    "metadata",
    "is_criminal_defendant_corporate_body_of"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L75"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L913"
    }
  ],
  "field": {
    "name": "is_criminal_defendant_corporate_body_of",
    "predicate": "::Vocab::RDAA.isCriminalDefendantCorporateBodyOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/legal_documents.rb",
        "line": 75,
        "predicate": "::Vocab::RDAA.isCriminalDefendantCorporateBodyOf",
        "multiple": true
      }
    ],
    "label": "Organismo acusado o demandado",
    "labelVariants": [
      "Organismo acusado o demandado"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Organismo acusado o demandado». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 913
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `is_criminal_defendant_corporate_body_of`.
- Predicado declarado: `::Vocab::RDAA.isCriminalDefendantCorporateBodyOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Organismo acusado o demandado». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
