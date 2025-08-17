<%*
const c = await tp.user.course_picker();
tR += `---
type: olvasas
course: [[${c.page}]]
course_code: ${c.code}
course_name: ${c.name}
semester: ${c.semester}
source:
pages:
status: folyamatban
tags: [olvasas, psz]
---`
%>

# Olvasójegyzet – <%* tR += c.name %>

## Rövid kivonat
- 

## Fő fogalmak
- 

## Idézetek / oldalszámok
- 

## Következő lépések
- [ ] 
