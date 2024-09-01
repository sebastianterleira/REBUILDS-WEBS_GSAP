document.getElementById("box").addEventListener("mouseover", () => {
  gsap.to("#box", { scale: 1.5, duration: 1 });
});

document.getElementById("box").addEventListener("mouseout", () => {
  gsap.to("#box", { scale: 1, duration: 1 });
});

// ===========================================================================


gsap.registerPlugin(ScrollTrigger);

gsap.to("#box", {
  ScrollTrigger: "#box",
  x: 500, 
  duration: 6,
})

gsap.registerPlugin(Draggable);

Draggable.create("#box", {
  type: "x,y"
});