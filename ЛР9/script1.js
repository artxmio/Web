document.getElementById("el1").addEventListener("mouseover", function () {
    this.classList.add("cl2");
});
document.getElementById("el1").addEventListener("mouseout", function () {
    this.classList.remove("cl2");
    this.classList.add("cl5");
});

document.getElementById("el2").addEventListener("dblclick", function () {
    this.classList.add("cl3");
});

document.getElementById("el3").addEventListener("click", function () {
    this.classList.add("cl4");
});

document.getElementById("el4").addEventListener("mouseover", function () {
    this.style.color = "yellow";
});

document.getElementById("el5").addEventListener("dblclick", function () {
    this.style.backgroundColor = "lightgray";
});

document.getElementById("el6").addEventListener("click", function () {
    this.style.fontStyle = "italic";
});
