// This is for the modules

console.log("Tout vas bien");

// Getting all the form inputs

const biographie = document.querySelector("textarea");
const contenuTextuelRestant = document.querySelector(".char-number");
const btnAdd = document.querySelector(".btn-add");
const nom = document.querySelector('input[name="nom"]');
const prenom = document.querySelector('input[name="prenom"]');
const niveau = document.querySelector("select");
const maquette = document.querySelector('input[name="mockup"]');
const userInterface = document.querySelector('input[name="ui"]');
const composant = document.querySelector('input[name="composant"]');
const uiStatique = document.querySelector('input[name="ui-statique"]');
const gestionContenus = document.querySelector('input[name="gestion-contenus"]');
const backEnd = document.querySelector('input[name="back-end"]');
const formulaire = document.querySelector("form");

const allValues = [];

// Handling the number of letter of the textearea

biographie.addEventListener("input", (e) => {
    // e.target.classList.add("red-border")
    const texteMaximal = 20;
    const texteSaisi = e.target.value;
    const longueurTexteSaisi = texteSaisi.length

    const texteRestant = texteMaximal - longueurTexteSaisi;

    contenuTextuelRestant.innerHTML = texteRestant;

    if (texteRestant < 0) {
        btnAdd.disabled = true;
        btnAdd.classList.add("hide-btn");
        biographie.classList.remove("green-border");
        biographie.classList.add("red-border");
    } else if (texteSaisi.trim().length >= 10) {
        btnAdd.disabled = false;
        btnAdd.classList.remove("hide-btn");
        biographie.classList.remove("red-border");
        biographie.classList.add("green-border");
    }

}, true)

formulaire.addEventListener("submit", (e) => {
    // let name = nom.value;
    // let surname = prenom.value;
    // let level = niveau.value;
    // let description = biographie.value;
    // let mockup = maquette.value;
    // let ui = userInterface.value;
    // let composantDonnee = composant.value;
    // let uiStatiques = uiStatique.value;
    // let gestionContenu = gestionContenus.value;
    // let backEnds = backEnd.value;

    e.preventDefault();

    if (nom.value.trim().length < 5) {
        nom.classList.remove("green-border");
        nom.classList.add("red-border");
    } else {
        nom.classList.remove("red-border");
        nom.classList.add("green-border");
    }

    if (prenom.value.trim().length < 3) {
        prenom.classList.remove("green-border");
        prenom.classList.add("red-border");
    } else {
        prenom.classList.remove("red-border");
        prenom.classList.add("green-border");
    }
    const formValues = {
        Nom: nom.value,
        Prenom: prenom.value,
        Niveau: niveau.value,
        Biographie: biographie.value,
        Maquette: maquette.value,
        InterfaceUtilisateur: userInterface.value,
        Composant: composant.value,
        InterfaceStatique: uiStatique.value,
        GestionContenu: gestionContenus.value,
        BackEnd: backEnd.value
    }

    allValues.push(formValues);
    console.log(allValues);    
})  