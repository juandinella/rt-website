import { components } from 'styles'

const close = button => {
  const overlay = button.parentNode.parentNode
  overlay.classList.remove(components.overlay.active)
}

export default close
