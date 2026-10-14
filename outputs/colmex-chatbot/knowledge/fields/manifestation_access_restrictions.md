---
{
  "type": "Metadata Field",
  "title": "manifestation_access_restrictions",
  "description": "Campo descrito como «manifestation_access_restrictions». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L114",
  "tags": [
    "metadata",
    "manifestation_access_restrictions"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L114"
    }
  ],
  "field": {
    "name": "manifestation_access_restrictions",
    "predicate": "::Vocab::RDAM.restrictionsOnAccessToManifestation",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 114,
        "predicate": "::Vocab::RDAM.restrictionsOnAccessToManifestation",
        "multiple": true
      }
    ],
    "label": "manifestation_access_restrictions",
    "labelVariants": [
      "manifestation_access_restrictions"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «manifestation_access_restrictions». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `manifestation_access_restrictions`.
- Predicado declarado: `::Vocab::RDAM.restrictionsOnAccessToManifestation`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «manifestation_access_restrictions». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
