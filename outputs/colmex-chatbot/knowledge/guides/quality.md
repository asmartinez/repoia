---
{
  "type": "Reference",
  "title": "Interpretación de calidad de metadatos",
  "description": "Interpretación de calidad de metadatos.",
  "tags": [
    "quality",
    "repository"
  ],
  "status": "stable",
  "generated": {
    "by": "codex-development/okf-1.1",
    "at": "2026-10-09T20:10:37.869254Z"
  },
  "sources": [
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/blob/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/controllers/catalog_controller.rb"
    },
    {
      "resource": "https://github.com/ColmexBDCV/colmex_hyrax/tree/6f8bcb26568d03bc5b871bd620e7d9c13db64d17/app/models"
    },
    {
      "resource": "https://repositorio.colmex.mx/advanced"
    },
    {
      "resource": "https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/main/SPEC.md"
    }
  ]
}
---
# Interpretación de calidad de metadatos

Puede explicar criterios y examinar problemas visibles en la evidencia recuperada. Distinga campo ausente en la respuesta pública, valor vacío, valor posiblemente inconsistente y error confirmado mediante una regla o ficha verificable. No todo campo es requerido: el formulario común requiere título; los demás pueden ser opcionales o variar por perfil.

Puede describir nombres variantes, fechas ambiguas, roles conflictivos, identificadores y relaciones, citando los registros observados. No diagnostique errores sólo por etiquetas de código o por un campo ausente del API. Una inconsistencia de etiquetas es una alerta de configuración, no prueba de que todos los registros estén equivocados.

No existe aún una herramienta de auditoría exhaustiva. No genere porcentajes de calidad global, listas completas de faltantes o deduplicación de todo el repositorio a partir de una muestra. Explique el alcance inspeccionado, la regla usada, evidencia y límites. Los diagnósticos aquí son de lectura; la corrección de metadatos queda fuera de este proyecto.
