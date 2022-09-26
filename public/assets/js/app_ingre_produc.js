
console.log("conectado");
var db = firebase.firestore();


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
} 


//***  INGRESO DE PRODUCTOS  ****


db.collection("produccion").where("producto", "==", "Hamburguesa").onSnapshot((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
            console.log(doc.data().cantidad);
            var cantidad_Hamburguesas =parseInt(doc.data().cantidad);
            document.getElementById("Hamburguesa").innerHTML=cantidad_Hamburguesas;
        })    
    }) 

    db.collection("produccion").where("producto", "==", "Hot-Dog").onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                console.log(doc.data().cantidad);
                var cantidad_Hot_Dog =parseInt(doc.data().cantidad);
                document.getElementById("Hot-Dog").innerHTML=cantidad_Hot_Dog;
            })    
        }) 

    db.collection("produccion").where("producto", "==", "Papas").onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                console.log(doc.data().cantidad);
                var cantidad_Papas =parseInt(doc.data().cantidad);
                document.getElementById("Papas").innerHTML=cantidad_Papas;
            })    
        }) 




function guardadatos() {
   
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    if (hora < 10) {
        hora1 = `0${hora}`;
    } else {
        hora1 = `${hora}`;
    }

    if (minutos < 10) {
        minutos1 = `0${minutos}`;
    } else {
        minutos1 = `${minutos}`;
    }

    if (segundos < 10) {
        segundos1 = `0${segundos}`;
    } else {
        segundos1 = `${segundos}`;
    }

    if (month < 10) {
        var month1 = `0${month}`;
    } else {
        var month1 = `${month}`;
    }

    if (day < 10) {
        var day1 = `0${day}`;
    } else {
        var day1 = `${day}`;
    }
    var fechahoy = `${year}/` + month1 + "/" + day1;
    var horainyection = hora1 + ":" + minutos1 +":"+ segundos1
    var cantidad =document.getElementById("cantidad").value;
    var basedatos =document.getElementById("inputproducto").value;

    console.log(basedatos);
    console.log(fechahoy);
    console.log(cantidad);  
    console.log("inyectamos a: "+basedatos);  
    document.getElementById("cantidadaingresar").innerHTML=cantidad;
    
    db.collection(basedatos).add({
        cantidad: cantidad,
        fecha: fechahoy,
        hora: horainyection,
        tipo: "ingreso"
    })
    console.log("fin");
    cargaproduccion();
}

 

function cargaproduccion(){
     
    var Hamburguesa = parseInt(document.getElementById("Hamburguesa").innerHTML);
    var Hot_Dog = parseInt(document.getElementById("Hot-Dog").innerHTML);
    var Papas = parseInt(document.getElementById("Papas").innerHTML);
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var basedatos = document.getElementById("inputproducto").value;
    var sumatoriaHa = parseInt(0);
    var sumatoriaHo = parseInt(0);
    var sumatoriaPa = parseInt(0);


    
    if (basedatos == "Hamburguesa" ){
        console.log("Hamburguesa");
        sumatoriaHa = cantidad + Hamburguesa;
        console.log(sumatoriaHa);
        document.getElementById("Hamburguesa").innerHTML=sumatoriaHa;
        inyecta();
    } 
    
    if (basedatos == "Hot-Dog"){
        console.log("Hot-Dog");
        sumatoriaHo = cantidad + Hot_Dog;
        console.log(sumatoriaHo);  
        document.getElementById("Hot-Dog").innerHTML=sumatoriaHo;
        inyecta();
    }

    if (basedatos == "Papas"){
        console.log("Papas");
        sumatoriaPa = cantidad + Papas;
        console.log(sumatoriaPa);
        document.getElementById("Papas").innerHTML=sumatoriaPa;     
        inyecta();
    }
}


