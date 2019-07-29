var v;
var an;
function setup(){
   createCanvas(600,400);
   v=createVector(0,-150);
    translate(width/2,height);
    an=2*PI/3;
    strokeWeight(2);
    line(0,0,v.x,v.y);
    translate(v.x,v.y);
    branch();
    
}

function draw(){
    
    
}

function branch(){
    if(v.mag()>5){
    an/=2;
    v.setMag(v.mag()*3/5);
        push();
            v.rotate(an);

    line(0,0,v.x,v.y);
        translate(v.x,v.y);
    branch();
        pop();
        push();
        v.rotate(-2*an);
    line(0,0,v.x,v.y);
    translate(v.x,v.y);
    branch();
                v.rotate(an);

        pop();
        an*=2;
        v.setMag(v.mag()*5/3);
    
    
    }
//    if(v.mag()>5){
//    an/=2;
//    v.setMag(v.mag()*3/5);
//    v.rotate(an);
//    line(0,0,v.x,v.y);
//    v.rotate(-2*an);
//    line(0,0,v.x,v.y);
//    push();
//    translate(v.x,v.y);
//    branch();
//    pop();
//        v.rotate(2*an);
//    push();
//    translate(v.x,v.y);
//    branch();
//    pop();
//        v.rotate(-an);
//        an*=2;
//        v.setMag(v.mag()*5/3);
//    
//    
//    }
    

}