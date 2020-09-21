const firstRow = document.getElementById('boern');
const secondRow = document.getElementById('voksen');
const thirdRow = document.getElementById('senior');

let movieArray = [
    { image: 'poster01.jpg', alt: "Movies poster", title: "Antebellum", beskrivelse: "Lorem ipsum here...", year: "18+" },
    { image: 'poster02.jpg', alt: "Movies poster", title: "Martin Eden", beskrivelse: "Lorem ipsum here...", year: "13+" },
    { image: 'poster03.jpg', alt: "Movies poster", title: "Love Life", beskrivelse: "Lorem ipsum here...", year: "13+" },
    { image: 'poster04.jpg', alt: "Movies poster", title: "David Copper", beskrivelse: "Lorem ipsum here...", year: "A+" },
    { image: 'poster05.jpg', alt: "Movies poster", title: "Til Sama", beskrivelse: "Lorem ipsum here...", year: "13+" },
    { image: 'poster06.jpg', alt: "Movies poster", title: "Wendy", beskrivelse: "Lorem ipsum here...", year: "A+" },
    { image: 'poster07.jpg', alt: "Movies poster", title: "Officer", beskrivelse: "Lorem ipsum here...", year: "13+" },
    { image: 'poster08.jpg', alt: "Movies poster", title: "Ida", beskrivelse: "Lorem ipsum here...", year: "18+" },
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

let movieCount = 0;

function skip(n) {
    movieSlide(movieCount += n)
};

function movieSlide(n) {
    const movies = document.getElementById('firstRow').querySelectorAll('.movie');

    for (i = 0; i < movies.length; i++) {
        movies[i].style.display = "none"
    }

    for (i = 0; i < movies.length - 4; i++) {
        movies[i].style.display = "block"
    }
}

movieSlide()