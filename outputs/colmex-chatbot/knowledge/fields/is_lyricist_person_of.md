---
{
  "type": "Metadata Field",
  "title": "Autor de la letra",
  "description": "Campo descrito como «Autor de la letra». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/audio.rb#L12",
  "tags": [
    "metadata",
    "is_lyricist_person_of"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/audio.rb#L12"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/audio.es.yml#L22"
    }
  ],
  "field": {
    "name": "is_lyricist_person_of",
    "predicate": "::Vocab::RDAA.isLyricistPersonOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/audio.rb",
        "line": 12,
        "predicate": "::Vocab::RDAA.isLyricistPersonOf",
        "multiple": true
      }
    ],
    "label": "Autor de la letra",
    "labelVariants": [
      "Autor de la letra"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Autor de la letra». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/audio.es.yml",
        "line": 22
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `is_lyricist_person_of`.
- Predicado declarado: `::Vocab::RDAA.isLyricistPersonOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Autor de la letra». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
