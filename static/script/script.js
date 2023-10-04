const links = document.querySelectorAll('.border-bottom') // .link sınıfını seçiyoruz

for (let i of links) {
    i.addEventListener('click', toggleLink)
}

function toggleLink() {
    let willOpen = this.nextSibling
    console.log(willOpen)

    if (willOpen.classList.contains('hide')) {
        willOpen.classList.remove('hide')
        willOpen.classList.add('show')
        // this.querySelector('.fa-plus').classList.toggle('turn')
    } else {
        willOpen.classList.remove('show')
        willOpen.classList.add('hide')
        // this.querySelector('.fa-plus').classList.toggle('turn')
    }
}