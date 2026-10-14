---
{
  "type": "Metadata Field",
  "title": "Entidad que aporta el recurso",
  "description": "Campo descrito como «Entidad que aporta el recurso». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L93",
  "tags": [
    "metadata",
    "curator_collective_agent_of"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L93"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L881"
    }
  ],
  "field": {
    "name": "curator_collective_agent_of",
    "predicate": "::Vocab::RDAA.curatorCollectiveAgentOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 93,
        "predicate": "::Vocab::RDAA.curatorCollectiveAgentOf",
        "multiple": true
      }
    ],
    "label": "Entidad que aporta el recurso",
    "labelVariants": [
      "Entidad que aporta el recurso"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Entidad que aporta el recurso». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 881
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `curator_collective_agent_of`.
- Predicado declarado: `::Vocab::RDAA.curatorCollectiveAgentOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Entidad que aporta el recurso». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
