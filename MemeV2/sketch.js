function preload() {
	BZeon = loadImage('BZeon.jpg');
}
function setup() {
    createCanvas(740, 460);
    imageMode('center');
}

function draw() {
    background('lightblue');

    textSize(60);
    fill('Black');
    stroke(255);
    text('Click',width/2.5,height/2);

if (mouseIsPressed){
        background('blue');
    
    image(BZeon,400, 600)

    let x=width/2.5;
    let h=height/5;
    
    fill('lightblue')
    rect(x/1.9, h/4, h);
    //rect1

    rect(x/0.9, h/4, h);
     //rect2

    rect(x/0.6, h/4, h);
    //rect3

    //text 
    textSize(60);
    fill('black');
    stroke(255);
    text('H',width/4.1,height/5);

    textSize(60);
    fill('black');
    stroke(255);
    text('E',width/2.1,height/5);

    textSize(60);
    fill('black');
    stroke(255);
    text('Y',width/1.43,height/5);
    
    }
}