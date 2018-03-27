function displayMailChimpStatus (data) {
  console.log({data})
  // Get the status message content area
  var mcStatus = document.querySelector('.mc-status');
  if (!mcStatus) return;

  // Update our status message
  mcStatus.innerHTML = data.msg;

  // If error, add error class
  if (data.result === 'error') {
    mcStatus.classList.remove('success-message');
    mcStatus.classList.add('error-message');
    return;
  }

  // Otherwise, add success class
  mcStatus.classList.remove('error-message');
  mcStatus.classList.add('success-message');
}

window.displayMailChimpStatus = displayMailChimpStatus
