// DOM ELEMENTS
const firstRow = document.getElementById('boern');
const secondRow = document.getElementById('voksen');
const thirdRow = document.getElementById('senior');

// Movies array, contains [image, alt, title, beskrivelse, year]
let movieArray = [
    { image: 'poster01.jpg', alt: "Movies poster", title: "Antebellum", beskrivelse: "Lorem ipsum should be around here...", year: "18+" },
    { image: 'poster02.jpg', alt: "Movies poster", title: "Martin Eden", beskrivelse: "Lorem ipsum should be around here...", year: "16+" },
    { image: 'poster03.jpg', alt: "Movies poster", title: "Officer og Spion", beskrivelse: "Lorem ipsum should be around here...", year: "16+" },
    { image: 'poster04.jpg', alt: "Movies poster", title: "AFTER 2", beskrivelse: "Lorem ipsum should be around here...", year: "11+" },
    { image: 'Poster-Trash1.jpg', alt: "Movies poster", title: "Trash", beskrivelse: "Lorem ipsum should be around here...", year: "11+" },
    { image: 'Poster-Citizenfour1.jpg', alt: "Movies poster", title: "Citizenfour", beskrivelse: "Lorem ipsum should be around here...", year: "16+" },
    { image: 'Poster-Riot1.jpg', alt: "Movies poster", title: "The Riot Club", beskrivelse: "Lorem ipsum should be around here...", year: "16+" },
    { image: 'poster-ida.jpg', alt: "Movies poster", title: "Ida", beskrivelse: "Lorem ipsum should be around here...", year: "11+" },
];

// Add empty variable
let addHtml = "";

// For of loop, of movieArray
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

// Added Html elements to addHtml

// addHtml elements to DOM ELEMENTS
firstRow.innerHTML = addHtml;
secondRow.innerHTML = addHtml;
thirdRow.innerHTML = addHtml;

//------------------------//
// Add slide function 
//------------------------//

// ADD DOM ELEMENTS
const first = document.getElementById('firstRow').querySelectorAll('.movie');
const second = document.getElementById('secondRow').querySelectorAll('.movie');
const third = document.getElementById('thirdRow').querySelectorAll('.movie');

// ADD COUNTERS
let firstCount = 0;
let secondCount = 0;
let thirdCount = 0;

// ADD SKIP BUTTONS (DOM ION-ICONS)
function skipBoern(n) { movieSlide(firstCount += n) };
function skipVoksen(n) { movieSlide(secondCount += n) };
function skipSenior(n) { movieSlide(thirdCount += n) };

// SLIDE FUNCTION
function movieSlide() {
    // WE CALL ON THREE DIFFFRENT DISPLAY NONES, TO TARGT EACH DOM
    displayNone(first)
    displayNone(second)
    displayNone(third)

    // CANNOT BE PASSED INTO FUNCTION, SINCE SKIP IS REFERENCED TO HERE
    firstCount > 1 ? firstCount = 0 : null;
    firstCount < 0 ? firstCount = 1 : null;

    // If above 1 set count to 0, if below 0 set count to 1
    secondCount > 1 ? secondCount = 0 : null;
    secondCount < 0 ? secondCount = 1 : null;

    thirdCount > 1 ? thirdCount = 0 : null;
    thirdCount < 0 ? thirdCount = 1 : null;

    // COUNTER FUNCTION, DISPLAY COUNT
    countAbove(firstCount, first)
    countAbove(secondCount, second)
    countAbove(thirdCount, third)
};

// COUNT FUNCTION (param1, param2)
function countAbove(count, dom) {
    // Replaces params in arguments
    // Display the diffrent counts, if above 0 or 1
    if (count == 1) { firstLine(dom) } // dom is equal to props in firsLine, so goes for secondLine
    if (count == 0) { secondLine(dom) }
};

// DISPLAY NONE FUNCTION
function displayNone(props) { for (i = 0; i < props.length; i++) { props[i].style.display = "none" } }

// DISPLAY FIRST 4 MOVIES
function firstLine(props) {
    // IF BELOW 768px SHOW 2 MOVIES
    if (window.innerWidth < 768) { for (i = 0; i < props.length - 6; i++) { props[i].style.display = "block" } }

    // IF ABOVE 768px SHOW 4 MOVIES
    if (window.innerWidth > 768) { for (i = 0; i < props.length - 4; i++) { props[i].style.display = "block" } }
};

// DISPLAY LAST 4 MOVIES
function secondLine(props) {
    // IF BELOW 768px SHOW LAST 4 MOVIES
    if (window.innerWidth < 768) {
        for (i = 0; i < props.length / 2 + 2; i++) { props[i].style.display = "block" }

        for (i = 0; i < props.length / 2; i++) { props[i].style.display = "none" }
    }

    // IF ABOVE 768px SHOW LAST 4 MOVIES
    if (window.innerWidth > 768) {
        for (i = 0; i < props.length / 2 + 4; i++) { props[i].style.display = "block" }

        for (i = 0; i < props.length / 2; i++) { props[i].style.display = "none" }
    }
};

movieSlide();