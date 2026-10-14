---
{
  "type": "Metadata Field",
  "title": "Palabras clave",
  "description": "Campo descrito como «Palabras clave». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L25",
  "tags": [
    "metadata",
    "keyword"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L25"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L833"
    }
  ],
  "field": {
    "name": "keyword",
    "predicate": "::RDF::Vocab::SCHEMA.keywords",
    "multiple": null,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 25,
        "predicate": "::RDF::Vocab::SCHEMA.keywords",
        "multiple": null
      }
    ],
    "label": "Palabras clave",
    "labelVariants": [
      "Palabras clave"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Palabras clave». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 833
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `keyword`.
- Predicado declarado: `::RDF::Vocab::SCHEMA.keywords`.
- Cardinalidad explícita: no especificada en la declaración; depende del framework.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Palabras clave». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
