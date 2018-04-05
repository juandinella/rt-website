const listen = (events, handler, propagate = false, container = window) => {
  const exploded = events.split(' ')
  exploded.forEach(event =>
    container.addEventListener(event, handler, propagate)
  )
}

export default listen
