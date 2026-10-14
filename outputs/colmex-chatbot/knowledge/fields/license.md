---
{
  "type": "Metadata Field",
  "title": "Licencia",
  "description": "Licencia o derechos de uso.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L27",
  "tags": [
    "metadata",
    "license"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L27"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L841"
    }
  ],
  "field": {
    "name": "license",
    "predicate": "::RDF::Vocab::DC.rights",
    "multiple": null,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 27,
        "predicate": "::RDF::Vocab::DC.rights",
        "multiple": null
      }
    ],
    "label": "Licencia",
    "labelVariants": [
      "Licencia"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Licencia o derechos de uso.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 841
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `license`.
- Predicado declarado: `::RDF::Vocab::DC.rights`.
- Cardinalidad explícita: no especificada en la declaración; depende del framework.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Licencia o derechos de uso.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
