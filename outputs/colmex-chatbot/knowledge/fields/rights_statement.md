---
{
  "type": "Metadata Field",
  "title": "Declaración de derechos",
  "description": "Declaración de derechos.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L32",
  "tags": [
    "metadata",
    "rights_statement"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L32"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L840"
    }
  ],
  "field": {
    "name": "rights_statement",
    "predicate": "::RDF::Vocab::EDM.rights",
    "multiple": null,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 32,
        "predicate": "::RDF::Vocab::EDM.rights",
        "multiple": null
      }
    ],
    "label": "Declaración de derechos",
    "labelVariants": [
      "Declaración de derechos"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Declaración de derechos.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 840
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `rights_statement`.
- Predicado declarado: `::RDF::Vocab::EDM.rights`.
- Cardinalidad explícita: no especificada en la declaración; depende del framework.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Declaración de derechos.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
