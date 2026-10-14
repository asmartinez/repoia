---
{
  "type": "Metadata Field",
  "title": "Tema organismo",
  "description": "Organismo tratado como tema.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L39",
  "tags": [
    "metadata",
    "subject_corporate"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L39"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L846"
    }
  ],
  "field": {
    "name": "subject_corporate",
    "predicate": "::Vocab::RDAW.subjectCorporateBody",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 39,
        "predicate": "::Vocab::RDAW.subjectCorporateBody",
        "multiple": true
      }
    ],
    "label": "Tema organismo",
    "labelVariants": [
      "Tema organismo"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Organismo tratado como tema.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 846
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `subject_corporate`.
- Predicado declarado: `::Vocab::RDAW.subjectCorporateBody`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Organismo tratado como tema.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
