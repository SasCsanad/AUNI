<%*
const c = await tp.user.course_picker();
tR += `---
type: projekt
course: [[${c.page}]]
course_code: ${c.code}
course_name: ${c.name}
semester: ${c.semester}
status: tervezett
owner: én
stakeholders:
due_date:
tags: [projekt, psz]
---`
%>

# Projekt: <% tp.file.title %>

## Cél
- 

## Mérföldkövek
- [ ] 

## Kockázatok
- 

## Hivatkozások
- 
