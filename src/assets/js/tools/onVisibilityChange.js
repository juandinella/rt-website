import isElementInViewport from './isInViewPort'

const onVisibilityChange = (el, callback) => {
  let oldVisible
  return function () {
    var visible = isElementInViewport(el);
    if (visible !== oldVisible) {
      oldVisible = visible;
      if (visible) callback()
    }
  }
}

export default onVisibilityChange