function inyecta(){
     let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    if (hora < 10) {
       var hora1 = `0${hora}`;
    } else {
       var hora1 = `${hora}`;
    }

    if (minutos < 10) {
       var minutos1 = `0${minutos}`;
    } else {
       var minutos1 = `${minutos}`;
    }

    if (segundos < 10) {
       var segundos1 = `0${segundos}`;
    } else {
       var segundos1 = `${segundos}`;
    }

    if (month < 10) {
        var month1 = `0${month}`;
    } else {
        var month1 = `${month}`;
    }

    if (day < 10) {
        var day1 = `0${day}`;
    } else {
        var day1 = `${day}`;
    }
    var horainyection = hora1 + ":" + minutos1 + ":"+ segundos1;
    var fechahoy = `${year}/` + month1 + "/" + day1;
    var basedatos = document.getElementById("inputproducto").value;

    var Hamburguesa = parseInt(document.getElementById("Hamburguesa").innerHTML);
    var Hot_Dog = parseInt(document.getElementById("Hot-Dog").innerHTML);
    var Papas = parseInt(document.getElementById("Papas").innerHTML);
    var washingtonRef = db.collection("produccion").doc(basedatos);

    if (basedatos == "Hamburguesa" ){
        console.log("Hamburguesa :" + Hamburguesa);
        
        return washingtonRef.update({
            cantidad: Hamburguesa,
            hora:horainyection
        });

        console.log(Hamburguesa);
    } 
    
    if (basedatos == "Hot-Dog"){
        console.log("Hot-Dog");
        
        return washingtonRef.update({
            cantidad: Hot_Dog,
            hora:horainyection
        });
        
        console.log(sumatoria);  
    }

    if (basedatos == "Papas"){
        console.log("Papas");
        
        return washingtonRef.update({
            cantidad: Papas,
            hora:horainyection
        });
        
        console.log(sumatoria);     
    }

    
       

}


//***** FIN DE INGRESO DE PRODUCTOS ***



//***** DESPACHO DE PRODUCTOS ******



function revisasaldo(){
console.log("estamos dentro");
//var horainyection = hora1 + ":" + minutos1 + ":"+ segundos1;
    var cantidad =document.getElementById("cantidadespacho").value;
    var basedatos =document.getElementById("inputproductodespacho").value;
    var bodega =document.getElementById("inputbodega").value;


console.log(basedatos);
    db.collection("produccion").onSnapshot((querySnapshot) => {
    
        querySnapshot.forEach((doc) => {
            //console.log(doc.data().producto);        

            if (doc.data().producto != basedatos){

            } else {

                if(cantidad > doc.data().cantidad){
                    console.log("no tiene saldo suficiente");
                } else {

                var resultado = doc.data().cantidad -cantidad

                console.log(doc.data().cantidad);
                console.log(cantidad);
                console.log(resultado);
                document.getElementById("resultado").innerHTML = resultado;
                document.getElementById("cantidadtraspaso").innerHTML = cantidad;
                document.getElementById("bodega").innerHTML = bodega;
                document.getElementById("producto").innerHTML = basedatos;
                    console.log("pasa");
                    enviar();
                }

            }
        });
    });
}



function enviar(){
     let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    if (hora < 10) {
       var hora1 = `0${hora}`;
    } else {
       var hora1 = `${hora}`;
    }

    if (minutos < 10) {
       var minutos1 = `0${minutos}`;
    } else {
       var minutos1 = `${minutos}`;
    }

    if (segundos < 10) {
       var segundos1 = `0${segundos}`;
    } else {
       var segundos1 = `${segundos}`;
    }

    if (month < 10) {
        var month1 = `0${month}`;
    } else {
        var month1 = `${month}`;
    }

    if (day < 10) {
        var day1 = `0${day}`;
    } else {
        var day1 = `${day}`;
    }
    var horainyection = hora1 + ":" + minutos1 + ":"+ segundos1;
    var fechahoy = `${year}/` + month1 + "/" + day1;
    var resultado = document.getElementById("resultado").innerHTML;
    var cantidad = document.getElementById("cantidadtraspaso").innerHTML;
    var bodega = document.getElementById("bodega").innerHTML;
    var basedatos = document.getElementById("producto").innerHTML;
    var washingtonRef = db.collection("produccion").doc(basedatos);


    //* AGREGAMOS EL PRODUCTO EN LA TARJA DEL PRODUCTO **
    db.collection(basedatos).add({
        cantidad: cantidad,
        fecha: fechahoy,
        hora: horainyection,
        tipo: "salida"
    })

    // ACTUALIZAMOS Y REBAJAMOS LA CANTIDAD DEL PRODUCTO EN PRODUCCION 
    if (basedatos == "Hamburguesa" ){
        console.log("Hamburguesa :" + cantidad);
        
        return washingtonRef.update({
            cantidad: resultado,
            hora:horainyection
        });

        console.log(resultado);
    } 
    
    if (basedatos == "Hot-Dog"){
        console.log("Hot-Dog");
        
        return washingtonRef.update({
            cantidad: resultado,
            hora:horainyection
        });
        
        console.log(resultado);  
    }

    if (basedatos == "Papas"){
        console.log("Papas");
        
        return washingtonRef.update({
            cantidad: resultado,
            hora:horainyection
        });
        
        console.log(resultado);     
    }

}


function carga(){
    
}