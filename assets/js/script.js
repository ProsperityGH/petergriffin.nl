var audio = new Audio("./assets/mp3/laugh.mp3");
var image = document.getElementById("peter");

image.addEventListener("click", function() {
    audio.play();
});

var clickCounter = 0;

image.addEventListener("click", function() {
    clickCounter++;
});

setInterval(function() {
    clickCounter = 0;
}, 1000);

image.addEventListener("click", function() {
    if (clickCounter > 1) {
        for (var i = 0; i < clickCounter; i++) {
            audio.cloneNode().play();
        }
    }
});