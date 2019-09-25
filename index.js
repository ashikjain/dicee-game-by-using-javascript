//alert('welcome');
var first_name=prompt('enter the player 1 name');
var second_name=prompt('enter the player2 name');
var randomnumber1=Math.random();
randomnumber1=randomnumber1*5;
randomnumber1=Math.round(randomnumber1)+1;
var randomnumber2=Math.random();
randomnumber2=randomnumber2*5;
randomnumber2=Math.round(randomnumber2)+1;
//alert('random number is:'+randomnumber1);

if(randomnumber1==1){
    document.getElementById("dice_image_1").setAttribute("src","images/dice1.png");
}
else if(randomnumber1==2){
    document.getElementById("dice_image_1").setAttribute("src","images/dice2.png");
}
else if(randomnumber1==3){
    document.getElementById("dice_image_1").setAttribute("src","images/dice3.png");
}
else if(randomnumber1==4){
    document.getElementById("dice_image_1").setAttribute("src","images/dice4.png");
}
else if(randomnumber1==5){
    document.getElementById("dice_image_1").setAttribute("src","images/dice5.png");
}
else{
    document.getElementById("dice_image_1").setAttribute("src","images/dice6.png");
}
if(randomnumber2==1){
    document.getElementById("dice_image_2").setAttribute("src","images/dice1.png");
}
else if(randomnumber2==2){
    document.getElementById("dice_image_2").setAttribute("src","images/dice2.png");
}
else if(randomnumber2==3){
    document.getElementById("dice_image_2").setAttribute("src","images/dice3.png");
}
else if(randomnumber2==4){
    document.getElementById("dice_image_2").setAttribute("src","images/dice4.png");
}
else if(randomnumber2==5){
    document.getElementById("dice_image_2").setAttribute("src","images/dice5.png");
}
else{
    document.getElementById("dice_image_2").setAttribute("src","images/dice6.png");
}


if(randomnumber1==randomnumber2){
    document.querySelector("h1").innerHTML="Draw";
}
else if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML=first_name+" wins";  
}
else{
    document.querySelector("h1").innerHTML=second_name+" wins";
}