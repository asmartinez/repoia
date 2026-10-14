---
{
  "type": "Metadata Field",
  "title": "Familia relacionada",
  "description": "Campo descrito como «Familia relacionada». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L55",
  "tags": [
    "metadata",
    "related_family_timespan"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L55"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L908"
    }
  ],
  "field": {
    "name": "related_family_timespan",
    "predicate": "::Vocab::RDAT.relatedFamilyOfTimespan",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/legal_documents.rb",
        "line": 55,
        "predicate": "::Vocab::RDAT.relatedFamilyOfTimespan",
        "multiple": true
      }
    ],
    "label": "Familia relacionada",
    "labelVariants": [
      "Familia relacionada"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Familia relacionada». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 908
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `related_family_timespan`.
- Predicado declarado: `::Vocab::RDAT.relatedFamilyOfTimespan`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Familia relacionada». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
