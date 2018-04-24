function change() {
    let line = document.getElementById("line");
    let ifeTitle = document.getElementById("ifeTitle");
    if(line.hasAttribute("style")) {
        line.removeAttribute("style");
        ifeTitle.removeAttribute("style");
    }
    else {
        line.style.width = "72px";
        line.style.left = "64px";
        ifeTitle.style.color = "dodgerblue";
    }
}