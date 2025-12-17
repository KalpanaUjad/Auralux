const tl = gsap.timeline({ delay: 0.3 });

// Logo letters animation
tl.from(".logo span", {
  y: -20,
  opacity: 0,
  stagger: 0.08,
  duration: 0.6,
  ease: "power3.out",
});

// Nav links animation
tl.from(
  ".nav-links li",
  {
    y: -20,
    opacity: 0,
    stagger: 0.15,
    duration: 0.5,
    ease: "power3.out",
  },
  "-=0.2"
);

// Buy now button animation
tl.from(
  ".nav-btn",
  {
    y: -20,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  },
  "-=0.1"
);

// HERO TITLE
tl.from(
  ".hero-title",
  {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  },
  "+=0.2"
);

// HERO TAGLINE
tl.from(
  ".hero-tagline",
  {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
  },
  "-=0.4"
);

// CTA BUTTON
tl.from(
  ".hero-btn",
  {
    scale: 0.85,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  },
  "-=0.3"
);

// HERO IMAGE (MAIN FOCUS)
tl.from(
  ".hero-image img",
  {
    scale: 1.15,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  },
  "-=0.6"
);
gsap.to(".hero-image img", {
  y: 10,
  x: 10,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".feature", {
  scrollTrigger: {
    trigger: ".features",
    start: "top 70%",
  },
  y: 60,
  opacity: 0,
  duration: 2,
  stagger: 0.25,
  ease: "power3.out",
});

// 3rd page
gsap.fromTo(
  ".showcase-image img",
  { y: 100 },
  {
    y: -100,
    scrollTrigger: {
      trigger: ".product-showcase",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    ease: "none",
  }
);

const productTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".product-showcase",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

productTl.from(".image-mask img", {
  y: 120,
  scale: 1.4,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
});

productTl.from(
  ".showcase-content",
  {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  },
  "-=0.6"
);
// AFTER reveal finishes, start infinite subtle motion
productTl.call(() => {
  gsap.to(".image-mask img", {
    rotation: 3,
    y: 10,
    //  scale: 1.02,
    scale: 1.2,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
});

// page 4
function marqueAnimation() {
  window.addEventListener("wheel", function (dets) {
    console.log(dets.deltaY);

    if (dets.deltaY > 0) {
      gsap.to(".marque", {
        transform: "translateX(-100%)",
        duration: 4,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".marque img", {
        rotate: 180,
      });
    } else {
      gsap.to(".marque", {
        transform: "translateX(0%)",
        duration: 4,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".marque img", {
        rotate: 0,
      });
    }
  });
}

// contact
function contactAnimation() {
  gsap.from(".contact-form", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 70%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".card", {
    scrollTrigger: {
      trigger: ".cards-wrapper",
      start: "top 75%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.25, // one after another
    ease: "power3.out",
  });
}

marqueAnimation();
contactAnimation();
