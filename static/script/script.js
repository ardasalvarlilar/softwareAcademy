
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
