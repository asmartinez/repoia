---
{
  "type": "Metadata Field",
  "title": "Resumen",
  "description": "Resumen o sumario de catálogo. No es el documento completo.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L24",
  "tags": [
    "metadata",
    "description"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L24"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L829"
    }
  ],
  "field": {
    "name": "description",
    "predicate": "::Vocab::RDAE.summarizationOfTheContent",
    "multiple": null,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 24,
        "predicate": "::Vocab::RDAE.summarizationOfTheContent",
        "multiple": null
      }
    ],
    "label": "Resumen",
    "labelVariants": [
      "Resumen"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Resumen o sumario de catálogo. No es el documento completo.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 829
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `description`.
- Predicado declarado: `::Vocab::RDAE.summarizationOfTheContent`.
- Cardinalidad explícita: no especificada en la declaración; depende del framework.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Resumen o sumario de catálogo. No es el documento completo.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
