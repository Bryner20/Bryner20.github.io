
var x=500;
var y=200;

var lefteyeX= 400;
var righteyeX= 340;
var righteyeY= 340;
var lefteyeY= 400

function setup() {
	createCanvas(740, 460);
}
function draw() {
	background(' lightblue');
    x=mouseX;
    y=mouseY;
    //face
    fill(540, 283, 127);
	ellipse(x-133, y-45, 195, 195);
    //eyes
    fill('red');   
	circle(x-160, y-50, 30);
	fill(0);
	circle(x-110, y-50, 30);

	rect(x-125, y+30, 45, 55, 25, 5, 25, 20);
	rect(x-185, y+30, 45, 55, 5, 25, 25, 20);
	rect(x-190, y-155, 120, 50, 5, 55, 30, 20);

	rect(x-150, y+30, 35, 55, 75, 105, 10, 10);
    
	line(x-135, y+20, x-115, y+10);
	line(x-230, y-50, x-40, y-50);

}