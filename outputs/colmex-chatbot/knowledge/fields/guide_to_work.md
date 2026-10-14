---
{
  "type": "Metadata Field",
  "title": "Protocolo o guia",
  "description": "Campo descrito como «Protocolo o guia». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/research_data.rb#L21",
  "tags": [
    "metadata",
    "guide_to_work"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/research_data.rb#L21"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/research_data.es.yml#L13"
    }
  ],
  "field": {
    "name": "guide_to_work",
    "predicate": "::Vocab::RDAW.guide_to_work",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/research_data.rb",
        "line": 21,
        "predicate": "::Vocab::RDAW.guide_to_work",
        "multiple": true
      }
    ],
    "label": "Protocolo o guia",
    "labelVariants": [
      "Protocolo o guia"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Protocolo o guia». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/research_data.es.yml",
        "line": 13
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `guide_to_work`.
- Predicado declarado: `::Vocab::RDAW.guide_to_work`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Protocolo o guia». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
