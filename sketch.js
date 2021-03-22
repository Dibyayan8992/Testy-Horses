var a = 0
var b = 50
var c = 255
var d = 255

//Global Variables Are Used For Everything
//Local Variables Are Specific To The Paramaters Given To It
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(b,d,a);
	//When There Is One Valie, It's Greyscale
	//When There Are Two, It's Greyscale And Opacity
	//When There Are Three, It's RGB
	//When There Are Four, The Last One Is Opacity
	
	stroke(0);
	strokeWeight(0);
	fill(80);
	//rect(0,300,400,50);
	
	stroke(255);
	strokeWeight(0);
	fill(80);
	rect(a,50,200,20);
	
	stroke(255);
	strokeWeight(0);
	fill(80);
	rect(c,110,200,20);
	a = a+1;
	b = b-1;
	c = c-1;
	d = d-1;
	
	//Boulian Statement Has A true Or false
	if(a >= 255 && b <= 0){
		a = 0;
		c = 300;
		 }
}