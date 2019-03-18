let first = document.getElementById('first')
let second = document.getElementById('second')
let last = document.getElementById('last')
let date = document.getElementById('date')
let locate = document.getElementById('location')
let h1 = document.getElementById('initials')
let h2 = document.getElementById('names')
let surname = document.getElementById('surname')
let p = document.getElementById('day')
let h4 = document.getElementById('place')
let formal = document.getElementById('formal')
let spring = document.getElementById('spring')
let art = document.getElementById('art')
let radio = document.getElementsByClassName('radio')
let invitation = document.getElementById('invitation')




document.addEventListener('keyup', event =>{
  h1.innerHTML = `${first.value.charAt(0)} & ${second.value.charAt(0)}`
  h2.innerHTML = `${first.value} & ${second.value}`
  surname.innerHTML = last.value
  p.innerHTML = date.value
  h4.innerHTML = locate.value
    
})
  spring.addEventListener('click', event =>{

    invitation.style.backgroundImage = "url('./spring.jpg')"
    invitation.style.fontFamily = "Brush Script Std, cursive";
    invitation.style.color = '#dd425c';
    $('#invitation').fadeOut(1)
    $('#invitation').fadeIn(1500)

})

  art.addEventListener('click', event =>{

    invitation.style.backgroundImage = "url('./art.jpg')"
    invitation.style.fontFamily = "cursive";
    invitation.style.color = '#72448d';
    $('#invitation').fadeOut(1)
    $('#invitation').fadeIn(1500)

})
  formal.addEventListener('click', event =>{
    invitation.style.backgroundImage = "url('./formal.jpg')"
    invitation.style.fontFamily = 'Papyrus';
    invitation.style.color = '#4d3038';
  })






