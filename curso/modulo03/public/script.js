const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function () {
        const videoID = card.getAttribute('id')
        modalOverlay.classList.add('ativo')
        modalOverlay.querySelector('iframe').src = `http://www.youtube.com/embed/${videoID}`

    })
}

document.querySelector('.close-modal').addEventListener("click", function () {
    modalOverlay.classList.remove('ativo')
    modalOverlay.querySelector('iframe').src = ""
})
