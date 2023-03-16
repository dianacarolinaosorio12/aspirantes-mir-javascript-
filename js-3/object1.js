//1
let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]
  };
  
  //2
  console.log(pedro.edad);
  
  //3
  pedro.estatura = 1.8;
  
  //4
  delete pedro.activo;
  
  //5
  for (let key in pedro) {
    console.log(key + ": " + pedro[key]);
  }
  
  //6
  pedro.saluda = function() {
    return "Hola, me llamo " + this.nombre;
  }
  
 //7
  console.log(pedro.saluda());
  