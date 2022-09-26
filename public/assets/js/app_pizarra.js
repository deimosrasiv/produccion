var db = firebase.firestore();
var tabla = document.getElementById("tabla");
const hambur_palacio = parseInt(0);
const hotdog_palacio = parseInt(0);
const papas_palacio = parseInt(0);

db.collection("produccion").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            if (doc.data().producto == "Hamburguesa"){
              document.getElementById("produc_cant_ha").innerHTML = doc.data().cantidad;
              document.getElementById("produc_hora_ha").innerHTML = doc.data().hora;
            }

            if (doc.data().producto == "Hot-Dog"){
              document.getElementById("produc_cant_ho").innerHTML = doc.data().cantidad;
              document.getElementById("produc_hora_ho").innerHTML = doc.data().hora;
            }

            if (doc.data().producto == "Papas"){
              document.getElementById("produc_cant_pa").innerHTML = doc.data().cantidad;
              document.getElementById("produc_hora_pa").innerHTML = doc.data().hora;
            }
        })
})


    db.collection("produccion").onSnapshot((querySnapshot) => {
        console.log(hambur_palacio);
        
        querySnapshot.forEach((doc) => {
           
            
        });
    });

    db.collection("palacio").onSnapshot((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {

            if (doc.data().producto == "Hamburguesa"){
               document.getElementById("palacio_in_ha").innerHTML=doc.data().cantidad
            }
            
            if (doc.data().producto == "Hot-Dog"){
               document.getElementById("palacio_in_ho").innerHTML=doc.data().cantidad 
            }

            if (doc.data().producto == "Papas"){
               document.getElementById("palacio_in_pa").innerHTML=doc.data().cantidad 
            }            
        });
    });


    db.collection("arbolito").onSnapshot((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {

            if (doc.data().producto == "Hamburguesa"){
               document.getElementById("arbolito_in_ha").innerHTML=doc.data().cantidad
            }
            
            if (doc.data().producto == "Hot-Dog"){
               document.getElementById("arbolito_in_ho").innerHTML=doc.data().cantidad 
            }

            if (doc.data().producto == "Papas"){
               document.getElementById("arbolito_in_pa").innerHTML=doc.data().cantidad 
            }            
        });
    });


    db.collection("daytona").onSnapshot((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {

            if (doc.data().producto == "Hamburguesa"){
               document.getElementById("daytona_in_ha").innerHTML=doc.data().cantidad
            }
            
            if (doc.data().producto == "Hot-Dog"){
               document.getElementById("daytona_in_ho").innerHTML=doc.data().cantidad 
            }

            if (doc.data().producto == "Papas"){
               document.getElementById("daytona_in_pa").innerHTML=doc.data().cantidad 
            }            
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