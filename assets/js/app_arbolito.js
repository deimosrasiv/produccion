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

var tabla = document.getElementById("tabla");
var cuentafila = 0;
db.collection("arbolito").onSnapshot((querySnapshot) => {
    console.log(fechahoy)
    tabla.innerHTML = ``;

    querySnapshot.forEach((doc) => {
        ++cuentafila 
        console.log(`${doc.id} => ${doc.data().producto}`);
        tabla.innerHTML += `
        <tr>
            <td>
                <a href='${doc.data().imagen}'></a>
                <img class="icons-table"   id="image" src='${doc.data().imagen}' >
            </td>
            <td>${doc.data().cantidad}</td>
            <td>${doc.data().hora}</td>
             <td>${doc.data().salida}</td>
            <td><strong>${doc.data().saldo}</strong></td>
        </tr>
      `
    });
    
});


function startTime(){
    today=new Date();
    h=today.getHours();
    m=today.getMinutes();
    s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('reloj').innerHTML=h+":"+m;
    t=setTimeout('startTime()',500);}
    function checkTime(i)
    {if (i<10) {i="0" + i;}return i;}
    window.onload=function(){startTime();
}