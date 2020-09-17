let start = bodymovin.loadAnimation({
    container: document.getElementById('start'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './JS/start.json'
})

let end = bodymovin.loadAnimation({
    container: document.getElementById('end'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './JS/end.json'
})


const button = document.getElementById('button')
const started = document.getElementById('start')
const ended = document.getElementById('end')
const menu = document.getElementById('menu')
button.addEventListener('click', () => {
    if (!started.classList.contains('active')) {
        started.classList.toggle('active')
        ended.classList.remove('active')
        start.playSegments([0, 60], true)
        button.name = "arrow-forward-outline"
        button.style.color = "white"
        menu.style.display = "block"
    } else {
        started.classList.toggle('active')
        ended.classList.toggle('active')
        end.playSegments([0, 60], true)
        button.name = "arrow-back-outline"
        button.style.color = "black"
        menu.style.display = "none"
    }
})