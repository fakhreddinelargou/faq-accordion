const accordion = document.querySelectorAll('.accordions')


accordion.forEach((acco) => {
    acco.addEventListener('click', function () {
        accordion.forEach((remove) => {
            remove.classList.remove('active')

        })
        acco.classList.add('active')

    })
})






