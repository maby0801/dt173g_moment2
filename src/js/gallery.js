// DT173G Webbutveckling III
// Moment 2 - NodeJs & Gulp
// Mattias Bygdeson

'use strict';

// VARIABLES
var thumbnailEl = document.getElementById("gallery");
var imageDisplayWrapperEl = document.getElementById("imageDisplayWrapper");

// EVENT LISTENERS
if(thumbnailEl) {
    thumbnailEl.addEventListener("click", enlargeImage, false);
}

// FUNCTIONS
function enlargeImage(e) {
    // Create HTML markup to display enlarged image
    // Add eventlistener for closing image
    if(e.target.nodeName === "IMG") {
        imageDisplayWrapperEl.innerHTML =   "<div id='imageDisplay'>" +
                                            "<img src='img/" + e.target.id + ".jpg' alt='" + e.target.alt + "' />" +
                                            "<p>" + e.target.alt + " <span><a id='closeImage'>Stäng</a></span></p>" +
                                            "</div>";

        var closeImageEL = document.getElementById("closeImage");
        closeImageEL.addEventListener("click", closeImage, false);
    } 
}

function closeImage() {
    // Close enlarged image
    imageDisplayWrapperEl.innerHTML = "";
}