// DT173G Webbutveckling III
// Moment 2 - NodeJs & Gulp
// Mattias Bygdeson

'use strict';

// VARIABLES
var thumbnailEl = document.getElementById("gallery");
var imageDisplay = document.getElementById("imageDisplay");

// EVENT LISTENERS
thumbnailEl.addEventListener("click", enlargeImage, false);

// FUNCTIONS
function enlargeImage(e) {
    if(e.target.nodeName === "IMG") {
        console.log(e.target.id);
        console.log("Du klickade just på en bild");
        // Visa en bild
    } 
}