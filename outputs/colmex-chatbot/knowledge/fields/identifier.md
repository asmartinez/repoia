---
{
  "type": "Metadata Field",
  "title": "Identificador",
  "description": "Identificador de la manifestación según la definición RDF local.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L41",
  "tags": [
    "metadata",
    "identifier"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L41"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L832"
    }
  ],
  "field": {
    "name": "identifier",
    "predicate": "::Vocab::RDAE::identifierForTheManifestation",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 41,
        "predicate": "::Vocab::RDAE::identifierForTheManifestation",
        "multiple": false
      }
    ],
    "label": "Identificador",
    "labelVariants": [
      "Identificador"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Identificador de la manifestación según la definición RDF local.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 832
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `identifier`.
- Predicado declarado: `::Vocab::RDAE::identifierForTheManifestation`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Identificador de la manifestación según la definición RDF local.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
