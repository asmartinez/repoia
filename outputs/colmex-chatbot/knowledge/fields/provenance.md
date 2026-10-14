---
{
  "type": "Metadata Field",
  "title": "Procedencia",
  "description": "Procedencia del recurso.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L92",
  "tags": [
    "metadata",
    "provenance"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L92"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L880"
    }
  ],
  "field": {
    "name": "provenance",
    "predicate": "::RDF::Vocab::DC.provenance",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 92,
        "predicate": "::RDF::Vocab::DC.provenance",
        "multiple": true
      }
    ],
    "label": "Procedencia",
    "labelVariants": [
      "Procedencia"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Procedencia del recurso.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 880
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `provenance`.
- Predicado declarado: `::RDF::Vocab::DC.provenance`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Procedencia del recurso.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
