---
{
  "type": "Metadata Field",
  "title": "Editor",
  "description": "Persona editora del texto, distinta de la editorial.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L67",
  "tags": [
    "metadata",
    "editor"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L67"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L864"
    }
  ],
  "field": {
    "name": "editor",
    "predicate": "::Vocab::RDAA.isEditorPersonOfTextOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 67,
        "predicate": "::Vocab::RDAA.isEditorPersonOfTextOf",
        "multiple": true
      }
    ],
    "label": "Editor",
    "labelVariants": [
      "Editor"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Persona editora del texto, distinta de la editorial.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 864
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `editor`.
- Predicado declarado: `::Vocab::RDAA.isEditorPersonOfTextOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Persona editora del texto, distinta de la editorial.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
