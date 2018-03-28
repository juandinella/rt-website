import serializeForm from './serializeForm'
import fetchJsonp from 'fetch-jsonp'
import displayMailChimpStatus from './displayMailChimpStatus'
import { home } from 'styles'
import moduleSelector from '../../tools/moduleSelector'

/**
 * Handle mailchimp gracefully
 * @tutorial https://css-tricks.com/form-validation-part-4-validating-mailchimp-subscribe-form/
 */
const submitMailChimpForm = async form => {
  const { newsletter } = home
  const input = moduleSelector(newsletter.input)
  const submit = input.querySelector(`button[type='submit']`)

  submit.setAttribute('disabled', 'true')
  let url = form.getAttribute('action')
  url = url.replace('/post?u=', '/post-json?u=')
  url += serializeForm(form)

  try {
    const res = await fetchJsonp(url, { jsonpCallback: 'c' })
    const data = await res.json()
    displayMailChimpStatus({ form, ...data })
    submit.setAttribute('disabled', 'false')
  } catch (e) {
    console.log(e)
  }
}

export default submitMailChimpForm
