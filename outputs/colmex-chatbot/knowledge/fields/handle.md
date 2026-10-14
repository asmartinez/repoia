---
{
  "type": "Metadata Field",
  "title": "handle",
  "description": "Identificador persistente Handle; no confundir con la dirección de la ficha Hyrax.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L28",
  "tags": [
    "metadata",
    "handle"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L28"
    }
  ],
  "field": {
    "name": "handle",
    "predicate": "::RDF::Vocab::DataCite.handle",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 28,
        "predicate": "::RDF::Vocab::DataCite.handle",
        "multiple": false
      }
    ],
    "label": "handle",
    "labelVariants": [
      "handle"
    ],
    "searchable": false,
    "ambiguity": "",
    "meaning": "Identificador persistente Handle; no confundir con la dirección de la ficha Hyrax.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `handle`.
- Predicado declarado: `::RDF::Vocab::DataCite.handle`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: False. Esto confirma exposición, no integridad o calidad de todos sus valores.

Identificador persistente Handle; no confundir con la dirección de la ficha Hyrax.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
