var hr;
var sec;
var mi,tria,hrf,secf,minf;
function setup(){
    createCanvas(600,600);
    //angleMode(DEGREES);
    pixelDensity(1);
    v=createVector(0,10);
    v5=createVector(0,-5);
    v4=createVector(0,-5);
    v6=createVector(0,-10);

    v2=createVector(0,220);
    vhr=createVector(0,-100);
    vmin=createVector(0,-200);
    vsec=createVector(0,-190);
    v3=createVector(0,250);
    
}

function draw(){
    frameRate(1);
    hr=hour();
    sec=second();
    mi=minute();
    translate(300,300);
    background(0);
    strokeWeight(4);
    vhr.rotate((hr%12)*PI/6);
    vmin.rotate(mi*PI/30);
    line(0,0,vhr.x,vhr.y);
    line(0,0,vmin.x,vmin.y);
    v4.rotate(vmin.heading());
    v5.rotate(vmin.heading()+PI);
    v6.rotate(vmin.heading()+PI/2);
    fill(255);

    triangle(vmin.x+v4.x,vmin.y+v4.y,vmin.x+v5.x,vmin.y+v5.y,vmin.x+v6.x,vmin.y+v6.y);
    v4.rotate(-vmin.heading());
    v5.rotate(-vmin.heading()-PI);
    v6.rotate(-vmin.heading()-PI/2);
     
    v4.rotate(vhr.heading());
    v5.rotate(vhr.heading()+PI);
    v6.rotate(vhr.heading()+PI/2);
    fill(255);

    triangle(vhr.x+v4.x,vhr.y+v4.y,vhr.x+v5.x,vhr.y+v5.y,vhr.x+v6.x,vhr.y+v6.y);
    v4.rotate(-vhr.heading());
    v5.rotate(-vhr.heading()-PI);
    v6.rotate(-vhr.heading()-PI/2);
    
    vhr.rotate(-(hr%12)*PI/6);
    vmin.rotate(-mi*PI/30);
    strokeWeight(1);
    vsec.rotate(sec*PI/30);
    line(-vsec.x/8,-vsec.y/8,vsec.x,vsec.y);
    vsec.rotate(-sec*PI/30);

   
    strokeWeight(2);

    noFill();
    stroke(255);
    for(i=0;i<60;i++){
        //push();
        v2.rotate(i/30*PI);
        v.rotate(i/30*PI);
        line(v2.x,v2.y,v2.x+v.x,v2.y+v.y);
        v2.rotate(-i/30*PI);
        v.rotate(-i/30*PI);
        //pop();
        
    }
    strokeWeight(10);
    point(0,0);
    v2.rotate(sec*PI/30 + PI);
        v.rotate(sec*PI/30 + PI);
        line(v2.x,v2.y,v2.x+v.x,v2.y+v.y);
        v2.rotate(-sec*PI/30- PI);
        v.rotate(-sec*PI/30 -PI);
    strokeWeight(8);
    v2.rotate((sec-1)*PI/30 + PI);
        v.rotate((sec-1)*PI/30 + PI);
        line(v2.x,v2.y,v2.x+v.x,v2.y+v.y);
        v2.rotate(-(sec-1)*PI/30- PI);
        v.rotate(-(sec-1)*PI/30 -PI);
    v2.rotate((sec+1)*PI/30 + PI);
        v.rotate((sec+1)*PI/30 + PI);
        line(v2.x,v2.y,v2.x+v.x,v2.y+v.y);
        v2.rotate(-(sec+1)*PI/30- PI);
        v.rotate(-(sec+1)*PI/30 -PI);
    strokeWeight(6);
    v2.rotate((sec-2)*PI/30 + PI);
        v.rotate((sec-2)*PI/30 + PI);
        line(v2.x,v2.y,v2.x+v.x,v2.y+v.y);
        v2.rotate(-(sec-2)*PI/30- PI);
        v.rotate(-(sec-2)*PI/30 -PI);
    v2.rotate((sec+2)*PI/30 + PI);
        v.rotate((sec+2)*PI/30 + PI);
        line(v2.x,v2.y,v2.x+v.x,v2.y+v.y);
        v2.rotate(-(sec+2)*PI/30- PI);
        v.rotate(-(sec+2)*PI/30 -PI);
    strokeWeight(4);
    v2.rotate((sec-3)*PI/30 + PI);
        v.rotate((sec-3)*PI/30 + PI);
        line(v2.x,v2.y,v2.x+v.x,v2.y+v.y);
        v2.rotate(-(sec-3)*PI/30- PI);
        v.rotate(-(sec-3)*PI/30 -PI);
    v2.rotate((sec+3)*PI/30 + PI);
        v.rotate((sec+3)*PI/30 + PI);
        line(v2.x,v2.y,v2.x+v.x,v2.y+v.y);
        v2.rotate(-(sec+3)*PI/30- PI);
        v.rotate(-(sec+3)*PI/30 -PI);
    strokeWeight(3);
    v2.rotate((sec-4)*PI/30 + PI);
        v.rotate((sec-4)*PI/30 + PI);
        line(v2.x,v2.y,v2.x+v.x,v2.y+v.y);
        v2.rotate(-(sec-4)*PI/30- PI);
        v.rotate(-(sec-4)*PI/30 -PI);
    v2.rotate((sec+4)*PI/30 + PI);
        v.rotate((sec+4)*PI/30 + PI);
        line(v2.x,v2.y,v2.x+v.x,v2.y+v.y);
        v2.rotate(-(sec+4)*PI/30- PI);
        v.rotate(-(sec+4)*PI/30 -PI);
    
    hrf=((hr%12)>3 && hr<9)?-1:0;
    secf=(sec>17 && sec<43)?-1:0;
    minf=(min>17 && min<43)?-1:0;
    strokeWeight(2);
    rotate(hr*PI/6);
      translate(0,-255);
        rotate(PI*hrf);
          textSize(25);
          text((hr%12),0,0);
        rotate(-PI*hrf)
      translate(0,255);
    rotate(-hr*PI/6);
    rotate(sec*PI/30);
          translate(0,-255);
            rotate(PI*secf);
          text(sec,0,0);
        rotate(-PI*secf);
      translate(0,255);
    rotate(-sec*PI/30);

    
    rotate(mi*PI/30);
    translate(0,-255);
    rotate(PI*minf);
    text(mi,0,0);
    rotate(-PI*minf);
    translate(0,255);
    rotate(-mi*PI/30);
    
    
    
    
    
//    
//    text("PAI",0,50);
    
    
//    arc(0,0,200,200,0,180);
//    strokeWeight(4);
//    ellipse(0,0,200,200);
    
}