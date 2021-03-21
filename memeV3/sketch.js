var x = 0;
var y = 100;
var s = 100;
var xSpeed = 3;
var ySpeed = 3;
var c;

function setup() {
    createCanvas(640, 360)
    noStroke();
    
    var r = random(255);
    var g = random(255);
    var b = random(255);
    
    c = color(r, g, b);
}

function draw () {
    background(60, 62,64);  

    fill(c);
    rect(x, y, s);

    x += xSpeed
    y += ySpeed

    if (x > width || x < 0) {
        xSpeed *= -1;  
        var r = random(255);
        var g = random(255);
        var b = random(255);   
        c = color(r, g, b);    
    }

    if (y > height || y < 0) {
        ySpeed *= -1;

        var r = random(255);
        var g = random(255);
        var b = random(255);   
        c = color(r, g, b);
    }

}