//aca falta el import
export const registrarPersona=(persona)=>{
    console.log(persona);
}
//nuevo
export const odtenerPersona=async(persona)=>{
    //recupera la referencia(ruta)
    const ref=collection(db,"personas");
    //recupera una captura de db
    const qSnap=await getDocs(ref);
    let listado=[]
    //recorrer la base de datos y que lo devuelva en un listado
    qSnap.forEach((doc) => {
        //console.log(doc.id);
        console.log(doc.data());
        listado.push({...doc.data(),id:doc.id})
    });
    console.log(listado);
    return listado;
}