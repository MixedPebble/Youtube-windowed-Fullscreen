
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
    var strWindowFeatures = "'location=yes,height=500,width=500,scrollbars=no,status=yes'";
    //windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", strWindowFeatures);
    //'location=yes,height=500,width=600,scrollbars=no,status=yes'
    var URL = window.location.href;
    if(URL.includes("&")){
        URL = "https://www.youtube.com/embed/"+URL.substring(URL.indexOf("?v=")+3,URL.indexOf("&"));
    } else {
        URL = "https://www.youtube.com/embed/"+URL.substring(URL.indexOf("?v=")+3,URL.Length);

    }
    window.open(URL, 'Partial Fullscreen', strWindowFeatures);
})
rightControls.appendChild(btn);
console.log("FINISH"); //Useful for seeing if the script crashed early for whatever reason.



/*
Creates a copy of existing Youtube button then alters it.
*/
function copyTheaterButton(){
    var temp = document.getElementsByClassName("ytp-size-button ytp-button");
    var temp2 = temp[0]; 
    var temp3 = temp2.cloneNode(true);
    return temp3;
}
/*
Alternate method to create a copy of existing Youtube button then alters it.
*/
function customWindowFullScreenButton(){
var btn = document.createElement("BUTTON");
btn.setAttribute('class', 'WindowFullScreen');
btn.setAttribute('viewBox', '0 0 36 36');
btn.innerHTML='<img src="http://www.sandcmemories.com/t/Tsukineko/Brilliance_Dew_Drop_Spot_Pearlescent_Sky_Blue.gif" />';
return btn;
}


