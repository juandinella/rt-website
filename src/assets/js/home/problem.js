import { tns as tinySlider } from 'tiny-slider/src/tiny-slider.module'
import { home, components } from 'styles'
import moduleSelector from '../tools/moduleSelector'

const problem = () => {
  const slider = tinySlider({
    container: `.${home.problem.problems}`,
    nav: false,
    controls: false,
    mouseDrag: true,
    autoHeight: true,
    loop: false,
    responsive: {
      1024: {
        disable: true
      }
    }
  })

  const prevBtn = moduleSelector(components.controls.prev)
  const nextBtn = moduleSelector(components.controls.next)
  const current = moduleSelector(components.controls.current)

  prevBtn.addEventListener('click', event => {
    slider.goTo('prev')
  })

  nextBtn.addEventListener('click', event => {
    slider.goTo('next')
  })

  slider.events.on('indexChanged', info => {
    const { index } = info
    current.textContent = index + 1
  })
}

export default problem
