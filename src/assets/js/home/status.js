import anime from 'animejs'
import { home } from 'styles'

const status = () => {
  const styles = home['project-status']
  anime({
    targets: `.${styles.progress} .progress-bar`,
    duration: 1500,
    d: [
      { value: 'M26,16 L288,16 L288,48 L26,48 C17.163444,48 10,40.836556 10,32 L10,32 C10,23.163444 17.163444,16 26,16 Z' },
    ],
    easing: 'easeInOutSine',
  })
}

export default status
