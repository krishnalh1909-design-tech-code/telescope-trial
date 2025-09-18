(function () {
  // Check if width is inside the 600-1024 range (inclusive)
  function isInRange(width) {
    return width >= 200 && width <= 600 && width < 1000;
  }

  let wasInRange = isInRange(window.innerWidth);

  window.addEventListener("resize", () => {
    const nowInRange = isInRange(window.innerWidth);
    if (nowInRange !== wasInRange) {
      // Window crossed the 600-1024 boundary, reload page
      location.reload();
    }
    wasInRange = nowInRange;
  });
})();

// ---------------------------------------------
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
// ----------------------------------------------

window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "none";
    }
  }, 3000); // 3 seconds
});
// ---------------------------------------------------

// ✅ Lenis Setup (Smooth Scroll)
const lenis = new Lenis({
  duration: 0.8,
  easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease-out
  smooth: true,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const signinBtn = document.querySelector(".nav2 h1");
const signinCloseBtn = document.querySelector(".signin-close-btn");

signinBtn.addEventListener("click", () => {
  gsap.to(".shadow", {
    opacity: 0.5,
    zIndex: 100,
    duration: 0.01,
  });

  gsap.to(".signin-container", {
    height: "50vh",
    overflow: "initial",
  });

  gsap.to(".signin-close-btn", {
    height: "55px",
    duration: 0.3,
    delay: 0.7,
  });
});

signinCloseBtn.addEventListener("click", () => {
  gsap.to(".signin-close-btn", {
    height: "0px",
    duration: 0.3,
  });

  gsap.to(".signin-container", {
    height: "0vh",
    overflow: "hidden",
    delay: 0.2,
  });

  gsap.to(".shadow", {
    opacity: 0,
    zIndex: 90,
  });
});

setTimeout(() => {
  const main = document.querySelector(".main");
  main.style.opacity = 1;

  gsap.from(".line1, .line2, .line3", {
    opacity: 0,
    y: 70,
    duration: 3,
    stagger: 0.6,
    ease: "power2.out",
  });
}, 3000);

const boxM = document.querySelectorAll(".box");

boxM.forEach((box) => {
  box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();
    const boxCenterX = rect.left + rect.width / 2;
    const boxCenterY = rect.top + rect.height / 2;

    // Calculate cursor distance from center of box
    const deltaX = e.clientX - boxCenterX;
    const deltaY = e.clientY - boxCenterY;

    // Magnet strength factor (max translation in px)
    const strength = 15;

    // Normalize movement by box size for smoothness
    const moveX = (deltaX / (rect.width / 2)) * strength;
    const moveY = (deltaY / (rect.height / 2)) * strength;

    // Apply transform with a subtle inverse move to create attraction
    box.style.transform = `translate(${moveX * 1}px, ${
      moveY * 1
    }px) scale(1.05)`;
  });

  box.addEventListener("mouseleave", () => {
    // Reset on mouse leave
    box.style.transform = "translate(0, 0) scale(1)";
  });
});

const imageSets = {
  box1: [
    "/Images/Box1-images/0.webp",
    "/Images/Box1-images/1.webp",
    "/Images/Box1-images/2.webp",
    "/Images/Box1-images/3.webp",
    "/Images/Box1-images/4.webp",
    "/Images/Box1-images/5.webp",
  ],

  box2: [
    "/Images/Box2-images/0.webp",
    "/Images/Box2-images/1.webp",
    "/Images/Box2-images/2.webp",
    "/Images/Box2-images/3.webp",
    "/Images/Box2-images/4.webp",
    "/Images/Box2-images/5.webp",
  ],

  box3: [
    "/Images/Box3-images/0.webp",
    "/Images/Box3-images/1.webp",
    "/Images/Box3-images/2.webp",
    "/Images/Box3-images/3.webp",
    "/Images/Box3-images/4.webp",
    "/Images/Box3-images/5.webp",
  ],

  box4: [
    "/Images/Box4-images/0.webp",
    "/Images/Box4-images/1.webp",
    "/Images/Box4-images/2.webp",
    "/Images/Box4-images/3.webp",
    "/Images/Box4-images/4.webp",
    "/Images/Box4-images/5.webp",
  ],

  box5: [
    "/Images/Box5-images/0.webp",
    "/Images/Box5-images/1.webp",
    "/Images/Box5-images/2.webp",
    "/Images/Box5-images/3.webp",
    "/Images/Box5-images/4.webp",
    "/Images/Box5-images/5.webp",
  ],
  box6: [
    "/Images/Box6-images/0.webp",
    "/Images/Box6-images/1.webp",
    "/Images/Box6-images/2.webp",
    "/Images/Box6-images/3.webp",
    "/Images/Box6-images/4.webp",
    "/Images/Box6-images/5.webp",
  ],

  box7: [
    "/Images/Box7-images/0.webp",
    "/Images/Box7-images/1.webp",
    "/Images/Box7-images/2.webp",
    "/Images/Box7-images/3.webp",
    "/Images/Box7-images/4.webp",
    "/Images/Box7-images/5.webp",
  ],

  box8: [
    "/Images/Box8-images/0.webp",
    "/Images/Box8-images/1.webp",
    "/Images/Box8-images/2.webp",
    "/Images/Box8-images/3.webp",
    "/Images/Box8-images/4.webp",
    "/Images/Box8-images/5.webp",
  ],
  box9: [
    "/Images/Box9-images/0.webp",
    "/Images/Box9-images/1.webp",
    "/Images/Box9-images/2.webp",
    "/Images/Box9-images/3.webp",
    "/Images/Box9-images/4.webp",
    "/Images/Box9-images/5.webp",
  ],
  box10: [
    "/Images/Box10-images/0.webp",
    "/Images/Box10-images/1.webp",
    "/Images/Box10-images/2.webp",
    "/Images/Box10-images/3.webp",
    "/Images/Box10-images/4.webp",
    "/Images/Box10-images/5.webp",
  ],
  box11: [
    "/Images/Box11-images/0.webp",
    "/Images/Box11-images/1.webp",
    "/Images/Box11-images/2.webp",
    "/Images/Box11-images/3.webp",
    "/Images/Box11-images/4.webp",
    "/Images/Box11-images/5.webp",
  ],
  box12: [
    "/Images/Box12-images/0.webp",
    "/Images/Box12-images/1.webp",
    "/Images/Box12-images/2.webp",
    "/Images/Box12-images/3.webp",
    "/Images/Box12-images/4.webp",
    "/Images/Box12-images/5.webp",
  ],
};

