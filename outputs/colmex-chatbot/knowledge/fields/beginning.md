---
{
  "type": "Metadata Field",
  "title": "Inicio del hecho",
  "description": "Inicio del hecho o intervalo descrito según la etiqueta local.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L108",
  "tags": [
    "metadata",
    "beginning"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L108"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L892"
    }
  ],
  "field": {
    "name": "beginning",
    "predicate": "::Vocab::RDAT.hasBeginning",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 108,
        "predicate": "::Vocab::RDAT.hasBeginning",
        "multiple": false
      }
    ],
    "label": "Inicio del hecho",
    "labelVariants": [
      "Inicio del hecho"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Inicio del hecho o intervalo descrito según la etiqueta local.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 892
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `beginning`.
- Predicado declarado: `::Vocab::RDAT.hasBeginning`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Inicio del hecho o intervalo descrito según la etiqueta local.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
