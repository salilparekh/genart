var elps = []
var elpW = 20

// https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
// var mode = + new Date()

var fontBold
var fontRegular

// var titleText = "Daniel Kim"

function preload() {
  // fontBold = loadFont('fonts/KhulaBold-Latin.otf');
  // fontRegular = loadFont('fonts/KhulaRegular-Latin.otf');
}

var mode

function setup(){
  createCanvas(windowWidth, windowHeight);
  // strokeWidth(0)
  noStroke()
  // background(0)

  resizeCanvas(windowWidth, windowHeight);


  for (var i = 0; i< width/10; i++){

    ellpC = color(random(0,254), random(0,254), random(0,254), random(.8,1))
    elps[i] = createVector(random(0,width),random(0,height),colorRandom())
  }

  mode = Math.floor(random(0,4))

  // blendMode(OVERLAY)

}


function draw(){

  // background(0)

  for (var i = 0; i< elps.length-1; i++){
    fill(elps[i].z)
    ellipse(elps[i].x, elps[i].y, elpW)


    // var bbox = fontRegular.textBounds(titleText,width/2, height/2)
    // fill( 255, random(.8,1) )
    // rect(bbox.x, bbox.y, bbox.w, bbox.h)

    // elps[i].x *= .78
    // elps[i].y *= .78
    // mode = 3
    if (mode==0){
      // Every dot to the bottom right
      elps[i].x += random()
      elps[i].y += random()
    }else if (mode==1) {
      // Every dot goes back and forth
      elps[i].x += random(-50,50)
      elps[i].y += random(-2,2)
    }else if (mode==2){
      elps[i].x -= random(-1,1)
      elps[i].y -= random(-5,0)
    }else{
      elpW = random(10,25)
      elps[i].x += random(-2.05,2.05)
      elps[i].y += random(-2.05,2.05)
    }



  // remove outer limits
    if (elps[i].x > width){
      elps.splice(i,1)
    }

    if (elps[i].x < 0){
      elps.splice(i,1)
    }

    if (elps[i].y > height){
      elps.splice(i,1)
    }

    if (elps[i].y < 0){
      elps.splice(i,1)
    }
  }



//   textFont(fontRegular);
//   textAlign(CENTER);
//   textSize(50)
//   text(titleText, width/2, height/2);


}

function colorRandom(){
  return color(random(0,254), random(0,254), random(0,254), random(.8,1))
}

function mouseMoved() {
  // console.log("mouseX, mouseY")
  // console.log(mouseX, mouseY)
  elps.push(createVector(mouseX,mouseY,colorRandom()))
  return false;

}
function touchMoved() {
  // console.log("mouseX, mouseY")
  // console.log(mouseX, mouseY)
  elps.push(createVector(mouseX,mouseY,colorRandom()))
  return false;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
