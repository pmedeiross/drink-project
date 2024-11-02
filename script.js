let list = document.querySelectorAll(".item")
let next = document.getElementById('next')
let prev = document.getElementById('previous')

// count = 3; active = 0, 1, 2 "telas"
let count = list.length 
let active = 0

// arrow function clique next page
next.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active >= count -1 ? 0 : active + 1
    list[active].classList.add('active')
}

previous.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active <= 0 ? count -1 : active - 1
    list[active].classList.add('active')
}