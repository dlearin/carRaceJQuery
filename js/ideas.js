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


function crearArray(){
    let cochePosicion = [
        {name: "Coche1", tiempo: RaceTime1},
        {name: "Coche2", tiempo: RaceTime2},
        {name: "Coche3", tiempo: RaceTime1},
        {name: "Coche4", tiempo: RaceTime1},
        {name: "Coche5", tiempo: RaceTime1},
        {name: "Coche6", tiempo: RaceTime1},
        {name: "Coche7", tiempo: RaceTime1},
        {name: "Coche8", tiempo: RaceTime1},
        {name: "Coche9", tiempo: RaceTime1}
    ]   
}

$('#Go').click(function() {
    /*function CheckIfComplete() {
        if (isComplete == false) {
            isComplete == true;
        } else {
            place = 'Second';
        }
    }*/
    let CarWidth = $('#Car1').width();
    let RaceTrackWidth = $(window).width() - CarWidth;
    let isComplete = false;
    let Place = 'First';
    
    let cochePosicion = [];

    for (i=0;i<nParticipantes.length;i++){

    cochePosicion[i] = {
    name: "Coche"+i, 
    tiempo: Math.floor((Math.random() * 5000) + 1), 
    existe:true,
    }
}

for (i=0;i<cochePosicion.length;i++){
    $('#Car'+i+1).animate({
        left: RaceTrackWidth
        }, cochePosicion[i].tiempo, function() {
            
            $('#RaceInfo1 span').text('Finished in ' + Place + ' place & Clocked in at ' +cochePosicion[0].tiempo + ' ms');
        });
}

    console.log(nParticipantes.length);
    console.log(typeof nParticipantes.length);
    console.log(cochePosicion.length);
    console.log(cochePosicion);

    

/**Estos son las instrucciones para los objetos anteriores, creará la animacion de 
 * los coches en base a la velocidad del coche asignado en el array anterior, por medio
 * de la la dirección del indice n del array y la llada al atributo .tiempo de cada objeto
 * He creado la condición if(existe) para que, en caso de que se haya creado dicho indice
 * en el array (el jugador haya seleccionado ese número de coches), este inicie su carrera
 * En caso contrario, el coche no iniciará la carrera.
 * 
 * **/
 

   
/*


    $('#Car2').animate({
        left: RaceTrackWidth
    }, cochePosicion[1].tiempo, function() {
        /*CheckIfComplete();
        $('#RaceInfo2 span').text('Finished in ' +  + ' place & Clocked in at '  +cochePosicion[1].tiempo+ ' ms');
    });



    $('#Car3').animate({
        left: RaceTrackWidth
    }, cochePosicion[2].tiempo, function() {
        /*CheckIfComplete();
            $('#RaceInfo3 span').text('Finished in ' +  + ' place & Clocked in at '  +cochePosicion[2].tiempo+ ' ms');
  });


/*
if (cochePosicion[2].existe == true){

    $('#Car4').animate({
        left: RaceTrackWidth
    }, cochePosicion[3].tiempo, function() {
        if (existe == true)
        $('#RaceInfo4 span').text('Finished in ' +  + ' place & Clocked in at ' +  + ' ms');
    });
}
if (cochePosicion[3].existe == true){

    $('#Car5').animate({
        left: RaceTrackWidth
    }, cochePosicion[4].tiempo, function() {
        if (existe == true)
        $('#RaceInfo3 span').text('Finished in ' +  + ' place & Clocked in at ' +  + ' ms');
    });}
/*
    $('#Car6').animate({
        left: RaceTrackWidth
    }, cochePosicion[5].tiempo, function() {
        if (existe == true)
{        $('#RaceInfo3 span').text('Finished in ' +  + ' place & Clocked in at ' +  + ' ms');
}    });

    $('#Car7').animate({
        left: RaceTrackWidth
    }, cochePosicion[6].tiempo, function() {
        if (existe == true)
{        $('#RaceInfo3 span').text('Finished in ' +  + ' place & Clocked in at ' +  + ' ms');
}    });

    $('#Car8').animate({
        left: RaceTrackWidth
    }, cochePosicion[7].tiempo, function() {
        if (existe == true)
{        $('#RaceInfo3 span').text('Finished in ' +  + ' place & Clocked in at ' +  + ' ms');
}    });

    $('#Car9').animate({
        left: RaceTrackWidth
    }, cochePosicion[8].tiempo, function() {
        if (existe == true)
{        $('#RaceInfo3 span').text('Finished in ' + Place + ' place & Clocked in at ' + RaceTime3 + ' ms');
}    });

  
/**
 * Boton de reset para reiniciar la posición de los coches. He añadido también
 * el reinicio del array nParticipantes para poder volver a usarlo en la creación
 * del array cochePosición. De lo contrario, se guardará la selección de la
 * anterior partida.
 */

    $('#Reset').click(function() {
        $('.Car').css('left', '0');
        $('.RaceInfo span').text("");
        nParticipantes = [];
    });
    

});