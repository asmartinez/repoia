---
{
  "type": "Metadata Field",
  "title": "Idioma",
  "description": "Idioma del contenido; mantener la etiqueta original para filtros exactos.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L40",
  "tags": [
    "metadata",
    "language"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L40"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L831"
    }
  ],
  "field": {
    "name": "language",
    "predicate": "::Vocab::RDAM.languageOfTheContent",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 40,
        "predicate": "::Vocab::RDAM.languageOfTheContent",
        "multiple": true
      }
    ],
    "label": "Idioma",
    "labelVariants": [
      "Idioma"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Idioma del contenido; mantener la etiqueta original para filtros exactos.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 831
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `language`.
- Predicado declarado: `::Vocab::RDAM.languageOfTheContent`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Idioma del contenido; mantener la etiqueta original para filtros exactos.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
