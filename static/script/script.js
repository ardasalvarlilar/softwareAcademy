// JavaScript ile p elementine erişmek
// let listItem = document.querySelectorAll('.list-unstyled li');

// listItem.forEach(function(item) {
//   let pElement = item.querySelector('p');
//   if (pElement) {
    
//     item.addEventListener('click', function() {
//       if(pElement.classList.contains('hide')) {
//         pElement.classList.remove('hide')
//         pElement.classList.add('show')
//       }
//       else if(pElement.classList.contains('show')) {
//         pElement.classList.remove('show')
//         pElement.classList.add('hide')
//       }
//     });
//   }
// });


// const buttons = document.querySelectorAll('.button')
// const acilmislar = document.querySelectorAll('.show')

// console.log(buttons)
// buttons.forEach(btn => {
//   btn.addEventListener('click', () => {
//   const shownElement = btn.parentElement.nextElementSibling
//   const caret = btn.nextElementSibling

//   if(shownElement.classList.contains('hide')){
//     shownElement.classList.remove('hide')
//     shownElement.classList.add('show')
//     caret.classList.add('fa-rotate-180', 'transition')
//     console.log(acilmislar)
//   }
//   else{
//     acilmislar.forEach(acilmis => acilmis.classList.remove('show'))
//   }

//   if(shownElement.classList.contains('show')){
//     shownElement.classList.remove('show')
//     shownElement.classList.add('hide')
//     caret.classList.remove('fa-rotate-180','transition')
//     acilmislar.forEach(acilmis => acilmis.classList.remove('show'))
//   }
//   })
// })

const buttons = document.querySelectorAll('.button')

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const shownElement = btn.parentElement.nextElementSibling
    const caret = btn.nextElementSibling

    const isShown = shownElement.classList.contains('show')

    // Tüm açık elemanları kapat
    buttons.forEach(otherBtn => {
      const otherElement = otherBtn.parentElement.nextElementSibling
      const otherCaret = otherBtn.nextElementSibling

      if (otherBtn !== btn && otherElement.classList.contains('show')) {
        otherElement.classList.remove('show')
        otherElement.classList.add('hide')
        otherCaret.classList.remove('fa-rotate-180', 'transition')
      }
    })

    // Şu anki elemanı aç veya kapat
    if (isShown) {
      shownElement.classList.remove('show')
      shownElement.classList.add('hide')
      caret.classList.remove('fa-rotate-180', 'transition')
    } else {
      shownElement.classList.remove('hide')
      shownElement.classList.add('show')
      caret.classList.add('fa-rotate-180', 'transition')
    }
  })
})
