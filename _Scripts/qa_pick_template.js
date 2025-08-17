/** qa_pick_template.js */
module.exports = async (params) => {
  const { app, quickAddApi } = params;
  const folder = "_Templates";
  const dir = app.vault.getAbstractFileByPath(folder);
  if (!dir || !dir.children) throw new Error("no templates");

  const files = dir.children.filter(f => f.extension === "md");
  const names = files.map(f => f.basename);
  const picked = await quickAddApi.suggester(names, files);
  if (!picked) throw new Error("megszakítva");

  // ---- itt a lényeg: fájlnévbarát név ----
  const sanitize = s => String(s ?? "")
    .replace(/[\\/:*?"<>|]/g, "-")  // tiltottak helyett kötőjel
    .replace(/\s+/g, " ")           // duplaspacik ki
    .trim();

  return {
    templatePath: picked.path,
    templateName: picked.basename,
    safeTemplateName: sanitize(picked.basename)
  };
};
