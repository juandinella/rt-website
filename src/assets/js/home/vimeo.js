import { home } from 'styles'
import Player from '@vimeo/player'

const vimeoPlayer = async button => {
  const { intro } = home
  const id = button.getAttribute('data-id')
  const wrapper = document.querySelector(`.${intro.iframe}`)

  const vimeo = document.querySelector('#vimeo-player')

  const player = new Player(vimeo, {
    id,
    title: false,
    autoplay: true,
    byline: false,
  })
  await player.play()
  // Button pls die in peace now...
  button.parentNode.removeChild(button)
  // responsive iframe show yourself!
  wrapper.setAttribute('style', 'display: block')
}

export default vimeoPlayer
