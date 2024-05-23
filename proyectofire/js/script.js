import{registrarPersona} from "./promesas.js";
window.addEventListener("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar)});
const registrar=()=>{
    //recupero el elemento
    let eNombre=document.getElementById("nombre");
    //recupero valor del elemento
    let vNombre=eNombre.value;
    //creo un objeto con los datos recuperados
    let objeto={nombre:vNombre}
    //envio a una funcion que registre 
    console.log(objeto)
    registrarPersona(objeto)
}