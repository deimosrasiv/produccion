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

 document.getElementById("iconostock").style.display="none";


//***  INGRESO DE PRODUCTOS  ****


db.collection("produccion").where("producto", "==", "Hamburguesa").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data().cantidad);
        var cantidad_Hamburguesas = parseInt(doc.data().cantidad);
        document.getElementById("Hamburguesa").innerHTML = cantidad_Hamburguesas;
        document.getElementById("cantidadenproduccionHa").innerHTML = cantidad_Hamburguesas;
        document.getElementById("hamburguesa_stock").innerHTML = doc.data().cantidad;
    })
})

db.collection("produccion").where("producto", "==", "Hot-Dog").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data().cantidad);
        var cantidad_Hot_Dog = parseInt(doc.data().cantidad);
        document.getElementById("Hot-Dog").innerHTML = cantidad_Hot_Dog;
        document.getElementById("cantidadenproduccionHo").innerHTML = cantidad_Hot_Dog;
        document.getElementById("hotdog_stock").innerHTML = doc.data().cantidad;
    })
})

db.collection("produccion").where("producto", "==", "Papas").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data().cantidad);
        var cantidad_Papas = parseInt(doc.data().cantidad);
        document.getElementById("Papas").innerHTML = cantidad_Papas;
        document.getElementById("cantidadenproduccionPa").innerHTML = cantidad_Papas;
        document.getElementById("papas_stock").innerHTML = doc.data().cantidad;
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
    var horainyection = hora1 + ":" + minutos1 + ":" + segundos1
    var cantidad = document.getElementById("cantidad").value;
    var basedatos = document.getElementById("inputproducto").value;

    console.log(basedatos);
    console.log(fechahoy);
    console.log(cantidad);
    console.log("inyectamos a: " + basedatos);
    document.getElementById("cantidadaingresar").innerHTML = cantidad;

    db.collection(basedatos).add({
        cantidad: cantidad,
        fecha: fechahoy,
        hora: horainyection,
        tipo: "ingreso",
        bodega: "Producción"
    })
    console.log("fin");
    cargaproduccion();
}



function cargaproduccion() {

    var Hamburguesa = parseInt(document.getElementById("Hamburguesa").innerHTML);
    var Hot_Dog = parseInt(document.getElementById("Hot-Dog").innerHTML);
    var Papas = parseInt(document.getElementById("Papas").innerHTML);
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var basedatos = document.getElementById("inputproducto").value;
    var sumatoriaHa = parseInt(0);
    var sumatoriaHo = parseInt(0);
    var sumatoriaPa = parseInt(0);



    if (basedatos == "Hamburguesa") {
        console.log("Hamburguesa");
        sumatoriaHa = cantidad + Hamburguesa;
        console.log(sumatoriaHa);
        document.getElementById("Hamburguesa").innerHTML = sumatoriaHa;
        inyecta();
    }

    if (basedatos == "Hot-Dog") {
        console.log("Hot-Dog");
        sumatoriaHo = cantidad + Hot_Dog;
        console.log(sumatoriaHo);
        document.getElementById("Hot-Dog").innerHTML = sumatoriaHo;
        inyecta();
    }

    if (basedatos == "Papas") {
        console.log("Papas");
        sumatoriaPa = cantidad + Papas;
        console.log(sumatoriaPa);
        document.getElementById("Papas").innerHTML = sumatoriaPa;
        inyecta();
    }
}


function inyecta() {
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
    var horainyection = hora1 + ":" + minutos1 + ":" + segundos1;
    var fechahoy = `${year}/` + month1 + "/" + day1;
    var basedatos = document.getElementById("inputproducto").value;

    var Hamburguesa = parseInt(document.getElementById("Hamburguesa").innerHTML);
    var Hot_Dog = parseInt(document.getElementById("Hot-Dog").innerHTML);
    var Papas = parseInt(document.getElementById("Papas").innerHTML);
    var washingtonRef = db.collection("produccion").doc(basedatos);

    if (basedatos == "Hamburguesa") {
        console.log("Hamburguesa :" + Hamburguesa);

        return washingtonRef.update({
            cantidad: Hamburguesa,
            hora: horainyection
        });

        console.log(Hamburguesa);
    }

    if (basedatos == "Hot-Dog") {
        console.log("Hot-Dog");

        return washingtonRef.update({
            cantidad: Hot_Dog,
            hora: horainyection
        });

        console.log(sumatoria);
    }

    if (basedatos == "Papas") {
        console.log("Papas");

        return washingtonRef.update({
            cantidad: Papas,
            hora: horainyection
        });

        console.log(sumatoria);
    }




}


