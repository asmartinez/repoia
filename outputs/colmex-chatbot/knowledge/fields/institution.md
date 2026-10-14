---
{
  "type": "Metadata Field",
  "title": "Institución",
  "description": "Institución otorgante según el predicado.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/thesis.rb#L37",
  "tags": [
    "metadata",
    "institution"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/thesis.rb#L37"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/thesis.es.yml#L47"
    }
  ],
  "field": {
    "name": "institution",
    "predicate": "::RDF::Vocab::BF2.grantingInstitution",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/thesis.rb",
        "line": 37,
        "predicate": "::RDF::Vocab::BF2.grantingInstitution",
        "multiple": false
      }
    ],
    "label": "Institución",
    "labelVariants": [
      "Institución"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Institución otorgante según el predicado.",
    "labelSources": [
      {
        "path": "config/locales/thesis.es.yml",
        "line": 47
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `institution`.
- Predicado declarado: `::RDF::Vocab::BF2.grantingInstitution`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Institución otorgante según el predicado.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
