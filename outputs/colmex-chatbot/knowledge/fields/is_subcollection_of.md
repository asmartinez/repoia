---
{
  "type": "Metadata Field",
  "title": "Subcolección temática",
  "description": "Campo descrito como «Subcolección temática». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L83",
  "tags": [
    "metadata",
    "is_subcollection_of"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L83"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L919"
    }
  ],
  "field": {
    "name": "is_subcollection_of",
    "predicate": "::Vocab::RDAU.isSubCollection",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 83,
        "predicate": "::Vocab::RDAU.isSubCollection",
        "multiple": true
      }
    ],
    "label": "Subcolección temática",
    "labelVariants": [
      "Subcolección temática"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Subcolección temática». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 919
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `is_subcollection_of`.
- Predicado declarado: `::Vocab::RDAU.isSubCollection`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Subcolección temática». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
