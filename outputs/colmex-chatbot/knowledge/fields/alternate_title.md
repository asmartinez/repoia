---
{
  "type": "Metadata Field",
  "title": "Título alterno",
  "description": "Título variante o alternativo.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L12",
  "tags": [
    "metadata",
    "alternate_title"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L12"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L798"
    }
  ],
  "field": {
    "name": "alternate_title",
    "predicate": "::Vocab::RDAM.variantTitle",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 12,
        "predicate": "::Vocab::RDAM.variantTitle",
        "multiple": true
      }
    ],
    "label": "Título alterno",
    "labelVariants": [
      "Título alterno"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Título variante o alternativo.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 798
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `alternate_title`.
- Predicado declarado: `::Vocab::RDAM.variantTitle`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Título variante o alternativo.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
