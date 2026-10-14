---
{
  "type": "Metadata Field",
  "title": "Testigo",
  "description": "Campo descrito como «Testigo». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L70",
  "tags": [
    "metadata",
    "witness"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L70"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L911"
    }
  ],
  "field": {
    "name": "witness",
    "predicate": "::RDF::Vocab::MARCRelators.wit",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/legal_documents.rb",
        "line": 70,
        "predicate": "::RDF::Vocab::MARCRelators.wit",
        "multiple": true
      }
    ],
    "label": "Testigo",
    "labelVariants": [
      "Testigo"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Testigo». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 911
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `witness`.
- Predicado declarado: `::RDF::Vocab::MARCRelators.wit`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Testigo». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
