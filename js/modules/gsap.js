
export function animateDinoInfo() {
    const fadeDiv = document.querySelector(".gsap-fade");

    if (fadeDiv) {
        gsap.fromTo(fadeDiv, 
            { autoAlpha: 0, x: -20 },
            { autoAlpha: 1, x: 0, duration: 0.5 }
        );
    }
}
