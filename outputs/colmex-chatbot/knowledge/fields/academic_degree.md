---
{
  "type": "Metadata Field",
  "title": "Grado Académico",
  "description": "Grado académico asociado a una tesis.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/thesis.rb#L22",
  "tags": [
    "metadata",
    "academic_degree"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/thesis.rb#L22"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/thesis.es.yml#L35"
    }
  ],
  "field": {
    "name": "academic_degree",
    "predicate": "::Vocab::RDAW.academicDegree",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/thesis.rb",
        "line": 22,
        "predicate": "::Vocab::RDAW.academicDegree",
        "multiple": false
      }
    ],
    "label": "Grado Académico",
    "labelVariants": [
      "Grado Académico"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Grado académico asociado a una tesis.",
    "labelSources": [
      {
        "path": "config/locales/thesis.es.yml",
        "line": 35
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `academic_degree`.
- Predicado declarado: `::Vocab::RDAW.academicDegree`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Grado académico asociado a una tesis.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
