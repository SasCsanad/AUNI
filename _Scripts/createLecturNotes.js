// createLectureNote.js
// QuickAdd User Script – dropdownból tag választás, jegyzet létrehozása Inboxba

/**
 * QuickAdd user script belépési pont
 * @param {{app: App, quickAddApi: any}} params
 */
module.exports = async (params) => {
  const { app, quickAddApi: qa } = params;

  // ======= TAG -> (kurzus, típus) mapping =======
  const TAGS = [
    { tag: "ÜM_E",  course: "Üzleti matematika",        kind: "Elmélet" },
    { tag: "ÜM_GY", course: "Üzleti matematika",        kind: "Gyakorlat" },
    { tag: "ÜI_E",  course: "Üzleti informatika",       kind: "Elmélet" },
    { tag: "ÜI_GY", course: "Üzleti informatika",       kind: "Gyakorlat" },
    { tag: "ÜK_E",  course: "Üzleti kommunikáció",      kind: "Elmélet" },
    { tag: "ÜK_GY", course: "Üzleti kommunikáció",      kind: "Gyakorlat" },
    { tag: "KZ_E",  course: "Közgazdaságtan 1",         kind: "Elmélet" },
    { tag: "KZ_GY", course: "Közgazdaságtan 1",         kind: "Gyakorlat" },
    { tag: "NJ_E",  course: "Nemzetközi jogi ismeretek",kind: "Elmélet" },
    { tag: "NJ_GY", course: "Nemzetközi jogi ismeretek",kind: "Gyakorlat" },
    { tag: "SZÁ_E", course: "Számvitel alapjai",        kind: "Elmélet" },
    { tag: "SZÁ_GY",course: "Számvitel alapjai",        kind: "Gyakorlat" },
  ];

  // ======= beállítások =======
  const INBOX_FOLDER = "Inbox"; // ide jönnek az új jegyzetek
  const EXTRA_TAGS = ["ora"];    // mindig kerüljön be még ez/ezek a tag(ek)

  // ======= választó (dropdown) =======
  const display = TAGS.map(x => `${x.tag} – ${x.course} (${x.kind})`);
  const values  = TAGS.map(x => x.tag);
  const selectedTag = await qa.suggester(display, values);
  if (!selectedTag) return;

  const meta = TAGS.find(x => x.tag === selectedTag) || { course: selectedTag, kind: "" };

  // ======= dátumok =======
  const m = window.moment; // Obsidian globális moment
  const created = m().format("YYYY-MM-DD");
  const updated = m().format("YYYY-MM-DD HH:mm");
  const prettyDate = m().format("YYYY-MM-DD");

  // ======= fájlnév, elérési út =======
  const fileName = `${selectedTag} - ${created}.md`;
  const filePath = `${INBOX_FOLDER}/${fileName}`;

  // ======= tartalom =======
  const allTags = [selectedTag, ...EXTRA_TAGS].join(", ");
  const title = `${meta.course}${meta.kind ? " – " + meta.kind : ""} – ${prettyDate}`;

  const content =
`---
created: ${created}
updated: ${updated}
tags: [${allTags}]
---
# ${title}

## Témák
- 
`;

  // ======= létrehozás =======
  // ha nincs Inbox mappa, hozzuk létre
  if (!(await app.vault.adapter.exists(INBOX_FOLDER))) {
    await app.vault.createFolder(INBOX_FOLDER);
  }

  // ha már létezik a fájl, tegyünk mögé sorszámot
  let finalPath = filePath;
  let i = 1;
  while (await app.vault.adapter.exists(finalPath)) {
    finalPath = `${INBOX_FOLDER}/${selectedTag} - ${created} (${i}).md`;
    i++;
  }

  await app.vault.create(finalPath, content);
  await app.workspace.openLinkText(finalPath, "", false);
};