//***** FIN DE INGRESO DE PRODUCTOS ***


document.getElementById("inputbodega").addEventListener("focusout", buscasaldodebodega);

function buscasaldodebodega() {

    var bodega = document.getElementById("inputbodega").value;

    document.getElementById("bodega").innerHTML = bodega;

    db.collection(bodega).where("producto", "==", "Hamburguesa").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data().cantidad);
            document.getElementById("cantidadenbodegaHa").innerHTML = doc.data().cantidad;
           
        })
    })

    db.collection(bodega).where("producto", "==", "Hot-Dog").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data().cantidad);
            document.getElementById("cantidadenbodegaHo").innerHTML = doc.data().cantidad;
            
        })
    })

    db.collection(bodega).where("producto", "==", "Papas").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data().cantidad);
            document.getElementById("cantidadenbodegaPa").innerHTML = doc.data().cantidad;
           
        })
    })
    var iconos_stock = document.getElementById("iconostock");
    iconos_stock.style.display = "inline";
}




//***** DESPACHO DE PRODUCTOS ******

function revisacantidad(){
    if (document.getElementById("cantidadespacho").value == 0){
        console.log("cantidad en 0");
    } else {
        guardadatos();   
    }
}




function revisacantidad2(){
    if (document.getElementById("cantidadespacho").value == 0){
        console.log("cantidad en 0");
    } else {
        guardadatos2();   
    }
}

function guardadatos2() {

    var cantidad = parseInt(document.getElementById("cantidadespacho").value);
    var basedatos = document.getElementById("inputproductodespacho").value;
    var bodega = document.getElementById("inputbodega").value;

    var Hamburguesa = parseInt(document.getElementById("cantidadenbodegaHa").innerHTML);
    var Hot_Dog = parseInt(document.getElementById("cantidadenbodegaHo").innerHTML);
    var Papas = parseInt(document.getElementById("cantidadenbodegaPa").innerHTML);

    var Hamburguesa_pro = parseInt(document.getElementById("cantidadenproduccionHa").innerHTML);
    var Hot_Dog_pro = parseInt(document.getElementById("cantidadenproduccionHo").innerHTML);
    var Papas_pro = parseInt(document.getElementById("cantidadenproduccionPa").innerHTML);



    console.log(basedatos);

    console.log(cantidad);
    console.log(bodega);
    console.log("inyectamos a: " + basedatos);
    document.getElementById("cantidadtraspaso").innerHTML = cantidad;



    if (basedatos == "Hamburguesa") {

        if (cantidad > Hamburguesa_pro) {

            console.log("saldo insuficiente");

        } else {
            var restaproduccionHa = Hamburguesa_pro - cantidad;
            var suma_a_bodegaHa = Hamburguesa + cantidad;

            console.log("produccion Queda con: ", restaproduccionHa);
            console.log("Bodega suma a: ", suma_a_bodegaHa);

            document.getElementById("restoproduccionHa").innerHTML = restaproduccionHa;
            document.getElementById("sumacantidadenbodegaHa").innerHTML =suma_a_bodegaHa;
            actualiza_tabla_bodega();

        }
    }

    if (basedatos == "Hot-Dog") {

        if (cantidad > Hot_Dog_pro) {

            console.log("saldo insuficiente");

        } else {
            var restaproduccionHo = Hot_Dog_pro - cantidad;
            var suma_a_bodegaHo = Hot_Dog + cantidad;

            console.log("produccion Queda con: ", restaproduccionHo);
            console.log("Bodega suma a: ", suma_a_bodegaHo);

            document.getElementById("restoproduccionHo").innerHTML = restaproduccionHo;
            document.getElementById("sumacantidadenbodegaHo").innerHTML =suma_a_bodegaHo;
            actualiza_tabla_bodega();

        }
    }

    if (basedatos == "Papas") {

        if (cantidad > Papas_pro) {

            console.log("saldo insuficiente");

        } else {
            var restaproduccionPa = Papas_pro - cantidad;
            var suma_a_bodegaPa = Papas + cantidad;

            console.log("produccion Queda con: ", restaproduccionPa);
            console.log("Bodega suma a: ", suma_a_bodegaPa);

            document.getElementById("restoproduccionPa").innerHTML = restaproduccionPa;
            document.getElementById("sumacantidadenbodegaPa").innerHTML =suma_a_bodegaPa;
            
            actualiza_tabla_bodega();

        }
    }

    actualiza_tabla_produc();
}





