let index = 0;
carousel();

function carousel() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  index++;
  if (index > slides.length) {index = 1}    
  slides[index-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}