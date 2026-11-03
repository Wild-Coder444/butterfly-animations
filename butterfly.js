import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const butterfly = document.querySelector(".img2");
const body = document.querySelector("body");

gsap.to(butterfly, {
  x: 300,
  y: 1700,
  scrollTrigger: {
    trigger: body,
    ease: "linear",
    start: "5% top",
    end: "bottom 0%",
    scrub: true,
  },
});
