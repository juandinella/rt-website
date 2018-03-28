import { home } from 'styles'
import moduleSelector from '../../tools/moduleSelector'

const displayMailChimpStatus = ({ msg, result, form }) => {
  const { newsletter } = home
  const template = document.querySelector('#subscribed')
  const input = moduleSelector(newsletter.input, form)

  if (result === 'error') {
    input.classList.add(newsletter.invalid)
    return
  }

  form.innerHTML = template.innerHTML
}

export default displayMailChimpStatus
