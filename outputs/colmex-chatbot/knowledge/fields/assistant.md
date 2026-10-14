---
{
  "type": "Metadata Field",
  "title": "Secretario",
  "description": "Campo descrito como «Secretario». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/jurisprudential_thesis.rb#L22",
  "tags": [
    "metadata",
    "assistant"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/jurisprudential_thesis.rb#L22"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/jurisprudential_thesis.es.yml#L27"
    }
  ],
  "field": {
    "name": "assistant",
    "predicate": "::Vocab::RDAA.assistant",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/jurisprudential_thesis.rb",
        "line": 22,
        "predicate": "::Vocab::RDAA.assistant",
        "multiple": true
      }
    ],
    "label": "Secretario",
    "labelVariants": [
      "Secretario"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Secretario». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/jurisprudential_thesis.es.yml",
        "line": 27
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `assistant`.
- Predicado declarado: `::Vocab::RDAA.assistant`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Secretario». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
