//1
let receta = {};

//2
receta.nombre = "Sandwich";

//3
receta.ingredientes = [];

//4
receta.ingredientes.push({ nombre: "Pan", cantidad: 2 });

//5
receta.ingredientes.push({ nombre: "Queso", cantidad: 1 });

//6
console.log(receta.ingredientes[0].nombre);

//7
let totalCantidad = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
  totalCantidad += receta.ingredientes[i].cantidad;
}

console.log("La cantidad total de ingredientes es: " + totalCantidad);
