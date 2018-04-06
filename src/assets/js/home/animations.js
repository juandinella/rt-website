import animeDraw from './animeDraw'
import { home } from 'styles'

const animations = () => {
  animeDraw(`.${home.problem.icon} svg`)
  animeDraw(`.${home.stats.icon} svg`)
  animeDraw(`.${home.how['sector-icon']} svg`)

  // Infographic
  animeDraw(`.${home.how.infographic} .blockchain`, 'circle')
  animeDraw(`.${home.how.infographic} .blockchain`, '[stroke-linecap]')
  animeDraw(`.${home.how.infographic} .ethereum`, 'polygon')
}

export default animations
