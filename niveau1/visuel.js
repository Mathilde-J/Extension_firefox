document.body.style.border = "5px solid red";
document.body.style.backgroundColor = "#FDCBC0";

var h4Elements = document.getElementsByTagName("h4");
for(var i = 0; i < h4Elements.length; i++) {
   h4Elements[i].style.color = "blue";
}

var ulElements = document.getElementsByTagName("ul");
for(var i = 0; i < ulElements.length; i++){
    ulElements[i].style.color = "green";
    ulElements[i].style.fontSize = "40px";
}

var h1Elements = document.getElementsByTagName("h1");
for(var i = 0;i < h1Elements.length; i++){
    h1Elements[i].style.fontSize = "80px";
    h1Elements[i].style.color = "pink";
}

var aElements = document.getElementsByTagName("a");
for(var i = 0;i < aElements.length; i++){
    aElements[i].style.color = "orange";
    aElements[i].style.fontFamily = "Georgia,serif";
}
var img = document.getElementsByTagName("img").src = "./fleur.jpg";
