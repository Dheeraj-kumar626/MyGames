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
}
