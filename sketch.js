function setup() {
  createCanvas(windowWidth, windowHeight);
	
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
	ellipse(mouseX, mouseY, 40, 40);
}
