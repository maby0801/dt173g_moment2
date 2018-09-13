// DT173G Webbutveckling III
// Moment 2 - NodeJs & Gulp
// Mattias Bygdeson

'use strict';

// VARIABLES
var tableScreenResEl = document.getElementById("tableScreenRes");
var tableDateEl = document.getElementById("tableDate");
var tableTimeEl = document.getElementById("tableTime");

// EVENT LISTENERS
window.addEventListener("load", load, false);

// FUNCTIONS
function load() {
    // Display users screen size, todays date and current time in table on load
    var today = new Date();
    var day = today.getDay();
    var dd = today.getDate();
    var mm = today.getMonth();
    var hh = today.getHours();
    var min = today.getMinutes();

    var weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
    var months = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];

    tableDateEl.innerHTML = weekdays[day] + " " + dd + " " + months[mm];
    tableScreenResEl.innerHTML = screen.width + " x " + screen.height;
    tableTimeEl.innerHTML = hh + ":" + min;
}