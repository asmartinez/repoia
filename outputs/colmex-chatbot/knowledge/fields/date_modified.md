---
{
  "type": "Metadata Field",
  "title": "date_modified",
  "description": "Fecha de modificación del registro; no fecha del contenido.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/core_metadata.rb#L31",
  "tags": [
    "metadata",
    "date_modified"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/core_metadata.rb#L31"
    }
  ],
  "field": {
    "name": "date_modified",
    "predicate": "::RDF::Vocab::DC.modified",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/core_metadata.rb",
        "line": 31,
        "predicate": "::RDF::Vocab::DC.modified",
        "multiple": false
      }
    ],
    "label": "date_modified",
    "labelVariants": [
      "date_modified"
    ],
    "searchable": false,
    "ambiguity": "",
    "meaning": "Fecha de modificación del registro; no fecha del contenido.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `date_modified`.
- Predicado declarado: `::RDF::Vocab::DC.modified`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: False. Esto confirma exposición, no integridad o calidad de todos sus valores.

Fecha de modificación del registro; no fecha del contenido.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
