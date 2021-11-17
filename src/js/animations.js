import anime from "animejs";
const shootingStars = document.querySelectorAll(".js-shooting-stars");

const getRandomX = () => {
  return Math.floor(Math.random() * Math.floor(window.innerWidth)).toString();
};
const getRandomY = () => {
  return Math.floor(Math.random() * Math.floor(window.innerHeight)).toString();
};

const createShootingStar = (quantity) => {
  for (let i = 0; i < quantity; i++) {
    const star = document.createElement("div");
    star.classList.add("wish");
    star.style.left = `${getRandomY()}px`;
    star.style.top = `${getRandomX()}px`;
    shootingStars.appendChild(star);
  }
};
createShootingStar(60);
anime({
  targets: ".wish",
  easing: "linear",
  loop: true,
  delay: (el, i) => 1000 * i,
  opacity: [{ value: 1, duration: 1000 }],
  width: [
    {
      value: "150px",
    },
    {
      value: "0px",
    },
  ],
  translateX: 350,
});
