// Open animation (played by script Lottie)
let start = bodymovin.loadAnimation({
    container: document.getElementById('start'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './JS/start.json'
})

// Close animation (played by script Lottie)
let end = bodymovin.loadAnimation({
    container: document.getElementById('end'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './JS/end.json'
})

// DOM ELEMENTS
const button = document.getElementById('button')
const started = document.getElementById('start')
const ended = document.getElementById('end')
const menu = document.getElementById('menu')

// EVENTLISTENER (DOM Element button ('click' event))
button.addEventListener('click', () => {
    // If statement, if Dom started, does not contain class active .then
    if (!started.classList.contains('active')) {
        // Arguments
        // Toggle class active onto started
        started.classList.toggle('active')
        // Start animation over (so no loop, or autoplay)
        start.playSegments([0, 60], true)
        // Add styling, and chagne button icon
        button.name = "filter-outline"
        menu.style.display = "block"
    } else {
        // Arguments
        // Toggle class active off, of started
        started.classList.toggle('active')
        ended.classList.toggle('active')
        // Start animation over (so no loop, or autoplay)
        end.playSegments([0, 60], true)
        // Add styling, and chagne button icon
        button.name = "menu-outline"
        menu.style.display = "none"
        ended.classList.remove('active')
    }
})