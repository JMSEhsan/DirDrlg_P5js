let pos;
let dir;
let bh = 0;
let path = [];
let playDirDrlng = true;

function setup() {
  createCanvas(700, 400);
  pos = createVector(69, 101);
  dir = createVector(0, 0.1);
    createButton("Slide: toggle TF").mousePressed(function(){
   if(bh == 0){
     bh = 1}
   else {bh *=-1}
 });
      
      let bttn1 = createButton("Rotate").mousePressed(function(){bh = 0});
  
      let bttn2 = createButton("Stop").mousePressed(function(){noLoop()}); 
      let bttn3 = createButton("Resume").mousePressed(function(){loop()});
}

function draw() {
  
  dirdrlg();
  
  background(118, 244, 250);
  rectMode(CORNER);
  stroke(102, 104, 103);
  noFill();
  strokeWeight(2);
  rig(60, 100, 6, 50);
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
  strokeWeight(5);
  push();
  translate(pos.x, pos.y);
  rotate(dir.heading()+(PI/20)*bh);
  line(0, 0, 6, 0)
  pop();
}

function dirdrlg (){
  
  const angle = 0.001;
  dir.rotate(angle * bh);
  
  path.push(pos.copy());
  pos.add(dir);
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