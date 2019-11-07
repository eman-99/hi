'use strict'

var today= new Date();
// hourNow = today.getHours();
hourNow = prompt ("what is the time now?")
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