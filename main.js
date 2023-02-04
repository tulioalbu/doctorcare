window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  let div = document.querySelector('#navigation')
  if (scrollY > 0) {
    div.classList.add('scroll')
  } else {
    div.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if(scrollY > 950) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}


 function openMenu() {
  document.body.classList.add('menu-expanded')
 }


 function closeMenu() {
  document.body.classList.remove('menu-expanded')
 }

 ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
 }).reveal('#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about content');

