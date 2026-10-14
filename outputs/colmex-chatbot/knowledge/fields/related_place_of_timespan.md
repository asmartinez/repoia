---
{
  "type": "Metadata Field",
  "title": "Lugar del hecho criminal",
  "description": "Campo descrito como «Lugar del hecho criminal». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/fact.rb#L11",
  "tags": [
    "metadata",
    "related_place_of_timespan"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/fact.rb#L11"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/fact.es.yml#L24"
    }
  ],
  "field": {
    "name": "related_place_of_timespan",
    "predicate": "::Vocab::RDAT.relatedPlaceOfTimespan",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/fact.rb",
        "line": 11,
        "predicate": "::Vocab::RDAT.relatedPlaceOfTimespan",
        "multiple": true
      }
    ],
    "label": "Lugar del hecho criminal",
    "labelVariants": [
      "Lugar del hecho criminal"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Lugar del hecho criminal». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/fact.es.yml",
        "line": 24
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `related_place_of_timespan`.
- Predicado declarado: `::Vocab::RDAT.relatedPlaceOfTimespan`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Lugar del hecho criminal». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
