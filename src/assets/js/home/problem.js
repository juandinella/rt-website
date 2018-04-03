import { tns as tinySlider } from 'tiny-slider/src/tiny-slider.module'
import { home, components } from 'styles'
import moduleSelector from '../tools/moduleSelector'

const problem = () => {
  const problems = moduleSelector(home.problem.problems)
  const slider = tinySlider({
    container: problems,
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
  const line = moduleSelector(home.problem.red)

  prevBtn.addEventListener('click', event => {
    slider.goTo('prev')
  })

  nextBtn.addEventListener('click', event => {
    slider.goTo('next')
  })

  slider.events.on('indexChanged', info => {
    const { index } = info
    const humanIndex = index + 1
    const total = problems.childElementCount
    current.textContent = humanIndex

    const percentage = (humanIndex / total) * 100
    line.setAttribute('width', percentage)
  })
}

export default problem
