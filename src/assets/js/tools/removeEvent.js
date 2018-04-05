const removeEvent = (events, handler, propagate = false, container = window) => {
  const exploded = events.split(' ')
  exploded.forEach(event =>
    container.removeEventListener(event, handler, propagate)
  )
}

export default removeEvent
