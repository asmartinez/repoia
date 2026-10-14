---
{
  "type": "Metadata Field",
  "title": "Número de la parte",
  "description": "Campo descrito como «Número de la parte». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L51",
  "tags": [
    "metadata",
    "numbering_of_part"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L51"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L853"
    }
  ],
  "field": {
    "name": "numbering_of_part",
    "predicate": "::Vocab::RDAW.hasNumberingOfPart",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 51,
        "predicate": "::Vocab::RDAW.hasNumberingOfPart",
        "multiple": false
      }
    ],
    "label": "Número de la parte",
    "labelVariants": [
      "Número de la parte"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Número de la parte». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 853
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `numbering_of_part`.
- Predicado declarado: `::Vocab::RDAW.hasNumberingOfPart`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Número de la parte». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
