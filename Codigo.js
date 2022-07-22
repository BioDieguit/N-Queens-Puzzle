const reinasiguiente =(reinas, w, color) =>{
  let cont=0;
    while(document.querySelector(`[numero="${reinas}"]`).style.background){
        reinas= Math.floor(Math.random() * tamaño) + ((tamaño*w)+1);
        cont+=1;
        if(cont>30){
            return
        }
    }

let columna=reinas;
let diagonalA=reinas;
let diagonalD=reinas;
document.querySelector(`[numero="${reinas}"]`).style.background="gray";
document.querySelector(`[numero="${reinas}"]`).textContent=`REINA No. ${w+1}, Posicion ${document.querySelector(`[numero="${reinas}"]`).getAttribute("numero")}`;
document.querySelector(`[numero="${reinas}"]`).style.color="white";


for(i=1; i<=tamaño-(w+1); i++){
    columna+=tamaño;
    document.querySelector(`[numero="${columna}"]`).style.background=color;
}

for(i=1; i<=reinas-(tamaño*w+1); i++){
    try{
    diagonalA+=tamaño-1;
    document.querySelector(`[numero="${diagonalA}"]`).style.background=color;
    } catch(e){
       console.log("Solo una excepcion de coloreado");
    }
}

for(i=1; i<=tamaño*(w+1)-reinas; i++){
    try{
    diagonalD+=tamaño+1;
    document.querySelector(`[numero="${diagonalD}"]`).style.background=color;
    }catch(e){
        console.log("Solo un error de coloreado")
    }
}

}
///////////////////////////////////////////colores//////////////////////////////////////////
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
//////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////// ////Grilla///////////////////////////
let container = document.querySelector(".grid-container"); //<-----------------------------------Aqui empieza
let tamaño = parseInt(prompt("Inserte el tamaño del tablero"));
console.log("Page path is: " + window.location.pathname);
container.style.gridTemplateColumns=`repeat(${tamaño},1fr)`;
container.style.gridTemplateRows=`repeat(${tamaño},1fr)`;


for(i=1; i<=(tamaño*tamaño); i++){
    let casilla = document.createElement("DIV");
    casilla.setAttribute("numero", i);
    casilla.classList.add("casilla");
    casilla.textContent=i;
    container.appendChild(casilla);
}
////////////////////////////////Reinas Posiciones/////////////////////////////////////

for(let i=0; i<=tamaño-1; i++){    //<---------------------------------------------------------Aqui continua
    let color = random_rgba();
    let azar=Math.floor(Math.random() * tamaño) + ((tamaño*i)+1);
    reinasiguiente(azar, i, color)
}

document.querySelector(".reload").addEventListener('click', (e) => { 
    location.reload();
});












