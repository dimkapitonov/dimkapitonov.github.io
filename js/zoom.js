var zoomImg = function () {
    var clone = this.cloneNode(true);
    clone.classList.remove("zoom");

    var lb = document.getElementById("lb-img");
    lb.innerHTML = "";
    lb.appendChild(clone);

    lb = document.getElementById("lb-back");
    lb.classList.add("show");
};

window.addEventListener("load", function () {
    var figures = document.getElementsByClassName("zoom");
    if (figures.length > 0) {
        for (var figure of figures) {
            figure.addEventListener("click", zoomImg);
        }
    }

    document.getElementById("lb-back").addEventListener("click", function () {
        this.classList.remove("show");
    })
});