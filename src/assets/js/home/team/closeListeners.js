import closeModal from './closeModal'
import { team as teamStyles } from 'styles'
import { details } from './helpers'
import moduleSelector from '../../tools/moduleSelector'

const closeListeners = () => {
  const closeButton = moduleSelector(teamStyles.detail.exit)
  const closeAlt = moduleSelector(teamStyles.detail['foot-close'])
  const background = moduleSelector(teamStyles.detail.background)

  closeButton.addEventListener('click', closeModal)
  closeAlt.addEventListener('click', closeModal)
  background.addEventListener('click', closeModal)

  // Hide when hitting escape
  document.body.addEventListener('keyup', event => {
    if (event.keyCode === 27 && details.classList.contains(teamStyles.detail.active)) {
      closeModal()
    }
  })
}

export default closeListeners
