


let password = document.getElementById("password")
let generarContraseña = document.getElementById("generar-contraseña")
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




let arrayClave6 = ""
let arrayClave9 = ""
let arrayClave12 = ""


const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const minusculas = "abcdefghijklmnopkrstuvwxyz"
const numeros =  123456789 ;
const simbolos =  "%$^&!#"


const opcionSeleccionada = []


const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)




//eventos  de cheked de reglas//

inputLetras.addEventListener ("change", (e) =>{
  inputNumeros.disabled = !event.target.cheked;
  inputSimbolos.disabled = !event.target.cheked;

}, false);


inputSoloNumeros.addEventListener("change", (e) =>{
inputMayusculas.disabled = !event.target.cheked;
inputMinusculas.disabled = !event.target.cheked;
inputSimbolos.disabled = !event.target.cheked;

 }, false);


  inputCaracteres.addEventListener("change", (e) =>{
  if (inputCaracteres.checked)
inputMayusculas.disabled = event.target.cheked;
inputMinusculas.disabled = event.target.cheked;
inputSimbolos.disabled = event.target.cheked;
inputNumeros.disabled = event.target.cheked;
   
}, false)


//inputs caja caracteres que estan chekeados//

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


 // PINTA EL INPUT PASSWORD !!!
 
 const enviarPassword = () =>{
  let texto = opcionSeleccionada
  document.getElementById("password").value=texto;
  return texto
}
//-----------------//

btnGenerar.addEventListener("click" , () =>{
  enviarPassword ()
})


btnCopia.addEventListener("click", (e)=>{
event.preventDefault();
password.select();
document.execCommand("copy");
password.style.backgroundColor = "yellow" 


} )






