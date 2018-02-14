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


var automoviles = [
	{color:"amarillo", placa:"asd435", modelo:"2007",numeroPuertas:"3"},
	{color:"plateado", placa:"mnh235", modelo:"2090",numeroPuertas:"4"},
	{color:"gris", placa:"oiu843", modelo:"1900",numeroPuertas:"5"},
	{color:"Rojo Oscuro", placa:"sdr475", modelo:"1906",numeroPuertas:"3"},
	{color:"magenta", placa:"xdr323", modelo:"1940",numeroPuertas:"4"},
	{color:"fofo", placa:"cgt980", modelo:"1997",numeroPuertas:"2"},
	{color:"negro", placa:"sds332", modelo:"2009",numeroPuertas:"6"},
	{color:"fucsia", placa:"llo999", modelo:"2019",numeroPuertas:"4"},
	{color:"violeta", placa:"scr454", modelo:"2010",numeroPuertas:"3"},
	{color:"naranja", placa:"hhy309", modelo:"1990",numeroPuertas:"6"},
	{color:"rojo", placa:"rrp332", modelo:"1999",numeroPuertas:"4"},
	{color:"verde", placa:"ffg555", modelo:"1989",numeroPuertas:"8"}
]

var cuatroPuertas = automoviles.filter(function(item){
    return item.numeroPuertas == 4;
})
console.log(cuatroPuertas);

var tresPuertas = automoviles.filter(function(item){
    return item.numeroPuertas == 3;
})
console.log(tresPuertas);

console.log("--------------------------------------------------------------------")

var cambioPuertas = automoviles.map(function(item,index,array){
    if (item.numeroPuertas==3){
        item.numeroPuertas=4;
        return item;
    }
    return item;
})
var cuatroPuertas = automoviles.filter(function(item){
    return item.numeroPuertas == 4;
})
console.log(cuatroPuertas);
console.log("--------------------------------------------------------------------")
// console.log(cambioPuertas)