;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-weixin" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M541.184 558.592c-14.848 0-27.136-12.288-27.136-27.648s12.288-27.648 27.136-27.648 27.136 12.288 27.136 27.648c0.512 15.36-11.776 27.648-27.136 27.648m216.064 19.968c0-71.168-63.488-129.536-143.872-134.656-3.584 0-7.68-0.512-11.264-0.512-85.504 0-155.136 60.416-155.136 134.656 0 11.264 1.536 22.016 4.608 32.256 16.896 58.88 77.824 102.4 150.528 102.4 24.576 0 48.128-5.12 68.608-13.824l34.816 23.552s9.216 6.656 8.192-6.144l-9.728-37.376c32.768-24.064 53.248-59.904 53.248-100.352m-155.136-146.432c3.584 0 6.656 0 9.728 0.512-12.8-75.264-87.552-133.12-177.664-133.12-98.816 0-179.2 70.144-179.2 156.16 0 48.128 25.088 91.136 64 119.808l-13.312 50.176s-4.608 16.384 12.8 9.216l49.664-33.792c20.48 7.168 43.008 11.264 66.56 11.264h6.144c-3.072-10.752-4.608-21.504-4.608-33.28 0-81.408 74.752-146.944 165.888-146.944m71.168 126.464c-14.848 0-27.136-12.288-27.136-27.648s12.288-27.648 27.136-27.648 27.136 12.288 27.136 27.648-12.288 27.648-27.136 27.648m-322.56-124.416c-14.848 0-27.136-12.288-27.136-27.648s12.288-27.648 27.136-27.648 27.136 12.288 27.136 27.648-12.288 27.648-27.136 27.648m161.792 0c-14.848 0-27.136-12.288-27.136-27.648s12.288-27.648 27.136-27.648 27.136 12.288 27.136 27.648c0.512 15.36-11.776 27.648-27.136 27.648" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-douban" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M330.24 323.584h363.52v40.96h-363.52v-40.96zM662.016 567.296v-159.744h-300.032v159.744h300.032z m-256.512-119.296H619.52v78.336h-213.504l-0.512-78.336zM597.504 659.968c12.8-19.968 25.6-43.52 36.864-69.632l-43.52-15.872c-11.264 31.232-24.576 59.904-39.936 85.504h-75.776c-12.288-33.28-26.624-61.44-43.008-85.504l-39.936 15.872c16.384 25.088 29.696 47.616 39.936 69.632h-111.616v40.448h384v-40.448h-107.008z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-weibo" viewBox="0 0 1026 1024">'+
      ''+
      '<path d="M645.632 506.368c-21.504-4.096-11.264-15.872-11.264-15.872s20.992-34.816-4.096-60.416c-31.232-31.232-108.032 4.096-108.032 4.096-29.184 9.216-21.504-4.096-17.408-26.624 0-26.624-9.216-71.168-86.528-44.544-77.824 26.624-144.384 119.808-144.384 119.808-46.592 61.952-40.448 109.568-40.448 109.568 11.776 105.472 123.904 134.656 210.944 141.312 91.648 7.168 215.552-31.744 252.928-111.616 38.4-79.872-29.696-111.616-51.712-115.712m-193.536 197.12c-91.136 4.096-164.864-41.472-164.864-102.4s73.728-109.568 164.864-113.664c91.136-4.096 164.864 33.28 164.864 94.208 0 60.928-73.728 117.76-164.864 121.856" fill="" ></path>'+
      ''+
      '<path d="M433.664 527.872c-91.648 10.752-80.896 96.768-80.896 96.768s-1.024 27.136 24.576 40.96c53.76 29.184 109.056 11.264 136.704-24.576 27.648-36.352 11.264-123.904-80.384-113.152m-23.04 120.32c-16.896 2.048-30.72-7.68-30.72-22.016s12.288-29.184 29.184-30.72c19.456-2.048 32.256 9.216 32.256 23.552 0 13.824-13.824 27.136-30.72 29.184m53.76-46.08c-5.632 4.096-12.8 3.584-15.872-1.536-3.072-5.12-2.048-13.312 4.096-17.408 6.656-5.12 13.824-3.584 16.896 1.536 3.072 5.12 0.512 12.8-5.12 17.408M690.688 468.992c7.168 0 13.824-5.632 14.848-12.8v-1.536c11.264-100.864-82.432-83.456-82.432-83.456-8.192 0-14.848 6.656-14.848 15.36 0 8.192 6.656 14.848 14.848 14.848 67.072-14.848 52.224 52.224 52.224 52.224 0 8.704 6.656 15.36 15.36 15.36" fill="" ></path>'+
      ''+
      '<path d="M679.424 293.376c-32.256-7.68-65.536-1.024-74.752 0.512-0.512 0-1.536 0.512-2.048 1.024-0.512 0-0.512 0.512-0.512 0.512-9.216 2.56-15.872 11.264-15.872 20.992 0 11.776 9.728 22.016 22.016 22.016 0 0 11.776-1.536 19.968-4.608 7.68-3.072 74.752-2.56 108.544 53.76 18.432 40.96 8.192 68.096 6.656 72.704 0 0-4.096 10.752-4.096 20.992 0 12.288 9.728 19.456 21.504 19.456 10.24 0 18.432-1.536 20.992-18.432 35.328-119.296-44.544-175.616-102.4-188.928" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
