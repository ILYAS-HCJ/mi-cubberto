Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", { videos: ["videos/0.mp4", "videos/2.mp4", "videos/3.mp4"] });

gsap.to(".fleftelem", {
    scrollTrigger: {   //scroll trigger page ko rokhega baki chalane ka kam gsap karega 
        trigger: "#fimages", //kisko rokhna he
        pin: true, // rokh do
        start: "top top",  // iska top jab top par ho to start karo
        end: "bottom bottom", // iska bottom jab bottom par ho to khatam karo
        endTrigger: ".last",  // bottom kiya hoga
        scrub: 1   //scroll based animation
    },

    y: "-300%",
    ease: Power1
})

let sections = document.querySelectorAll(".fleftelem")
Shery.imageEffect(".images", {
    style: 4,
    // debug: true, // Not working
    // config: { onMouse: { value: 1 } }, // Not working
    slideStyle: (setScroll) => {
        sections.forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: (prog) => {
                    setScroll(prog.progress + index)  // jitna elem progress karega utna image bhi
                },
            });
        });
    },
  });
