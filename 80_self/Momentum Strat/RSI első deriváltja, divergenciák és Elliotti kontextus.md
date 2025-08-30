### **1. Az RSI bemutatása**
A **Relative Strength Index** (RSI) egy elterjedt **momentum-oszcillátor**, melyet **Welles Wilder** vezetett be.
Az RSI célja a felívelő és lejtő **árfolyammozgások arányának** **kvantifikálása** egy adott perióduson belül.
#### **1.1 RSI definíciója**
Az RSI klasszikus formulája:

$$RSI_{t} = 100 - \frac{100}{1+RS_{t}}$$

ahol:
$$RS_{t} = \frac{U_{t,n}}{D_{t,n}}$$
- $U_{t,n}$​: az elmúlt $n$ periódus pozitív záróár-változásainak exponenciális vagy simított átlaga,
- $D_{t,n}$​: az elmúlt $n$ periódus negatív záróár-változásainak exponenciális vagy simított átlaga.

### **1.2. Klasszikus interpretáció**

- **RSI > 70** → túlvett piac,
- **RSI < 30** → túladott piac,
- **RSI ≈ 50** → momentumsemleges tartomány.
A probléma: a klasszikus RSI **lassan reagál** és **zajos** lehet, különösen gyorsan változó trendeknél.  
Ezért az **első derivált (RSI’)** bevezetése finomítja a momentumérzékelésünket.


### **2. Az RSI deriváltja**

#### **2.1 RSI definíciója**
Az RSI **első deriváltja** a változás **sebességét** méri:
$$RSI'_{norm,t} = \frac{RSI_{t} - RSI_{t-1}}{ATR_{t,n}}$$
Ahol az $ATR_{t,n}$ az átlagos valós mozgástartomány.
****
#### **2.2 Divergenciák $RSI$ és $RSI'$ alapján**
A divergenciák az ár és a momentum közötti **eltérést** jelzik.
Az $RSI'$ itt kulcsfontosságú, mert **képes korábban** megmutatni a lendületváltást.

**Bearish Divergencia**
- Az ár magasabb csúcsot ér el:
	$P_{t_{2}} > P_{t_{1}}$
- Az RSI **alacsonyabb** csúcsot képez:
	$RSI_{t2} < RSI_{t1}$
- A RSI' a második csúcsnál negatívba vált:
	$RSI'_{t2} < 0$

$$\begin{align}
\boxed{P_{t2} > P_{t_{1}} \quad \land \quad   RSI_{t2} < RSI_{t1} \quad \land \quad RSI'_{t2} < 0}
\end{align}$$
	Ez jelzi a **fáradó momentum** és a korrekció esélyét