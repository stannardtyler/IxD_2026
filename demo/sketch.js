function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('test');
   background(220);
}

function draw() {
 

  ellipse(mouseX, mouseY, 20);
}