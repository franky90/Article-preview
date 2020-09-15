document.getElementById("shareIcon").addEventListener("click", handleBubble);

function handleBubble() {
    var x = document.getElementById("hiddenBubble");
    var y = document.getElementById("idImage");
    // var y = document.getElementById("idsmallb");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.src = "images/icon-share-inverted.svg";
        y.style.backgroundColor = "hsl(214, 17%, 51%)";
    } else {
        x.style.display = "none";
        y.src = "images/icon-share.svg";
        y.style.backgroundColor = "hsl(210, 46%, 95%)";
    }
}

function resizeFunction(){
    var bottomContainer = document.getElementById("hiddenContainer");
    var oldShereIcon = document.getElementById("idImage");
    var w= window.outerWidth;
    if (w < 900){
        bottomContainer.style.display = "block";
        oldShereIcon.style.display = "none";
    }else{
        bottomContainer.style.display = "none";
        oldShereIcon.style.display = "block";
    }
}