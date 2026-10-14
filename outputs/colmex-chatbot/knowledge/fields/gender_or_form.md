---
{
  "type": "Metadata Field",
  "title": "Género o forma",
  "description": "Campo descrito como «Género o forma». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L45",
  "tags": [
    "metadata",
    "gender_or_form"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L45"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L849"
    }
  ],
  "field": {
    "name": "gender_or_form",
    "predicate": "::Vocab::RDAW.formOfWork",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 45,
        "predicate": "::Vocab::RDAW.formOfWork",
        "multiple": true
      }
    ],
    "label": "Género o forma",
    "labelVariants": [
      "Género o forma"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Género o forma». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 849
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `gender_or_form`.
- Predicado declarado: `::Vocab::RDAW.formOfWork`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Género o forma». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
