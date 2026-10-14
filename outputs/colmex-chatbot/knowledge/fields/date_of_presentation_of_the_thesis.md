---
{
  "type": "Metadata Field",
  "title": "Fecha de presentación de la tesis",
  "description": "Campo descrito como «Fecha de presentación de la tesis». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/thesis.rb#L42",
  "tags": [
    "metadata",
    "date_of_presentation_of_the_thesis"
  ],
  "status": "draft",
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/thesis.rb#L42"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/thesis.es.yml#L37"
    }
  ],
  "field": {
    "name": "date_of_presentation_of_the_thesis",
    "predicate": "::Vocab::RDAW.yearDegreeGranted",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/thesis.rb",
        "line": 42,
        "predicate": "::Vocab::RDAW.yearDegreeGranted",
        "multiple": false
      }
    ],
    "label": "Fecha de presentación de la tesis",
    "labelVariants": [
      "Fecha de presentación de la tesis"
    ],
    "searchable": true,
    "ambiguity": "La etiqueta indica presentación, pero el predicado indica año de otorgamiento del grado. Documentar ambas interpretaciones.",
    "meaning": "Campo descrito como «Fecha de presentación de la tesis». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/thesis.es.yml",
        "line": 37
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `date_of_presentation_of_the_thesis`.
- Predicado declarado: `::Vocab::RDAW.yearDegreeGranted`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Fecha de presentación de la tesis». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

# Ambiguity

La etiqueta indica presentación, pero el predicado indica año de otorgamiento del grado. Documentar ambas interpretaciones.

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