setTimeout(() => {
  document.querySelectorAll(".box").forEach((box) => {
    const id = box.id;
    const img = box.querySelector("img");

    if (imageSets[id] && img) {
      // 🔁 Pick a random index from 0 to 5
      const randomIndex = Math.floor(Math.random() * 6);

      // 🧠 Set the image src and store the index
      img.src = imageSets[id][randomIndex];
      box.dataset.index = randomIndex;

      // 🔁 Add click event to cycle through images
      box.addEventListener("click", () => {
        let currentIndex = parseInt(box.dataset.index, 10);
        const nextIndex = (currentIndex + 1) % 6;
        box.dataset.index = nextIndex;
        img.src = imageSets[id][nextIndex];
      });
    }
  });

  // ✅ Entry Animation for .box
  const boxes = document.querySelectorAll(".box");
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const exitAnimations = [];

  boxes.forEach((box, i) => {
    const rect = box.getBoundingClientRect();
    const boxX = rect.left + rect.width / 2;
    const boxY = rect.top + rect.height / 2;
    const dx = boxX - centerX;
    const dy = boxY - centerY;

    gsap.from(box, {
      x: -dx,
      y: -dy,
      scale: 0,
      opacity: 0,
      duration: 2, // slowed down
      ease: "power2.out",
      delay: i * 0.1,
    });

    exitAnimations.push({ element: box, x: dx, y: dy });
  });

  // Timeline with ScrollTrigger
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1",
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
    },
  });

  exitAnimations.forEach(({ element, x, y }) => {
    tl.to(
      element,
      {
        x: x * 5,
        y: y * 5,
        scale: 1.5,
        ease: "sine.inOut",
      },
      0
    );
  });
}, 3000); // 2500ms delay = 2.5 seconds

// ✅ Lines Fade & Slide

// ✅ Line1 Fade Out
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".main",
      start: "top top",
      end: "10%",
      scrub: 0.5,
    },
  })
  .to(".line1", { opacity: 0, duration: 1 });

// ✅ Main Image & Text Scaling Timeline
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "top top",
    end: "200%",
    scrub: 1,
    pin: true,
  },
});

tl1
  .to(
    ".line2",
    {
      left: "-20%",
      ease: "power1.inOut",
    },
    "a"
  )
  .to(
    ".line3",
    {
      right: "-30%",
      ease: "power1.inOut",
    },
    "a"
  )
  .to(
    ".main-div",
    {
      scale: 1,
      ease: "power2.inOut",
    },
    "a"
  )
  .to(
    [
      ".img1",
      ".img2",
      ".img3",
      ".img4",
      ".img5",
      ".img6",
      ".main-div-heading h1",
    ],
    {
      scale: 1,
      opacity: (i, target) =>
        target.matches(".main-div-heading h1") ? 1 : undefined,
      stagger: (i, target) =>
        target.matches(".main-div-heading h1") ? 0.02 : undefined,
      stagger: 0.025,
    },
    "a"
  )
  .to(".main-div-heading", {
    opacity: 0,
  })
  .from(
    ".page2-tag h1",
    {
      opacity: 0,
    },
    "a+=1.5"
  )

  .from(
    ".tag2-line1,.tag2-line2",
    {
      opacity: 0,
    },
    "a+=1.5"
  )
  .from(".right-arrow,.left-arrow", {
    scale: 0,
  })
  .to(".gallery", {
    opacity: 1,
  });

