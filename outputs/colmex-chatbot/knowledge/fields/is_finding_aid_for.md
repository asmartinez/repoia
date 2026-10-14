---
{
  "type": "Metadata Field",
  "title": "Instrumento de descripción archivística",
  "description": "Relación con un instrumento de descripción archivística.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/archival_document.rb#L11",
  "tags": [
    "metadata",
    "is_finding_aid_for"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/archival_document.rb#L11"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/archival_document.es.yml#L18"
    }
  ],
  "field": {
    "name": "is_finding_aid_for",
    "predicate": "::Vocab::RDAU.isFindingAidFor",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/archival_document.rb",
        "line": 11,
        "predicate": "::Vocab::RDAU.isFindingAidFor",
        "multiple": true
      }
    ],
    "label": "Instrumento de descripción archivística",
    "labelVariants": [
      "Instrumento de descripción archivística"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Relación con un instrumento de descripción archivística.",
    "labelSources": [
      {
        "path": "config/locales/archival_document.es.yml",
        "line": 18
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `is_finding_aid_for`.
- Predicado declarado: `::Vocab::RDAU.isFindingAidFor`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Relación con un instrumento de descripción archivística.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
