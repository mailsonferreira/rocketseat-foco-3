const modalOverlay = document.querySelector('.modal-overlay')
const cursos = document.querySelectorAll('.curso')

for (let curso of cursos) {
    curso.addEventListener('click', function() {
        const siteID = curso.getAttribute('id')
        modalOverlay.classList.add('ativo')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${siteID}`

    })
}

document.querySelector('.fa-window-maximize').addEventListener('click', function(){
    modalOverlay.classList.add('max')
})
document.querySelector('.fa-window-close').addEventListener('click', function() {
    modalOverlay.classList.remove('ativo')
    modalOverlay.classList.remove('max')
    modalOverlay.querySelector('iframe').src = ''
})
