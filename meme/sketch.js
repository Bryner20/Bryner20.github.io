var description='Ready'
var desciiption2='To Rock'

var femaleGD;

function preload() {
	femaleGD = loadImage('femaleGD.jpg')
}

function setup() {
	createCanvas(640, 360);
	imageMode('center');
}

function draw() {
	background ('lightpink');

	image(femaleGD,300, 200);

    textSize(15);
    fill('Darkred');
    stroke('black');
    strokeWeight(15);
    textStyle('bold');
    textFont('monospace');
	text('MMP 210', width / 24, height / 10);

    var len = description.length
    var R = map(mouseX, 0, width, 0, len);

    textSize(35);
    text(description.substring(0, R), width / 2.5, height / 11);

    var len = description.length
    var T = map(mouseX, 0, width, 0, len);

    text(desciiption2.substring(0, T), width / 2.8, height / 1.1);


}