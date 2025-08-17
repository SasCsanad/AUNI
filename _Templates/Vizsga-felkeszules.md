<%*
const c = await tp.user.course_picker();
tR += `---
type: vizsga
course: [[${c.page}]]
course_code: ${c.code}
course_name: ${c.name}
semester: ${c.semester}
exam_date:
format: írásbeli
status: tervezett
tags: [vizsga, psz]
---`
%>

# Vizsgafelkészülés – <%* tR += c.name %>

## Témalisták / tételek
- 

## Ismétlési terv
- [ ] Téma 1
- [ ] Téma 2
- [ ] Téma 3

## Gyakorlókérdések
- 

## Utolsó nap ellenőrzőlista
- [ ] Személyi / diákigazolvány
- [ ] Írószerek / számológép
- [ ] Pihenés
