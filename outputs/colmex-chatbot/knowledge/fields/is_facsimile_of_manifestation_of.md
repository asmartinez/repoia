---
{
  "type": "Metadata Field",
  "title": "Facsímil de",
  "description": "Campo descrito como «Facsímil de». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L107",
  "tags": [
    "metadata",
    "is_facsimile_of_manifestation_of"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L107"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L896"
    }
  ],
  "field": {
    "name": "is_facsimile_of_manifestation_of",
    "predicate": "::Vocab::RDAM.isFacsimilOfManifestationOf",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 107,
        "predicate": "::Vocab::RDAM.isFacsimilOfManifestationOf",
        "multiple": true
      }
    ],
    "label": "Facsímil de",
    "labelVariants": [
      "Facsímil de"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Facsímil de». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 896
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `is_facsimile_of_manifestation_of`.
- Predicado declarado: `::Vocab::RDAM.isFacsimilOfManifestationOf`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Facsímil de». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
