/** course_picker.js
 * Templater user script – kurzusválasztó a /_Data/courses.json-ból.
 * Visszatér a kiválasztott kurzus objektummal (code, name, semester, page, stb.).
 */
module.exports = async (tp) => {
  const jsonPath = "_Data/courses.json";
  const tfile = tp.file.find_tfile(jsonPath);
  if (!tfile) {
    new Notice(`Nem találom: ${jsonPath}`);
    throw new Error(`Hiányzik a ${jsonPath}`);
  }
  let data = [];
  try {
    const raw = await app.vault.read(tfile);
    data = JSON.parse(raw);
  } catch (e) {
    new Notice("Hibás JSON a /_Data/courses.json-ban");
    throw e;
  }
  if (!Array.isArray(data) || data.length === 0) {
    new Notice("Üres a kurzuslista a /_Data/courses.json-ban");
    throw new Error("Üres kurzuslista");
  }

  const labels = data.map(c =>
    `${c.code ?? "N/A"} — ${c.name ?? "Névtelen"}${c.semester ? " ["+c.semester+"]" : ""}`
  );
  const picked = await tp.system.suggester(labels, data);
  if (!picked) throw new Error("Megszakítva");
  return picked; // teljes kurzus objektum
};
