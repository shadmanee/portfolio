function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const navLinks = document.getElementById("nav-links");
    if (window.innerWidth > 1024) {
        sidebar.classList.remove("active");
    } else {
        sidebar.classList.toggle("active");
    }
}

window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
        document.getElementById("sidebar").classList.remove("active");
    }
});

// function toggleSocialIcons() {
//     let socialIcons = document.getElementById("social-icons");
//     let reachOutBtn = document.getElementById("reach-out-btn");
//     if (socialIcons.style.display === "none" || socialIcons.style.display === "") {
//         socialIcons.style.display = "flex";
//         socialIcons.style.justifyContent = "center";
//         reachOutBtn.style.transform = "scale(0)";
//         setTimeout(() => reachOutBtn.style.display = "none", 300);
//     }
// }

