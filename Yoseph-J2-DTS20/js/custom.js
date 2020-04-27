// Effect menu
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

// Effect loading
window.addEventListener("load", function(){
  const loader = document.querySelector(".loading");
  loader.className += "hidden";
})

 // Effect fade in

const option = {
  threshold: 1,
};
const teamCard = document.querySelectorAll(".team, .team2");

const observerFadeDown = new IntersectionObserver((entries, observerFadeIn) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.style.animation = `anim1 .7s ${entry.target.dataset.delay} forwards ease-out`;
    }
  });
}, option);

teamCard.forEach((card) => {
  observerFadeDown.observe(card);
});


const headerSort = document.querySelectorAll(".heading");

const observerheaderSort = new IntersectionObserver((entries, observerheaderSort) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.style.animation = `anim2 .7s ${entry.target.dataset.delay} forwards ease-out`;
    }
  });
}, option);

headerSort.forEach((Sort) => {
  observerheaderSort.observe(Sort);
});

