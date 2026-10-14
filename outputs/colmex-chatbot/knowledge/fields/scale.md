---
{
  "type": "Metadata Field",
  "title": "Escala",
  "description": "Campo descrito como «Escala». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/map.rb#L11",
  "tags": [
    "metadata",
    "scale"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/map.rb#L11"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/map.es.yml#L24"
    }
  ],
  "field": {
    "name": "scale",
    "predicate": "::Vocab::RDAE.scale",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/map.rb",
        "line": 11,
        "predicate": "::Vocab::RDAE.scale",
        "multiple": true
      }
    ],
    "label": "Escala",
    "labelVariants": [
      "Escala"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Escala». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/map.es.yml",
        "line": 24
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `scale`.
- Predicado declarado: `::Vocab::RDAE.scale`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Escala». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
