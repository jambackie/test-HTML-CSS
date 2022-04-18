const toggleBtn = document.querySelector('.nav-collapse')
const toggleIcon = document.querySelector('.nav-toggle')
const mobileMenu = document.querySelector('.menu-mobile')
const mobileLinks = document.querySelectorAll('.menu-mobile a')

function openMenu () {
  toggleIcon.classList.remove('nav-open')
  toggleIcon.classList.add('nav-close')
  mobileMenu.classList.remove('menu-hidden')
  document.body.classList.add('stop-scroll')
}

function closeMenu () {
  toggleIcon.classList.remove('nav-close')
  toggleIcon.classList.add('nav-open')
  mobileMenu.classList.add('menu-hidden')
  document.body.classList.remove('stop-scroll')
}

toggleBtn.addEventListener('click', () => {
  toggleIcon.classList.contains('nav-open') ? openMenu() : closeMenu()
})

mobileLinks.forEach(el => el.addEventListener('click', closeMenu))
console.log(toggleBtn)