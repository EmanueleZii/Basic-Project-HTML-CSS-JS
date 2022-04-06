const display = document.getElementById('clock');

function updateTime(){
  const data = new Date();

  const ora = formatTime(data.getHours());
  const minuti = formatTime(data.getMinutes());
  const secondi = formatTime(data.getSeconds());

  display.innerText = `${ora} : ${minuti} : ${secondi} `
}

function formatTime(time){
    if(time<10) return '0' + time;

    return time;
}

setInterval(updateTime,1000);

