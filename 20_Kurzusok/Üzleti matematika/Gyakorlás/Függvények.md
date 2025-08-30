
#függvény 
#### Értékkészlet

Adott az $f: A \mapsto B$. A függvény értékkészlete azoknak az elemeknek a halmaza a $B$ halmazban, amelyek hozzá vannak rendelve valamely $A$ halmaz béli elemekhez.

Az értékkészlet jele $R_{f}$ vagy **É.K**


### Értelmezési tartomány

Egy kifejezési értelmezési tartományán azt a legbővebb halmazt értjük, ahol értelmezve van az.
Függvény esetén azokat a szerencsés $x$-eket, amelyekhez a függvény hozzárendel egy $y$ számot,  a függvény értelmezési tartományának nevezzük

**A következő szabályokat érdemes megjegyezni**
$\sqrt[paros]{ \text{ez itt} \ge 0 } \quad \sqrt[paratlan]{ \text{ez itt bármi} } \quad \log(\text{ez itt} > 0)\quad \text{tört nevező} \ne 0$ 

pl.: $f(x) = \frac{4x}{(x-3)^{4}}\mapsto R_{f} = \mathbb{R} \ \backslash \ \{-3\}$ mivel a nevező nem lehet nulla $(x \ne 3)$
****
### Függvények ábrázolása
#### Függvénytranszformációk

**Belső függvénytranszformáció:** $f(x+a)$, ez úgy működik, hogy az $x$ tengely mentén tolja el a
függvény grafikonját.
> $f(x) = \underbrace{(x-3)^{2}}_{x=3}$  
> Ez lesz a függvény csúcsa

**Külső függvénytranszformáció:** $f(x)+a$, ez pedig az  $y$ tengelyen tolja el a függvényt

**Függvény szorzása számmal:** $a\cdot f(x)$, ilyenkor megnyújtjuk a függvényt az $y$ szerint

**Függvény változójának szorzása egy számmal**: $f(a\cdot x)$, ilyenkor az $x$ tengely szerint nyújtjuk  a függvényt

****
### Monotonitás, konvexitás, szélsőértékek, értékkészlet

#### Függvény monotonitása
Az $f(x)$ függvényt egy $]a,b[$ intervallumon monoton növekedőnek mondunk, ha bármely $x_{1}, x_{2}\in\ ]a,b[$ esetén, ha $x_{1} < x_{2}$ akkor $f(x_{1}) < f(x_{2})$

Szigorúan monoton növekedő, ha bármely $x_{1}, x_{2}\in\ ]a,b[$ esetén, ha $x_{1}<x_{2}$, akkor $f(x_{1}) < f(x_{2})$

Az $f(x)$ függvényt egy $]a,b[$ intervallumon monoton csökkenőnek mondunk, ha bármely $x_{1}, x_{2}\in\ ]a,b[$ esetén, ha $x_{1}<x_{2}$, akkor$f(x_{1}) \ge \ f(x_{2})$

Szigorúan monoton csökkenő, ha bármely $x_{1}, x_{2}\in\ ]a,b[$ esetén, ha $x_{1} < x_{2}$, akkor $f(x_{1}) > f(x_{2})$

#### Függvény Szélsőértéke
Függvény szélsőértékén a maximumát, illetve a minimumát értjük.
Részletesebben:
- Az $f(x)$ függvényeknek az $x_{0}\in\ D_{f}$ pontjában (globális) maximuma van, ha minden $x \in D_{f}$ esetén $f(x) \le f(x_{0})$
- Az $f(x)$ függvényeknek az $x_{0}\in\ D_{f}$ pontjában (globális) minimuma van, ha minden $x \in D_{f}$ esetén $f(x) \ge f(x_{0})$
- Az $f(x)$ függvényeknek az $x_{0}\in\ D_{f}$ pontjában (lokális) maximuma van, ha létezik olyan nem nulla környezete, hogy ott ő a maximum.
- Az $f(x)$ függvényeknek az $x_{0}\in\ D_{f}$ pontjában (lokális) minimuma van, ha létezik olyan nem nulla környezete, hogy ott ő a minimum.

#### Függvény konvexitása

Konkávnak nevezzük a függvény azon a szakaszon, ahol "szomorú hangulatban" van, vagy precízebben ha a szakaszon a függvény bármely két pontját összekötve a függvény a két ponton összekötő egyenes felett halad.

Konvexnek nevezzük a függvényt azon a szakaszon, ahol "vidám hangulatban van", vagy precízebben ha a szakaszon a függvényt bármely két pontját összekötve a függvényt a két pontot összekötő egyenes alatt halad


### Másodfokú függvény ábrázolása

$f(x) = x^2-6x+7$
