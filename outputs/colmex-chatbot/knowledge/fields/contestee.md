---
{
  "type": "Metadata Field",
  "title": "Representante legal, defensor, etc.",
  "description": "Campo descrito como «Representante legal, defensor, etc.». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L65",
  "tags": [
    "metadata",
    "contestee"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L65"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L910"
    }
  ],
  "field": {
    "name": "contestee",
    "predicate": "::RDF::Vocab::MARCRelators.cts",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/legal_documents.rb",
        "line": 65,
        "predicate": "::RDF::Vocab::MARCRelators.cts",
        "multiple": true
      }
    ],
    "label": "Representante legal, defensor, etc.",
    "labelVariants": [
      "Representante legal, defensor, etc."
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Representante legal, defensor, etc.». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 910
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `contestee`.
- Predicado declarado: `::RDF::Vocab::MARCRelators.cts`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Representante legal, defensor, etc.». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
