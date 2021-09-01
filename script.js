const scrollTop = document.querySelector("#scroll-top");

window.addEventListener("scroll", onScroll);
scrollTop.addEventListener("click", handleScrollTop);

function onScroll(e) {
  if (window.scrollY === 0) {
    document.body.classList.remove("scrolled");
  } else if (
    window.scrollY > 0 &&
    !document.body.classList.contains("scrolled")
  ) {
    document.body.classList.add("scrolled");
  }
}

function handleScrollTop() {
  window.scrollTo(0, 0);
}
