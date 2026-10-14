---
{
  "type": "Metadata Field",
  "title": "Grado",
  "description": "Campo descrito como «Grado». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/thesis.rb#L32",
  "tags": [
    "metadata",
    "degree_program"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/thesis.rb#L32"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/thesis.es.yml#L38"
    }
  ],
  "field": {
    "name": "degree_program",
    "predicate": "::Vocab::RDAW.grantingInstitutionOrFaculty",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/thesis.rb",
        "line": 32,
        "predicate": "::Vocab::RDAW.grantingInstitutionOrFaculty",
        "multiple": false
      }
    ],
    "label": "Grado",
    "labelVariants": [
      "Grado"
    ],
    "searchable": true,
    "ambiguity": "La etiqueta dice Grado, el nombre sugiere programa y el predicado institución otorgante. No equiparar estas tres cosas sin evidencia.",
    "meaning": "Campo descrito como «Grado». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/thesis.es.yml",
        "line": 38
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `degree_program`.
- Predicado declarado: `::Vocab::RDAW.grantingInstitutionOrFaculty`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Grado». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

# Ambiguity

La etiqueta dice Grado, el nombre sugiere programa y el predicado institución otorgante. No equiparar estas tres cosas sin evidencia.

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
