var typed = new typed(".text", {
    strings:["Frontend Developer", "Web Developer", "Blockchain"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function cutMenu() {
    document.getElementById("phone").style.cssText = "top:-350px"
}

function openMenu() {
    document.getElementById("phone").style.cssText = "top:0px"
}