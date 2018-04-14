const glob = require('glob')
const path = require('path')
var md = require('jstransformer')(require('jstransformer-markdown-it'))

/**
 * getFaqs my ninja
 *
 * @returns {Object} Faqs
 */
function getFaqs () {
  const basePath = './gulp/common/faqs'
  const faqs = []
  const categories = glob.sync(`${basePath}/categories/*.json`)

  categories.forEach(file => {
    const fp = path.join(process.cwd(), file)
    const category = require(fp)
    category.questions = []
    faqs.push(category)
  })

  // Sort the Categories lmao
  faqs.sort((a, b) => a.order - b.order)

  const questions = glob.sync(`${basePath}/*.json`)

  questions.forEach(file => {
    const fp = path.join(process.cwd(), file)
    const question = require(fp)

    const parsedMd = md.render(question.body).body
    question.body = parsedMd

    // Send the correct Q to the A
    const catIndex = faqs.findIndex(cat => cat.title === question.parent)
    const category = faqs[catIndex]
    category.questions.push(question)
  })

  return faqs
}

module.exports = getFaqs
