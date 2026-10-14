---
{
  "type": "Metadata Field",
  "title": "Númeración o designación alternativa",
  "description": "Campo descrito como «Númeración o designación alternativa». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/analytics_type_one.rb#L11",
  "tags": [
    "metadata",
    "alternative_numeric_and_or_alphabethic_designation"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/analytics_type_one.rb#L11"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/article.es.yml#L32"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/book_chapter.es.yml#L29"
    }
  ],
  "field": {
    "name": "alternative_numeric_and_or_alphabethic_designation",
    "predicate": "::Vocab::RDAM.alternativeNumericAndOrAlphabeticDesignationOfFirstIssueOrPartOfSequence",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/analytics_type_one.rb",
        "line": 11,
        "predicate": "::Vocab::RDAM.alternativeNumericAndOrAlphabeticDesignationOfFirstIssueOrPartOfSequence",
        "multiple": true
      }
    ],
    "label": "Númeración o designación alternativa",
    "labelVariants": [
      "Númeración o designación alternativa"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Númeración o designación alternativa». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/article.es.yml",
        "line": 32
      },
      {
        "path": "config/locales/book_chapter.es.yml",
        "line": 29
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `alternative_numeric_and_or_alphabethic_designation`.
- Predicado declarado: `::Vocab::RDAM.alternativeNumericAndOrAlphabeticDesignationOfFirstIssueOrPartOfSequence`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Númeración o designación alternativa». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
