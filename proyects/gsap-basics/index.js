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

gsap.from("#box", { x: -500, duration: 1 });
gsap.from("#box2", { x: 500, duration: 1 });
gsap.from("#box3", { x: -500, duration: 1 });
gsap.from("#box4", { x: 500, duration: 1 });


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
