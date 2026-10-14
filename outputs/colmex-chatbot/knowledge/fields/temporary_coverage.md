---
{
  "type": "Metadata Field",
  "title": "Cobertura temporal",
  "description": "Período al que se refiere el contenido; distinto del año de publicación.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L44",
  "tags": [
    "metadata",
    "temporary_coverage"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L44"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L848"
    }
  ],
  "field": {
    "name": "temporary_coverage",
    "predicate": "::RDF::Vocab::BF2.temporalCoverage",
    "multiple": null,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 44,
        "predicate": "::RDF::Vocab::BF2.temporalCoverage",
        "multiple": null
      }
    ],
    "label": "Cobertura temporal",
    "labelVariants": [
      "Cobertura temporal"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Período al que se refiere el contenido; distinto del año de publicación.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 848
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `temporary_coverage`.
- Predicado declarado: `::RDF::Vocab::BF2.temporalCoverage`.
- Cardinalidad explícita: no especificada en la declaración; depende del framework.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Período al que se refiere el contenido; distinto del año de publicación.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
