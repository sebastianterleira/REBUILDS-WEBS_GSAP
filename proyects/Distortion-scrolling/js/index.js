// locmotive scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  smartphone: {
    smooth: true,
  },
});

// hover effect distortion

const hvrDistrn1 = new hoverEffect({
  parent: document.querySelector("#pic01"),
  intensity: 0.5,
  image1: "images/1.jpg",
  image2: "images/2.jpg",
  displacementImage: "images/displacement.png",
  imagesRatio: 1.7,
});

const hvrDistrn2 = new hoverEffect({
  parent: document.querySelector("#pic02"),
  intensity: 0.5,
  image1: "images/4.jpg",
  image2: "images/3.jpg",
  displacementImage: "images/displacement.png",
  imagesRatio: 1.7,
});

const hvrDistrn3 = new hoverEffect({
  parent: document.querySelector("#pic03"),
  intensity: 0.5,
  image1: "images/6.jpg",
  image2: "images/7.jpg",
  displacementImage: "images/displacement.png",
  imagesRatio: 1.7,
});

const hvrDistrn4 = new hoverEffect({
  parent: document.querySelector("#pic04"),
  intensity: 0.5,
  image1: "images/9.jpg",
  image2: "images/10.jpg",
  displacementImage: "images/displacement.png",
  imagesRatio: 1.7,
});

const hvrDistrn5 = new hoverEffect({
  parent: document.querySelector("#pic05"),
  intensity: 0.5,
  image1: "images/5.jpg",
  image2: "images/3.jpg",
  displacementImage: "images/displacement.png",
  imagesRatio: 1.7,
});

const hvrDistrn6 = new hoverEffect({
  parent: document.querySelector("#pic06"),
  intensity: 0.5,
  image1: "images/8.jpg",
  image2: "images/01.jpg",
  displacementImage: "images/displacement.png",
  imagesRatio: 1.7,
});

const hvrDistrn7 = new hoverEffect({
  parent: document.querySelector("#pic07"),
  intensity: 0.5,
  image1: "images/8.jpg",
  image2: "images/01.jpg",
  displacementImage: "images/displacement.png",
  imagesRatio: 1.7,
});

const hvrDistrn8 = new hoverEffect({
  parent: document.querySelector("#pic08"),
  intensity: 0.5,
  image1: "images/8.jpg",
  image2: "images/01.jpg",
  displacementImage: "images/displacement.png",
  imagesRatio: 1.7,
});
