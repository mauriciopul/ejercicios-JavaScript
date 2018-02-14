/*
Objeto automovil
- Color
- placa
- modelo
- número de puertas
* mostrarDatos
 -Devuelve los datos del automovil

llamar a la funcion mostrarDatos

 crear un array de 12 automoviles
 con la funcion filter
filtro de los automóviles que tengan 4 puertas
filtro de los automóviles que tengan 3 puertas

recorrer el array de automóviles y con la funcion map recorrer y los que 
tengan 3 puertas se cambian por 4 puertas
mostrar
*/
function automovil (){
    this.color = ""; 
    this.placa = ""; 
    this.modelo = "";
    this.numeroPuertas = "";


    this.mostrarDatos = function(){
        var resultado = "El automovil "+ this.color + " con placas " + this.placa + " y modelo "+ this.modelo+
        " tiene "+this.numeroPuertas + " Puertas"
        return resultado
    }
}

var auto = new automovil();
auto.color = "Blanco";
auto.placa = "asd765";
auto.modelo = "1990";
auto.numeroPuertas = "4";


console.log(auto.mostrarDatos())