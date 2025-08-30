module.exports = async (params) => {
  const qa = params.quickAddApi;

  // --- 1) Sablonok a _Templates mappából ---
  const templateFiles = app.vault.getFiles()
    .filter(f => f.path.startsWith("_Templates/") && f.extension === "md")
    .map(f => f.path);

  if (!templateFiles.length) { new Notice("Nincs .md sablon a _Templates mappában!"); return; }

  const pickedTemplate = await qa.suggester(
    templateFiles.map(p => p.replace(/^_Templates\//, "")), // megjelenített név
    templateFiles                                          // valódi érték
  );
  if (!pickedTemplate) { new Notice("Megszakítva: nincs sablon."); return; }

  // --- 2) Mappalistát építünk (TFolder nélkül) ---
  const folders = [];
  (function walk(folder) {
    folders.push(folder.path || "");
    if (folder.children) for (const c of folder.children) if (c.children) walk(c);
  })(app.vault.getRoot());

  const pickedFolder = await qa.suggester(folders, folders);
  if (!pickedFolder) { new Notice("Megszakítva: nincs mappa."); return; }

  // --- 3) Fájlnév bekérése ---
  const defaultName = moment().format("YYYY-MM-DD");
  let fileName = await qa.inputPrompt("Fájlnév (kiterjesztés nélkül):", defaultName);
  if (fileName == null) { new Notice("Megszakítva: nincs fájlnév."); return; }
  fileName = fileName.trim();
  if (!fileName) { new Notice("Érvénytelen fájlnév."); return; }
  if (!fileName.toLowerCase().endsWith(".md")) fileName += ".md";

  // --- 4) Sablon beolvasása ---
  const tFile = app.vault.getAbstractFileByPath(pickedTemplate);
  if (!tFile) { new Notice("Nem találom a sablonfájlt."); return; }
  const templateContent = await app.vault.read(tFile);

  // --- 5) Célmappa létrehozása (ha nincs) ---
  if (!app.vault.getAbstractFileByPath(pickedFolder)) {
    try { await app.vault.createFolder(pickedFolder); } catch (e) { /* lehet, hogy már létezik */ }
  }

  // --- 6) Ütközésmentes útvonal ---
  const basePath = (pickedFolder && pickedFolder !== "/") ? `${pickedFolder}/` : "";
  const desiredPath = `${basePath}${fileName}`;

  async function uniquePath(p) {
    if (!app.vault.getAbstractFileByPath(p)) return p;
    const dot = p.lastIndexOf(".");
    const base = dot >= 0 ? p.slice(0, dot) : p;
    const ext  = dot >= 0 ? p.slice(dot) : "";
    let n = 1, cand;
    do { cand = `${base} ${n}${ext}`; n++; } while (app.vault.getAbstractFileByPath(cand));
    return cand;
  }
  const newFilePath = await uniquePath(desiredPath);

  // --- 7) Új jegyzet létrehozása ---
  await app.vault.create(newFilePath, templateContent);
  new Notice(`Kész: ${newFilePath}`);
};
