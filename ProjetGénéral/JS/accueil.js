// console.log("Bonjour !");

// const boutonAccueil = document.querySelector('button').style.background = "pink";

// console.log(boutonAccueil);

//click event

const boutonAccueil = document.querySelector(".button");

console.log(boutonAccueil);

// boutonAccueil.style.borderRadius = "50px";

boutonAccueil.addEventListener("click", () => {
    console.log("Vous avez cliqué");
    boutonAccueil.style.background ="red";
    
})

