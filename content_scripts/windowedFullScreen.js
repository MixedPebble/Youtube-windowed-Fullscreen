console.log("START");


/*
This script adds an extra button to Youtube Videos.
The extra button gives an extra view option: windowed fullscreen.
*/




var viewArray = document.getElementsByClassName("ytp-right-controls");
var defaultViewButton = viewArray[0];//This is the Theater/Default view button

var btn = document.createElement("BUTTON");//Test button that is to be injected.
var t = document.createTextNode("CLICK ME");//Text because it makes the button easier to see while testing
btn.appendChild(t);                                
defaultViewButton.appendChild(btn);                    



console.log("FINISH"); //Useful for seeing if the script crashed early for whatever reason.

