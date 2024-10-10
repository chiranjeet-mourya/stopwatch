var timer = document.getElementById("timer");
var [hours, minutes, seconds] = [0, 0, 0];
var indicators = null;

function mywatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  var h = hours < 10 ? "0" + hours : hours;
  var m = minutes < 10 ? "0" + minutes : minutes;
  var s = seconds < 10 ? "0" + seconds : seconds;

  timer.innerHTML = h + ":" + m + ":" + s;
}

function start() {
  indicators = setInterval(mywatch, 1000);
}

function stopwatch() {
  clearInterval(indicators);
}

function reset() {
  clearInterval(indicators);
  timer.innerHTML = "00:00:00";

  [hours, minutes.seconds] = [0, 0, 0];
}
