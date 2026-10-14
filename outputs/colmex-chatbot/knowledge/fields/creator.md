---
{
  "type": "Metadata Field",
  "title": "Autor",
  "description": "Autoría de la obra; no una persona sobre la que trata.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L21",
  "tags": [
    "metadata",
    "creator"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L21"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L826"
    }
  ],
  "field": {
    "name": "creator",
    "predicate": "::Vocab::RDAA.authorOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 21,
        "predicate": "::Vocab::RDAA.authorOf",
        "multiple": true
      }
    ],
    "label": "Autor",
    "labelVariants": [
      "Autor"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Autoría de la obra; no una persona sobre la que trata.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 826
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `creator`.
- Predicado declarado: `::Vocab::RDAA.authorOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Autoría de la obra; no una persona sobre la que trata.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
