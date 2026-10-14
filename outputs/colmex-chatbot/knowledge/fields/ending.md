---
{
  "type": "Metadata Field",
  "title": "Fin del hecho",
  "description": "Fin del hecho o intervalo descrito según la etiqueta local.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L109",
  "tags": [
    "metadata",
    "ending"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L109"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L893"
    }
  ],
  "field": {
    "name": "ending",
    "predicate": "::Vocab::RDAT.hasEnding",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 109,
        "predicate": "::Vocab::RDAT.hasEnding",
        "multiple": false
      }
    ],
    "label": "Fin del hecho",
    "labelVariants": [
      "Fin del hecho"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Fin del hecho o intervalo descrito según la etiqueta local.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 893
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `ending`.
- Predicado declarado: `::Vocab::RDAT.hasEnding`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Fin del hecho o intervalo descrito según la etiqueta local.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
