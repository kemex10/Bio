function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  function myFunction() {
    let x = document.getElementById("Burger");
    if (x.className === "burger") {
      x.className += " responsive";
    } else {
      x.className = "burger";
    }
  }

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  const container = document.querySelector(".container");
  const seats = document.querySelectorAll(".row .seat:not(.occupied)");
  const count = document.getElementById("count");
  const total = document.getElementById("total");
  const movieSelect = document.getElementById("movie");
  
  populateUI();
  
  let ticketPrice = +movieSelect.Value;
  
  function setMovieData(movieIndex, moviePrice) {
      localStorage.setItem("selectedMovieIndex", movieIndex);
      localStorage.setItem("selectedMoviePrice", moviePrice);
  }
  
  function updateSelectedCount() {
      const selectedSeats = document.querySelectorAll(".row .seat.selected");
      
      const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  
      localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  
      const selectedSeatsCount = selectedSeats.length;
  
      count.innerText = selectedSeatsCount;
      total.innerText = selectedSeatsCount * ticketPrice;
  }
  
  function populateUI() {
      const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  
      if (selectedSeats !== null && selectedSeats.lenght > 0) {
          seats.forEach((seat, index) => {
              if (selectedSeats.indexOf(index) > -1) {
                  seat.classList.add("selected");
              }
          });
      }
  }
      const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
      
      if (selectedMovieIndex !== null) {
          movieSelect.selectedIndex = selectedMovieIndex;
      }
  
      movieSelect.addEventListener("change", (e) => {
          ticketPrice = +e.target.value;
          setMovieData(e.target.selectedIndex, e.target.value);
          updateSelectedCount();
      });
  
      container.addEventListener("click", (e) => {
          if (
              e.target.classList.contains("seat") && !e.target.classList.contains
              ("occupied")) {
                  e.target.classList.toggle("selected");
  
                  updateSelectedCount();
              }
      });
  
      updateSelectedCount();
  