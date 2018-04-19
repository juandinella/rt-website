import { home } from 'styles'

const video = () => {
  const { intro } = home
  const button = document.querySelector(`.${intro.button}`)

  button.addEventListener('click', () => {
    import(/* webpackChunkName: "video" */ './vimeo').then(vimeoPlayer => {
      vimeoPlayer.default(button)
    })
  })
}

export default video
