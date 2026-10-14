---
{
  "type": "Metadata Field",
  "title": "Identificador institucional",
  "description": "Campo descrito como «Identificador institucional». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L129",
  "tags": [
    "metadata",
    "local_resource_identifier"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L129"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L933"
    }
  ],
  "field": {
    "name": "local_resource_identifier",
    "predicate": "::RDF::Vocab::DataCite[\"local-resource-identifier-scheme\"]",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 129,
        "predicate": "::RDF::Vocab::DataCite[\"local-resource-identifier-scheme\"]",
        "multiple": true
      }
    ],
    "label": "Identificador institucional",
    "labelVariants": [
      "Identificador institucional"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Identificador institucional». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 933
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `local_resource_identifier`.
- Predicado declarado: `::RDF::Vocab::DataCite["local-resource-identifier-scheme"]`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Identificador institucional». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
