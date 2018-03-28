const moduleSelector = (module, element) => {
  const transformed = module.split(' ')
    .map(c => `.${c}`)
    .join('')
  return element
    ? element.querySelector(transformed)
    : document.querySelector(transformed)
}

export default moduleSelector
