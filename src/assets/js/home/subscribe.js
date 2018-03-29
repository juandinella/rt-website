import { home, faqs } from 'styles'
import moduleSelector from '../tools/moduleSelector'
import toggleMenu from './toggleMenu'

const subscribe = () => {
  const { newsletter, 'sticky-navigation': navigation } = home
  const { 'mobile-menu': mobile } = faqs

  const trigger = moduleSelector(navigation.subscribe)
  const target = document.querySelector(`.${newsletter.input} input`)

  const mobileTrigger = moduleSelector(mobile.subscribe)

  mobileTrigger.addEventListener('click', event => {
    toggleMenu()
    target.focus()
  })

  trigger.addEventListener('click', event => {
    target.focus()
  })
}

export default subscribe
