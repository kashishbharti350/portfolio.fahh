
// 3D CERTIFICATE GALLERY

const certificateOrbit = document.querySelector(".certificate-orbit");
const certificateScene = document.querySelector(".certificate-scene");
const certificateCards = document.querySelectorAll(".certificate-item");

// Pause rotation when mouse enters
certificateOrbit.addEventListener("mouseenter", () => {
    certificateOrbit.style.animationPlayState = "paused";
});

// Resume rotation when mouse leaves
certificateOrbit.addEventListener("mouseleave", () => {
    certificateOrbit.style.animationPlayState = "running";
});

// Mouse movement effect
certificateScene.addEventListener("mousemove", (event) => {

    const rect = certificateScene.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const rotateX = (mouseY / rect.height - 0.5) * -15;
    const rotateY = (mouseX / rect.width - 0.5) * 15;

    certificateOrbit.style.setProperty(
        "--mouse-rotate-x", `${rotateX}deg`
    );

    certificateOrbit.style.setProperty(
        "--mouse-rotate-y", `${rotateY}deg`
    );
});

// Reset mouse movement
certificateScene.addEventListener("mouseleave", () => {
    certificateOrbit.style.setProperty("--mouse-rotate-x", "0deg");
    certificateOrbit.style.setProperty("--mouse-rotate-y", "0deg");
});

// Open certificate in a new tab
certificateCards.forEach((card) => {

    card.addEventListener("click", () => {

        const certificateImage = card.querySelector("img");

        window.open(certificateImage.src, "_blank");

    });

});

