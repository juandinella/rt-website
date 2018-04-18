import animeDraw from './animeDraw'
import { home } from 'styles'

const animations = () => {
  animeDraw({
    query: `.${home.problem.icon} svg`,
    loop: true,
    direction: 'alternate',
  })

  animeDraw({
    query: `.${home.stats.icon} svg`
  })

  animeDraw({
    query: `.${home.how['sector-icon']} svg`
  })

  // Infographic
  animeDraw({
    query: `.${home.how.infographic} .blockchain`,
    svgQuery: 'circle'
  })
  animeDraw({
    query: `.${home.how.infographic} .blockchain`,
    svgQuery: '[stroke-linecap]'
  })
  animeDraw({
    query: `.${home.how.infographic} .ethereum`,
  })
}

export default animations
