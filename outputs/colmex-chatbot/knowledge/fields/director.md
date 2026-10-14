---
{
  "type": "Metadata Field",
  "title": "Director",
  "description": "Supervisor o director de tesis, distinto del autor.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/thesis.rb#L12",
  "tags": [
    "metadata",
    "director"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/thesis.rb#L12"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/thesis.es.yml#L41"
    }
  ],
  "field": {
    "name": "director",
    "predicate": "::Vocab::RDAA.degreeSupervisorOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/thesis.rb",
        "line": 12,
        "predicate": "::Vocab::RDAA.degreeSupervisorOf",
        "multiple": true
      }
    ],
    "label": "Director",
    "labelVariants": [
      "Director"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Supervisor o director de tesis, distinto del autor.",
    "labelSources": [
      {
        "path": "config/locales/thesis.es.yml",
        "line": 41
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `director`.
- Predicado declarado: `::Vocab::RDAA.degreeSupervisorOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Supervisor o director de tesis, distinto del autor.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
