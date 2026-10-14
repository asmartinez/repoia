// lib/repository.ts
var normalize = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
function intent(s) {
  s = normalize(s);
  if (/similar|related books|other books|parecid|recomiend|recommend|otros libros/.test(s)) return "similar";
  if (/what.*about|de que trata|que trata|resum|summary|summarize|tell me about/.test(s)) return "about";
  if (/metadata|metadatos|details|detalles/.test(s)) return "metadata";
  return "search";
}
var searchTerms = (s) => s.trim().replace(/^(?:please\s+)?(?:search(?:\s+for)?|find(?:\s+books?\s+(?:about|on))?|look\s+for|busca(?:r)?(?:\s+libros\s+sobre)?)\s+/i, "").replace(/^['"“]|['"”]$/g, "").trim();
function about(b) {
  if (b.description.length) return b.description.join("\n\n");
  if (b.contents.length) return `El cat\xE1logo incluye este contenido para \u201C${b.title}\u201D:

${b.contents.join("\n\n").replace(/\s*--\s*/g, "\n\u2022 ")}

Esta respuesta se basa en los metadatos del cat\xE1logo, no en la lectura del material completo.`;
  return `\u201C${b.title}\u201D${b.year ? ` (${b.year})` : ""}${b.creators.length ? ` tiene como autor\xEDa a ${b.creators.join("; ")}` : ""}. ${b.subject.length ? `Temas del cat\xE1logo: ${b.subject.join("; ")}. ` : ""}El registro no incluye descripci\xF3n ni \xEDndice; no hay informaci\xF3n suficiente para resumir el material.`;
}
async function fetchRepository(q, page = 1, field = "all_fields", type = null) {
  const params = new URLSearchParams({ q, search_field: field, per_page: "5", page: String(page) });
  if (type) params.set("f[human_readable_type_sim][]", type);
  const r = await fetch(`https://repositorio.colmex.mx/catalog.json?${params}`, { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(2e4) });
  if (!r.ok || !r.headers.get("content-type")?.includes("application/json")) throw new Error("No se pudo conectar con el repositorio. Int\xE9ntelo de nuevo.");
  const d = await r.json();
  if (!Array.isArray(d.response?.docs)) throw new Error("El repositorio devolvi\xF3 una respuesta inesperada.");
  const routes = { Book: "books", Thesis: "theses", Article: "articles", ArchivalDocument: "archival_documents", PressRelease: "press_releases", Video: "videos", Audio: "audios", BookChapter: "book_chapters", Journal: "journals", Map: "maps", Photography: "photographies", ResearchData: "research_data" };
  const books = d.response.docs.map((doc) => {
    const a = (k) => Array.isArray(doc[k]) ? doc[k].filter((v) => typeof v === "string" && !!v.trim()) : [];
    const model = a("has_model_ssim")[0], route = routes[model];
    return { type: a("resource_type_tesim")[0] || a("human_readable_type_tesim")[0] || "Material", id: String(doc.id), title: a("title_tesim")[0] || "Sin t\xEDtulo", creators: a("creator_tesim").length ? a("creator_tesim") : a("has_creator_tesim"), year: a("date_created_tesim")[0] || a("date_of_manifestation_tesim")[0] || "", publisher: a("publisher_tesim"), language: a("language_tesim"), extent: a("extension_tesim")[0] || "", edition: a("edition_tesim"), subject: a("subject_tesim"), geography: a("geographic_coverage_tesim"), description: a("description_tesim"), contents: a("table_of_contents_tesim"), isbn: a("isbn_tesim"), link: `https://repositorio.colmex.mx/${route ? `concern/${route}` : "catalog"}/${encodeURIComponent(String(doc.id))}`, access: a("item_access_restrictions_tesim") };
  });
  return { books, total: d.response.pages?.total_count || 0, page, nextPage: d.response.pages?.next_page || null, query: q, field, facets: d.response.facets };
}
async function searchRepository(q, page = 1, field = "all_fields") {
  const r = await fetch("/api/catalog?" + new URLSearchParams({ q, page: String(page), field }), { signal: AbortSignal.timeout(3e4) });
  const d = await r.json();
  if (!r.ok) throw new Error(d.error || "No se pudo consultar el cat\xE1logo.");
  return d;
}
export {
  about,
  fetchRepository,
  intent,
  normalize,
  searchRepository,
  searchTerms
};
