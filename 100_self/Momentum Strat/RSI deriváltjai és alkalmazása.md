# RSI deriváltjai mélyen - d1 és d2
### 1. Bevezetés miért kell deriválni?
Az RSI egy **momentum indikátor**: azt méri, hogy a közelmúltban **milyen gyorsan** emelkedett vagy esett az ár.

A probléma: Az **RSI Önmagában lassú** a forduló pontok közelében
Ezért vesszük az **RSI deriváltját** -> megkapjuk a **változás sebességét** és **gyorsulását**

#### Analógia
Képzeljük el, hogy egy autót vezetünk
- Az **RSI** a sebességmérő -> mennyi az aktuális sebesség
- A **d1 (1. Derviáltja az RSI-nek)** -> **gyorsulsz** vagy **lassulsz**
- A **d2 (2. Deriváltja az RSI-nek)** –> a gázpedál változása **átváltasz kanyar előtti fékezésből kigyorsításba**, azaz **előbb tudja a fordulatot jelezni**

### 2. Definíciók 

| Mutató  | Képlet                           | Jelentés                                                 | Dimenzió (Idő) |
| ------- | -------------------------------- | -------------------------------------------------------- | -------------- |
| **RSI** | $RSI_{t} = \frac{100}{1+RS_{t}}$ | A zárt gyertyák relatív emelkédéseinek az aránya         | **Pozíció**    |
| **d1**  | $d1_{t} = RSI_{t} - RSI_{t-1}$   | **Első derivatív**: az RSI változásainak **sebessége**   | **Sebesség**   |
| **d2**  | $d2 = d1_{t} - d1_{t-1}$         | **Második derivált**: a sebesség változásának gyorsulása | **Gyorsulás**  |
#### Intuitív értelmezés
3.1 **d1 - az RSI sebessége**
- Ha **d1 > 0**: RSI **emelkedik** -> a piaci momentum **trendirányba erősödik**
- Ha d1 < 0: RSI **esik** –> A piaci momentum **trend ellen gyengül**
- Ha d1 ~ 0: RSI **stabil** -> momentum átmenetileg kiegyenlített
**A d1 tehát megmondja, hogy a piac rákapcsol vagy elengedi a gázt éppen**
---
3.2 **d2 - Az RSI gyorsulása**
- Ha **d2 > 0**: A **változás gyorsul** -> a trend felpörög, vagy  a pullback kifárad
- Ha **d2** < 0: A **változás lassul**  –> A trend veszít az erejéből, vagy a pullback intenzívebb
- Ha **d2** ~ 0: A Sebesség stabil** -> nincs jelentős gyorsulás, “semleges tér”


| Állapot            | d1  | d2  | Momentum értelmezése                                          |
| ------------------ | --- | --- | ------------------------------------------------------------- |
| Erősödő trend      | > 0 | > 0 | RSI nő, a növekedés gyorsul -> **impulzus**                   |
| Lassuló trend      | > 0 | < 0 | RSI még nő, de **lassul** –> közeledik a tetőzés              |
| Gyorsuló fordulat  | < 0 | > 0 | RSI esett, de a **lassulás kifulladt** -> fordulat készül     |
| Kifulladt fordulat | < 0 | < 0 | RSI esik és a csökkenés gyorsul –> **bear impulzus erősödik** |
| False Breakeout    | >0  | <0  | RSI emelkedik, **gyorsulás viszont hiányzik**                 |

#### Divergenciák
**A)** **Trend kifulladás**
> **Ár új csúcsot/aljat üt**, de **d1** és/vagy **d2 nem követi** 
- **Mi történik?**
	- Az árat ugyan tolják még, de a sebessége **(d1) csökken**, és a **gyorsulás (d2) negatívba fordul**
- **Mit jelez?**
	- A trend ereje **kimerülőben van**, hamarosan **vissza teszt** vagy **fordulat** jöhet
---
**B) Rejtett Divergenciák (Trend folyt.)**
> **Ár alacsonyabb mélypontot csinál** miközben a **d1** és/vagy **d2 magasabb alját generál**
- **Mi történik?**
	-



$$\begin{tikzpicture}
\begin{axis}[
    axis lines=middle,
    xlabel={$t$},
    ylabel={$RSI$},
    grid=major,
    legend pos=north west,
]
\addplot [blue, thick] table {
0 45
1 50
2 55
3 65
4 70
5 72
6 74
7 75
};
\addlegendentry{$RSI(t)$}

\addplot [red, dashed, thick] table {
0  0
1  3
2  5
3  7
4  4
5  1
6 -1
7 -2
};
\addlegendentry{$d1(t)$}

\addplot [green!60!black, dotted, ultra thick] table {
0  0
1  2
2  3
3  5
4 -1
5 -3
6 -4
7 -5
};
\addlegendentry{$d2(t)$}
\end{axis}
\end{tikzpicture}$$
