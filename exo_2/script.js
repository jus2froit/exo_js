document.querySelector("#myButton").addEventListener("click", function(event){
    var myImage = document.querySelector("#myImage");
    fetch("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
        .then(response => response.blob())
        .then(function (myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            myImage.src = objectURL;
        });
});

try {
    const response = await fetch("http://api-students.popschool-lens.fr/students.json")
    const data = response.json
} catch (e) {
    console.log(e)
}
