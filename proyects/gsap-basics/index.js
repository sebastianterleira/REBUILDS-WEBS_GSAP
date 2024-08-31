gsap.to("#box", {
  opacity: 0.6,
  scale: 0.5,
  duration: 3,
  rotation: 720,
  delay: 1,
  x: 1100,
  y: -400,
  background: "blue",
  "border-radius": "50%",
});

gsap.to("#box2", {
  opacity: 0.6,
  scale: 0.5,
  duration: 3,
  rotation: 720,
  delay: 1,
  x: -1100,
  y: 400,
  background: "rgb(0, 140, 255)",
  "border-radius": "50%",
});

gsap.to("#box3", {
  opacity: 0.6,
  scale: 0.5,
  duration: 3,
  rotation: 720,
  delay: 1,
  x: 1100,
  y: 400,
  background: "red",
  "border-radius": "0%",
});

gsap.to("#box4", {
  opacity: 0.6,
  scale: 0.5,
  duration: 3,
  rotation: 720,
  delay: 1,
  x: -1100,
  y: -400,
  background: "#0f0",
  "border-radius": "0%",
});

gsap.from("#box", { x: -500, duration: 1 });
gsap.from("#box2", { x: 500, duration: 1 });
gsap.from("#box3", { x: -500, duration: 1 });
gsap.from("#box4", { x: 500, duration: 1 });

const tl = gsap.timeline();


tl.from("#box5", { opacity: 0, duration: 2, delay: 2 })
  .fromTo("#box5", { background: "#da1", duration: 1.5  }, { rotation: 720, duration: 2 });


// tl.to("#box", { x: 300, duration: 2 })
//   .to("#box", { backgroundColor: "blue", duration: 1 })
//   .to("#box", { scale: 0.5, duration: 1 })
//   .to("#box", { x: 0, duration: 2 })
//   .to("#box", { backgroundColor: "red", duration: 1 })
//   .to("#box", { scale: 1, duration: 1 });

  // Animaciones en secuencia, cada animacion empieza