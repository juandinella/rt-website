import submitMailChimpForm from './submitMailChimpForm'
import { home } from 'styles'
import loopQuery from '../../tools/loopQuery'
import { parseInput, resetInput } from './parseEmail'

const newsletter = () => {
  // Submit handlers
  document.addEventListener('submit', event => {
    event.preventDefault()
    submitMailChimpForm(event.target)
  }, false)

  const inputs = document.querySelectorAll(`.${home.newsletter.input} input`)

  // Blur handler
  loopQuery(inputs, input => {
    input.addEventListener('blur', event => {
      parseInput(event.target)
    })
  })

  // Focus handler
  loopQuery(inputs, input => {
    input.addEventListener('focus', event => {
      resetInput(event.target)
    })
  })
}

export default newsletter
