var check=[];

function setup(){
    createCanvas(400,400);
    background(0);
    if(im.width>im.height)
       image(im,0,0,width,im.height*width/im.width);
    else
        image(im,0,0,im.width*height/im.height,height);
    
}

function index(i,j){
    return (i*height*d+j)*4;
}

function preload(){
    im=loadImage('a.jpg');
}
var ixel=[];
function draw(){
    
    if(frameCount==1){
        loadPixels();
        ixel=pixels.slice();
        d=pixelDensity();
        updatePixels();
        noStroke();
        fill(255,0,0);
        rect(-5,5,10,10);
        loadPixels();
        console.log(pixels[5*d]+" "+pixels[5*d+1]+" "+pixels[5*d+2]);
        updatePixels();
    }
    
    
    
    
}
var x,y,d;
function mousePressed(){
    x=mouseX;
    y=mouseY;
    change();
}


function change(){
    loadPixels();
    console.log("Inside change"+ d+"  "+x+"  "+y);
     for(j=(y-10)*d;j<=(y+10)*d;j++){
         for(i=(x-10)*d;i<=(x+10)*d;i++){
            pixels[index(j,i)]=avg(j,i,0);
            pixels[index(j,i)+1]=avg(j,i,1);
            pixels[index(j,i)+2]=avg(j,i,2);
        }
    }
    console.log("Done");
    
    updatePixels();
}


var ab=5;//2ab+1 is side of tha average square
var s,t,k,l,m;
function avg(k,l,m){//k is i, l is j,m is (0,1,2)ie (r,g,b)
    var average=0;
        //console.log(average);
    for(s=(k-ab);s<=(k+ab);s++){
        for(t=(l-ab);t<=(l+ab);t++){
                //console.log(average);
            average+=ixel[index(s,t)+m];
        }
    }
    average/=((2*ab+1)*(2*ab+1));
    return floor(average);
    
    
}

