var canvas = new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var AVENGER_ob ="";
var block_image_ob="";
function player_update()
{
fabric.Image.fromURL("PLAYER.jpg",function(Img){
AVENGER_ob=Img;
AVENGER_ob.scaleToWidth(150);
AVENGER_ob.scaleToHeight(140);
AVENGER_ob.set({
top:AVENGER_y,
left:AVENGER_x
});
canvas.add(AVENGER_ob);
});
}
function new_image(get_image)
{
fabric.Image.fromURL(get_image,function(Img){
block_image_ob=Img;
block_image_ob.scaleToWidth(block_image_width);
block_image_ob.scaleToHeight(block_image_height);
block_image_ob.set({
top:AVENGER_y,
left:AVENGER_x
});
canvas.add(block_image_ob);
});
}  window.addEventListener("keydown",my_keydown);
function my_keydown(e){
  keyPressed=e.keyCode;
  console.log(keyPressed);
if(e.shiftKey==true && keyPressed=='80')
{
console.log("p & shift pressed together");
block_image_height=block_image_height +10;
block_image_width=block_image_width +10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}
if(e.shiftKey==true && keyPressed=='77')
{
console.log("m & shift pressed together");
block_image_height=block_image_height -10;
block_image_width=block_image_width -10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
  keyPressed=e.keyCode;
  console.log(keyPressed);
if(e.shiftKey==true && keyPressed=='80')
{
console.log("p & shift pressed together");
block_image_height=block_image_height +10;
block_image_width=block_image_width +10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}
if(e.shiftKey==true && keyPressed=='77')
{
console.log("m & shift pressed together");
block_image_height=block_image_height -10;
block_image_width=block_image_width -10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}

if(keyPressed=='38')
{
up();
console.log("up");
}
if(keyPressed=='40')
{
down();
console.log("down");
}
if(keyPressed=='37')
{
left();
console.log("left");
}
if(keyPressed=='39')
{
right();
console.log("right");
}
if(keyPressed=='81')
{
new_image('hulk_left_hand.png');
console.log("q");
}
if(keyPressed=='87')
{
new_image('hulk.png');
console.log("w");
}
if(keyPressed=='69')
{
new_image('ironman_body.png');
console.log("e");
}
if(keyPressed=='84')
{
new_image('ironman_legs.png');
console.log("t");
}
if(keyPressed=='82')
{
new_image('ironman_face.png');
console.log("r");
}
if(keyPressed=='89')
{
new_image('player.png');
console.log("y");
}
if(keyPressed=='85')
{
new_image('thor_face.png');
console.log("u");
}
if(keyPressed=='73')
{
new_image('thor_right_hand(1).png');
console.log("i");
}
}