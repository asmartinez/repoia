---
{
  "type": "Metadata Field",
  "title": "Curador de datos",
  "description": "Campo descrito como «Curador de datos». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L137",
  "tags": [
    "metadata",
    "has_data_curation_contributor"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L137"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L765"
    }
  ],
  "field": {
    "name": "has_data_curation_contributor",
    "predicate": "::RDF::URI.new('https://biblioteca.colmex.mx/vocabularios/credit/hasDataCurationContributor')",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 137,
        "predicate": "::RDF::URI.new('https://biblioteca.colmex.mx/vocabularios/credit/hasDataCurationContributor')",
        "multiple": true
      }
    ],
    "label": "Curador de datos",
    "labelVariants": [
      "Curador de datos"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Curador de datos». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 765
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `has_data_curation_contributor`.
- Predicado declarado: `::RDF::URI.new('https://biblioteca.colmex.mx/vocabularios/credit/hasDataCurationContributor')`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Curador de datos». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
