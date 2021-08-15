var cadena1 = "Bienvenidos";
var cadena2 = " a GP audio car y electromecanica";
var resultadoCadenas = cadena1 + cadena2;
console.log(resultadoCadenas);
alert(resultadoCadenas);
//Agregando condicionales
var nombre = prompt("ingrese su nombre");
var edadMayor =18;
var edad = parseInt(prompt("ingrese su edad"));
if(edad>=edadMayor){
    alert("podes comprar en la tienda oneline");
}else{
    alert("No podes comprar en la tienda oneline");
}
console.log(nombre + "tiene una edad" + edad);
alert("usted " + nombre + " de " + edad + " años, se encuentra navegando en nuestra web");

//funcion para saber si hay stock en tienda
 function stockProductos(stock){
    if(stock<=0){
        alert("no hay stock disponible")
    }else{
        stock--;
        alert("Gracias por su compra" + nombre);
        console.log("stock actualizado" + stock);
    }
}

function comprarProductos (stockLucesLed, stockEstereo, stockParlantes){
    alert( nombre + "ingrese su compra")
    let ventaProducto = prompt("ingrese el producto: LucesLed-Estereo- Parlantes");
    ventaProducto=ventaProducto.toUpperCase();

    switch(ventaProducto){
        case "LucesLed":
            console.log("Selecciono comprar LucesLed");
            stockProductos (stockLucesLed);
            break;
        case "Estereo":
            console.log("Selecciono comprar estereos");
            stockProductos(stockEstereo);
            break;
        case "Parlantes":
            console.log("Selecciono comprar Parlantes");
            stockProductos(stockParlantes);
            break;
        default:
            console.log("El producto seleccionado no existe");
    }

}

//cantidad de stock
let stockLucesLed =5;
let stockEstereo =15;
let stockParlantes =10;
let tienda;
let maxtienda=25;
//stock en tienda
tienda=(stockLucesLed + stockParlantes + stockEstereo);
console.log("El stock disponible en tien es " + tienda);

let tipoDeUsuario=prompt("Hola usted es mayorita? si/no");
let tipoDeUsuario=tipoDeUsuario.toUpperCase();

if(tipoDeUsuario == "si"){
    for(i=0; tienda <=maxtienda; i++){
        let cantIngresada = parseInt(prompt("ingrese cantidad"));
        let lugarenTienda = tienda + cantIngresada;
        if(lugarenTienda<=25){
            tienda=tienda+ cantIngresada;
            console.log("El stock de la tiensa es: " + tienda);
        }else{
            alert("No hay stock en tienda");
            let stockDisponible = (maxtienda-tienda)
            alert("solo tiente " + stockDisponible + " stock disponible");
            break;
        }
    }
    console.log( "el stock disponible " + tienda);
}else{
    alert("gracias por su compra");
}


