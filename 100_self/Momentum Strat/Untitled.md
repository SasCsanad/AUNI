$$\begin{tikzpicture}
\begin{axis}[
    axis lines=middle,
    xlabel={$d1$},
    ylabel={$d2$},
    xmin=-3, xmax=3,
    ymin=-3, ymax=3,
    grid=major,
]
% Kvadránsok
\draw[thick, dashed] (axis cs:0,-3) -- (axis cs:0,3);
\draw[thick, dashed] (axis cs:-3,0) -- (axis cs:3,0);

% Feliratok
\node at (axis cs:1.5,1.5) {Trend gyorsul};
\node at (axis cs:1.5,-1.5) {Trend lassul};
\node at (axis cs:-1.5,1.5) {Pullback kifárad};
\node at (axis cs:-1.5,-1.5) {Bear impulzus};
\end{axis}
\end{tikzpicture}$$
