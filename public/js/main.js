const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

// scroll event
document.addEventListener("scroll", () => {
  navbar.classList.remove("active");
  connectSecWithNavLink();
});


// handeling scroll event nav item
const connectSecWithNavLink = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 60) { //sectiontop = 80px
      current = section.getAttribute("id"); //id= home ,about
    }
  });

  navLinks.forEach((link) => {
    let linkAttribute = link.attributes.href.value;
    link.classList.remove("active");
    if (linkAttribute === `#${current}`) {
      link.classList.add("active");
    }
  });
};


