import asyncFonts from '../tools/async-fonts'
import gtm from './gtm'
import smoothScroll from './smooth-scroll'
import lazyImages from './lazyImages'

const general = () => {
  // Remove no-js for css styling
  document.documentElement.classList.remove('no-js')

  lazyImages()

  asyncFonts({
    href: 'https://fonts.googleapis.com/css?family=Lato:700,900|Source+Sans+Pro:400,400i,600,700,900',
    observer: 'Source Sans Pro'
  })

  asyncFonts({
    observer: 'Lato'
  })

  smoothScroll()

  gtm()
}

export default general
