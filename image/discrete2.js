function preload(){
    im=loadImage('a.jpg');
}

function setup(){
    createCanvas(400,400);
    
    
}
var index,d,i,j,grey;

function index(i,j,d){
    
    return (i*400*d+j)*4;
}
function draw(){
    background(255);
    image(im,0,0);
    loadPixels();
    d=pixelDensity();
    for(i=1;i<d*400-1;i++){
        for(j=1;j<d*400-1;j++){
            grey=(pixels[index(i,j,d)]+pixels[index(i,j,d)+1]+pixels[index(i,j,d)+2])/3;
            if(grey<125)grey=0;
//            else if(grey<125)grey=0;
//            else if(grey<150)grey=150;
//            else if(grey<200)grey=200;
            else grey=255;
            
            pixels[index(i,j,d)]=grey;
            pixels[index(i,j,d)+1]=grey;
            pixels[index(i,j,d)+2]=grey;
          

        }
        
    }
    updatePixels();
}
    
    
//    background(255);
//    image(im,0,0);
//    loadPixels();
//    d=pixelDensity();
//    for(i=1;i<d*400-1;i++){
//        for(j=1;j<d*400-1;j++){
//            
            
//            
//            
//            
//            
////            pixels[index(i,j)]=(pixels[index(i,j-1)]+pixels[index(i,j)]+pixels[index(i,j+1)]+pixels[index(i+1,j-1)]+pixels[index(i+1,j)]+pixels[index(i+1,j+1)]+pixels[index(i-1,j-1)]+pixels[index(i-1,j)]+pixels[index(i-1,j+1)])/9;
////            
////            pixels[index(i,j)+1]=(pixels[index(i,j-1)+1]+pixels[index(i,j)+1]+pixels[index(i,j+1)+1]+pixels[index(i+1,j-1)+1]+pixels[index(i+1,j)+1]+pixels[index(i+1,j+1)+1]+pixels[index(i-1,j-1)+1]+pixels[index(i-1,j)+1]+pixels[index(i-1,j+1)+1])/9;
////            
////            pixels[index(i,j)+2]=(pixels[index(i,j-1)+2]+pixels[index(i,j)+2]+pixels[index(i,j+1)+2]+pixels[index(i+1,j-1)+2]+pixels[index(i+1,j)+2]+pixels[index(i+1,j+1)+2]+pixels[index(i-1,j-1)+2]+pixels[index(i-1,j)+2]+pixels[index(i-1,j+1)+2])/9;
//            //grey=255-grey;
////            pixels[index]=grey;
////            pixels[index+2]=grey;
////            pixels[index+1]=grey;
//          
//            
//            
//
//        }
//        
//    }
//    updatePixels();
//    noLoop();
//    
//}