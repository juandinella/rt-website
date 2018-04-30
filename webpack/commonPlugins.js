const webpack = require('webpack')

let common = [
  // Do NOT import the BLOAT from moment.js
  // thanks create-react-app
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new webpack.BannerPlugin(`
    ##      ##    ###    ########  ##    ## #### ##    ##  ######   ####
    ##  ##  ##   ## ##   ##     ## ###   ##  ##  ###   ## ##    ##  ####
    ##  ##  ##  ##   ##  ##     ## ####  ##  ##  ####  ## ##        ####
    ##  ##  ## ##     ## ########  ## ## ##  ##  ## ## ## ##   ####  ##
    ##  ##  ## ######### ##   ##   ##  ####  ##  ##  #### ##    ##
    ##  ##  ## ##     ## ##    ##  ##   ###  ##  ##   ### ##    ##  ####
    ###  ###  ##     ## ##     ## ##    ## #### ##    ##  ######   ####

    Don't edit this file directly. Edit with Webpack.
    Then after you're done run npm run build

    Scaffolded with @pixel2html/generator-frontend
  `)
]

module.exports = common
