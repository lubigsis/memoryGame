//--------------------------------------------------variables-----------------------------
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let mostrarMovimientos = document.getElementById('movimientosJS');

let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros = numeros.sort(() => { 
    return Math.random() -0.5}); //----Generación de n° aleatorios.
   // console.log(numeros);

   //-------------------------------------------------Función ppal------------------------
   function destapar(id){  //cuando el user destapa 2 tarjetas, éstas se muestran, y si son =, se quedan destapadas.
    tarjetasDestapadas++;
   console.log(tarjetasDestapadas);

   if (tarjetasDestapadas == 1){
    tarjeta1 = document.getElementById(id); //p/q' muestre el primer n°
    primerResultado = numeros[id]; //para poder comparlo luego con la 2da tarjeta.
    tarjeta1.innerHTML = primerResultado; //asocio los 16 btn del HTML a los 16 elementos q contiene el array numeros[]

//deshabilito botón p/ q el contador de tarjetas no siga aumentando y q no pueda presionar dos veces la misma opción.
    tarjeta1.disabled = true;

   }else if(tarjetasDestapadas ==2){
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = segundoResultado;

        tarjeta2.disabled = true;

//---------------------------------------incremento de movimientos (cada vez q' se destapan 2 tarjetas, x eso va en la segunda tarjeta)------------------------------
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
   }
}


