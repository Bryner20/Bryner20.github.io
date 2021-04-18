//PatternV1

function setup() {
    createCanvas(600, 400);
    pattern();
}

function pattern() {
    background('black');
    
    let w=random(40, 60);
    let h=w;
    let horizon=random(height/2, height-w);

    for (let x=0; x<= width +w; x+= w) { //colums
        for (let y=0; y<= height; y+= h) { //rows
            
            let r, g, b;
            if (y<horizon) {
                r=random(220);
                g=random(20);
                b=random(50);
            }else{
                r=random(128);
                g=random(0);
                b=random(128);
            }       

            fill(r, g, b, 139);
            noStroke();
            
            ellipse(
                x+ random(-20, 20),
                y+ random(-20, 10),
                w+ random(50),
                h+ random(50)
            );

            square(x+ random(-20, 20),
                y+ random(-20, 10),
                w+ random(50),
                h+ random(50)
            );

        }
    }
}