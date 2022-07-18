//affiche hello world dans la console
console.log("hello world")

// affiche hello world sur la page html
document.body.innerHTML += "Hello World";

//créé une balise html et modifie le contenu
var helloWorldH1 = document.createElement("h1");
helloWorldH1.innerHTML += "Hello world!";
document.body.appendChild(helloWorldH1);

//modifie une balise existente
var helloWorldH1 = document.createElement("h1");
helloWorldH1.innerHTML += "Hello world";
document.querySelector("#greetings").appendChild(helloWorldH1);


var students = ["Alexandre.C","Alexandre.B","Benoît","Donatien","Hugo","Myriam","Youcef","Nicolas","Vlad",
"Quentin rmc","Quentin Kiou","Steven","Loïc","Julian","Maxence","Thomas","Amandine", "Tristan"];

//affiche tous les students dans la console
for (i=0; i < students.length; i++){
    console.log(students[i])
}

//affiche les students dans une list
students.forEach(function(student) {
	document.querySelector("#studentsList").innerHTML += `<li>${student}</li>`; 
}
)

//function qui modifie la couleur d'un element dans le style dynamic
function loadStyle(event){
    event.target.className = "dynamicStyle";
}
//execute la function loadStyle au clic sur la balise main
document.querySelector("main").addEventListener("click", loadStyle);