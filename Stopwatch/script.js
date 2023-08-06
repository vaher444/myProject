var stTime; // keeping track of the start time
var interval; // keeping track of the interval
var OnPausedTime = 0; // keeping track of the elapsed time while stopped

function startWatch() {
  if (!interval) {
    stTime = new Date().getTime() - OnPausedTime; // getting the starting time by subtracting the elapsed paused time from the current time
    interval = setInterval(updateStopWatch, 1000); // update every second
  }
}

function stopWatch() {
  clearInterval(interval); // stop the interval
  OnPausedTime = new Date().getTime() - stTime; // calculate elapsed paused time
  interval = null; // reset the interval variable
}

function resetWatch() {
  stopWatch(); // stop the interval
  OnPausedTime = 0; // reset the elapsed paused time variable
  document.getElementById("stopwatch").innerHTML = "00:00:00"; // reset the display
}
  
function updateStopWatch() {
  var currentTime = new Date().getTime(); // get current time in milliseconds
  var elapsedTime = currentTime - stTime; // calculate elapsed time in milliseconds
  var seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
  var minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
  var hours = Math.floor(elapsedTime / 1000 / 60 / 60); // calculate hours
  var displayTime = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds); // format display time
  document.getElementById("stopwatch").innerHTML = displayTime; // update the display
}
  
function addZero(number) {
  // adding a leading zero if the number is less than 10
  return (number < 10 ? "0" : "") + number;
}
  
  