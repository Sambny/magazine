
const boutonUn = document.querySelector(".container-button-un");
const boutonDeux = document.querySelector(".container-button-deux");
const boutonTrois = document.querySelector(".container-button-trois");
const boutonQuatre = document.querySelector(".container-button-quatre");

const texteAccueil = document.querySelector(".container-main p");

console.log(boutonUn);

texteAccueil.addEventListener("click", () =>{
    console.log("Le texte est selectionné");
    texteAccueil.style.opacity = 100;
})

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





