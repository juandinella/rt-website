import { home } from 'styles'
import moduleSelector from '../../tools/moduleSelector'
import { invalidEmail } from './inputStatus'

const displayMailChimpStatus = ({ msg, result, form }) => {
  const { newsletter } = home
  const template = document.querySelector('#subscribed')
  const input = moduleSelector(newsletter.input, form)

  if (result === 'error') return invalidEmail(input)

  form.innerHTML = template.innerHTML
}

export default displayMailChimpStatus
