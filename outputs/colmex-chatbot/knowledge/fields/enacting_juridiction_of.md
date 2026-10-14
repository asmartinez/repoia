---
{
  "type": "Metadata Field",
  "title": "Instancia emisora, pleno o sala",
  "description": "Campo descrito como «Instancia emisora, pleno o sala». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L10",
  "tags": [
    "metadata",
    "enacting_juridiction_of"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/legal_documents.rb#L10"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L899"
    }
  ],
  "field": {
    "name": "enacting_juridiction_of",
    "predicate": "::Vocab::RDAA.enactingJuridictionOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/legal_documents.rb",
        "line": 10,
        "predicate": "::Vocab::RDAA.enactingJuridictionOf",
        "multiple": true
      }
    ],
    "label": "Instancia emisora, pleno o sala",
    "labelVariants": [
      "Instancia emisora, pleno o sala"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Instancia emisora, pleno o sala». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 899
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `enacting_juridiction_of`.
- Predicado declarado: `::Vocab::RDAA.enactingJuridictionOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Instancia emisora, pleno o sala». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
