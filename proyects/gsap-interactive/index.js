const box = document.getElementById("box");

box.addEventListener("click", () => {
  const tl = gsap.timeline();

  tl.to("#box", {duration: .2, y: 500})
})

box.addEventListener("mouseover", () => {
  const tl = gsap.timeline();

  tl.to("#box", { scale: 1.5, duration: .4 })
    .to("#box", { color: "#fe1", duration: .4 })
    .to("#box", { color: "#a3a", duration: .4 })
    .to("#box", { color: "#ff2314", duration: .4 })
    .to("#box", { color: "#11ba12", duration: .4 })
    .to("#box", { color:"#1bb", duration: .4 })
    .to("#box", { color: "#da1", duration: .4 })
    .to("#box", { color: "#daa", duration: .4 })
    .to("#box", { color: "#ffa", duration: .4 })
    .to("#box", { color: "#f55432", duration: .4 });
});

box.addEventListener("mouseout", () => {
  const tl = gsap.timeline();

  tl.to("#box", { scale: 1, duration: .2 })
    .to("#box", { color: "#000", duration: .2 });
});

gsap.registerPlugin(Draggable);

Draggable.create("#box", {
  type: "x,y"
});
