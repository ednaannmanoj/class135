status="";
objects="";

function preload(){

}
function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(600,500);
    video.hide();
    
    }

function draw(){
   image(video,0,0,600,500);
   if(status!=""){
objectDetect.objectDetector(video,gotResults);
if(i=0; i<objects.length; i++){
    document.getElementById("status").innerHTML="Detecting Objects";
    document.getElementById("answer").innerHTML=objects.length;
    fill("red");
           percentage=floor(objects[i].confidence*100);
           text(objects[i].label+" "+ percentage+" % ",objects[i].x+15,objects[i].y+15);
           noFill();
    stroke("red");
    rect(objects[i].x, objects[i].y, objects[i].width,objects[i].height);
}
   }
    }

    function start(){
        objectDetector=ml5.objectDetector('cocossd',modelLoaded);
        document.getElementByID("status").innerHTML= "Detecting Objects"
        inputboxvalue=document.getElementById("input").value}
        

        function modelLoaded(){
            console.log("The model has been loaded");  
            status="true";

        }
function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    objects=results;   
}
}
