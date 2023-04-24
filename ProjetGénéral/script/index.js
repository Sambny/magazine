const blocRendu = document.querySelector(".bloc-rendu");
const backgroundUn = document.querySelector("#background-un");
const backgroundDeux = document.querySelector("#background-deux");
const backgroundTrois = document.querySelector("#background-trois");
const backgroundQuatre = document.querySelector("#background-quatre");

const choixUn = document.querySelector("#choix-un");
const choixDeux = document.querySelector("#choix-deux");
const choixTrois = document.querySelector("#choix-trois");
const choixQuatre = document.querySelector("#choix-quatre");

console.log(choixUn);

choixUn.addEventListener("click", ()=>{

    backgroundUn.style.visibility = "visible";
    backgroundDeux.style.visibility = "hidden";
    backgroundTrois.style.visibility = "hidden";
    backgroundQuatre.style.visibility = "hidden";
})

choixDeux.addEventListener("click", ()=>{

    backgroundUn.style.visibility = "hidden";
    backgroundDeux.style.visibility = "visible";
    backgroundTrois.style.visibility = "hidden";
    backgroundQuatre.style.visibility = "hidden";
})

choixTrois.addEventListener("click", ()=>{

    backgroundUn.style.visibility = "hidden";
    backgroundDeux.style.visibility = "hidden";
    backgroundTrois.style.visibility = "visible";
    backgroundQuatre.style.visibility = "hidden";
})

choixQuatre.addEventListener("click", ()=>{

    backgroundUn.style.visibility = "hidden";
    backgroundDeux.style.visibility = "hidden";
    backgroundTrois.style.visibility = "hidden";
    backgroundQuatre.style.visibility = "visible";   
})
