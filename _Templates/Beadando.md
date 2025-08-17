<%*
const c = await tp.user.course_picker();
tR += `---
type: beadando
course: [[${c.page}]]
course_code: ${c.code}
course_name: ${c.name}
semester: ${c.semester}
title:
due_date:
status: tervezett
priority: közepes
tags: [beadando, psz]
---`
%>

# <% tp.file.title %>

## Leírás
- 

## Követelmények / értékelés
- 

## Átadandók
- [ ] Vázlat
- [ ] Források
- [ ] Végleges verzió

## Feladatok (Tasks)
- [ ] <% tp.file.title %> – vázlat 📅 <% tp.date.now("YYYY-MM-DD") %>
- [ ] Források rendszerezése
- [ ] Véglegesítés
