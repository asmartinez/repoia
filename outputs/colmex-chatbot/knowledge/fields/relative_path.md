---
{
  "type": "Metadata Field",
  "title": "relative_path",
  "description": "Campo descrito como «relative_path». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L17",
  "tags": [
    "metadata",
    "relative_path"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L17"
    }
  ],
  "field": {
    "name": "relative_path",
    "predicate": "::RDF::URI.new('http://scholarsphere.psu.edu/ns#relativePath')",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 17,
        "predicate": "::RDF::URI.new('http://scholarsphere.psu.edu/ns#relativePath')",
        "multiple": false
      }
    ],
    "label": "relative_path",
    "labelVariants": [
      "relative_path"
    ],
    "searchable": false,
    "ambiguity": "",
    "meaning": "Campo descrito como «relative_path». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `relative_path`.
- Predicado declarado: `::RDF::URI.new('http://scholarsphere.psu.edu/ns#relativePath')`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: False. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «relative_path». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
