
/*
* This script adds an extra button to Youtube Videos.
* The extra button gives an extra view option: windowed fullscreen.
* References: https://developer.mozilla.org/en-US/docs/Web/API/Window/open
*/

console.log("START");
var viewArray = document.getElementsByClassName("ytp-right-controls");
var rightControls = viewArray[0];
var btn = copyTheaterButton();
//var btn = customWindowFullScreenButton();//Alternate way to get button
btn.addEventListener("click",function(){
    var strWindowFeatures = "menubar=no,location=no,resizable=no,scrollbars=no,status=no";
    windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", strWindowFeatures);
})
rightControls.appendChild(btn);
console.log("FINISH"); //Useful for seeing if the script crashed early for whatever reason.



/*
Creates a copy of existing Youtube button then alters it. 
It is to be placed in Youtube video window.
This is one of two ways that I am considering using for the button.
The other way is: customWindowFullScreenButton
*/
function copyTheaterButton(){
    var temp = document.getElementsByClassName("ytp-size-button ytp-button");
    var temp2 = temp[0]; 
    var temp3 = temp2.cloneNode(true);
    return temp3;
}
/*
Creates a new button to be placed in Youtube video window.
This is one of two ways that I am considering using for creating the button.
The other way is: copyTheaterButton()
*/
function customWindowFullScreenButton(){
var btn = document.createElement("BUTTON");
btn.setAttribute('class', 'WindowFullScreen');
btn.setAttribute('viewBox', '0 0 36 36');
btn.innerHTML='<img src="http://www.sandcmemories.com/t/Tsukineko/Brilliance_Dew_Drop_Spot_Pearlescent_Sky_Blue.gif" />';
return btn;
}



