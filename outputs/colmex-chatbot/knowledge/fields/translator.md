---
{
  "type": "Metadata Field",
  "title": "Traductor",
  "description": "Agente responsable de la traducción.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L70",
  "tags": [
    "metadata",
    "translator"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L70"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L873"
    }
  ],
  "field": {
    "name": "translator",
    "predicate": "::Vocab::RDAA.isTranslatorAgentOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 70,
        "predicate": "::Vocab::RDAA.isTranslatorAgentOf",
        "multiple": true
      }
    ],
    "label": "Traductor",
    "labelVariants": [
      "Traductor"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Agente responsable de la traducción.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 873
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `translator`.
- Predicado declarado: `::Vocab::RDAA.isTranslatorAgentOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Agente responsable de la traducción.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
