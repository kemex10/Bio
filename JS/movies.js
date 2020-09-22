const firstRow = document.getElementById('boern');
const secondRow = document.getElementById('voksen');
const thirdRow = document.getElementById('senior');

let movieArray = [
    { image: 'poster01.jpg', alt: "Movies poster", title: "Antebellum", beskrivelse: "Lorem ipsum should be around here...", year: "18+" },
    { image: 'poster02.jpg', alt: "Movies poster", title: "Martin Eden", beskrivelse: "Lorem ipsum should be around here...", year: "15+" },
    { image: 'poster03.jpg', alt: "Movies poster", title: "Officer og Spion", beskrivelse: "Lorem ipsum should be around here...", year: "15+" },
    { image: 'poster04.jpg', alt: "Movies poster", title: "AFTER 2", beskrivelse: "Lorem ipsum should be around here...", year: "11+" },
    { image: 'Poster-Trash1.jpg', alt: "Movies poster", title: "Trash", beskrivelse: "Lorem ipsum should be around here...", year: "11+" },
    { image: 'Poster-Citizenfour1.jpg', alt: "Movies poster", title: "Citizenfour", beskrivelse: "Lorem ipsum should be around here...", year: "15+" },
    { image: 'Poster-Riot1.jpg', alt: "Movies poster", title: "The Riot Club", beskrivelse: "Lorem ipsum should be around here...", year: "15+" },
    { image: 'poster-ida.jpg', alt: "Movies poster", title: "Ida", beskrivelse: "Lorem ipsum should be around here...", year: "11+" },
];

let addHtml = "";

for (el of movieArray) {
    addHtml += `
    <div class="movie">
        <article>
            <header>
                <img src="./Gfx/${el.image}" atl="${el.alt}" />
            </header>
            <footer>
                <h2>${el.title}</h2>
                <p>${el.beskrivelse}</p>
                <span>${el.year}</span>
            </footer>
        </article>
    </div>`
};

firstRow.innerHTML = addHtml;
secondRow.innerHTML = addHtml;
thirdRow.innerHTML = addHtml;

const first = document.getElementById('firstRow').querySelectorAll('.movie');
const second = document.getElementById('secondRow').querySelectorAll('.movie');
const third = document.getElementById('thirdRow').querySelectorAll('.movie');
let firstCount = 0;
let secondCount = 0;
let thirdCount = 0;

function skipBoern(n) { movieSlide(firstCount += n) };
function skipVoksen(n) { movieSlide(secondCount += n) };
function skipSenior(n) { movieSlide(thirdCount += n) };

function movieSlide() {
    displayNone(first)
    displayNone(second)
    displayNone(third)

    firstCount > 1 ? firstCount = 0 : null;
    firstCount < 0 ? firstCount = 1 : null;

    secondCount > 1 ? secondCount = 0 : null;
    secondCount < 0 ? secondCount = 1 : null;

    thirdCount > 1 ? thirdCount = 0 : null;
    thirdCount < 0 ? thirdCount = 1 : null;

    countAbove(firstCount, first)
    countAbove(secondCount, second)
    countAbove(thirdCount, third)
}

function countAbove(count, dom) {
    if (count == 1) { firstLine(dom) }
    if (count == 0) { secondLine(dom) }
}

function displayNone(props) {
    for (i = 0; i < props.length; i++) {
        props[i].style.display = "none"
    }
}

function firstLine(props) {
    if (window.innerWidth < 768) {
        for (i = 0; i < props.length - 6; i++) {
            props[i].style.display = "block"
        }
    }
    if (window.innerWidth > 768) {
        for (i = 0; i < props.length - 4; i++) {
            props[i].style.display = "block"
        }
    }
}

function secondLine(props) {
    if (window.innerWidth < 768) {
        for (i = 0; i < props.length / 2 + 2; i++) {
            props[i].style.display = "block"
        }

        for (i = 0; i < props.length / 2; i++) {
            props[i].style.display = "none"
        }
    }
    if (window.innerWidth > 768) {
        for (i = 0; i < props.length / 2 + 4; i++) {
            props[i].style.display = "block"
        }

        for (i = 0; i < props.length / 2; i++) {
            props[i].style.display = "none"
        }
    }
}

movieSlide()