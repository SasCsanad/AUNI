/** qa_pick_folder.js */
module.exports = async (params) => {
  const { app, quickAddApi } = params;

  // Folders rekurzívan
  const folders = [];
  const walk = (folder) => {
    if (!folder || !folder.children) return;
    folders.push(folder.path || "/");
    for (const child of folder.children) {
      if (child.children) walk(child); // TFolder
    }
  };
  walk(app.vault.getRoot());

  // Rejtett obszidiános dolgok kihagyása
  const visible = folders.filter(p => !p.startsWith(".obsidian"));

  // + Egy extra opció: "Új útvonal megadása…"
  const choice = await quickAddApi.suggester(
    [...visible, "➕ Új útvonal megadása…"],
    [...visible, "__NEW__"]
  );

  let folderPath = choice;
  if (choice === "__NEW__") {
    const typed = await quickAddApi.inputPrompt("Add meg a mappa útvonalát (pl. 30_Jegyzetek/Eloadasok)");
    if (!typed) throw new Error("megszakítva");
    folderPath = typed.trim();
  }

  // Ha nem létezik, hozzuk létre
  const exists = await app.vault.adapter.exists(folderPath);
  if (!exists) {
    try {
      await app.vault.createFolder(folderPath);
    } catch (e) {
      new Notice("Nem sikerült mappát létrehozni: " + folderPath);
      throw e;
    }
  }

  return { folderPath };
};
