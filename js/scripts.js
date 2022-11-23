//JavaScript Document

/*
let seleccionNParticipantes = document.querySelector('#coches');
let nParticipantes = ['Coche1','Coche2', 'Coche3','Coche4','Coche5','Coche6','Coche7','Coche8','Coche9' ];
let arraySeleccion = [];
//addeventlistener para recibir el numero seleccionado de participantes

seleccionNParticipantes.addEventListener('change', (e)=>{

    let n = (e.target.value);

    console.log(n);

    arrayParticipantes(n);



})

//funcion para seleccionar array en funcion del numero de participates

function arrayParticipantes(numeroParticipantes){

    
    console.log(numeroParticipantes);

    let borrar;

    let seleccion = parseInt(numeroParticipantes) ;

    console.log(seleccion);

    switch(seleccion){
        case 1:
        arraySeleccion = nParticipantes;        
        borrar=arraySeleccion.splice(1);
        console.log(arraySeleccion);
        break;
        case 2:
        arraySeleccion = nParticipantes;        
        borrar=arraySeleccion.splice(2);
        console.log(arraySeleccion);
        break;
        case 3:
        break;
        case 4:
        break;
        case 5:
        break;
        case 6:
        break;
        case 7:
        break;
        case 8:
        break;
        case 9:
        seleccionNParticipantes;
        break;
    }



    /*
    if (numeroParticipantes == 1){
        let borrar=nParticipantes.splice(1);
        console.log(nParticipantes);
    } else if (numeroParticipantes == 2){
        let borrar=nParticipantes.splice(2);
        console.log(nParticipantes);
    }else if (numeroParticipantes == 3){
        let borrar=nParticipantes.splice(3);
        console.log(nParticipantes);
    }else if (numeroParticipantes == 4){
        let borrar=nParticipantes.splice(4);
        console.log(nParticipantes);
    }else if (numeroParticipantes == 5){
        let borrar=nParticipantes.splice(5);
        console.log(nParticipantes);
    }else if (numeroParticipantes == 6){
        let borrar=nParticipantes.splice(6);
        console.log(nParticipantes);
    }else if (numeroParticipantes == 7){
        let borrar=nParticipantes.splice(7);
        console.log(nParticipantes);
    }else if (numeroParticipantes == 8){
        nParticipantes.pop()
        console.log(nParticipantes);
    }else if (numeroParticipantes == 9){
        console.log(nParticipantes);
    }*/


let seleccionNParticipantes = document.querySelector('#coches');


let nParticipantes = [];

//craemos un addevent para recibir el numero de participantes seleccionados de la lista

seleccionNParticipantes.addEventListener('change', (e)=>{

    let pistaCarrera = document.querySelector('#RaceTrack');

    pistaCarrera.replaceChildren();

    let n = parseInt(e.target.value);


    //por medio de un bucle for dotamos a cada index del array de un valor (comenzando dicho valor desde 1)

   for (i=0; i<n; i++){

    nParticipantes[i] = i+1;
    const crearCoche = document.createElement('img')
    crearCoche.setAttribute('width','4%');
    crearCoche.setAttribute('id', 'Car'+ nParticipantes[i]);
    crearCoche.setAttribute('class','Car');
    crearCoche.setAttribute('src','./img/car'+nParticipantes[i]+'.png');
    pistaCarrera.appendChild(crearCoche);

   }
  
})




$('#Go').click(function() {
    function CheckIfComplete() {
        if (isComplete == false) {
            isComplete == true;
        } else {
            place = 'Second';
        }
    }
    let CarWidth = $('#Car1').width();
    let RaceTrackWidth = $(window).width() - CarWidth;
    let RaceTime1 = Math.floor((Math.random() * 5000) + 1);
    let RaceTime2 = Math.floor((Math.random() * 5000) + 1);
    let RaceTime3 = Math.floor((Math.random() * 5000) + 1);
    let RaceTime4 = Math.floor((Math.random() * 5000) + 1);
    let RaceTime5 = Math.floor((Math.random() * 5000) + 1);
    let RaceTime6 = Math.floor((Math.random() * 5000) + 1);
    let RaceTime7 = Math.floor((Math.random() * 5000) + 1);
    let RaceTime8 = Math.floor((Math.random() * 5000) + 1);
    let RaceTime9 = Math.floor((Math.random() * 5000) + 1);
    let isComplete = false;
    let Place = 'First';

    $('#Car1').animate({
        left: RaceTrackWidth
    }, RaceTime1, function() {
        CheckIfComplete();
        $('#RaceInfo1 span').text('Finished in ' + Place + ' place & Clocked in at ' + RaceTime1 + ' ms');
    });

    $('#Car2').animate({
        left: RaceTrackWidth
    }, RaceTime2, function() {
        CheckIfComplete();
        $('#RaceInfo2 span').text('Finished in ' + Place + ' place & Clocked in at ' + RaceTime2 + ' ms');
    });

  $('#Car3').animate({
        left: RaceTrackWidth
    }, RaceTime3, function() {
        CheckIfComplete();
        $('#RaceInfo3 span').text('Finished in ' + Place + ' place & Clocked in at ' + RaceTime3 + ' ms');
    });

    $('#Car4').animate({
        left: RaceTrackWidth
    }, RaceTime4, function() {
        CheckIfComplete();
        $('#RaceInfo4 span').text('Finished in ' + Place + ' place & Clocked in at ' + RaceTime3 + ' ms');
    });

    $('#Car5').animate({
        left: RaceTrackWidth
    }, RaceTime5, function() {
        CheckIfComplete();
        $('#RaceInfo3 span').text('Finished in ' + Place + ' place & Clocked in at ' + RaceTime3 + ' ms');
    });

    $('#Car6').animate({
        left: RaceTrackWidth
    }, RaceTime6, function() {
        CheckIfComplete();
        $('#RaceInfo3 span').text('Finished in ' + Place + ' place & Clocked in at ' + RaceTime3 + ' ms');
    });

    $('#Car7').animate({
        left: RaceTrackWidth
    }, RaceTime7, function() {
        CheckIfComplete();
        $('#RaceInfo3 span').text('Finished in ' + Place + ' place & Clocked in at ' + RaceTime3 + ' ms');
    });

    $('#Car8').animate({
        left: RaceTrackWidth
    }, RaceTime8, function() {
        CheckIfComplete();
        $('#RaceInfo3 span').text('Finished in ' + Place + ' place & Clocked in at ' + RaceTime3 + ' ms');
    });

    $('#Car9').animate({
        left: RaceTrackWidth
    }, RaceTime9, function() {
        CheckIfComplete();
        $('#RaceInfo3 span').text('Finished in ' + Place + ' place & Clocked in at ' + RaceTime3 + ' ms');
    });

  
    $('#Reset').click(function() {
        $('.Car').css('left', '0');
        $('.RaceInfo span').text("");
    });

});