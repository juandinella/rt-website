import { faqs } from 'styles'
import toggleMenu from './toggleMenu'

const mobileLinks = () => {
  const { 'mobile-menu': menu } = faqs
  const linksWrapper = document.querySelector(`.${menu.links}`)

  linksWrapper.addEventListener('click', event => {
    if (event.target) toggleMenu()
  }, false)
}

export default mobileLinks
