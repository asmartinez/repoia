---
{
  "type": "Metadata Field",
  "title": "subject_conacyt",
  "description": "Campo descrito como «subject_conacyt». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
  "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/conacyt.rb#L15",
  "tags": [
    "metadata",
    "subject_conacyt"
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
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models/concerns/conacyt.rb#L15"
    }
  ],
  "field": {
    "name": "subject_conacyt",
    "predicate": "::Vocab::RDAW.intendedAudience",
    "multiple": false,
    "definitions": [
      {
        "path": "app/models/concerns/conacyt.rb",
        "line": 15,
        "predicate": "::Vocab::RDAW.intendedAudience",
        "multiple": false
      }
    ],
    "label": "subject_conacyt",
    "labelVariants": [
      "subject_conacyt"
    ],
    "searchable": false,
    "ambiguity": "La etiqueta dice Persona del CONACYT, pero el predicado indica público destinatario. Requiere revisión.",
    "meaning": "Campo descrito como «subject_conacyt». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.",
    "labelSources": []
  }
}
---
# Schema

- Nombre técnico: `subject_conacyt`.
- Predicado declarado: `::Vocab::RDAW.intendedAudience`.
- Cardinalidad explícita: False.
- Presente en el formulario avanzado observado: False. Esto confirma exposición, no integridad o calidad de todos sus valores.

Campo descrito como «subject_conacyt». La intención se infiere de la etiqueta y el predicado local; confirmar el uso en registros antes de interpretaciones especializadas.[^definition]

# Ambiguity

La etiqueta dice Persona del CONACYT, pero el predicado indica público destinatario. Requiere revisión.

La verificación automática confirma la extracción del código, no la interpretación catalográfica ni su aprobación humana.

[^definition]: Definición en el código de Colmex Hyrax.
