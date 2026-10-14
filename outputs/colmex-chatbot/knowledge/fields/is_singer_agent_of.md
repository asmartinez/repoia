---
{
  "type": "Metadata Field",
  "title": "Intérprete",
  "description": "Campo descrito como «Intérprete». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/audio.rb#L32",
  "tags": [
    "metadata",
    "is_singer_agent_of"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/audio.rb#L32"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/audio.es.yml#L26"
    }
  ],
  "field": {
    "name": "is_singer_agent_of",
    "predicate": "::Vocab::RDAA.isSingerAgentOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/audio.rb",
        "line": 32,
        "predicate": "::Vocab::RDAA.isSingerAgentOf",
        "multiple": true
      }
    ],
    "label": "Intérprete",
    "labelVariants": [
      "Intérprete"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Intérprete». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/audio.es.yml",
        "line": 26
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `is_singer_agent_of`.
- Predicado declarado: `::Vocab::RDAA.isSingerAgentOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Intérprete». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
