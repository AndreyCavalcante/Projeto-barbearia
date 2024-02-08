
var tema = 1;

function mode() {
    var body = document.getElementById("body");
    var section = document.getElementById("section");
    var boxes = document.getElementsByClassName("form-box"); 
    var labels = document.getElementsByTagName("label");
    var input = document.getElementById("input");
    var h2 = document.getElementById("nome");
    var inputboxes = document.getElementsByClassName("inputbox"); 
    var links = document.getElementsByTagName("a"); 
    var login = document.getElementById("linklogin");
    var p = document.getElementById("p")
    var lembre = document.getElementById("lembre")

    if (tema == 1) {
        body.style.backgroundColor = "white";
        section.style.backgroundColor = "white";
        for (var i = 0; i < boxes.length; i++) { 
            boxes[i].style.borderColor = "black"; 
        }
        h2.style.color = "black";
        for (var i = 0; i < labels.length; i++){
            labels[i].style.color = "black";
        }
        input.style.color = "black";
        for (var i = 0; i < inputboxes.length; i++) { 
            inputboxes[i].style.borderColor = "black"; 
        }
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "black"; 
        }
        login.style.backgroundColor = "black";
        login.style.color = "white";
        p.style.color = "black";
        tema = 2;
    } else if (tema == 2) {
        body.style.backgroundColor = "black";
        section.style.backgroundColor = "black";
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].style.borderColor = "rgba(255, 255, 255, 0.5)";
        }
        h2.style.color = "white";
        for (var i = 0; i < labels.length; i++){
            labels[i].style.color = "white";
        }
        input.style.color = "white";
        for (var i = 0; i < inputboxes.length; i++) {
            inputboxes[i].style.borderColor = "white";
        }
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "white";
        }
        login.style.backgroundColor = "white";
        login.style.color = "black";
        p.style.color = "white";
        tema = 1;
    }
}