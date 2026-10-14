---
{
  "type": "Metadata Field",
  "title": "Título",
  "description": "Título propiamente dicho.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/core_metadata.rb#L13",
  "tags": [
    "metadata",
    "title"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/core_metadata.rb#L13"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L861"
    }
  ],
  "field": {
    "name": "title",
    "predicate": "::Vocab::RDAM.titleProper",
    "multiple": null,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/core_metadata.rb",
        "line": 13,
        "predicate": "::Vocab::RDAM.titleProper",
        "multiple": null
      }
    ],
    "label": "Título",
    "labelVariants": [
      "Título"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Título propiamente dicho.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 861
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `title`.
- Predicado declarado: `::Vocab::RDAM.titleProper`.
- Cardinalidad explícita: no especificada en la declaración; depende del framework.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Título propiamente dicho.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
