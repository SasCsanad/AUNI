<%*
const c = await tp.user.course_picker();
tR += `---
type: fogalom
course: [[${c.page}]]
course_code: ${c.code}
course_name: ${c.name}
semester: ${c.semester}
topic:
tags: [fogalom, psz]
---`
%>

# Fogalom: <% tp.file.title %>

## Definíció
- 

## Kapcsolódó fogalmak
- [[ ]]
- [[ ]]

## Források
- 
