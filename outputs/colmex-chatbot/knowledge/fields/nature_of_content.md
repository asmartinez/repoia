---
{
  "type": "Metadata Field",
  "title": "Naturaleza del contenido",
  "description": "Campo descrito como «Naturaleza del contenido». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/research_data.rb#L16",
  "tags": [
    "metadata",
    "nature_of_content"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/research_data.rb#L16"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/research_data.es.yml#L12"
    }
  ],
  "field": {
    "name": "nature_of_content",
    "predicate": "::Vocab::RDAW.nature_of_content",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/research_data.rb",
        "line": 16,
        "predicate": "::Vocab::RDAW.nature_of_content",
        "multiple": true
      }
    ],
    "label": "Naturaleza del contenido",
    "labelVariants": [
      "Naturaleza del contenido"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Naturaleza del contenido». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/research_data.es.yml",
        "line": 12
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `nature_of_content`.
- Predicado declarado: `::Vocab::RDAW.nature_of_content`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Naturaleza del contenido». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
