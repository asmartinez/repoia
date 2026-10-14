---
{
  "type": "Playbook",
  "title": "Selección de búsqueda y recuperación",
  "description": "Selección de búsqueda y recuperación.",
  "tags": [
    "search",
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
# Selección de búsqueda y recuperación

Use preguntas en cualquier idioma; responda en el idioma actual. En español use usted. Preserve títulos, nombres y pasajes literales. Para temas, considere traducciones y términos relacionados sin declarar que son equivalentes exactos.

Exploración amplia: all_fields con términos de contenido, sin restringir tipos o colecciones por defecto. Búsqueda precisa: campo explícito, según su significado (creator para autoría, subject_person para persona tratada, editor para edición personal, director para supervisión de tesis, temporary_coverage para período tratado).

El formulario avanzado permite combinar campos con AND u OR. Dentro de cada campo: frases entre comillas, AND/OR/NOT y paréntesis. No use comodines, truncamiento, consultas Solr internas ni syntax field:value en all_fields. Filtros de faceta son etiquetas exactas: use valores observados en resultados y facetas; no invente traducciones de etiquetas almacenadas. resource_type difiere de human_readable_type (modelo). Institución editorial difiere de persona editora.

Cada plan puede tener hasta tres búsquedas. Para comparación, examine lados o perspectivas distintos, no sólo un título. Para síntesis temática, busque distintas facetas del tema y reúna evidencia sin afirmar cobertura exhaustiva. Evite convertir estas pautas en una taxonomía cerrada de preguntas; razone según la pregunta y el conocimiento recuperado.

Marque cada condición textual como required=true sólo cuando representa una condición explícita del usuario; required=false para términos de expansión que usted infiere. Con AND, el servidor puede eliminar sólo condiciones inferred para reintentar una búsqueda vacía. Nunca elimine una condición explícita, ni sus filtros o rango temporal. En OR no se relajan condiciones automáticamente. La respuesta debe informar qué se buscó y cualquier ajuste.

Puede filtrar por rango de año de publicación con date_created_sim y ordenar usando las opciones observadas del formulario actual: date_created_sim asc/desc, title_sim asc/desc o system_create_dtsi asc/desc. El código de la copia inspeccionada declara una variante integer que no coincide con el formulario actual: prefiera opciones verificadas en vivo. Ordenar por año no prueba el material más antiguo absoluto: fechas ausentes, intervalos o formatos no normalizados quedan fuera o pueden ordenarse de forma inesperada. Para antigüedad explique el alcance y confirme fechas en las fichas.

Conteos: use el total del catálogo de una consulta concreta; mantenga su filtro y distinga registros de títulos únicos o producción histórica. Rankings por facetas son entradas catalogadas, sin reunir personas. La lista de facetas puede estar truncada. Los campos sin coincidencias no se consideran inexistentes o mal catalogados automáticamente. La presentación combina explicaciones por registro y enlaces de evidencia; exportación y más resultados conservan cada condición del plan.


## Panorama de exploración — 2026-10-14

Para preguntas temáticas amplias, el servidor puede consultar facetas de colecciones temáticas y tipos documentales, verificar sus conteos dentro de las consultas originales y seleccionar ejemplos variados. No use agrupación para títulos conocidos, búsquedas de autoría o conjuntos nombrados explícitamente. Las etiquetas temáticas son datos de catálogo, no una prueba de pertenencia a una colección formal. No infiera grupos por semejanza de títulos.

Los grupos pueden solaparse y las facetas estar truncadas. No sume sus conteos, no confunda coincidencias temáticas con tamaño total de una colección ni trate la muestra como representación exhaustiva de posturas. La diversidad se equilibra con el orden de relevancia. Explorar un grupo conserva las condiciones originales; paginación y exportación mantienen el filtro.
