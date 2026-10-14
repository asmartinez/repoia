---
{
  "type": "Metadata Field",
  "title": "Instrumentista",
  "description": "Campo descrito como «Instrumentista». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/audio.rb#L27",
  "tags": [
    "metadata",
    "is_instrumentalist_agent_of"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/audio.rb#L27"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/audio.es.yml#L25"
    }
  ],
  "field": {
    "name": "is_instrumentalist_agent_of",
    "predicate": "::Vocab::RDAA.isInstrumentalistAgentOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/audio.rb",
        "line": 27,
        "predicate": "::Vocab::RDAA.isInstrumentalistAgentOf",
        "multiple": true
      }
    ],
    "label": "Instrumentista",
    "labelVariants": [
      "Instrumentista"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Instrumentista». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/audio.es.yml",
        "line": 25
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `is_instrumentalist_agent_of`.
- Predicado declarado: `::Vocab::RDAA.isInstrumentalistAgentOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Instrumentista». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