// -------------------------------------------------
let mainDiv = document.querySelector(".main-div");
let right = document.querySelector(".right-arrow");
let left = document.querySelector(".left-arrow");

let Name = document.querySelector(".page2-tag h1");
let galleryBox2 = document.querySelector(".gallery-box2");
let galleryBox1 = document.querySelector(".gallery-box1 h1");
let index = 0; // Current slide index

// Data for each slide
const slides = [
  {
    name: "Zarah Khan",
    description:
      "Co-Founder of STAN WORLDWIDE. Creative with 20+ years shaping brands at the intersection of culture, tech, art & design.",
    text: "<h1>Food <br> Health <br> Music</h1>",
    imgSrc: "/Images/zarah-back-Photoroom.webp",
    bgColor: "#63594F",
  },
  {
    name: "Carla Poirier",
    description:
      "Creative Director and Brand Strategist whose work sits at the intersection of cultural curation and identity-building.",
    text: "<h1>Design <br> Fashion <br> Beauty</h1>",
    imgSrc: "/Images/carla-back-Photoroom.webp",
    bgColor: "#5589CE",
  },
  {
    name: "Kristian Grove Møller",
    description:
      "Co-Founder of STAN WORLDWIDE. Creative with 20+ years shaping brands at the intersection of culture, tech, art & design.",
    text: "<h1>Culture <br> Art <br> Design</h1>",
    imgSrc: "/Images/kristian-back-Photoroom.webp",
    bgColor: "#B0AB92",
  },
  {
    name: "Hasan Khalid",
    description:
      "Anti-disciplinary artist and former Director of Creative Development for GQ magazine.",
    text: "<h1>Travel <br> Food & Wine <br> Music</h1>",
    imgSrc: "/Images/hasan-back-Photoroom.webp",
    bgColor: "#95A7B5",
  },
];

// Function to update the slide
function updateSlide() {
  const images = document.querySelectorAll(
    ".main-img, .img1, .img2, .img3, .img4, .img5, .img6"
  );

  const current = slides[index];

  // Update content
  galleryBox2.innerHTML = current.text;
  galleryBox1.innerHTML = current.description;
  Name.textContent = current.name;
  images.forEach((img) => (img.src = current.imgSrc));
  mainDiv.style.backgroundColor = current.bgColor;

  // GSAP animation
  gsap.from(".page2-tag, .gallery-box1, .gallery-box2", {
    y: 70,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
}

// Right arrow (Next)
right.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlide();
});

// Left arrow (Previous)
left.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});

// Initial load
updateSlide();

// -----------------------------------------------------------
const heading = document.getElementById("animated-heading");
const text = heading.textContent;
heading.innerHTML = "";

text.split("").forEach((char) => {
  const span = document.createElement("span");
  span.className = "letter";
  span.textContent = char;
  heading.appendChild(span);
});

let page2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "0.2%",
    end: "100%",
    scrub: 0.8,
    pin: true,
  },
});

page2.to(".page2", {
  bottom: "0%",
  left: "0%",
  ease: "sine.inOut",
});

let letter = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "0.4%",
    end: "100%",
    scrub: 1,
    pin: true,
    // markers: true,
  },
});

letter.to(".letter", {
  color: "black",
  stagger: 0.07,
  ease: "power1.inOut",
});

// --------------------------------------


// ✅ Page2-Part2 Upward Scroll
let size;

function createTimeline() {
  if (size) {
    size.kill(); // kill existing timeline to prevent stacking
  }

  size = gsap.timeline({
    scrollTrigger: {
      trigger: ".main",
      start: "0.6%",
      end: "300%",
      scrub: 1,
      pin: true,
    },
  });

if (window.innerWidth > 1000) {
  size.fromTo(
    ".page2-part2",
    { top: "200%" },
    {
      top: "-150%",
      ease: "sine.inOut",
    }
  );
} else {
  size.fromTo(
    ".page2-part2",
    { right: "-100%" },
    {
      right: "120%",
      ease: "sine.inOut",
    }
  );
}
}

// Create timeline initially
createTimeline();

// Recreate timeline on resize with debounce
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    createTimeline();
    ScrollTrigger.refresh(); // Refresh ScrollTrigger to update positions
  }, 200); // adjust delay as needed
});

// -------------------------

const shops = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "0.8%",
    end: "400%",
    scrub: 1,
    pin: true,
    // markers: true,
  },
});

