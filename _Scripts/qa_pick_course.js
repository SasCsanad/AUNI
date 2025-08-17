/** qa_pick_course.js
 * QuickAdd user script – kurzusválasztó (JSON-ból).
 * Visszaad: a kurzus objektum + safe mezők (safeName, safeCode, safePage) fájlnévhez/mappához.
 */
module.exports = async (params) => {
  const { app, quickAddApi } = params;

  const file = app.vault.getAbstractFileByPath("_Data/courses.json");
  if (!file) {
    new Notice("Hiányzik: /_Data/courses.json");
    throw new Error("courses.json not found");
  }
  const list = JSON.parse(await app.vault.read(file));
  if (!Array.isArray(list) || !list.length) {
    new Notice("Üres / hibás courses.json");
    throw new Error("empty course list");
  }

  const labels = list.map(c => `${c.code} — ${c.name}${c.semester ? " [" + c.semester + "]" : ""}`);
  const picked = await quickAddApi.suggester(labels, list);
  if (!picked) throw new Error("megszakítva");

  const safe = (s) => String(s ?? "").replace(/[\\/:*?"<>|]/g, "-").trim();
  picked.safeName = safe(picked.name);
  picked.safeCode = safe(picked.code);
  picked.safePage = safe(picked.page);

  return picked;
};
