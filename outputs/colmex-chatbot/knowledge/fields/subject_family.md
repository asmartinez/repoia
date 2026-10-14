---
{
  "type": "Metadata Field",
  "title": "Tema familia",
  "description": "Familia tratada como tema.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L37",
  "tags": [
    "metadata",
    "subject_family"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L37"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L845"
    }
  ],
  "field": {
    "name": "subject_family",
    "predicate": "::Vocab::RDAW.subjectFamily",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 37,
        "predicate": "::Vocab::RDAW.subjectFamily",
        "multiple": true
      }
    ],
    "label": "Tema familia",
    "labelVariants": [
      "Tema familia"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Familia tratada como tema.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 845
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `subject_family`.
- Predicado declarado: `::Vocab::RDAW.subjectFamily`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Familia tratada como tema.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
