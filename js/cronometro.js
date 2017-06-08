var tempo = 0;
var intervalo;

function criaCronometro(seguntos){
    let minutos = 0;
    let horas = 0;

    while(seguntos >= 60){
        if(seguntos >= 60){
            seguntos -= 60;
            minutos += 1;
        }
    }

    while(minutos >= 60){
        if(minutos >= 60){
            minutos -=60;
            horas += 1;
        }
    }
    return formataTempo(seguntos,minutos,horas);
}

function formataTempo(seguntos,minutos,horas){
    if(horas < 10){
        horas = "0" + horas; 
    }

    if(minutos < 10){
        minutos = "0" + minutos;
    }

    if(seguntos < 10){
        seguntos = "0" + seguntos;
    }
    return "" + horas + ":" + minutos + ":" + seguntos;
}

function acrescentaTempo(){
    tempo++;
    document.getElementById("cronometro").innerHTML = criaCronometro(tempo);
}

function inicia(){
    intervalo = setInterval("acrescentaTempo();",1000);

}

function para(){
    clearInterval(intervalo);
}

function zera(){
    para();
    tempo = 0;
    document.getElementById("cronometro").innerHTML = criaCronometro(tempo);
}