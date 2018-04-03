import { components } from 'styles'

const open = button => {
  const id = button.getAttribute('data-overlay')

  const overlay = document.querySelector(id)

  const activeClass = components.overlay.active

  if (overlay) overlay.classList.add(activeClass)
}

export default open
