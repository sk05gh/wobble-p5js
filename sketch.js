let xscl = 1;
let yscl = 1;
  //DECLARE
  let water
  
function preload(){
    water=loadSound("sandy-beach-calm-waves-water-nature-sounds-8052.mp3")
  

}
// line tutoiral
function setup() {
  createCanvas(1530,650);
  
  
  //DECLARE
  let water
  
  //PRELOAD
  

 
  xscl = width/10;
  yscl = height/10;
  stroke(0,255,255)
  
  //frameRate(4);
 
}

function draw() {
  if(mouseIsPressed){
  water.play()
  }
  background(255,255,255,82); // white background

  
  for(let i=0;i<40;i++){
    // each line
    
    noFill();
    
     beginShape();
     strokeWeight( mouseY*.01 );
    
    for(let j=0;j<22;j++){
      
      
     
      
      // each vertex point of line

      let yoff = noise(j*.84, i*.84, millis()*.001)*mouseX*.2- mouseX*.1;
      
      curveVertex(j* xscl, yoff + i *  yscl);
      
      // double draw beginning = HACKED!
       if(j==0){curveVertex(0, yoff + i *  yscl);}
      
       //if(j==19){curveVertex(width+200, yoff + i *  yscl);}
   
    }
    
    
    endShape();
  
    /*
      let rx1 = 0;
      let ry1 = i*8;

      let rx2 =  width;
      let ry2 =  i*8 + mouseY*.1;


      strokeWeight( mouseX*.01 );
      stroke( 255, 0, 111 );
      line(rx1,ry1,rx2,ry2);
      
    */
    
  }
  
  
}



