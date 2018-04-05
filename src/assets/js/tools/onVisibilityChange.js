import isElementInViewport from './isInViewPort'

const onVisibilityChange = (el, callback) => () =>
  isElementInViewport(el) && callback()

export default onVisibilityChange
