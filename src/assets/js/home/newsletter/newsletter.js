import submitMailChimpForm from './submitMailChimpForm'
import './displayMailChimpStatus'

const newsletter = () => {
  document.addEventListener('submit', event => {
    event.preventDefault()
    submitMailChimpForm(event.target)
  }, false)
}

export default newsletter
