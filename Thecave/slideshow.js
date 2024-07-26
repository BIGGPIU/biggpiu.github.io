var slideshowimages = document.getElementsByClassName("slideshowimg")

var main = 0 
var next = 1
var max = slideshowimages.length

setInterval(slideshow,7000)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

function slideshow() {
    slideshowimages[main].setAttribute("id","gone")
    slideshowimages[next].setAttribute("id","")
    main = next
    next ++ 
    if (next == max) {
        next = 0
    }
}