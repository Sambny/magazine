const blocRendu = document.querySelector(".bloc-rendu");
const backgroundUn = document.querySelector("#background-un");
const backgroundDeux = document.querySelector("#background-deux");
const backgroundTrois = document.querySelector("#background-trois");
const backgroundQuatre = document.querySelector("#background-quatre");

const sansFond = document.querySelector("#sans-fond");
const choixUn = document.querySelector("#choix-un");
const choixDeux = document.querySelector("#choix-deux");
const choixTrois = document.querySelector("#choix-trois");
const choixQuatre = document.querySelector("#choix-quatre");

sansFond.addEventListener("click", ()=>{

    choixUn.style.border = "3px solid black";
    choixDeux.style.border = "0px solid black";
    choixTrois.style.border = "0px solid black";
    choixQuatre.style.border = "0px solid black";

    backgroundUn.style.visibility = "hidden";
    backgroundDeux.style.visibility = "hidden";
    backgroundTrois.style.visibility = "hidden";
    backgroundQuatre.style.visibility = "hidden";
})

choixUn.addEventListener("click", ()=>{

    choixUn.style.border = "3px solid black";
    choixDeux.style.border = "0px solid black";
    choixTrois.style.border = "0px solid black";
    choixQuatre.style.border = "0px solid black";

    backgroundUn.style.visibility = "visible";
    backgroundDeux.style.visibility = "hidden";
    backgroundTrois.style.visibility = "hidden";
    backgroundQuatre.style.visibility = "hidden";
})

choixDeux.addEventListener("click", ()=>{

    choixUn.style.border = "0px solid black";
    choixDeux.style.border = "3px solid black";
    choixTrois.style.border = "0px solid black";
    choixQuatre.style.border = "0px solid black";

    backgroundUn.style.visibility = "hidden";
    backgroundDeux.style.visibility = "visible";
    backgroundTrois.style.visibility = "hidden";
    backgroundQuatre.style.visibility = "hidden";
})

choixTrois.addEventListener("click", ()=>{

    choixUn.style.border = "0px solid black";
    choixDeux.style.border = "0px solid black";
    choixTrois.style.border = "3px solid black";
    choixQuatre.style.border = "0px solid black";

    backgroundUn.style.visibility = "hidden";
    backgroundDeux.style.visibility = "hidden";
    backgroundTrois.style.visibility = "visible";
    backgroundQuatre.style.visibility = "hidden";
})

choixQuatre.addEventListener("click", ()=>{

    choixUn.style.border = "0px solid black";
    choixDeux.style.border = "0px solid black";
    choixTrois.style.border = "0px solid black";
    choixQuatre.style.border = "3px solid black";

    backgroundUn.style.visibility = "hidden";
    backgroundDeux.style.visibility = "hidden";
    backgroundTrois.style.visibility = "hidden";
    backgroundQuatre.style.visibility = "visible";   
})


// color picker

// Récupération de l'élément "color" et de l'objet à colorer
const colorPicker = document.getElementById("color-picker");
const coloredObject = document.getElementById("background-rendu");

// Ajout d'un écouteur d'événement pour détecter les changements de valeur
colorPicker.addEventListener("input", function() {
  // Récupération de la valeur sélectionnée
  const selectedColor = colorPicker.value;
  
  // Application de la couleur sélectionnée à l'objet
  coloredObject.style.backgroundColor = selectedColor;
});