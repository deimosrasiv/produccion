var db = firebase.firestore();
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
var basedatos =document.getElementById("inputProducto").value;
var tabla = document.getElementById("tabla");

db.collection(basedatos).onSnapshot((querySnapshot) => {
    tabla.innerHTML = ``;
    querySnapshot.forEach((doc) => {

        
        tabla.innerHTML += `
            <tr>
                <td>${doc.data().fecha}</td>
                <td>${doc.data().hora}</td>
                <td>${doc.data().cantidad}</td>
                <td></td>
            </tr>
        `
    });
});


function buscartabla(){
    var basedatos =document.getElementById("inputProducto").value;
    var tabla = document.getElementById("tabla");
    //console.log("buscamos la tabla: " + basedatos);

    if (basedatos != "na"){
        console.log("buscamos: " + basedatos);

        db.collection(basedatos).orderBy("fecha", "desc").orderBy("hora", "desc").onSnapshot((querySnapshot) => {
            tabla.innerHTML = ``;

            querySnapshot.forEach((doc) => {

                if (doc.data().tipo == "ingreso"){
                    tabla.innerHTML += `
                    <tr>
                        <td>${doc.data().fecha}</td>
                        <td>${doc.data().hora}</td>
                        <td>${doc.data().cantidad}</td>
                        <td></td>
                        <td>${doc.data().bodega}</td>
                    </tr>
                `
                } else {
                 tabla.innerHTML += `
                    <tr>
                        <td>${doc.data().fecha}</td>
                        <td>${doc.data().hora}</td>
                        <td></td>
                        <td>${doc.data().cantidad}</td>
                        <td>${doc.data().bodega}</td>
                    </tr>
                `   
                }
                
            });

        });
    } else {
        console.log("no ha escogido");
    }
}