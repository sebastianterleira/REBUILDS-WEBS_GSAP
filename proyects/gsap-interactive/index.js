const box = document.getElementById("box");

box.addEventListener("click", () => {
  const tl = gsap.timeline();

  tl.to("#box", {duration: .2, y: 500})
})

box.addEventListener("mouseover", () => {
  const tl = gsap.timeline();

  tl.to("#box", { scale: 1.5, duration: .4, ease: "elastic.out" })
});

box.addEventListener("mouseout", () => {
  const tl = gsap.timeline();

  tl.to("#box", { scale: 1, duration: .4, ease: "power2.inOut" })
    .to("#box", { color: "#000", duration: .4 });
});

gsap.registerPlugin(Draggable);

Draggable.create("#box", {
  type: "x,y",
  edgeResistance: 1,
  bounds: { left: 0, right: 0, top: 0, bottom: 0 },

  onDrag: () => {
    const tl = gsap.timeline();
    tl.to("#box", { scale: 0.5, duration: .4, ease: "bounce.out"  })
      .to("#box", { color: "#fe1", duration: .4 })
      .to("#box", { color: "#a3a", duration: .4 })
      .to("#box", { color: "#ff2314", duration: .4 })
      .to("#box", { color: "#11ba12", duration: .4 })
      .to("#box", { color:"#1bb", duration: .4 })
      .to("#box", { color: "#da1", duration: .4 })
      .to("#box", { color: "#daa", duration: .4 })
      .to("#box", { color: "#ffa", duration: .4 })
      .to("#box", { color: "#f55432", duration: .4 })
  }
  
});
