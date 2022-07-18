const { createDecipheriv } = require("crypto");

document.querySelector("#myButton").addEventListener("click", function(event){
    var myImage = document.querySelector("#myImage");
    fetch("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
        .then(response => response.blob())
        .then(function (myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            myImage.src = objectURL;
        });
});


async function start(){
    try {
        const response = await fetch("https://pachyderme.net/students.json")
        const data = await response.json()
        console.log(data)
        cards(data)
    } catch (e) {
        console.log(e)
    }
}

function cards(cards){

}

start()