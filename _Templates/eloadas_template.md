<%*
/* A QuickAdd itt injektálja be a felhasználói értékeket */
const course = `{{VALUE:course}}`;

// A 'tags' mező megtisztítása:
// - vessző mentén darabol
// - trim
// - elöl lévő '#' eldobása
// - szóközök helyett kötőjel (Obsidian tagben nincs szóköz)
// - üresek kiszórása
let raw = `{{VALUE:tags}}`;
let tags = raw
  .split(",")
  .map(s => s.trim().replace(/^#/, "").replace(/\s+/g, "-"))
  .filter(Boolean);

// frontmatter felépítése BIZTONSÁGOSAN
tR += `---
created: ${tp.date.now("YYYY-MM-DD")}
updated: ${tp.date.now("YYYY-MM-DD HH:mm")}
type: eloadas
course: ${course}
tags: [${tags.join(", ")}]
---
# Előadás – ${tp.date.now("YYYY-MM-DD")}

## Kurzus: ${course}

## Témák
- 
`;
%>
# 🎓 Előadás – <% tp.date.now("YYYY-MM-DD") %>

## 📌 Téma
<!-- Ide írd be az óra fő témáját -->

---

## 📝 Jegyzetek
-  

---

## ❓ Kérdések / Megjegyzések
-  

---

## ✅ Teendők
- [ ]  

---

## 📚 Források / Linkek
-  

---

## 🔄 Visszatekintés
*Ezt a részt később töltsd ki, ha visszanézed az órát:*
- Legfontosabb pontok:
- Hiányosságok:
- Mit kell még átnézni:
