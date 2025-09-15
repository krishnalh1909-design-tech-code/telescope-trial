window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};


 window.addEventListener('load', () => {
      // Hide loader after page fully loads
      document.body.classList.add('loaded');
      // Show your actual content
      document.getElementById('content').style.display = 'block';
      // Optional: remove loader from DOM after fade out transition
      setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none';
      }, 2500);
    });


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

const signinBtn = document.querySelector(".nav3 h1");
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
        x: x * 2,
        y: y * 2,
        scale: 1.5,
        ease: "sine.inOut",
      },
      0
    );
  });
}, 800); // 2500ms delay = 2.5 seconds


// // ✅ Lines Fade & Slide
// gsap.from(".line1, .line2, .line3", {
//   opacity: 0,
//   y: 70,
//   duration: 3,
//   stagger: 0.6,
//   ease: "power2.out",
// });

// // ✅ Line1 Fade Out
// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".main",
//       start: "top top",
//       end: "10%",
//       scrub: 0.5,
//     },
//   })
//   .to(".line1", { opacity: 0, duration: 1 });

// // ✅ Main Image & Text Scaling Timeline
// const tl1 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".main",
//     start: "top top",
//     end: "250%",
//     scrub: 1,
//     pin: true,
//   },
// });

// tl1
//   .to(
//     ".line2",
//     {
//       left: "-20%",
//       ease: "power1.inOut",
//     },
//     "a"
//   )
//   .to(
//     ".line3",
//     {
//       right: "-30%",
//       ease: "power1.inOut",
//     },
//     "a"
//   )
//   .to(
//     ".main-div",
//     {
//       scale: 1,
//       ease: "power2.inOut",
//     },
//     "a"
//   )
//   .to(
//     [
//       ".img1",
//       ".img2",
//       ".img3",
//       ".img4",
//       ".img5",
//       ".img6",
//       ".main-div-heading h1",
//     ],
//     {
//       scale: 1,
//       opacity: (i, target) =>
//         target.matches(".main-div-heading h1") ? 1 : undefined,
//       stagger: (i, target) =>
//         target.matches(".main-div-heading h1") ? 0.02 : undefined,
//       stagger: 0.025,
//     },
//     "a"
//   )
//   .to(".main-div-heading", {
//     opacity: 0,
//   })
//   .from(
//     ".page2-tag h1",
//     {
//       opacity: 0,
//     },
//     "a+=1.5"
//   )

//   .from(
//     ".tag2-line1,.tag2-line2",
//     {
//       opacity: 0,
//     },
//     "a+=1.5"
//   )
//   .from(".right-arrow,.left-arrow", {
//     scale: 0,
//   })
//   .to(".gallery", {
//     opacity: 1,
//   });

// // -------------------------------------------------
// let mainDiv = document.querySelector(".main-div");
// let right = document.querySelector(".right-arrow");
// let left = document.querySelector(".left-arrow");

// let Name = document.querySelector(".page2-tag h1");
// let galleryBox2 = document.querySelector(".gallery-box2");
// let galleryBox1 = document.querySelector(".gallery-box1 h1");
// let index = 0; // Current slide index

// // Data for each slide
// const slides = [
//   {
//     name: "Zarah Khan",
//     description:
//       "Co-Founder of STAN WORLDWIDE. Creative with 20+ years shaping brands at the intersection of culture, tech, art & design.",
//     text: "<h1>Food <br> Health <br> Music</h1>",
//     imgSrc: "/Images/zarah-back-Photoroom.webp",
//     bgColor: "#63594F",
//   },
//   {
//     name: "Carla Poirier",
//     description:
//       "Creative Director and Brand Strategist whose work sits at the intersection of cultural curation and identity-building.",
//     text: "<h1>Design <br> Fashion <br> Beauty</h1>",
//     imgSrc: "/Images/carla-back-Photoroom.webp",
//     bgColor: "#5589CE",
//   },
//   {
//     name: "Kristian Grove Møller",
//     description:
//       "Co-Founder of STAN WORLDWIDE. Creative with 20+ years shaping brands at the intersection of culture, tech, art & design.",
//     text: "<h1>Culture <br> Art <br> Design</h1>",
//     imgSrc: "/Images/kristian-back-Photoroom.webp",
//     bgColor: "#B0AB92",
//   },
//   {
//     name: "Hasan Khalid",
//     description:
//       "Anti-disciplinary artist and former Director of Creative Development for GQ magazine.",
//     text: "<h1>Travel <br> Food & Wine <br> Music</h1>",
//     imgSrc: "/Images/hasan-back-Photoroom.webp",
//     bgColor: "#95A7B5",
//   },
// ];

// // Function to update the slide
// function updateSlide() {
//   const images = document.querySelectorAll(
//     ".main-img, .img1, .img2, .img3, .img4, .img5, .img6"
//   );

//   const current = slides[index];

//   // Update content
//   galleryBox2.innerHTML = current.text;
//   galleryBox1.innerHTML = current.description;
//   Name.textContent = current.name;
//   images.forEach((img) => (img.src = current.imgSrc));
//   mainDiv.style.backgroundColor = current.bgColor;

//   // GSAP animation
//   gsap.from(".page2-tag, .gallery-box1, .gallery-box2", {
//     y: 70,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//   });
// }

// // Right arrow (Next)
// right.addEventListener("click", () => {
//   index = (index + 1) % slides.length;
//   updateSlide();
// });

// // Left arrow (Previous)
// left.addEventListener("click", () => {
//   index = (index - 1 + slides.length) % slides.length;
//   updateSlide();
// });

// // Initial load
// updateSlide();

// // -----------------------------------------------------------
