let pianoKeys = new Set('ASDFGHJ');

document.addEventListener("keydown", function (e) {
    if (pianoKeys.has(e.key.toUpperCase())) {
        document.getElementById(e.key.toUpperCase()).style.background = "lightgray";
        new Audio("assets/" + e.key.toUpperCase() + ".mp3").play();
    }
})

document.addEventListener("keyup", function (e) {
    if (pianoKeys.has(e.key.toUpperCase())) {
        document.getElementById(e.key.toUpperCase()).style.background = "white";
    }
})