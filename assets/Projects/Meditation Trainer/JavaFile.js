let button = document.getElementById('button')
let myVar = setTimeout(breath, 5000);
function breath(){
  button.addEventListener('click', event => {
    event.preventDefault()
    let div = document.createElement('div')
    let aside = document.querySelector('aside')
    div.innerHTML = '<p>Nice and easy, through the nose</p><p>Think of your mantra</p>'
    aside.appendChild(div)
    button.innerHTML = 'inhale done!'
    button.addEventListener('click', event => {
      aside.removeChild(div)
      button.innerHTML = 'Start exhale'
      div.innerHTML = '<p>Slowly, think of your happy place</p><p>Full breath out!</p>'
      aside.appendChild(div)
      button.innerHTML = 'Stop exhale'
      
    })
  })
}

breath()

let submit = document.getElementById('submit')
submit.addEventListener('click', event => {
  event.preventDefault()
  clearTimeout(myVar);
  let breathLog = document.getElementById('breathLog')
  let main = document.querySelector('main')
  breathLog.innerHTML = `<p>${myVar}<p>`
  main.appendChild(breathLog)
})

