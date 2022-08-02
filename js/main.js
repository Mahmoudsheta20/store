let star = document.querySelector('.mains .stars')
let people = document.querySelectorAll('.people .stars')
let asyment = document.querySelectorAll('.asyment .stars')
let ele = `<ion-icon name="star"></ion-icon>`
for (let i = 0; i < 5; i++) {
    star.innerHTML += ele
    asyment.innerHTML += ele

}
for (let j = 0; j < people.length; j++) {
    for (let i = 0; i < 5; i++) {
        people[j].innerHTML += ele
        asyment[j].innerHTML += ele
    }
}

for (let i = 0; i < 5; i++) {

}