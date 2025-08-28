

### Mi az egyenletrendszer?
Egy egyenletrendszer több egyenletből áll, amelyben ugyanazok az ismeretlenek szerepelnek.
Például egy 2 ismeretlenes, 2 egyenletből álló rendszer

$$
\begin{equation}
\begin{cases}
2x+y=5 \\
x-y=1
\end{cases}
\end{equation}​
$$
**Célunk** olyan **x,y** értékeket találni, amelyeket mindkét egyenletet kielégítik

---
### Megoldási Módszerek
3 klasszikus módszer van
1. Behelyettesítés (**substitution**)
	- Az egyik egyenletből kifejezzük a másikat, majd azt behelyezzük a másikba
		$$
		\begin{cases}
		2x+y=5 \\
		x-y=1
		\end{cases}$$
	- Második egyenletből: $x =1+y$
	- Behelyettesítünk az elsőbe:
		$$
2(1+y) + y = 5 \implies 2+2y+y=5 \implies
3y = 3 \implies y=1
		$$
	- Megoldás $(x,y) = (2,1)$  <br><br>
 2. Összeadás-kivonás (Elimináció)
	 - Úgy alakítjuk az egyenleteket, hogy az egyik változó eltűnjön, így egy egyszerű egy ismeretlenes egyenletet kapunk
		$$
		\begin{cases}
		2x+y=5 \\
		x-y=1
		\end{cases}
		$$
	- Az első egyenlet: $2x+y=5$
	- A második: $x-y=1$
	
	Összeadjuk őket:
$$(2x+x)+(y-y)=5+1 \implies 3x=6 \implies x=2$$
Most betudjuk helyettesíteni a 2. egyenletbe:
$$2-y=1 \implies y=1$$
**Ugyanaz a megoldás: (2,1)**
<br>
1. Mátrixos megoldás<br>
	**1. Egyenletrendszer mátrixos alakban**
		$$
		\begin{cases}
		2x+y=5 \\
		x-y=1
		\end{cases}
		$$
		ezt írjuk át:
		$$\begin{bmatrix}
2&1 \\
1 & -1
\end{bmatrix} * \begin{bmatrix}
x \\
y
\end{bmatrix} =
\begin{bmatrix}
5 \\
1
\end{bmatrix}$$
**2. Cramer-szabály (determinánsos módszer)**
		$$x=\frac{\det(A_{x})}{\det(A)},\; y=\frac{\det{A_{y}}}{\det{A}}$$
	**3. Számoljuk ki**<br>
	**Koefficiensmátrix:**
	$$A=\begin{bmatrix}2&1 \\
1&-1
\end{bmatrix}$$
**Determináns**
$$\det(A)=2(-1)-1\cdot1=-2-1=-3$$
**Most** $A_{x}$:
$$A_{x}=\begin{bmatrix}
5&1 \\
1&-1
\end{bmatrix}$$
$\det{A_{x}} = 5\cdot (-1) - 1\cdot 1 = -5-1=-6$
<br> **Most** $A_{y}$:
$$A_{x}=\begin{bmatrix}2&5 \\
1&1
\end{bmatrix}$$
$\det(A_{y}) = 2\cdot 1 -5\cdot 1 = 2-5=-3$

**Megoldás**
$$
\begin{align}
x=\frac{\det({A_{x}})}{\det{A}}=\frac{-6}{-2}=2 \\ \\

y=\frac{\det({A_{y}})}{\det{A}}=\frac{-3}{-3}=1
\end{align}
$$
<br>

# Gyakorló Feladatok

#### 1. feladat
$$\begin{cases}
x+2y=7 \\
3x-y=5
\end{cases}$$
 **1. Megoldás**:
$$
\begin{align}
-y = 5-3x&& \text{Kifejeztük az y-t}  \\
 \\
y =3x-5&& \text{beszorzunk -1-el} \\
\\
x+2\cdot(3x-5) = 7&& \text{Behelyettesítjük az y-t} \\
 \\
x-10+6x=7&& \text{Felbontottuk a zárójeleket} \\
 \\
7x=17&& \text{Rendeztük az egyenletett, majd összevontunk} \\
 \\
x = \frac{17}{7}&& \text{Ez a végső eredményünk} \\
 \\
3\cdot\left( \frac{17}{7} \right)-y=5&& \text{Behelyettesítjük a kapott x értéket} \\
 \\
\frac{51}{7} - y = 5&& \text{Elvégezzük a szorzást} \\
 \\
-y=5-(\frac{51}{7})&& \text{Átrendeztük az egyenletet} \\
 \\
-y=\frac{35}{7}-\frac{51}{7}&& \text{Összevonunk} \\
 \\
-y=-\frac{16}{7}&& \text{Szorzunk -1-el} \\
 \\
y=\frac{16}{7}&& \text{Eredmény y-ra}
 \\
  \\
\boxed{(x,y) = \left( \frac{17}{7}, \frac{16}{7} \right)}
\end{align}$$

