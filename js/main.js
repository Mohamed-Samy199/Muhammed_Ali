const banner = document.getElementsByClassName("banner")[0]
const blocks = document.getElementsByClassName("blocks")
for (var i = 1; i < 400; i++) {
    banner.innerHTML += `<div class='blocks'></div>`
    blocks[i].style.animationDelay = `${i * 0.05}s`;

}
const panels = document.querySelectorAll(".panel")
panels.forEach((p) => {
    p.addEventListener("click", () => {
        re();
        p.classList.add("active")
    })
})
const re = () => {
    panels.forEach((p) => {
        p.classList.remove("active")
    })
}
let moAli = document.getElementById("moAli")
let moImage = ['image/b1.png', 'image/b2.png', 'image/b3.png', 'image/b4.png', 'image/b5.png', 'image/b6.png'
    , 'image/b7.png', 'image/b8.png', 'image/b9.png', 'image/b10.png', 'image/b11.png', 'image/b12.png']
setInterval(function () {
    let random = Math.floor(Math.random() * 12)
    moAli.src = moImage[random]
}, 900)
let audio = document.getElementById("audio")
let play = document.getElementById("play")
let loopCount = 0

function playsound() {
    if (loopCount == 0) {
        loopCount = 1
        audio.play()
        play.innerHTML = "&#x2225"
    } else {
        loopCount = 0
        audio.pause()
        play.innerHTML = "&#9658"
    }
}