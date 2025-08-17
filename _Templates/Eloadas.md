<%*
const c = await tp.user.course_picker();
tR += `---
type: óra
format: előadás
course: [[${c.page}]]
course_code: ${c.code}
course_name: ${c.name}
semester: ${c.semester}
credits: ${c.credits ?? ""}
instructor: ${c.instructor ?? ""}
date: ${tp.date.now("YYYY-MM-DD")}
week: ${tp.date.now("W")}
tags: [eloadas, ora, psz]
---`
%>

# Előadás – <% tp.date.now("YYYY-MM-DD") %>

## Témák
- 

## Példák / esettanulmányok
- 

## Kérdések
- 

## Következő lépések
- [ ] 
