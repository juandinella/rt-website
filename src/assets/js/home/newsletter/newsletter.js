import submitMailChimpForm from './submitMailChimpForm'
import { home } from 'styles'
import loopQuery from '../../tools/loopQuery'
import { parseInput, resetInput } from './parseEmail'

const newsletter = () => {
  // Disable native validation
  var forms = document.querySelectorAll('form');
  for (var i = 0; i < forms.length; i++) {
    forms[i].setAttribute('novalidate', true)
  }

  // Submit handlers
  document.addEventListener('submit', event => {
    event.preventDefault()
    const form = event.target
    const input = form.querySelector('input')
    const valid = parseInput(input)
    return valid && submitMailChimpForm(form)
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

  // Change
  loopQuery(inputs, input => {
    input.addEventListener('input', event => {
      resetInput(event.target)
    })
  })
}

export default newsletter
