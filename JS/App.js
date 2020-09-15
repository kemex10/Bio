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