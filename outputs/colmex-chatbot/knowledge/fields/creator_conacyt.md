---
{
  "type": "Metadata Field",
  "title": "creator_conacyt",
  "description": "Campo descrito como «creator_conacyt». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/conacyt.rb#L5",
  "tags": [
    "metadata",
    "creator_conacyt"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/conacyt.rb#L5"
    }
  ],
  "field": {
    "name": "creator_conacyt",
    "predicate": "::RDF::Vocab::MODS.namePrincipal",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/conacyt.rb",
        "line": 5,
        "predicate": "::RDF::Vocab::MODS.namePrincipal",
        "multiple": true
      }
    ],
    "label": "creator_conacyt",
    "labelVariants": [
      "creator_conacyt"
    ],
    "searchable": false,
    "ambiguity": "",
    "meaning": "Campo descrito como «creator_conacyt». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `creator_conacyt`.
- Predicado declarado: `::RDF::Vocab::MODS.namePrincipal`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: False. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «creator_conacyt». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
