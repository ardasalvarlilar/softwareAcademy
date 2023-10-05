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


const buttons = document.querySelectorAll('.button')

console.log(buttons)
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
  const shownElenent = btn.parentElement.nextElementSibling
  const caret = btn.nextElementSibling

  if(shownElenent.classList.contains('hide')){
    shownElenent.classList.remove('hide')
    shownElenent.classList.add('show')
    caret.classList.add('fa-rotate-180', 'transition')
  }
  else if(shownElenent.classList.contains('show')){
    shownElenent.classList.remove('show')
    shownElenent.classList.add('hide')
    caret.classList.remove('fa-rotate-180','transition')
  }
  })
})
// console.log(btn.parentElement.nextElementSibling)

// btn.addEventListener('click', () => {
//   const shownElenent = btn.parentElement.nextElementSibling
//   if(shownElenent.classList.contains('hide')){
//     shownElenent.classList.remove('hide')
//     shownElenent.classList.add('show')
//   }
//   else if(shownElenent.classList.contains('show')){
//     shownElenent.classList.remove('show')
//     shownElenent.classList.add('hide')
//   }
// })