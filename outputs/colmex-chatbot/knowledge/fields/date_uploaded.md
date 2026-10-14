---
{
  "type": "Metadata Field",
  "title": "date_uploaded",
  "description": "Fecha de incorporación del registro; no fecha original del material.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/core_metadata.rb#L26",
  "tags": [
    "metadata",
    "date_uploaded"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/core_metadata.rb#L26"
    }
  ],
  "field": {
    "name": "date_uploaded",
    "predicate": "::RDF::Vocab::DC.dateSubmitted",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/core_metadata.rb",
        "line": 26,
        "predicate": "::RDF::Vocab::DC.dateSubmitted",
        "multiple": false
      }
    ],
    "label": "date_uploaded",
    "labelVariants": [
      "date_uploaded"
    ],
    "searchable": false,
    "ambiguity": "",
    "meaning": "Fecha de incorporación del registro; no fecha original del material.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `date_uploaded`.
- Predicado declarado: `::RDF::Vocab::DC.dateSubmitted`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: False. Esto confirma exposición, no integridad o calidad de todos sus valores.

Fecha de incorporación del registro; no fecha original del material.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
