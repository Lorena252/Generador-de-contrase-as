let password = document.getElementById("password")
const btnCopia =  document.getElementById("btn-copia")
const btnGenerar =  document.getElementById("btn-generar")
const inputDoce = document.getElementById("input-doce")
const inputNueve = document.getElementById("input-nueve")
const inputSeis = document.getElementById("input-seis")
const inputLetras = document.getElementById("input-letras")
const inputSoloNumeros = document.getElementById("input-solo-numeros")
const inputCaracteres = document.getElementById("input-caracteres")
const inputMayusculas = document.getElementById("check-mayuscula")
const inputMinusculas = document.getElementById("check-minuscula")
const inputNumeros = document.getElementById("check-numeros") 
const inputSimbolos = document.getElementById("check-simbolos") 
const opcionSeleccionada = []   
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const minusculas = "abcdefghijklmnopkrstuvwxyz"
const numeros =  "123456789"
const simbolos = "%$^&!#"

inputLetras.addEventListener ("change", (e) =>{
  inputNumeros.disabled = !event.target.cheked;
  inputSimbolos.disabled = !event.target.cheked;
  inputMayusculas.disabled = event.target.cheked;
  inputMinusculas.disabled = event.target.cheked;
}, false);

inputSoloNumeros.addEventListener("change", (e) =>{
inputMayusculas.disabled = !event.target.cheked;
inputMinusculas.disabled = !event.target.cheked;
inputSimbolos.disabled = !event.target.cheked;
inputNumeros.disabled = event.target.cheked;
 }, false);

 inputCaracteres.addEventListener("change", (e) =>{
  if (inputCaracteres.checked)
inputMayusculas.disabled = event.target.cheked;
inputMinusculas.disabled = event.target.cheked;
inputSimbolos.disabled = event.target.cheked;
inputNumeros.disabled = event.target.cheked;
}, false)

inputMayusculas.addEventListener("click",  ()=> {
    if (inputMayusculas.checked) {
       opcionSeleccionada.push(mayusculas) 
    } else{
      opcionSeleccionada.pop(mayusculas)
    }
 })

inputMinusculas.addEventListener("click", () =>{
if (inputMinusculas.checked){
  opcionSeleccionada.push(minusculas)
}else{
  opcionSeleccionada.pop(minusculas)
}
})

inputNumeros.addEventListener("click", () => {
  if (inputNumeros.checked){
    opcionSeleccionada.push( numeros) 
  }
  else{
    opcionSeleccionada.pop(numeros)
  }
})

inputSimbolos.addEventListener("click", () =>{
if (inputSimbolos.checked){
   opcionSeleccionada.push(simbolos) 
}
   else{
    opcionSeleccionada.pop(simbolos)
   }
})


const concatenarOpciones = () =>{
   contraseña= (opcionSeleccionada.join(''))
} 


btnGenerar.addEventListener("click" , () =>{
 concatenarOpciones()
 generarContraseniaFinal(longitud)
     document.getElementById("password").value = clave;
 clave = ""
})

btnCopia.addEventListener("click", (e)=>{
 event.preventDefault();
 password.select();
 document.execCommand("copy");
 password.style.backgroundColor = "yellow" 
} )


let longitud = []
inputDoce.addEventListener("change", ()=>{
 if (inputDoce.checked){
  let numero = 12
 longitud.push(numero)
 }
 else{
  longitud = []
}
})


inputNueve.addEventListener("change", ()=>{
  if (inputNueve.checked){
    let numero = 9
  longitud.push(numero)
  }
  else{
    longitud.pop(numero)
  }
  })


  inputSeis.addEventListener("change", ()=>{
    if (inputSeis.checked){
      let numero = 6
    longitud.push(numero)
    }
    else{
      longitud.pop(numero)
    }
    })


let clave = ""
const generarContraseniaFinal = (longitud) =>{
  for (let x = 0; x < longitud; x++){
let aleatorio =  Math.floor(Math.random() * contraseña.length);
clave+= contraseña.charAt(aleatorio);
  } 
return clave
};
