---
{
  "type": "Metadata Field",
  "title": "Información de financiamiento",
  "description": "Campo descrito como «Información de financiamiento». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L151",
  "tags": [
    "metadata",
    "funding_information"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L151"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L779"
    }
  ],
  "field": {
    "name": "funding_information",
    "predicate": "::RDF::Vocab::DISCO.fundedBy",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 151,
        "predicate": "::RDF::Vocab::DISCO.fundedBy",
        "multiple": true
      }
    ],
    "label": "Información de financiamiento",
    "labelVariants": [
      "Información de financiamiento"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Información de financiamiento». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 779
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `funding_information`.
- Predicado declarado: `::RDF::Vocab::DISCO.fundedBy`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Información de financiamiento». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
