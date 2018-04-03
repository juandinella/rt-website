import open from './open'
import close from './close'
import { components } from 'styles'

const overlays = () => {
  document.body.addEventListener('click', event => {
    const element = event.target
    const isTrigger = element.hasAttribute('data-overlay')
    const isCloseBtn = element.classList.contains(components.overlay.close)

    if (isTrigger) open(element)
    if (isCloseBtn) close(element)
  }, false)
}

export default overlays
