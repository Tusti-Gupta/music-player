shutDown = "";
seven = "";
queencard = "";

function preload() {
    shutDown = loadSound("Blackpink - Shut down.mp3");
    seven = loadSound("Seven - jungkook.mp3");
    queencard = loadSound("GIDLE - Queencard.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}