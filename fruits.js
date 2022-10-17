
img="";
objects = [];
status = "";
function setup(){
  canvas=createCanvas(640,420);
  canvas.center();

  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}


function preload(){
img=loadImage('fruits.jfif');

}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(image,gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}
function draw() {
  image(image, 0, 0, 380, 380);
      if(status != "")
      {
        objectDetector.detect(image,gotResult);
        for(i=0;i<objects.length;i++){
          document.getElementById("status").innerHTML="status: object detected";
          fill("#FF0000");
          percent=floor(objects[i].confidence*100);
          text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
          noFill();
          stroke("#FF0000");  
          rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
          
        }
      }
}

