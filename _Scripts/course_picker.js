/** /_Scripts/course_picker.js  (Templater user script) */
module.exports = async (tp) => {
  const jsonPath = "_Data/courses.json";
  const tfile = tp.file.find_tfile(jsonPath);
  if (!tfile) throw new Error("Nem találom: " + jsonPath);
  const list = JSON.parse(await app.vault.read(tfile));
  if (!Array.isArray(list) || !list.length) throw new Error("Üres kurzuslista.");
  const labels = list.map(c => `${c.code} — ${c.name}${c.semester ? " ["+c.semester+"]" : ""}`);
  return await tp.system.suggester(labels, list);   // visszaadja a kiválasztott objektumot
};
