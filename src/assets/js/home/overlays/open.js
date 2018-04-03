import { components } from 'styles'

const open = button => {
  const id = button.getAttribute('data-overlay')

  const overlay = document.querySelector(id)

  if (overlay) overlay.classList.add(components.overlay.active)
}

export default open
