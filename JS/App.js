const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
//dette er sådan at når du vælger en film passer prisen på sæderne//
populateUI();
let ticketPrice = + movieSelect.Value;
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}
//dette gør at du kan vælge sæderne//
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
  }
  //gør at når du har valgt et sæde vil det opdater//
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
}
//gør at hvis du ikke har valgt en film er der ingen pris//
const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
if (selectedMovieIndex !== null) {
  movieSelect.selectedIndex = selectedMovieIndex;
}
//dette gør at prisen opdateres til antal sæder//
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});
//gør at de optaget sæder ikke kan tages//
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});
//autoplay video//
let vid = document.getElementById("movie1");
function enableAutoplay() { 
  vid.autoplay = true;
  vid.load();
}