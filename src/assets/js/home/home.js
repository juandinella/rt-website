import navigation from './navigation'
import video from './video';
import team from './team'
import roadmap from './roadmap'
import problem from './problem'
import burger from './burger'
import newsletter from './newsletter'
import subscribe from './subscribe'
import mobileLinks from './mobileLinks'
import overlays from './overlays'
import drawingIcons from './drawingIcons'

import { home as styles } from 'styles'

const home = () => {
  navigation()
  burger()
  mobileLinks()
  drawingIcons(`.${styles.problem.icon} svg`)
  drawingIcons(`.${styles.stats.icon} svg`)
  drawingIcons(`.${styles.how['sector-icon']} svg`)
  overlays()
  video()
  team()
  roadmap()
  problem()
  newsletter()
  subscribe()
}

export default home
