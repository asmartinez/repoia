---
{
  "type": "Metadata Field",
  "title": "Autor congreso o reunión",
  "description": "Campo descrito como «Autor congreso o reunión». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L104",
  "tags": [
    "metadata",
    "organizer_collective_agent"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L104"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L890"
    }
  ],
  "field": {
    "name": "organizer_collective_agent",
    "predicate": "::Vocab::RDAA.isOrganizerCollectiveAgentOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 104,
        "predicate": "::Vocab::RDAA.isOrganizerCollectiveAgentOf",
        "multiple": true
      }
    ],
    "label": "Autor congreso o reunión",
    "labelVariants": [
      "Autor congreso o reunión"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Autor congreso o reunión». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 890
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `organizer_collective_agent`.
- Predicado declarado: `::Vocab::RDAA.isOrganizerCollectiveAgentOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Autor congreso o reunión». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
