console.log("START");


/*
This script adds an extra button to Youtube Videos.
The extra button gives an extra view option: windowed fullscreen.
*/

var viewArray = document.getElementsByClassName("ytp-right-controls");
var rightControls = viewArray[0];
var btn = document.createElement("BUTTON");
btn.setAttribute('class', 'WindowFullScreen');
btn.setAttribute('viewBox', '0 0 36 36');
//logo = browser.extension.getURL("resources/green.png");
//btn.innerHTML='<img src=' +logo+'/>';
btn.innerHTML='<img src="http://www.sandcmemories.com/t/Tsukineko/Brilliance_Dew_Drop_Spot_Pearlescent_Sky_Blue.gif" />';
rightControls.appendChild(btn);                    

console.log("FINISH"); //Useful for seeing if the script crashed early for whatever reason.

