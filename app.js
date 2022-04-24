/**document.getElementById('btn').addEventListener('click',showPassage)

function showPassage(){
    document.getElementById('demo').innerHTML= "Hello JavaScript"
}**/

document.getElementById("btn1").addEventListener("click", lightOn)
document.getElementById("btn2").addEventListener("click",lightOff)

function lightOn(){
    document.getElementById('img1').src="./image/image2.png";

}

function lightOff(){
    document.getElementById('img1').src="./image/image1.jpg";
}