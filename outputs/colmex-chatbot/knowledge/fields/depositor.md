---
{
  "type": "Metadata Field",
  "title": "Depositante",
  "description": "Campo descrito como «Depositante». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/core_metadata.rb#L9",
  "tags": [
    "metadata",
    "depositor"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/core_metadata.rb#L9"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/hyrax.es.yml#L662"
    }
  ],
  "field": {
    "name": "depositor",
    "predicate": "::RDF::URI.new('http://id.loc.gov/vocabulary/relators/dpt')",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/core_metadata.rb",
        "line": 9,
        "predicate": "::RDF::URI.new('http://id.loc.gov/vocabulary/relators/dpt')",
        "multiple": false
      }
    ],
    "label": "Depositante",
    "labelVariants": [
      "Depositante"
    ],
    "searchable": false,
    "ambiguity": "",
    "meaning": "Campo descrito como «Depositante». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/hyrax.es.yml",
        "line": 662
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `depositor`.
- Predicado declarado: `::RDF::URI.new('http://id.loc.gov/vocabulary/relators/dpt')`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: False. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Depositante». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
