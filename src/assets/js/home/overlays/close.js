import { components } from 'styles'

const close = button => {
  const overlay = button.parentNode.parentNode
  const activeClass = components.overlay.active
  overlay.classList.remove(activeClass)
}

export default close
