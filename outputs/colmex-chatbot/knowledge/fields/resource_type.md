---
{
  "type": "Metadata Field",
  "title": "Tipo de documento",
  "description": "Etiqueta del tipo de recurso; puede diferir de la clase técnica Hyrax.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L20",
  "tags": [
    "metadata",
    "resource_type"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L20"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L837"
    }
  ],
  "field": {
    "name": "resource_type",
    "predicate": "::RDF::Vocab::DC.DCMIType",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 20,
        "predicate": "::RDF::Vocab::DC.DCMIType",
        "multiple": true
      }
    ],
    "label": "Tipo de documento",
    "labelVariants": [
      "Tipo de documento"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Etiqueta del tipo de recurso; puede diferir de la clase técnica Hyrax.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 837
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `resource_type`.
- Predicado declarado: `::RDF::Vocab::DC.DCMIType`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Etiqueta del tipo de recurso; puede diferir de la clase técnica Hyrax.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
