const modal = document.getElementById('modal');

//jeg laver en aray med tre objekter, curly brackets deklarerer individuelle objekter
let bioArray = [
    {img: 'Haslev_Bio_643116a'},
    {img: 'Kultur_3D-film_06-0_423539a'},
    {img: 'Sal_02'}
];
//for er et forloop som i parantesen henter et element fra array ind, modal refererer til det tidligere hentede ID
//innerHTML += tilføjer billederne fra array i html dokumentet, inden i det valgte dokument
//billederne i array får også en class
for (element of bioArray){
    modal.innerHTML += `<img src="./Gfx/${element.img}.jpg" class="slides"/>`;
};
let index = 0;
//jeg henter elementerne med .slides ind fra html dokumentet, i form af en variabel
//og laver en variabel som er lig med antallet af slides
//hvis index, som er sat til 0, er højere end slideLength, skal den resette til 0, ellers skal én tilføjes
//hvilket fører til et nyt objekt i array
setInterval(() => {
    const slides = document.querySelectorAll('.slides');
    const slideLength = slides.length;
    index > slideLength - 2 ? index = 0 : index++;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    };

    slides[index].style.display = 'block';
}, 3000);