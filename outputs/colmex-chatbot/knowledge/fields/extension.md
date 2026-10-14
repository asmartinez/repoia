---
{
  "type": "Metadata Field",
  "title": "extension",
  "description": "Extensión física o intelectual: páginas, fojas u otras unidades; no asumir páginas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L74",
  "tags": [
    "metadata",
    "extension"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L74"
    }
  ],
  "field": {
    "name": "extension",
    "predicate": "::Vocab::RDAM.extent",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 74,
        "predicate": "::Vocab::RDAM.extent",
        "multiple": false
      }
    ],
    "label": "extension",
    "labelVariants": [
      "extension"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Extensión física o intelectual: páginas, fojas u otras unidades; no asumir páginas.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `extension`.
- Predicado declarado: `::Vocab::RDAM.extent`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Extensión física o intelectual: páginas, fojas u otras unidades; no asumir páginas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
