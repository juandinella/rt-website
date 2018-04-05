import Vivus from 'vivus'
import loopQuery from '../tools/loopQuery'

const drawingIcons = query =>
  loopQuery(document.querySelectorAll(query), icon =>
    new Vivus(icon, { type: 'delayed', duration: 100 })
  )

export default drawingIcons
