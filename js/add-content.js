'use strict'
function WriteGreet (){
    
   var hourNow = prompt ("what is the time now?")
    var greeting;
    if (hourNow > 18) {
    greeting= 'Good evening!';}
    else if (hourNow > 12) {
    greeting = ' Good afternoon!';}
    else if (hourNow>0) {
    greeting ='Good morning!';}
    else{
    greeting='Welcome!';}
    document.write('<h3>'+greeting +'</ h3>');

    
}
 WriteGreet();


 // Ask the user for the accomodation type
var accomodation = prompt("mansaf or pizza?");
while(accomodation != "mansaf" && accomodation != "pizza"){
  accomodation = prompt("wrong answer! mansaf or pizza?");
}
// Get the picture source
var imageSource;
if (accomodation === "mansaf"){
  imageSource = 'images/Mansaf.jpeg';
}else if (accomodation==="pizza"){
  imageSource = 'images/pizza.jpeg';
} 
// ​
// ask the user for number of images
var numOfImages = prompt("How many times you want the pic to be repeated?");
// Validate the number of images
while(numOfImages=='' || isNaN(numOfImages)){
  numOfImages = prompt("Wrong answer! How many times you want the pic to be repeated?");
}
// Build the <img> element to add it to the page
var imgElement = '<img src="'+imageSource+'"/>';
// make a loop to repeat the picture
for (var i=0; i<numOfImages; i+=1){
  document.write(imgElement)
}
