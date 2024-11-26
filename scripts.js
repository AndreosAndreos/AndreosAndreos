function hideImage() {
    var gifImage = document.getElementById("helloImage");
    var pngImage = document.getElementById("newImage");

    gifImage.style.display = "none";

    pngImage.style.display = "block";
    setTimeout(function() {
        pngImage.classList.add("visible");
    }, 10);
}

window.onload = function() {
    setTimeout(hideImage, 3500);
}
