<%*
const c = await tp.user.course_picker();
tR += `---
type: óra
format: gyakorlat
course: [[${c.page}]]
course_code: ${c.code}
course_name: ${c.name}
semester: ${c.semester}
credits: ${c.credits ?? ""}
instructor: ${c.instructor ?? ""}
date: ${tp.date.now("YYYY-MM-DD")}
week: ${tp.date.now("W")}
tags: [gyakorlat, ora, psz]
---`
%>

# Gyakorlat – <% tp.date.now("YYYY-MM-DD") %>

## Feladatok
1) 
2) 
3) 

## Megoldási sémák
- 

## Hibák / tippek
- 
