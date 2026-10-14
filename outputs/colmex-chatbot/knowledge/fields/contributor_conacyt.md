---
{
  "type": "Metadata Field",
  "title": "contributor_conacyt",
  "description": "Campo descrito como «contributor_conacyt». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/conacyt.rb#L10",
  "tags": [
    "metadata",
    "contributor_conacyt"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/conacyt.rb#L10"
    }
  ],
  "field": {
    "name": "contributor_conacyt",
    "predicate": "::RDF::Vocab::MODS.name",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/conacyt.rb",
        "line": 10,
        "predicate": "::RDF::Vocab::MODS.name",
        "multiple": true
      }
    ],
    "label": "contributor_conacyt",
    "labelVariants": [
      "contributor_conacyt"
    ],
    "searchable": false,
    "ambiguity": "",
    "meaning": "Campo descrito como «contributor_conacyt». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `contributor_conacyt`.
- Predicado declarado: `::RDF::Vocab::MODS.name`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: False. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «contributor_conacyt». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
