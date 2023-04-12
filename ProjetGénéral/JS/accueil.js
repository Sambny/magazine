// console.log("Bonjour !");

// const boutonAccueil = document.querySelector('button').style.background = "pink";

// console.log(boutonAccueil);

//click event

const boutonAccueil = document.querySelector(".button");

const texteAccueil = document.querySelector(".container-main p");

console.log(boutonAccueil);

// boutonAccueil.style.borderRadius = "50px";

texteAccueil.addEventListener("click", () =>{
    console.log("Le texte est selectionné");
    texteAccueil.style.opacity = 100;
})






