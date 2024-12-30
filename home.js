const sectionEnters = document.querySelectorAll(".sectionslide");
const sectionOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -250px 0px",
};

const sectionOnScroll = new IntersectionObserver(function (
  entries,
  sectionOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("visible");
      sectionOnScroll.unobserve(entry.target);
    }
  });
},
sectionOptions);

sectionEnters.forEach((sectionEnter) => {
  sectionOnScroll.observe(sectionEnter);
});


/*sliding and fading for small elements*/
const faders = document.querySelectorAll(".fade");
const sliders = document.querySelectorAll(".slide");

const appearOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("visible");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

const disappearOptions = {
  threshold: 0.75,
  rootMargin: "0px 0px -250px 0px",
};

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});


sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});



/* menu icons on smaller screens */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};



/* highlighting on differnt nav sections*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })
    }
  });
  
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);


  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active'); 

};