function actualiza_tabla_bodega() {
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
    var horainyection = hora1 + ":" + minutos1 + ":" + segundos1


    var cantidad = parseInt(document.getElementById("cantidadespacho").value);
    var basedatos = document.getElementById("inputproductodespacho").value;
    var bodega = document.getElementById("inputbodega").value;

    var Hamburguesa = parseInt(document.getElementById("cantidadenbodegaHa").innerHTML);
    var Hot_Dog = parseInt(document.getElementById("cantidadenbodegaHo").innerHTML);
    var Papas = parseInt(document.getElementById("cantidadenbodegaPa").innerHTML);


    var washingtonRef_bodega = db.collection(bodega).doc(basedatos);

    if (basedatos == "Hamburguesa") {

        console.log("actualizamos palacio");
        return washingtonRef_bodega.update({
            cantidad: document.getElementById("sumacantidadenbodegaHa").innerHTML,
            hora: horainyection,
            bodega: bodega
        });

    } 

    if (basedatos == "Hot-Dog") {

        console.log("actualizamos palacio");
        return washingtonRef_bodega.update({
            cantidad: document.getElementById("sumacantidadenbodegaHo").innerHTML,
            hora: horainyection,
            bodega: bodega
        });

    } 

    if (basedatos == "Papas") {

        console.log("actualizamos palacio");
        return washingtonRef_bodega.update({
            cantidad: document.getElementById("sumacantidadenbodegaPa").innerHTML,
             hora: horainyection,
            bodega: bodega
        });

    } 
}



function actualiza_tabla_produc() {
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
    var horainyection = hora1 + ":" + minutos1 + ":" + segundos1
    var cantidadtraspaso = document.getElementById("cantidadtraspaso").innerHTML;
    var basedatos = document.getElementById("inputproductodespacho").value;
    var restaproduccionHa = document.getElementById("restoproduccionHa").innerHTML;
    var restaproduccionHo = document.getElementById("restoproduccionHo").innerHTML;
    var restaproduccionPa = document.getElementById("restoproduccionPa").innerHTML;
    var bodega = document.getElementById("inputbodega").value;


    
    var washingtonRef_produc = db.collection("produccion").doc(basedatos);

    
    if (basedatos == "Hamburguesa"){
        console.log("produccion quedara con: ", restaproduccionHa);
        console.log("actualizamos produccion");

        db.collection(basedatos).add({
            cantidad: cantidadtraspaso,
            fecha: fechahoy,
            hora: horainyection,
            tipo: "salida",
            bodega: bodega
        })

        return washingtonRef_produc.update({
            cantidad: restaproduccionHa,
            hora: horainyection
        });
       
    }






    if (basedatos == "Hot-Dog"){
        console.log("produccion quedara con: ", restaproduccionHo);
        console.log("actualizamos produccion");

        db.collection(basedatos).add({
            cantidad: cantidadtraspaso,
            fecha: fechahoy,
            hora: horainyection,
            tipo: "salida",
            bodega: bodega
        })

        return washingtonRef_produc.update({
            cantidad: restaproduccionHo,
            hora: horainyection
        });
       
    }




    if (basedatos == "Papas"){
        console.log("produccion quedara con: ", restaproduccionPa);
        console.log("actualizamos produccion");

        db.collection(basedatos).add({
            cantidad: cantidadtraspaso,
            fecha: fechahoy,
            hora: horainyection,
            tipo: "salida",
            bodega: bodega
        })

        return washingtonRef_produc.update({
            cantidad: restaproduccionPa,
            hora: horainyection
        });
        
    }
    

}


