---
{
  "type": "Metadata Field",
  "title": "Creador",
  "description": "Creador; puede ser una responsabilidad creativa más amplia que la autoría.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L23",
  "tags": [
    "metadata",
    "has_creator"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L23"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L781"
    }
  ],
  "field": {
    "name": "has_creator",
    "predicate": "::Vocab::RDAU.hasCreator",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 23,
        "predicate": "::Vocab::RDAU.hasCreator",
        "multiple": true
      }
    ],
    "label": "Creador",
    "labelVariants": [
      "Creador"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Creador; puede ser una responsabilidad creativa más amplia que la autoría.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 781
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `has_creator`.
- Predicado declarado: `::Vocab::RDAU.hasCreator`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Creador; puede ser una responsabilidad creativa más amplia que la autoría.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
