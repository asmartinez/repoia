---
{
  "type": "Metadata Field",
  "title": "Documentos complementarios",
  "description": "Campo descrito como «Documentos complementarios». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/research_data.rb#L31",
  "tags": [
    "metadata",
    "complemented_by_work"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/research_data.rb#L31"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/research_data.es.yml#L15"
    }
  ],
  "field": {
    "name": "complemented_by_work",
    "predicate": "::Vocab::RDAW.complemented_by_work",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/research_data.rb",
        "line": 31,
        "predicate": "::Vocab::RDAW.complemented_by_work",
        "multiple": true
      }
    ],
    "label": "Documentos complementarios",
    "labelVariants": [
      "Documentos complementarios"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Documentos complementarios». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/research_data.es.yml",
        "line": 15
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `complemented_by_work`.
- Predicado declarado: `::Vocab::RDAW.complemented_by_work`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Documentos complementarios». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
