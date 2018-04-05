import Vivus from 'vivus'
import loopQuery from '../tools/loopQuery'
import { home } from 'styles'

const drawingIcons = () => {
  const icons = document.querySelectorAll(`.${home.problem.icon} svg`)

  return loopQuery(icons, icon =>
    new Vivus(icon, { type: 'delayed', duration: 100 })
  )
}

export default drawingIcons
