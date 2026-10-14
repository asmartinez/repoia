---
{
  "type": "Metadata Field",
  "title": "Medio de interpretación de contenido musical",
  "description": "Campo descrito como «Medio de interpretación de contenido musical». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/audio.rb#L37",
  "tags": [
    "metadata",
    "has_medium_of_performance_of_musical_content"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/audio.rb#L37"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L925"
    }
  ],
  "field": {
    "name": "has_medium_of_performance_of_musical_content",
    "predicate": "::Vocab::RDAU.hasMediumOfPerformanceOfMusicalContent",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/audio.rb",
        "line": 37,
        "predicate": "::Vocab::RDAU.hasMediumOfPerformanceOfMusicalContent",
        "multiple": true
      }
    ],
    "label": "Medio de interpretación de contenido musical",
    "labelVariants": [
      "Medio de interpretación de contenido musical"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Medio de interpretación de contenido musical». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 925
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `has_medium_of_performance_of_musical_content`.
- Predicado declarado: `::Vocab::RDAU.hasMediumOfPerformanceOfMusicalContent`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Medio de interpretación de contenido musical». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
