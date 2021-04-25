//PatternV1

function setup(){
    createCanvas(640, 360);
    imageMode('center');
}

function mousePressed() {
    pattern();
}

function pattern() {
    background(55, 59, 58);

    for(let x = random(-200); x < width; x += random(100, 100)) {
        //mountain
        fill(64, 112, 85);
        noStroke();
        let y = random(70, 200);
        let w = random(100, 200);
        triangle(x, height, x + w/1,y , x + w, height);
    }
    for(let x = -55; x < width; x += random(200, 100)) {
        //mountain
        fill(61, 45, 45);
        noStroke();
        let y = random(70, 500);
        triangle(x, height, x + 20,y , x + 100, height);
    }
    //moon
    for(let x = 0; x<width; x+=600) {
        fill('lightyellow');
        noStroke();
        circle(x=110, y=75, 100);
    }
        //moon
    for(let x = 0; x<width; x+=600) {
        fill(217, 165, 117);
        noStroke();
        circle(x=250, y=100, 100);
    }
    //trees
    for(let x=0; x<width; x+=random(1, 100)) {
        fill(75, 54, 54);
        let y=random(50);
        let w=random(4, 10);
        let h=random(50, 100);
        rect(x/1, height - y, w=10, h);

        fill(10, 43, 33); 
        ellipse(x, height - y - h/5, 30, 50);
    }
}