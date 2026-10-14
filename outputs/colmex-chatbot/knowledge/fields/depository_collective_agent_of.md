---
{
  "type": "Metadata Field",
  "title": "Organismo depositante",
  "description": "Campo descrito como «Organismo depositante». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L97",
  "tags": [
    "metadata",
    "depository_collective_agent_of"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L97"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L888"
    }
  ],
  "field": {
    "name": "depository_collective_agent_of",
    "predicate": "::Vocab::RDAI.depositoryCollectiveAgent",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 97,
        "predicate": "::Vocab::RDAI.depositoryCollectiveAgent",
        "multiple": true
      }
    ],
    "label": "Organismo depositante",
    "labelVariants": [
      "Organismo depositante"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Organismo depositante». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 888
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `depository_collective_agent_of`.
- Predicado declarado: `::Vocab::RDAI.depositoryCollectiveAgent`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Organismo depositante». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
