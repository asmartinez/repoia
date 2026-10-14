---
{
  "type": "Reference",
  "title": "Mantenimiento del conocimiento",
  "description": "Mantenimiento del conocimiento.",
  "tags": [
    "maintenance",
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
# Mantenimiento del conocimiento

El inventario se genera desde una copia de código identificada por commit. Cada campo conserva predicado, cardinalidad declarada, etiquetas, fuente y ambigüedades. Los perfiles indican módulos compartidos. El manifiesto conserva la observación del formulario avanzado y su fecha.

Para actualizar, revise cambios de código y el formulario público, ejecute scripts/build-knowledge.py sobre una copia conocida y compruebe el diff antes de desplegar. Las guías son mantenidas por el equipo y no se sobrescriben durante la extracción. La metadata frontal usa JSON válido como subconjunto de YAML: mantenga esa sintaxis para el cargador de este producto.

No marque revisión humana sin una revisión real. Para conceptos ambiguos, mantenga status=draft hasta que un catalogador confirme el uso; la confirmación de extracción automática no valida la semántica. Conserve historial y fuentes. El cargador verifica formato, nombres permitidos, índice y tamaños al iniciar; no busca ni escribe conocimiento dinámicamente a petición de usuarios.

Evalúe preguntas abiertas, precisas, multilingües, comparativas y ambiguas. Revise evidencia y preservación de filtros, paginación, descarga, enlaces y límites del contenido. OKF no es un índice del texto completo ni una base permanente que aprende de cada conversación.
