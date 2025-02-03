document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById("navToggle");
    const navbarNav = document.getElementById("navbarNav");
    const navbar = document.getElementById("navbar");

    navToggle.addEventListener("click", function() {
        navbarNav.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi... I am Shadmanee";
    const dot = "."
    const animatedText = document.getElementById("animated-text");
    const animatedTextDot = document.getElementById("animated-text-dot");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            setTimeout(typeWriter, 100);
            animatedText.innerHTML += text.charAt(index);
            index++;
        } else {
            index++;
            animatedTextDot.innerHTML = dot.charAt(0);
            blinkDot();
        }
    }

    function blinkDot() {
        let dotVisible = true;
        setInterval(() => {
            animatedTextDot.style.color = dotVisible ? "transparent" : "white";
            dotVisible = !dotVisible;
        }, 500);
    }

    typeWriter();
});