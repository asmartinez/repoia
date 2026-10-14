---
{
  "type": "Metadata Field",
  "title": "Responsable de la captación de fondos",
  "description": "Campo descrito como «Responsable de la captación de fondos». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L139",
  "tags": [
    "metadata",
    "has_funding_acquisition_contributor"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/hyrax/basic_metadata.rb#L139"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/config/locales/colmex.es.yml#L767"
    }
  ],
  "field": {
    "name": "has_funding_acquisition_contributor",
    "predicate": "::RDF::URI.new('https://biblioteca.colmex.mx/vocabularios/credit/hasFundingAcquisitionContributor')",
    "multiple": true,
    "definitions": [
      {
        "path": "app/models/concerns/hyrax/basic_metadata.rb",
        "line": 139,
        "predicate": "::RDF::URI.new('https://biblioteca.colmex.mx/vocabularios/credit/hasFundingAcquisitionContributor')",
        "multiple": true
      }
    ],
    "label": "Responsable de la captación de fondos",
    "labelVariants": [
      "Responsable de la captación de fondos"
    ],
    "searchable": true,
    "ambiguity": "",
    "meaning": "Campo descrito como «Responsable de la captación de fondos». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": [
      {
        "path": "config/locales/colmex.es.yml",
        "line": 767
      }
    ]
  }
}
---
# Schema

- Nombre técnico: `has_funding_acquisition_contributor`.
- Predicado declarado: `::RDF::URI.new('https://biblioteca.colmex.mx/vocabularios/credit/hasFundingAcquisitionContributor')`.
- Cardinalidad explícita: True.
- Presente en el formulario avanzado observado: True. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «Responsable de la captación de fondos». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
