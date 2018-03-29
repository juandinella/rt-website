import { faqs, team } from 'styles'

const toggleMenu = () => {
  const { 'mobile-menu': mobileMenu } = faqs
  const { detail } = team
  const wrapper = document.querySelector(`.${mobileMenu.wrapper}`)
  wrapper.classList.toggle(mobileMenu.active)
  document.body.classList.toggle(detail.frozen)
}

export default toggleMenu
