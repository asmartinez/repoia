---
{
  "type": "Metadata Field",
  "title": "Persona acusada o demandada",
  "description": "Campo descrito como «Persona acusada o demandada». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L80",
  "tags": [
    "metadata",
    "is_criminal_defendant_person_of"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L80"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L914"
    }
  ],
  "field": {
    "name": "is_criminal_defendant_person_of",
    "predicate": "::Vocab::RDAA.isCriminalDefendantPersonOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/legal_documents.rb",
        "line": 80,
        "predicate": "::Vocab::RDAA.isCriminalDefendantPersonOf",
        "multiple": true
      }
    ],
    "label": "Persona acusada o demandada",
    "labelVariants": [
      "Persona acusada o demandada"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Persona acusada o demandada». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 914
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `is_criminal_defendant_person_of`.
- Predicado declarado: `::Vocab::RDAA.isCriminalDefendantPersonOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Persona acusada o demandada». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
