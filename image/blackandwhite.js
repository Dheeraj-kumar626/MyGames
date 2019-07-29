function preload(){
    im=loadImage('a.jpg');
}

function setup(){
    createCanvas(400,400);
    
    
}
var index,d,i,j,grey;

function draw(){
    background(255);
    image(im,0,0);
    loadPixels();
    d=pixelDensity();
    for(i=0;i<d*400-1;i++){
        for(j=0;j<d*400-1;j++){
            index=(i*400*d+j)*4;
            grey=(pixels[index]+pixels[index+1]+pixels[index+2])/3;
            //grey=255-grey;
            pixels[index]=grey;
            pixels[index+2]=grey;
            pixels[index+1]=grey;
          

        }
        
    }
    updatePixels();
    
}