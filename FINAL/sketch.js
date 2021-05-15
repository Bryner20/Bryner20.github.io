//sound smaple V1

var gundamAlert;
var bgMusic

function preload(){
	completeG = loadImage('WingGundamZero.jpg');
	gundamUnit = loadImage('Iner.jpg');
	gundamAlert = loadSound('GundamW.mp3');	
}

function setup(){
	createCanvas(800, 460);
	imageMode('center');
}

function draw() {
	image(gundamUnit, 400, 300, 800, 800);
	textSize(90);
    fill('Black');
    stroke(255);
    text('Click to see my final',width/2.5,height/2);
	
	if (gundamAlert.isPlaying()) {
		image(completeG, 400, 300, 800, 800);

	}
}
function mousePressed(){
	gundamAlert.play();
}