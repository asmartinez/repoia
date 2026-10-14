---
{
  "type": "Metadata Field",
  "title": "label",
  "description": "Campo descrito como «label». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L15",
  "tags": [
    "metadata",
    "label"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L15"
    }
  ],
  "field": {
    "name": "label",
    "predicate": "ActiveFedora::RDF::Fcrepo::Model.downloadFilename",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 15,
        "predicate": "ActiveFedora::RDF::Fcrepo::Model.downloadFilename",
        "multiple": false
      }
    ],
    "label": "label",
    "labelVariants": [
      "label"
    ],
    "searchable": false,
    "ambiguity": "",
    "meaning": "Campo descrito como «label». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `label`.
- Predicado declarado: `ActiveFedora::RDF::Fcrepo::Model.downloadFilename`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: False. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «label». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
