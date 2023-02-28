function myFunction() {
    var x = document.getElementById("tech").value;
    document.getElementById("divContainer").appendChild(createButton(x))
}

function createButton(value) {
    var button = document.createElement("div")
    button.classList.add("myStyle")
    button.innerHTML = value
    return button
}

function removeItems() {
    var element = document.getElementById("divContainer")
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}