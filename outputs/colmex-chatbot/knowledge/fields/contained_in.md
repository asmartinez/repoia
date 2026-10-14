---
{
  "type": "Metadata Field",
  "title": "Publicado en",
  "description": "Relación de inclusión; el sentido exacto debe confirmarse en los valores y la catalogación.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L78",
  "tags": [
    "metadata",
    "contained_in"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L78"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/article.es.yml#L30"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/book_chapter.es.yml#L27"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L886"
    }
  ],
  "field": {
    "name": "contained_in",
    "predicate": "::Vocab::RDAW.containedWork",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 78,
        "predicate": "::Vocab::RDAW.containedWork",
        "multiple": true
      }
    ],
    "label": "Publicado en",
    "labelVariants": [
      "Publicado en",
      "Contenido en",
      "Incluido en:"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Relación de inclusión; el sentido exacto debe confirmarse en los valores y la catalogación.",
    "labelSources": [
      {
        "path": "config/locales/article.es.yml",
        "line": 30
      },
      {
        "path": "config/locales/book_chapter.es.yml",
        "line": 27
      },
      {
        "path": "config/locales/colmex.es.yml",
        "line": 886
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `contained_in`.
- Predicado declarado: `::Vocab::RDAW.containedWork`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Relación de inclusión; el sentido exacto debe confirmarse en los valores y la catalogación.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
