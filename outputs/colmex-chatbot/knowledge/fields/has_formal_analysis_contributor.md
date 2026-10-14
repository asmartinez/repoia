---
{
  "type": "Metadata Field",
  "title": "Responsable del análisis formal",
  "description": "Campo descrito como «Responsable del análisis formal». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L138",
  "tags": [
    "metadata",
    "has_formal_analysis_contributor"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L138"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L766"
    }
  ],
  "field": {
    "name": "has_formal_analysis_contributor",
    "predicate": "::RDF::URI.new('https://biblioteca.colmex.mx/vocabularios/credit/hasFormalAnalysisContributor')",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 138,
        "predicate": "::RDF::URI.new('https://biblioteca.colmex.mx/vocabularios/credit/hasFormalAnalysisContributor')",
        "multiple": true
      }
    ],
    "label": "Responsable del análisis formal",
    "labelVariants": [
      "Responsable del análisis formal"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Responsable del análisis formal». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 766
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `has_formal_analysis_contributor`.
- Predicado declarado: `::RDF::URI.new('https://biblioteca.colmex.mx/vocabularios/credit/hasFormalAnalysisContributor')`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Responsable del análisis formal». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
