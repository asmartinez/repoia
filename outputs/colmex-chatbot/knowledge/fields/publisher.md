---
{
  "type": "Metadata Field",
  "title": "Editorial",
  "description": "Campo descrito como «Editorial». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L33",
  "tags": [
    "metadata",
    "publisher"
  ],
  "status": "draft",
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L33"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L865"
    }
  ],
  "field": {
    "name": "publisher",
    "predicate": "::Vocab::RDAM.publicationStatement",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 33,
        "predicate": "::Vocab::RDAM.publicationStatement",
        "multiple": true
      }
    ],
    "label": "Editorial",
    "labelVariants": [
      "Editorial"
    ],
    "searchable": true,
    "ambiguity": "La etiqueta Editorial usa publicationStatement: puede contener una declaración completa, no sólo una entidad editora.",
    "meaning": "Campo descrito como «Editorial». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 865
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `publisher`.
- Predicado declarado: `::Vocab::RDAM.publicationStatement`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Editorial». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

# Ambiguity

La etiqueta Editorial usa publicationStatement: puede contener una declaración completa, no sólo una entidad editora.

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
