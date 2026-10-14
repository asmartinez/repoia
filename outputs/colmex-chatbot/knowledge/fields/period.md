---
{
  "type": "Metadata Field",
  "title": "period",
  "description": "Campo descrito como «period». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/analytics_type_two.rb#L6",
  "tags": [
    "metadata",
    "period"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/analytics_type_two.rb#L6"
    }
  ],
  "field": {
    "name": "period",
    "predicate": "::Vocab::RDAM.alternativeNumericAndOrAlphabeticDesignationOfLastIssueOrPartOfSequence",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/analytics_type_two.rb",
        "line": 6,
        "predicate": "::Vocab::RDAM.alternativeNumericAndOrAlphabeticDesignationOfLastIssueOrPartOfSequence",
        "multiple": true
      }
    ],
    "label": "period",
    "labelVariants": [
      "period"
    ],
    "searchable": true,
    "ambiguity": "El predicado indica designación del último fascículo o parte de una secuencia, no necesariamente período histórico tratado.",
    "meaning": "Campo descrito como «period». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `period`.
- Predicado declarado: `::Vocab::RDAM.alternativeNumericAndOrAlphabeticDesignationOfLastIssueOrPartOfSequence`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «period». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

# Ambiguity

El predicado indica designación del último fascículo o parte de una secuencia, no necesariamente período histórico tratado.

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
