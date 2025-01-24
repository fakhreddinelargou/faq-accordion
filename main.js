

// accordion.forEach((acco) => {
//     acco.addEventListener('click', function () {
//         accordion.forEach((remove) => {
//             remove.classList.remove('active')

//         })
//         acco.classList.add('active')

//     })
// })

const accordion = document.querySelectorAll('.accordions')


for(let i = 0 ; i < accordion.length ; i++){

   
}



for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        accordion[i].addEventListener('click', function(){
            this.classList.toggle('active')
        })
        accordion.forEach(item => item.classList.remove('active'));
        // Toggle the clicked one
        this.classList.toggle('active');
    });
}