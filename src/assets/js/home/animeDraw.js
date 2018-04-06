import anime from 'animejs'
import loopQuery from '../tools/loopQuery'
import onVisibilityChange from '../tools/onVisibilityChange'
import listen from '../tools/listen'
import removeEvent from '../tools/removeEvent'

const animeDraw = (query, svgQuery = '[stroke]') =>
  loopQuery(document.querySelectorAll(query), icon => {
    const handler = onVisibilityChange(icon, () => {
      anime({
        targets: icon.querySelectorAll(svgQuery),
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: (el, i) => i * 100,
      })
      removeEvent('DOMContentLoaded load scroll resize', handler)
    })

    listen('DOMContentLoaded load scroll resize', handler)
  })

export default animeDraw
