
const boutonUn = document.querySelector(".container-button-un");
const boutonDeux = document.querySelector(".container-button-deux");
const boutonTrois = document.querySelector(".container-button-trois");
const boutonQuatre = document.querySelector(".container-button-quatre");

const switchMode = document.querySelector(".switch-mode");
const backgroundColor = document.querySelector(".container-fullPage");
const backgroundImage = document.querySelector(".background-image");

console.log(boutonUn);


// blague des boutons qui changent de placce
boutonUn.addEventListener("click", ()=>{
    boutonUn.style.visibility = "hidden";
    boutonDeux.style.visibility = "visible";   
})

boutonDeux.addEventListener("click", ()=>{
    boutonDeux.style.visibility = "hidden";
    boutonTrois.style.visibility = "visible";  
})

boutonTrois.addEventListener("click", ()=>{
    boutonTrois.style.visibility = "hidden";
    boutonQuatre.style.visibility = "visible";  
})

// Passer du dark mode au light mode 

switchMode.addEventListener("click", ()=>{
    backgroundColor.classList.toggle('clicked');
})

/* <script>
  const button = document.getElementById('change-button');
  const container = document.querySelector('.change-background');

  button.addEventListener('click', () => {
    container.
  });
</script> */