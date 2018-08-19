let rightNav = document.getElementById("right-nav");
let navbarToggle = document.getElementById("navbar-toggle");

navbarToggle.addEventListener("click", function() {
  if (this.classList.contains("active")) {
    rightNav.style.display = "none";
    this.classList.remove("active");
  } else {
    rightNav.style.display = "flex";
    this.classList.add("active");
  }
});
