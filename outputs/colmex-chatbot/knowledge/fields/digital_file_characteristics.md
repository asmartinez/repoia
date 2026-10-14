---
{
  "type": "Metadata Field",
  "title": "digital_file_characteristics",
  "description": "Campo descrito como «digital_file_characteristics». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L102",
  "tags": [
    "metadata",
    "digital_file_characteristics"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L102"
    }
  ],
  "field": {
    "name": "digital_file_characteristics",
    "predicate": "::Vocab::RDAM.digitalFileCharacteristic",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 102,
        "predicate": "::Vocab::RDAM.digitalFileCharacteristic",
        "multiple": true
      }
    ],
    "label": "digital_file_characteristics",
    "labelVariants": [
      "digital_file_characteristics"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «digital_file_characteristics». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `digital_file_characteristics`.
- Predicado declarado: `::Vocab::RDAM.digitalFileCharacteristic`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «digital_file_characteristics». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
