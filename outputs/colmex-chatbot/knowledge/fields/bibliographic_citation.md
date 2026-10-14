---
{
  "type": "Metadata Field",
  "title": "bibliographic_citation",
  "description": "Campo descrito como «bibliographic_citation». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L47",
  "tags": [
    "metadata",
    "bibliographic_citation"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L47"
    }
  ],
  "field": {
    "name": "bibliographic_citation",
    "predicate": "::Vocab::RDAM.preferredCitation",
    "multiple": null,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 47,
        "predicate": "::Vocab::RDAM.preferredCitation",
        "multiple": null
      }
    ],
    "label": "bibliographic_citation",
    "labelVariants": [
      "bibliographic_citation"
    ],
    "searchable": false,
    "ambiguity": "",
    "meaning": "Campo descrito como «bibliographic_citation». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `bibliographic_citation`.
- Predicado declarado: `::Vocab::RDAM.preferredCitation`.
- Cardinalidad explícita: no especificada en la declaración; depende del framework.
- Presente en el formulario avanzado observado: False. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «bibliographic_citation». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
