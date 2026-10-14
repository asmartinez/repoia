---
{
  "type": "Metadata Field",
  "title": "Documento relacionado",
  "description": "Otra obra relacionada; no prueba equivalencia, duplicidad o identidad.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L50",
  "tags": [
    "metadata",
    "related_work_of_work"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L50"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L854"
    }
  ],
  "field": {
    "name": "related_work_of_work",
    "predicate": "::Vocab::RDAW.hasRelatedWorkOfWork",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 50,
        "predicate": "::Vocab::RDAW.hasRelatedWorkOfWork",
        "multiple": true
      }
    ],
    "label": "Documento relacionado",
    "labelVariants": [
      "Documento relacionado"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Otra obra relacionada; no prueba equivalencia, duplicidad o identidad.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 854
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `related_work_of_work`.
- Predicado declarado: `::Vocab::RDAW.hasRelatedWorkOfWork`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Otra obra relacionada; no prueba equivalencia, duplicidad o identidad.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
