---
{
  "type": "Metadata Field",
  "title": "Entrevistado",
  "description": "Agente entrevistador según el predicado.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L85",
  "tags": [
    "metadata",
    "interviewer"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L85"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L874"
    }
  ],
  "field": {
    "name": "interviewer",
    "predicate": "::Vocab::RDAA.interviewerAgentOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 85,
        "predicate": "::Vocab::RDAA.interviewerAgentOf",
        "multiple": true
      }
    ],
    "label": "Entrevistado",
    "labelVariants": [
      "Entrevistado"
    ],
    "searchable": true,
    "ambiguity": "La etiqueta española dice Entrevistado, pero el predicado indica entrevistador. No intercambiar roles sin confirmar el registro.",
    "meaning": "Agente entrevistador según el predicado.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 874
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `interviewer`.
- Predicado declarado: `::Vocab::RDAA.interviewerAgentOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Agente entrevistador según el predicado.[^definition]

# Ambiguity

La etiqueta española dice Entrevistado, pero el predicado indica entrevistador. No intercambiar roles sin confirmar el registro.

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
