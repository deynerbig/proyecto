//obtener persona es lo nuevo 
import{registrarPersona,obtenerPersona} from "./promesas.js";
window.addEventListener("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar)
    //nuevo
   cargarDatos(); 
});
const registrar=()=>{
    //recupero el elemento
    let eNombre=document.getElementById("nombre");
    let eapellido=document.getElementById("apellido");
    let erut=document.getElementById("rut");
    let ecorreo=document.getElementById("correo");
    let eedad=document.getElementById("edad");
    let efecha=document.getElementById("fecha");
    //recupero valor del elemento
    let vNombre=eNombre.value;
    let vapellido=eapellido.value;
    let vrut=erut.value;
    let vcorreo=ecorreo.value;
    let vedad=eedad.value;
    let vfecha=efecha.value;
    //creo un objeto con los datos recuperados
    let objeto={
        nombre:vNombre,
        apellido:vapellido,
        rut:vrut,
        correo:vcorreo,
        edad:vedad,
        fecha:vfecha
    }
    //envio a una funcion que registre 
    console.log(objeto)
    registrarPersona(objeto).then(()=>{
        alert("se registro con exito")
        cargarDatos()
    })
}
//nuevo
const cargarDatos =()=>{
//traer de las promesas todo lo registrado
    obtenerPersona().then((personas)=>{
        console.log("hola")
        console.log(personas)
        //cargarlo en la tabla de html
        let estructura=""
        personas.forEach((p)=>{
            estructura+="<tr>"
            estructura+="<td>"+p.nombre+"</td>"
            estructura+="<td>"+p.apellido+"</td>"
            estructura+="<td>"+p.rut+"</td>"
            estructura+="<td>"+p.correo+"</td>"
            estructura+="<td>"+p.edad+"</td>"
            estructura+="<td>"+p.fecha+"</td>"
            estructura+="<td><button '"+p.id+"'>actualizar</button></td>"
            estructura+="<td><button >eliminar</button></td>"
            estructura+="</tr>"
        });
        document.getElementById("cuerpoTabla").innerHTML=estructura;
    })
//cargarlo en la tabla del html
}