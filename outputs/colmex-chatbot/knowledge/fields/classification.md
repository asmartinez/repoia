---
{
  "type": "Metadata Field",
  "title": "Clasificación de la biblioteca",
  "description": "Campo descrito como «Clasificación de la biblioteca». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L57",
  "tags": [
    "metadata",
    "classification"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L57"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L855"
    }
  ],
  "field": {
    "name": "classification",
    "predicate": "::RDF::Vocab::BF2.Classification",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 57,
        "predicate": "::RDF::Vocab::BF2.Classification",
        "multiple": true
      }
    ],
    "label": "Clasificación de la biblioteca",
    "labelVariants": [
      "Clasificación de la biblioteca"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Clasificación de la biblioteca». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 855
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `classification`.
- Predicado declarado: `::RDF::Vocab::BF2.Classification`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Clasificación de la biblioteca». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
