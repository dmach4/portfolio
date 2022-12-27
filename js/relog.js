function relogio(){
  var tempo = new Date(),
  horas = tempo.getHours(),
  minutos = tempo.getMinutes(),
  segundos = tempo.getSeconds(),
  milesimo = tempo.getMilliseconds();

  document.querySelectorAll('#relogio')[0].innerHTML
  = aparecer(horas) + ":"
  + aparecer(minutos) + ":"
  + aparecer(segundos);

  function aparecer(substituir) {
     if(substituir <= 10){
     substituir = '0' + substituir
     }
     return substituir;
    }
}
setInterval(relogio, 1000);