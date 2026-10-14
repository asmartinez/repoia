---
{
  "type": "Metadata Field",
  "title": "Contenido",
  "description": "Información del contenido o índice de la obra; puede servir para descubrir capítulos.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L61",
  "tags": [
    "metadata",
    "table_of_contents"
  ],
  "status": "draft",
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L61"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L862"
    }
  ],
  "field": {
    "name": "table_of_contents",
    "predicate": "::Vocab::RDAW.wholePartWorkRelationship",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 61,
        "predicate": "::Vocab::RDAW.wholePartWorkRelationship",
        "multiple": true
      }
    ],
    "label": "Contenido",
    "labelVariants": [
      "Contenido"
    ],
    "searchable": true,
    "ambiguity": "La etiqueta Contenido se usa con wholePartWorkRelationship. Su valor puede ser texto de índice, no un enlace estructurado a capítulos.",
    "meaning": "Información del contenido o índice de la obra; puede servir para descubrir capítulos.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 862
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `table_of_contents`.
- Predicado declarado: `::Vocab::RDAW.wholePartWorkRelationship`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Información del contenido o índice de la obra; puede servir para descubrir capítulos.[^definition]

# Ambiguity

La etiqueta Contenido se usa con wholePartWorkRelationship. Su valor puede ser texto de índice, no un enlace estructurado a capítulos.

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
