const burgerButton = document.querySelector('.burger-button')

const headerNavigation = document.querySelector('.navigation__list')
const body = document.querySelector('body')

function toggleMenu(){
  headerNavigation.classList.toggle('navigation__list--active')
  burgerButton.classList.toggle('burger-button--event')
  body.classList.toggle('scroll-disabled')
}

//Открытие/Закрытие бургер-попап меню
burgerButton.addEventListener('click', function(event){
  event.preventDefault()
  toggleMenu()
})

//Закрытие на ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    toggleMenu()
  }
}); 