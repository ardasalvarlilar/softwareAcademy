// JavaScript ile p elementine erişmek
let listItem = document.querySelectorAll('.list-unstyled li');

listItem.forEach(function(item) {
  let pElement = item.querySelector('p');
  if (pElement) {
    
    item.addEventListener('click', function() {
      if(pElement.classList.contains('hide')) {
        pElement.classList.remove('hide')
        pElement.classList.add('show')
      }
      else if(pElement.classList.contains('show')) {
        pElement.classList.remove('show')
        pElement.classList.add('hide')
      }
    });
  }
});