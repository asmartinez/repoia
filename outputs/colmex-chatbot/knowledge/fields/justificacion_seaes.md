---
{
  "type": "Metadata Field",
  "title": "SEAES Justificación",
  "description": "Campo descrito como «SEAES Justificación». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L131",
  "tags": [
    "metadata",
    "justificacion_seaes"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L131"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L760"
    }
  ],
  "field": {
    "name": "justificacion_seaes",
    "predicate": "::RDF::URI.new('https://biblioteca.colmex.mx/vocabularios/seaes#justificacion_seaes')",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 131,
        "predicate": "::RDF::URI.new('https://biblioteca.colmex.mx/vocabularios/seaes#justificacion_seaes')",
        "multiple": true
      }
    ],
    "label": "SEAES Justificación",
    "labelVariants": [
      "SEAES Justificación"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «SEAES Justificación». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 760
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `justificacion_seaes`.
- Predicado declarado: `::RDF::URI.new('https://biblioteca.colmex.mx/vocabularios/seaes#justificacion_seaes')`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «SEAES Justificación». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
