---
{
  "type": "Metadata Field",
  "title": "Instancia superior",
  "description": "Campo descrito como «Instancia superior». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L15",
  "tags": [
    "metadata",
    "hierarchical_superior"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L15"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L900"
    }
  ],
  "field": {
    "name": "hierarchical_superior",
    "predicate": "::Vocab::RDAA.hierarchicalSuperior",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/legal_documents.rb",
        "line": 15,
        "predicate": "::Vocab::RDAA.hierarchicalSuperior",
        "multiple": true
      }
    ],
    "label": "Instancia superior",
    "labelVariants": [
      "Instancia superior"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Instancia superior». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 900
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `hierarchical_superior`.
- Predicado declarado: `::Vocab::RDAA.hierarchicalSuperior`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Instancia superior». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
