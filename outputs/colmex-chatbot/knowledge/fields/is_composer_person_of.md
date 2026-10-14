---
{
  "type": "Metadata Field",
  "title": "Compositor",
  "description": "Campo descrito como «Compositor». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/audio.rb#L17",
  "tags": [
    "metadata",
    "is_composer_person_of"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/audio.rb#L17"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/audio.es.yml#L23"
    }
  ],
  "field": {
    "name": "is_composer_person_of",
    "predicate": "::Vocab::RDAA.isComposerPersonOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/audio.rb",
        "line": 17,
        "predicate": "::Vocab::RDAA.isComposerPersonOf",
        "multiple": true
      }
    ],
    "label": "Compositor",
    "labelVariants": [
      "Compositor"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Compositor». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/audio.es.yml",
        "line": 23
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `is_composer_person_of`.
- Predicado declarado: `::Vocab::RDAA.isComposerPersonOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Compositor». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
