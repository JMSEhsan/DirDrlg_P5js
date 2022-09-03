let pos;
let dir;
let bh = 0;
let path = [];
var i1 = 0;
var i2 = 0;
var i3 = 0;
var j1 = 0;
var j2 = 0;
var j3 = 0;
var d1 = 1;
var d2 = 1;
var d3 = -1;
//let playDirDrlng = true;

function setup() {
  createCanvas(700, 400);
  pos = createVector(69, 101);
  dir = createVector(0, 0.1);
    let bttnSld = createButton("Slide: toggle TF").mousePressed(function(){
   if(bh == 0){
     bh = -1}
   else {bh *=-1}
 });
      
      let bttnRot = createButton("Rotate").mousePressed(function(){bh = 0});
      let bttnStp = createButton("Stop").mousePressed(function(){noLoop()}); 
      let bttnRsm = createButton("Resume").mousePressed(function(){loop()});

      bttnSld.parent("div-container");
      bttnRot.parent("div-container");
      bttnStp.parent("div-container");
      bttnRsm.parent("div-container");
}

function draw() {
  
  dirdrlg();
  
  background(118, 244, 250);
  rectMode(CORNER);
  stroke(102, 104, 103);
  noFill();
  strokeWeight(2);
  rig(60, 100, 6, 20);
  stroke(73, 24, 38);
  fill(73, 24, 38);
  rect(0, 100, width, height-320);
  stroke(109, 94, 87);
  fill(109, 94, 87);
  rect(0, 180, width, height-380);
  stroke(197, 78, 22);
  fill(197, 78, 22);
  rect(0, 200, width, height-320);
  stroke(40, 43, 79);
  fill(40, 43, 79);
  rect(0, 280, width, height-380);
  stroke(246, 249, 70);
  fill(246, 249, 70);
  rect(0, 300, width, height-350);
  stroke(33, 85, 49);
  fill(33, 85, 49);
  rect(0, 350, width, height);
    
  beginShape();
  noFill();
  stroke(0);
  strokeWeight(4);
  for(let v of path){
    vertex(v.x, v.y);
  }
  endShape();
  
  stroke(238, 29, 152);
  strokeWeight(2);
  push();
  translate(pos.x, pos.y);
  rotate(dir.heading()+(PI/20)*bh-PI/2);
  //line(0, 0, 6, 0)
  fill(238, 29, 152);
  rect(-2.5, -2.5, 5, 6, 1, 1, 0, 0);
  
  stroke(54, 50, 200);
  strokeWeight(1.5);
  
  line(-3.5 + i1, j1 + 2, -3.5 + i1, 6);
  line(adjustedAngle() + i2, j2 + 2, adjustedAngle() + i2, 6);
  line(adjustedAngle() + i3, j3 + 2, adjustedAngle()+ i3, 6);
  
  if (d1 == 1){
    i1 = i1 + .08;
    j1 = 0;
    if(i1 > 7){
      d1 = -1;
    }
  }
  else{
    i1 = i1 - .08;
    j1= 3;
    if (i1 < 0){
      d1 = 1;
    }
  }

  if (d2 == 1){
    i2 = i2 + .08;
    j2 = 0;
    if(i2 > 3.5 - adjustedAngle()){
      d2 = -1;
    }
  }
  else{
    i2 = i2 - .08;
    j2 = 3;
    if (i2 < -3.5 - adjustedAngle()){
      d2 = 1;
    }
  }

  if (d3 == 1){
    i3 = i3 + .08;
    j3 = 0;
    if(i3 > 3.5 - adjustedAngle()){
      d3 = -1;
    }
  }
  else{
    i3 = i3 - .08;
    j3 = 3;
    if (i3 < -3.5 - adjustedAngle()){
      d3 = 1;
    }
  }

  pop();
}

function dirdrlg(){
  
  const angle = 0.001;
  dir.rotate(angle * bh);
  
  path.push(pos.copy());
  pos.add(dir);
}

function adjustedAngle(){
  return Math.cos(3.5*PI/9)*3.5   // instead of PI/3 
}

function rig(x, y, stepwidth , height) {
  beginShape();
    let ArrayPnts = [[x, y], [x+stepwidth, y-height], [x+2*stepwidth, y-height], [x, y], [x+ 3*stepwidth, y], [x+2*stepwidth, y-height], [x+stepwidth, y-height], [x+ 3*stepwidth, y]];
    for(let i = 0; i < 8; i++){ 
          let sx = ArrayPnts[i][0];
          let sy = ArrayPnts[i][1];
          vertex(sx, sy);
    }
  endShape(CLOSE);
}