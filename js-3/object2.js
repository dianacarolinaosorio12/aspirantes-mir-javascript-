//1
const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
    profesion: "Ingeniero",
  };
  //2
  console.log(persona);
  
   //3
  function presentacion(persona) {
    return `Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad} años y vivo en ${persona.ciudad}.`;
  }
  
  //4
  const mensaje = presentacion(persona);
  
  //5
  console.log(mensaje);
  
  //6
  persona.hobbies = ["leer", "jugar al fútbol", "viajar"];
  
 //7
  console.log(persona.hobbies);
  
  //8
  for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
  }
  