shops.to(
    ".shops",
    {
      top: "-264%",
    },
  )
  .from(
    ".curate2,.curate4,.curate6",
    {
      x: 1500,
      y: -1500,
    },
    "c-=0.69"
  )
  .from(
    ".curate3,.curate5",
    {
      x: 1500,
      y: 1500,
    },
    "d-=0.69"
  )
  .from(
    ".your1,.your3",
    {
      x: 1500,
      y: -1500,
    },
    "e-=0.6"
  )
  .from(
    ".your2,.your4",
    {
      x: 1500,
      y: 1500,
    },
    "e-=0.6"
  )
  .from(
    ".taste1,.taste3,.taste5",
    {
      x: 1500,
      y: -1500,
    },
    "f-=0.5"
  )
  .from(
    ".taste2,.taste4",
    {
      x: 1500,
      y: 1500,
    },
    "f-=0.5"
  );


  // ------------


  
const page3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "50%",
    end: "200%",
    scrub: 1,
    pin: true,
    // markers: true,
  },
});

page3
  .to(
    ".page3-line2",
    {
      left: "-20%",
      ease: "power1.inOut",
    },
    "a"
  )
  .to(
    ".page3-line3",
    {
      right: "-30%",
      ease: "power1.inOut",
    },
    "a"
  )
  .to(
    ".page3-main-div",
    {
      scale: 1,
      ease: "power2.inOut",
    },
    "a"
  )
  .to(
    [
      ".page3-img1",
      ".page3-img2",
      ".page3-img3",
      ".page3-img4",
      ".page3-img5",
      ".page3-img6",
    ],
    {
      scale: 1,
      stagger: 0.025,
    },
    "a"
  )
  .to(".clip-bg", {
    opacity: 1,
  })
  .from(".tag3-line1,.tag3-line2", {
    opacity: 0,
  });

// ---------------------------------------------------

const tlNew = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "50.1%",
    end: "+=5000",
    scrub: 2,
    pin: true,
    // markers: true,
  },
});

const centerX2 = 0;
const centerY2 = 48;
const radius = 109;
const steps = 72;
const durationPerStep = 1 / steps;
const boxCount = 13;
const boxDelay = 0.05;

const boxImageSrcs = [
  "./Images/back.webp",
  "/Images/1.webp",
  "/Images/0.webp",
  "/Images/10.webp",
  "/Images/9.webp",
  "/Images/8.webp",
  "/Images/7.webp",
  "/Images/6.webp",
  "/Images/5.webp",
  "/Images/4.webp",
  "/Images/3.webp",
  "/Images/2.webp",
  "./Images/back.webp",
];

let lastBoxAtTop = null;

// 🌀 Circular motion for boxes
for (let i = 0; i <= steps; i++) {
  const angle = (i / steps) * Math.PI * 2 - Math.PI / 2;
  const x = centerX2 + radius * Math.cos(angle);
  const y = centerY2 + radius * Math.sin(angle);

  for (let b = 1; b <= boxCount; b++) {
    const boxSelector = `.box${b}`;
    const delay = i * durationPerStep - boxDelay * b;

    tlNew.to(
      boxSelector,
      {
        left: `${x}%`,
        top: `${y}%`,
        duration: durationPerStep,
        ease: "none",
      },
      delay
    );

    const isAtTop =
      Math.abs(angle) < 0.1 || Math.abs(angle - 2 * Math.PI) < 0.1;

    if (isAtTop) {
      tlNew.call(
        () => {
          if (lastBoxAtTop !== b) {
            lastBoxAtTop = b;
            const img = document.querySelector(".clip-bg img");
            if (img && boxImageSrcs[b - 1]) {
              img.src = boxImageSrcs[b - 1];
            }
          }
        },
        null,
        delay
      );
    }
  }
}

tlNew
  .fromTo(
    ".h1-list h1",
    {
      y: 0,
    },
    {
      y: -3500,
      stagger: 0.035,
    },
    "-=1.4"
  )
  .to(
    ".main-bottom",
    {
      top: "0%",
    },
    "a-=0.9"
  );

const tlBottom = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "50.2%",
    end: "200%",
    scrub: 2,
    pin: true,
    // markers: true,
  },
});

tlBottom
  .to(
    ".bottom-heading1,.bottom-heading2",
    {
      opacity: 0,
    },
    "+=1"
  )
  .to(
    ".bottom-heading3",
    {
      opacity: 1,
    },
    "+=1"
  )
  .to(
    ".telescope",
    {
      height: "50vh",
      width: "90vw",
      duration: 5,
      top: "69%",
    },
    "z+=2"
  )
  .to(
    ".telescope-heading",
    {
      fontSize: "6vw",
      duration: 5,
      left: "50%",
    },
    "z+=2"
  )
  .to(
    ".nav3",
    {
      top: "10%",
      left: "90%",
    },
    "z+=2"
  )
  .to(".nav1", {
    opacity: 1,
  });











