import Player from '@vimeo/player'
import { home } from 'styles'

const video = () => {
  const { intro } = home
  const button = document.querySelector(`.${intro.button}`)

  button.addEventListener('click', async event => {
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
  })
}

export default video
