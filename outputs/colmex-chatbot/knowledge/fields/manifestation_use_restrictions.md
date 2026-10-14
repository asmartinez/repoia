---
{
  "type": "Metadata Field",
  "title": "manifestation_use_restrictions",
  "description": "Campo descrito como «manifestation_use_restrictions». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L115",
  "tags": [
    "metadata",
    "manifestation_use_restrictions"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L115"
    }
  ],
  "field": {
    "name": "manifestation_use_restrictions",
    "predicate": "::Vocab::RDAM.restrictionsOnUseOfManifestation",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 115,
        "predicate": "::Vocab::RDAM.restrictionsOnUseOfManifestation",
        "multiple": true
      }
    ],
    "label": "manifestation_use_restrictions",
    "labelVariants": [
      "manifestation_use_restrictions"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «manifestation_use_restrictions». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `manifestation_use_restrictions`.
- Predicado declarado: `::Vocab::RDAM.restrictionsOnUseOfManifestation`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «manifestation_use_restrictions». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
