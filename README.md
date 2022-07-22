# N-Queens-Puzzle
A quien corresponda:

Dentro del siguiente folder encontrara 3 archivos, el programa para resolver el "N queen puzzle" fue Javascript y para darle visibilidad al tablero
se uso HTML y CSS, por ende solo se tiene que ejecutar el archivo "Interfaz.html" para poder visualizar el programa, mientras que para visualizar el codigo
solo se tenda que abrir el archivo "Codigo.js"

El programa pedira el tamaño de tablero al ejecutarse, solo colocar un numero, 8, 9, 10, etc. inmediatamente desplegara un tablero con la cuadricula solicitada
y en ella apareceran las distintas posiciones que las reinas ocuparan, asi mismo habran varias celdas de colores demostrando que ninguna reina es amenaza para otra.

El programa funciona escogiendo una casilla al azar de la primera linea, en base a ella se colorean las columnas y diagonales pertenecientes a esa reina para que asi
mediante un ciclo ir rrecorriendo todas las casillas de la siguiente fila y escoger una en la que no es amenaza para la previa reina y asi sucesivamente con las reinas
posteriores, si se desea buscar otra solucion, añadi un boton para recargar la pagina.

NOTA IMPORTANTE: Ya que no hay una solucion en especifico, es decir siempre dara una nueva cada que se cargue la pagina, debido a que la primer casilla siempre sera escogida al azar
                 habra ocaciones en las que el programa no pueda determinar un espacio para todas las reinas por lo que habra veces en las que se llenaran una o dos filas donde no
                 sera posible colocar una reina sin ser amenaza para las previas, por eso a veces por ej en matriculas de 8x8 habran 6 o 7 reinas, en 9x9 habran 7 u 8 reinas
                 y asi sucecivamente,  claro que esto no pasa siempre y habra muchas veces en donde todas la reinas podran ocupar lugar, todo dependera de la solucion aportada.

Dentro de la carpeta habran una cuantas imagenes de cuadriculas mientras se hacian las pruebas pertinentes.
