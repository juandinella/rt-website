/**
 * Serialize an html form to use with Mailchimp
 * @tutorial: https://stackoverflow.com/a/30153391/1293256
 * @param {HTMLElement} form
 *
 * @returns {String} serialized data
 */
const serializeForm = form => {
  // Setup our serialized data
  var serialized = '';

  // Loop through each field in the form
  for (let i = 0; i < form.elements.length; i++) {
    var field = form.elements[i];

    // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
    if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

    // Convert field data to a query string
    if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
      serialized += '&' + encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value);
    }
  }

  return serialized;
}

export default serializeForm
