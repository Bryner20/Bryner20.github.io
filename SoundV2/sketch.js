//sound smaple V2

var r, g, b;
var nani;

function preload(){
	nani = loadSound('NANI.mp3')
	roblox = loadSound('Roblox.mp3')
	yett = loadSound('Yeet.mp3')
	whyU = loadSound('WAYR.mp3')
}

function setup() {
	createCanvas(640, 360);
	r = random(255);
	g = random(255);
	b = random(255);
}

function mousePressed(){
    //click cicrle Nani
    var d = dist(400, 150, mouseX, mouseY);
    if (d < 75){
    	//change the background color
    	r = random(255);
	    g = random(255);
	    b = random(255);
	    nani.play();
    }
    //click circle Roblox
    var d = dist(200, 180, mouseX, mouseY);
    if (d < 50){
    	r = random(255);
	    g = random(255);
	    b = random(255);
	    roblox.play();

    }
    //click circle WAYR
    var d = dist(100, 100, mouseX, mouseY);
    if (d < 50){
    	r = random(255);
	    g = random(255);
	    b = random(255);
	    whyU.play();
	}
	 //click circle Yeet
    var d = dist(575, 250, mouseX, mouseY);
    if (d < 50){
    	r = random(255);
	    g = random(255);
	    b = random(255);
	    yett.play();
	}
}

function draw() {
	background(r, g, b);	

	//circle Nani
	fill('pink');
    var d=dist(400, 150, mouseX, mouseY);
    if (d < 75){
    	fill('darkred');
    }
    circle(400,125,100);

	//circle Roblox
	fill('lightblue');
	var d=dist(200, 200, mouseX, mouseY);
	if (d < 50){
        fill('blue');
	}
    circle(200, 200, 80)

    //circle WAYR
    fill('purple');
    var d=dist(100, 100, mouseX, mouseY);
    if (d < 50){
    	fill('lightgreen');
    } 
    circle(100, 100, 75);

    //circle Yeet
    fill('lightOrange');
    var d=dist(575, 250, mouseX, mouseY);
    if (d < 50){
    	fill('yellow');
    } 
    circle(575, 250, 90);
}

