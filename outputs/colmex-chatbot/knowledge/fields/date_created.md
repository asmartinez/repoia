---
{
  "type": "Metadata Field",
  "title": "Año",
  "description": "Fecha de publicación según el predicado de la aplicación; confirmar el uso por tipo.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L34",
  "tags": [
    "metadata",
    "date_created"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L34"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L834"
    }
  ],
  "field": {
    "name": "date_created",
    "predicate": "::Vocab::RDAM.dateOfPublication",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 34,
        "predicate": "::Vocab::RDAM.dateOfPublication",
        "multiple": true
      }
    ],
    "label": "Año",
    "labelVariants": [
      "Año"
    ],
    "searchable": true,
    "ambiguity": "El nombre sugiere creación y las ayudas genéricas dicen creación, pero el predicado local indica publicación. En colecciones y otros tipos hay que comprobar la práctica catalográfica.",
    "meaning": "Fecha de publicación según el predicado de la aplicación; confirmar el uso por tipo.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 834
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `date_created`.
- Predicado declarado: `::Vocab::RDAM.dateOfPublication`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Fecha de publicación según el predicado de la aplicación; confirmar el uso por tipo.[^definition]

# Ambiguity

El nombre sugiere creación y las ayudas genéricas dicen creación, pero el predicado local indica publicación. En colecciones y otros tipos hay que comprobar la práctica catalográfica.

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
