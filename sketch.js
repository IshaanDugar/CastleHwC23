function setup() {
  createCanvas(1200,800);
}

function draw() {
  background(255,255,255);  

  //foundation
  triangle(200, 100, 100, 200, 300, 200);
  triangle(800, 100, 700, 200, 900, 200);
  triangle(500, 100, 300, 200, 700, 200);
  rect(150, 200, 100, 400);
  rect(250, 250, 500, 350);
  rect(750, 200, 100, 400);
  rect(375, 200, 250, 50);

  //detailing
  rect(80, 100, 20, 500);
  rect(900, 100, 20, 500);
  rect(450, 450, 100, 150);
  ellipse(90, 80, 40, 40);
  ellipse(910, 80, 40, 40);

  for(var i = 260; i < 755; i = i+20){
    fill("white");
    ellipse(i, 300, 15, 15);
    ellipse(i, 440, 15, 15);
  }

  for(var i = 300; i < 755; i = i + 100){
    fill("cyan");
    ellipse(i, 370, 50, 50);
  }

  for(var i = 250; i < 550; i = i + 70){
    fill("yellow");
    ellipse(200, i, 20, 50);
    ellipse(800, i, 20, 50)
  }

  drawSprites();
}