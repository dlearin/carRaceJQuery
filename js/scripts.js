//JavaScript Document


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
    let velocidad1 = Math.floor((Math.random() * 5000) + 1);
    let velocidad2 = Math.floor((Math.random() * 5000) + 1);
    let velocidad3 = Math.floor((Math.random() * 5000) + 1);
    let velocidad4 = Math.floor((Math.random() * 5000) + 1);
    let velocidad5 = Math.floor((Math.random() * 5000) + 1);
    let velocidad6 = Math.floor((Math.random() * 5000) + 1);
    let velocidad7 = Math.floor((Math.random() * 5000) + 1);
    let velocidad8 = Math.floor((Math.random() * 5000) + 1);
    let velocidad9 = Math.floor((Math.random() * 5000) + 1);
    let isComplete = false;
    let Place = 'First';

/**
 * Creo un array nuevo para almacenar los datos obtenidos en cuanto a velocidades
 * de esta forma tendré en un array los objetos Coche con sus valores de velocidad
 * para posteriormente poder mostrarlos en los resultados de la carrera.
 */

    let cochePosicion = [
        {name: "Coche1", tiempo: velocidad1},
        {name: "Coche2", tiempo: velocidad2},
        {name: "Coche3", tiempo: velocidad3},
        {name: "Coche4", tiempo: velocidad4},
        {name: "Coche5", tiempo: velocidad5},
        {name: "Coche6", tiempo: velocidad6},
        {name: "Coche7", tiempo: velocidad7},
        {name: "Coche8", tiempo: velocidad8},
        {name: "Coche9", tiempo: velocidad9}
    ]   


    /**
     * Por medio del metodo splice igual la longitud del array cochePosicion
     * al de nParticipantes para así solo tener los datos de los coches
     * que realmente han participado y no de todos
     */

    let valor=nParticipantes.length;
    cochePosicion.splice(valor,cochePosicion.length)
    console.log(cochePosicion);
    
    cochePosicion.sort(function(a,b) {return a.tiempo - b.tiempo});

      
    console.log(cochePosicion);



    $('#Car1').animate({
        left: RaceTrackWidth
    }, velocidad1, function() {
        CheckIfComplete();
        $('#RaceInfo1 span').text('Finished in ' + Place + ' place & Clocked in at ' + velocidad1 + ' ms');
    });

    $('#Car2').animate({
        left: RaceTrackWidth
    }, velocidad2, function() {
        CheckIfComplete();
        $('#RaceInfo2 span').text('Finished in ' + Place + ' place & Clocked in at ' + velocidad2 + ' ms');
    });

  $('#Car3').animate({
        left: RaceTrackWidth
    }, velocidad3, function() {
        CheckIfComplete();
        $('#RaceInfo3 span').text('Finished in ' + Place + ' place & Clocked in at ' + velocidad3 + ' ms');
    });

    $('#Car4').animate({
        left: RaceTrackWidth
    }, velocidad4, function() {
        CheckIfComplete();
        $('#RaceInfo4 span').text('Finished in ' + Place + ' place & Clocked in at ' + velocidad3 + ' ms');
    });

    $('#Car5').animate({
        left: RaceTrackWidth
    }, velocidad5, function() {
        CheckIfComplete();
        $('#RaceInfo3 span').text('Finished in ' + Place + ' place & Clocked in at ' + velocidad3 + ' ms');
    });

    $('#Car6').animate({
        left: RaceTrackWidth
    }, velocidad6, function() {
        CheckIfComplete();
        $('#RaceInfo3 span').text('Finished in ' + Place + ' place & Clocked in at ' + velocidad3 + ' ms');
    });

    $('#Car7').animate({
        left: RaceTrackWidth
    }, velocidad7, function() {
        CheckIfComplete();
        $('#RaceInfo3 span').text('Finished in ' + Place + ' place & Clocked in at ' + velocidad3 + ' ms');
    });

    $('#Car8').animate({
        left: RaceTrackWidth
    }, velocidad8, function() {
        CheckIfComplete();
        $('#RaceInfo3 span').text('Finished in ' + Place + ' place & Clocked in at ' + velocidad3 + ' ms');
    });

    $('#Car9').animate({
        left: RaceTrackWidth
    }, velocidad9, function() {
        CheckIfComplete();
        $('#RaceInfo3 span').text('Finished in ' + Place + ' place & Clocked in at ' + velocidad3 + ' ms');
    });

  
    $('#Reset').click(function() {
        $('.Car').css('left', '0');
        $('.RaceInfo span').text("");
        nParticipantes=[];
    });

});