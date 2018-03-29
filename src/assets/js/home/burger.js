import loopQuery from '../tools/loopQuery'
import toggleMenu from './toggleMenu'

const burger = () => {
  const triggers = document.querySelectorAll('[data-menu-trigger]')

  loopQuery(triggers, trigger => {
    trigger.addEventListener('click', toggleMenu)
  })
}

export default burger
