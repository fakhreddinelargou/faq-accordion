 const accordion = document.querySelectorAll('.accordions')


// accordion.forEach((acco) => {
//     acco.addEventListener('click', function () {
//         accordion.forEach((remove) => {
//             remove.classList.remove('active')

//         })
//         acco.classList.add('active')

//     })
// })

for(let i = 0 ; i < accordion.length ; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}



