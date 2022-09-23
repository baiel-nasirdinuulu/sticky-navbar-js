window.onload = function () {
  const btn = document.querySelector(".button");
  btn.addEventListener("mouseover", (e) => {
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty("--xPos", x + "px");
    btn.style.setProperty("--yPos", y + "px");
  });

  const navEl = document.querySelector(".header");
  const boxs = document.querySelector(".boxs");
  console.log(boxs);

  window.addEventListener("scroll", () => {
    if (window.scrollY > boxs.offsetTop - navEl.offsetHeight - 50) {
      navEl.classList.add("active-navbar");
    } else {
      navEl.classList.remove("active-navbar");
    }
  });
};
