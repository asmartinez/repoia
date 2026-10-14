---
{
  "type": "Metadata Field",
  "title": "Tema persona",
  "description": "Persona tratada como tema, distinta de la autoría.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L36",
  "tags": [
    "metadata",
    "subject_person"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L36"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L844"
    }
  ],
  "field": {
    "name": "subject_person",
    "predicate": "::Vocab::RDAW.subjectPerson",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 36,
        "predicate": "::Vocab::RDAW.subjectPerson",
        "multiple": true
      }
    ],
    "label": "Tema persona",
    "labelVariants": [
      "Tema persona"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Persona tratada como tema, distinta de la autoría.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 844
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `subject_person`.
- Predicado declarado: `::Vocab::RDAW.subjectPerson`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Persona tratada como tema, distinta de la autoría.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
