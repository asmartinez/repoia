---
{
  "type": "Metadata Field",
  "title": "Entrevistador",
  "description": "Agente entrevistado según el predicado.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L86",
  "tags": [
    "metadata",
    "interviewee"
  ],
  "status": "draft",
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L86"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L875"
    }
  ],
  "field": {
    "name": "interviewee",
    "predicate": "::Vocab::RDAA.intervieweeAgentOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 86,
        "predicate": "::Vocab::RDAA.intervieweeAgentOf",
        "multiple": true
      }
    ],
    "label": "Entrevistador",
    "labelVariants": [
      "Entrevistador"
    ],
    "searchable": true,
    "ambiguity": "La etiqueta española dice Entrevistador, pero el predicado indica entrevistado. No intercambiar roles sin confirmar el registro.",
    "meaning": "Agente entrevistado según el predicado.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 875
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `interviewee`.
- Predicado declarado: `::Vocab::RDAA.intervieweeAgentOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Agente entrevistado según el predicado.[^definition]

# Ambiguity

La etiqueta española dice Entrevistador, pero el predicado indica entrevistado. No intercambiar roles sin confirmar el registro.

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
