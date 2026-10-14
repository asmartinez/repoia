---
{
  "type": "Metadata Field",
  "title": "Es miembro de:",
  "description": "Campo descrito como «Es miembro de:». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L125",
  "tags": [
    "metadata",
    "is_person_member_of_collective_agent"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L125"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L926"
    }
  ],
  "field": {
    "name": "is_person_member_of_collective_agent",
    "predicate": "::Vocab::RDAA.isPersonMemberOfCollectiveAgent",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 125,
        "predicate": "::Vocab::RDAA.isPersonMemberOfCollectiveAgent",
        "multiple": true
      }
    ],
    "label": "Es miembro de:",
    "labelVariants": [
      "Es miembro de:"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Es miembro de:». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 926
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `is_person_member_of_collective_agent`.
- Predicado declarado: `::Vocab::RDAA.isPersonMemberOfCollectiveAgent`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Es miembro de:». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
