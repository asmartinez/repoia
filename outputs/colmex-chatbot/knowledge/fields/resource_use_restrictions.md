---
{
  "type": "Metadata Field",
  "title": "resource_use_restrictions",
  "description": "Campo descrito como «resource_use_restrictions». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L113",
  "tags": [
    "metadata",
    "resource_use_restrictions"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L113"
    }
  ],
  "field": {
    "name": "resource_use_restrictions",
    "predicate": "::Vocab::RDAM.restrictionsOnUseOfResource",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 113,
        "predicate": "::Vocab::RDAM.restrictionsOnUseOfResource",
        "multiple": true
      }
    ],
    "label": "resource_use_restrictions",
    "labelVariants": [
      "resource_use_restrictions"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «resource_use_restrictions». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `resource_use_restrictions`.
- Predicado declarado: `::Vocab::RDAM.restrictionsOnUseOfResource`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «resource_use_restrictions». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