#### 2. feladat
$$\begin{cases}
2x + 3y = 12 \\
4x-3y=6
\end{cases}$$
**2. Megoldás**
$$\begin{align}
2x+4x = 6x,\quad 3y-3y=0,\quad 12+6=18&& \text{Összeadás után csak x marad} \\
 \\
6x=18&& \text{A tisztított egyenletünk} \\
  \\
x = 3&& \text{x értékét meg is kaptuk}
 \\ \\
6+3y=12&& \text{Behelyettesítjük az x-et} \\
 \\
3y =6&& \text{Rendezve és összevonva így néz ki} \\
 \\
y = 2&& \text{Végső eredmény y-ra} \\
  \\
\boxed{(x,y) = (3,2)} 
\end{align}
$$
#### 3. feladat
$$
\begin{cases}
x-2y=-1 \\
3x+y=11
\end{cases}
$$
**3. Megoldás**
$$
\begin{align}
\begin{bmatrix}
1&-2 \\
3&1
\end{bmatrix}*\begin{bmatrix}
x \\
y
\end{bmatrix}&& \text{Felírjuk az egyenletrendszert mátrix alakban} \\
 \\
A = \begin{bmatrix}
1&-2 \\
3&1
\end{bmatrix}&& \text{Ez lesz a koefficiens mátrix} \\
  \\
\vec{b} = \begin{bmatrix}
-1 \\
11
\end{bmatrix}&& \text{Ez lesz az eredmény vektorunk} 
 \\
 \\
\det{A} = 7&& \text{Ez lesz a det(A), azaz van megoldás} \\
 \\
\det({A_{x}}) = \begin{bmatrix}
-1&-2 \\
11&1
\end{bmatrix} \implies (-1) - (-22)= 21&& \text{Ez lesz a }\det{(A_{x})} \\
 \\
x=\frac{\det{(A_{x})}}{\det{(A)}}=\frac{21}{7}=\frac{21}{7}= 3&& \text{Ez lesz az x értéke} \\
 \\
\det (A_{y}) = \begin{bmatrix}
1&-1 \\
3&11
\end{bmatrix} \implies 11-(-3)=14&& \text{Ez lesz a} \det(A_{y}) \\
 \\
y = \frac{\det{(A_{y})}}{\det{(A)}}=\frac{14}{7}=2&& \text{Ez lesz az y értéke} \\
 \\
\boxed{(x,y) = (3,2)}
\end{align}
$$
<br>

#### 4. feladat
$$
\begin{cases}
2x+y-z=8 \\
-3x-y+2z=-11 \\
-2x+y+2z=-3
\end{cases}
$$
**Gaussian Elimináció változók**:
$R_{alsó}\gets R_{alsó}+kR_{pivot}$
$k = -\tfrac{a}{p}$
ahol **p** az 1. oszlopban a pivot és alatta van **a,** amit **szeretnénk lenullázni**

**4. Megoldás**
$$
\begin{align}
A= 
\begin{bmatrix}
2&1&-1 \\
-3&-1&2 \\
-2&1&2
\end{bmatrix}&& \text{Ez lesz a koefficiens mátrixunk} \\
 \\
\vec{b} = \begin{bmatrix}
8 \\
-11 \\
-3
\end{bmatrix}&& \text{Ez lesz az eredmény vektorunk}
 \\
  \\
\begin{aligned}
\det(A) &=
\bigl( 2\cdot(-1)\cdot2
      + 1\cdot2\cdot(-2)
      + (-1)\cdot(-3)\cdot1 \bigr) \\
&\quad -
\bigl( (-1)\cdot(-1)\cdot(-2)
      + 1\cdot(-3)\cdot2
      + 2\cdot2\cdot1 \bigr) = \boxed{-1}
\end{aligned}&& \text{Ez lesz a det(A) nekünk} \\
  \\
\begin{aligned}
A_{x} = \begin{bmatrix}
8&1&-1 \\
-11&-1&2 \\
-3&1&2
\end{bmatrix}\\
&\xrightarrow{R_{2}\to R_{2}+\frac{11}{8}R_{1}}\begin{bmatrix}
8&1&-1 \\
0&\tfrac{3}{8}&\tfrac{5}{8} \\
-3&1&2
\end{bmatrix} \\[10pt]
&\xrightarrow{R_{3}\to R_{3}+\frac{3}{8}R_{1}}\begin{bmatrix}
8&1&-1 \\
0&\tfrac{3}{8}&\tfrac{5}{8} \\
0&\tfrac{11}{8}&\tfrac{13}{8}
\end{bmatrix} \\[10pt]
&\xrightarrow{R_{3}\to R_{3}+(-\frac{11}{3})R_{2}}\begin{bmatrix}
8&1&-1 \\
0&\tfrac{3}{8}&\tfrac{5}{8} \\
0&0&-\tfrac{2}{3}
\end{bmatrix}
\end{aligned}&& \text{háromszög mátrix létrehozása} \\
 \\
\det{(A_{x})}=8\cdot \frac{3}{8}\cdot (-\frac{2}{3})=-2&& A_{x}\text{ determinása -2}
\end{align}
$$