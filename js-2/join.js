// escribe la función join acá
function join(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
      if (i !== arr.length - 1) {
        result += " ";
      }
    }
    return result;
  }
  

console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""