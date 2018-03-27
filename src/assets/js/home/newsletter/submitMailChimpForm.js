import serializeForm from './serializeForm'
import fetchJsonp from 'fetch-jsonp'
import displayMailChimpStatus from './displayMailChimpStatus'

/**
 * Handle mailchimp gracefully
 * @tutorial https://css-tricks.com/form-validation-part-4-validating-mailchimp-subscribe-form/
 */
const submitMailChimpForm = async form => {
  let url = form.getAttribute('action')
  url = url.replace('/post?u=', '/post-json?u=')
  url += serializeForm(form)

  try {
    const res = await fetchJsonp(url, { jsonpCallback: 'c' })
    const data = await res.json()
    displayMailChimpStatus({ form, ...data })
  } catch (e) {
    console.log(e)
  }
}

export default submitMailChimpForm
