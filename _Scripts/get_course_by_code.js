/** get_course_by_code.js
 * Használat sablonban:
 * <%* const c = await tp.user.get_course_by_code("PSZK-UZMAT"); %>
 */
module.exports = async (tp, code) => {
  const tfile = tp.file.find_tfile("_Data/courses.json");
  if (!tfile) throw new Error("Nem találom: _Data/courses.json");
  const list = JSON.parse(await app.vault.read(tfile));
  const c = list.find(x => (x.code || "").toLowerCase() === String(code).toLowerCase());
  if (!c) throw new Error(`Nincs ilyen kurzuskód: ${code}`);
  return c;
};
