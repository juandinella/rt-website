import serializeForm from './serializeForm'

/**
 * Handle mailchimp gracefully
 * @tutorial https://css-tricks.com/form-validation-part-4-validating-mailchimp-subscribe-form/
 */
const submitMailChimpForm = form => {
  let url = form.getAttribute('action')
  url = url.replace('/post?u=', '/post-json?u=')
  url += serializeForm(form) + '&c=displayMailChimpStatus'

  // Create script with url and callback (if specified)
  var script = window.document.createElement('script');
  script.src = url;

  // After the script is loaded (and executed), remove it
  script.onload = function () {
    this.remove();
  };
  document.body.appendChild(script)
}

export default submitMailChimpForm
