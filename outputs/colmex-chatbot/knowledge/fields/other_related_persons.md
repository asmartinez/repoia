---
{
  "type": "Metadata Field",
  "title": "Otras personas relacionadas",
  "description": "Campo descrito como «Otras personas relacionadas». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L60",
  "tags": [
    "metadata",
    "other_related_persons"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L60"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L858"
    }
  ],
  "field": {
    "name": "other_related_persons",
    "predicate": "::Vocab::RDAA.otherPFCWorkOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 60,
        "predicate": "::Vocab::RDAA.otherPFCWorkOf",
        "multiple": true
      }
    ],
    "label": "Otras personas relacionadas",
    "labelVariants": [
      "Otras personas relacionadas"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Otras personas relacionadas». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 858
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `other_related_persons`.
- Predicado declarado: `::Vocab::RDAA.otherPFCWorkOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Otras personas relacionadas». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
