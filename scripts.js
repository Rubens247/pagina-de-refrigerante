let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

//count =3

let count = list.length
let active = 0

console.log(list)

next.onclick = () => {
    let activeold = document.querySelector('.active')
    activeold.classList.remove('active')

    active = active >= count -1 ? 0 : active + 1
    list[active].classList.add('active')
}

prev.onclick = () => {
    let activeold = document.querySelector('.active')
    activeold.classList.remove('active')

    active = active <=  0 ? count -1 : active - 1
    list[active].classList.add('active')
}