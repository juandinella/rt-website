import { home } from 'styles'
import moduleSelector from '../tools/moduleSelector'

const subscribe = () => {
  const { newsletter, 'sticky-navigation': navigation } = home

  const trigger = moduleSelector(navigation.subscribe)
  const target = document.querySelector(`.${newsletter.input} input`)

  trigger.addEventListener('click', event => {
    target.focus()
  })
}

export default subscribe
