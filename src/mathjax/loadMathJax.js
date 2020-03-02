// const loadScript = require('load-script')
import load from './load'

// mathjax cdn shutdown the 30/04/2017!!! https://cdn.mathjax.org/mathjax/latest/MathJax.js
let DEFAULT_SCRIPT = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js'

DEFAULT_SCRIPT = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
let DEFAULT_OPTIONS = {
  jax: ['input/TeX', 'output/CommonHTML'],
  TeX: {
    extensions: ['autoload-all.js'],
  },
  messageStyles: 'none',
  showProcessingMessages: false,
  showMathMenu: false,
  showMathMenuMSIE: false,
  preview: 'none',
  delayStartupTypeset: true,
}
DEFAULT_OPTIONS = {
  options: { 
    ignoreHtmlClass: 'tex2jax_ignore',  
},   
tex: {

inlineMath: [["$","$"],["\\{","\\}"]],
displayMath: [["$","$"],["$","$"],["\\[","\\]"]],
preview: "none"}

}
const loadMathJax = ({ macros: Macros, script, mathjaxConfig }) => {
  const config = {}
  config.script = script || DEFAULT_SCRIPT
  config.options = mathjaxConfig || DEFAULT_OPTIONS
  if (config.options.TeX === undefined) {
    config.options.TeX = {}
  }
  const TeX = Object.assign(config.options.TeX, { Macros })
  config.options = Object.assign(config.options, { TeX })

  if (window.MathJax) {
    // window.MathJax = config.options;
    // window.MathJax.Hub.Config(config.options)
    // window.MathJax.Hub.processSectionDelay = 0
    return
  }
  load(config.script, (err) => {
    if (!err) {
     
      // window.MathJax.Hub.Config(config.options);
      // window.MathJax = config.options;
      console.log("hello no error", window.MathJax)
      // avoid flickering of the preview
      // window.MathJax.Hub.processSectionDelay = 0
    }
  })
}

export default loadMathJax
