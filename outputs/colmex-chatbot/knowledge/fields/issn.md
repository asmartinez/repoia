---
{
  "type": "Metadata Field",
  "title": "ISSN",
  "description": "Identificador de publicación seriada.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/analytics_type_two.rb#L11",
  "tags": [
    "metadata",
    "issn"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/analytics_type_two.rb#L11"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/article.es.yml#L33"
    }
  ],
  "field": {
    "name": "issn",
    "predicate": "::Vocab::RDAM.issnOfSeries",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/analytics_type_two.rb",
        "line": 11,
        "predicate": "::Vocab::RDAM.issnOfSeries",
        "multiple": true
      }
    ],
    "label": "ISSN",
    "labelVariants": [
      "ISSN"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Identificador de publicación seriada.",
    "labelSources": [
      {
        "path": "config/locales/article.es.yml",
        "line": 33
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `issn`.
- Predicado declarado: `::Vocab::RDAM.issnOfSeries`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Identificador de publicación seriada.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
