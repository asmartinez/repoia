---
{
  "type": "Metadata Field",
  "title": "based_near",
  "description": "Campo descrito como «based_near». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L42",
  "tags": [
    "metadata",
    "based_near"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L42"
    }
  ],
  "field": {
    "name": "based_near",
    "predicate": "::RDF::Vocab::BF2.geographicCoverage",
    "multiple": null,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 42,
        "predicate": "::RDF::Vocab::BF2.geographicCoverage",
        "multiple": null
      }
    ],
    "label": "based_near",
    "labelVariants": [
      "based_near"
    ],
    "searchable": false,
    "ambiguity": "La propiedad usa geographicCoverage; el campo geographic_coverage usa FOAF based_near. Hay solapamiento y etiquetas potencialmente inconsistentes.",
    "meaning": "Campo descrito como «based_near». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `based_near`.
- Predicado declarado: `::RDF::Vocab::BF2.geographicCoverage`.
- Cardinalidad explícita: no especificada en la declaración; depende del framework.
- Presente en el formulario avanzado observado: False. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «based_near». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

# Ambiguity

La propiedad usa geographicCoverage; el campo geographic_coverage usa FOAF based_near. Hay solapamiento y etiquetas potencialmente inconsistentes.

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
