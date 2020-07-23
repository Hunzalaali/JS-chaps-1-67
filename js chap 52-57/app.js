function showImage(e)
{
    var modalImage = document.getElementById("modalImage");

    modalImage.src = e.src;
}

function zoomIn(){

    var modalImage = document.getElementById("modalImage");
    var w = modalImage.clientWidth;
    var h = modalImage.clientHeight;
    modalImage.style.width = (w + 10) + "px";
    modalImage.style.height =  (h + 10) + "px";

}

function zoomOut(){

    var modalImage = document.getElementById("modalImage");
    var w = modalImage.clientWidth;
    var h = modalImage.clientHeight;
    modalImage.style.width = (w - 10) + "px";
    modalImage.style.height =  (h - 10) + "px";

}