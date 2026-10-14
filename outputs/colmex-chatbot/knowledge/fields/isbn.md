---
{
  "type": "Metadata Field",
  "title": "isbn",
  "description": "Identificador ISBN de la edición o manifestación.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L54",
  "tags": [
    "metadata",
    "isbn"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L54"
    }
  ],
  "field": {
    "name": "isbn",
    "predicate": "::RDF::Vocab::BF2.Isbn",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 54,
        "predicate": "::RDF::Vocab::BF2.Isbn",
        "multiple": true
      }
    ],
    "label": "isbn",
    "labelVariants": [
      "isbn"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Identificador ISBN de la edición o manifestación.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `isbn`.
- Predicado declarado: `::RDF::Vocab::BF2.Isbn`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Identificador ISBN de la edición o manifestación.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
