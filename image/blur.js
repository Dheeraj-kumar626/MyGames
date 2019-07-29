function preload(){
    im=loadImage('a.jpg');
}

function setup(){
    createCanvas(400,400);


}
var index,d,i,j,grey;

function index(i,j){

    return (i*400*d+j)*4;
}
function draw(){
     background(255);
    image(im,0,0);
    loadPixels();
    d=pixelDensity();
    for(i=1;i<d*400-1;i++){
        for(j=1;j<d*400-1;j++){

            pixels[index(i,j)]=((pixels[index(i,j-1)]+pixels[index(i,j)]+pixels[index(i,j+1)]+pixels[index(i+1,j-1)]+pixels[index(i+1,j)]+pixels[index(i+1,j+1)]+pixels[index(i-1,j-1)]+pixels[index(i-1,j)]+pixels[index(i-1,j+1)])+
                (pixels[index(i-2,j-1)]+pixels[index(i-2,j)]+pixels[index(i-2,j+1)]+pixels[index(i+2,j-1)]+pixels[index(i+2,j)]+pixels[index(i+2,j+1)]+pixels[index(i+2,j-2)]+pixels[index(i-2,j+2)]+pixels[index(i-2,j-2)] +pixels[index(i+2,j+2)] )+pixels[index(i-1,j-2)]+pixels[index(i-1,j+2)]+pixels[index(i,j-2)]+pixels[index(i,j+2)]+pixels[index(i+1,j-2)]+pixels[index(i+1,j+2)])/25;

           pixels[index(i,j)+1]=((pixels[index(i,j-1)+1]+pixels[index(i,j)+1]+pixels[index(i,j+1)+1]+pixels[index(i+1,j-1)+1]+pixels[index(i+1,j)+1]+pixels[index(i+1,j+1)+1]+pixels[index(i-1,j-1)+1]+pixels[index(i-1,j)+1]+pixels[index(i-1,j+1)]+1)+
                (pixels[index(i-2,j-1)+1]+pixels[index(i-2,j)+1]+pixels[index(i-2,j+1)+1]+pixels[index(i+2,j-1)+1]+pixels[index(i+2,j)+1]+pixels[index(i+2,j+1)+1]+pixels[index(i+2,j-2)+1]+pixels[index(i-2,j+2)+1]+pixels[index(i-2,j-2)+1] +pixels[index(i+2,j+2)] +1)+pixels[index(i-1,j-2)+1]+pixels[index(i-1,j+2)+1]+pixels[index(i,j-2)+1]+pixels[index(i,j+2)+1]+pixels[index(i+1,j-2)+1]+pixels[index(i+1,j+2)+1])/25;


            pixels[index(i,j)+2]=((pixels[index(i,j-1)+2]+pixels[index(i,j)+2]+pixels[index(i,j+1)+2]+pixels[index(i+1,j-1)+2]+pixels[index(i+1,j)+2]+pixels[index(i+1,j+1)+2]+pixels[index(i-1,j-1)+2]+pixels[index(i-1,j)+2]+pixels[index(i-1,j+1)+2])+
                (pixels[index(i-2,j-1)+2]+pixels[index(i-2,j)+2]+pixels[index(i-2,j+1)+2]+pixels[index(i+2,j-1)+2]+pixels[index(i+2,j)+2]+pixels[index(i+2,j+1)+2]+pixels[index(i+2,j-2)+2]+pixels[index(i-2,j+2)+2]+pixels[index(i-2,j-2)+2] +pixels[index(i+2,j+2)+2] )+pixels[index(i-1,j-2)+2]+pixels[index(i-1,j+2)+2]+pixels[index(i,j-2)+2]+pixels[index(i,j+2)+2]+pixels[index(i+1,j-2)+2]+pixels[index(i+1,j+2)+2])/25;
    
        }

    }
    updatePixels();

}
