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
const database = document.querySelector('input[name="database"]');
const userInterface = document.querySelector('input[name="ui"]');
const composant = document.querySelector('input[name="composant"]');
const cms = document.querySelector('input[name="cms"]');
const statiqueInterface = document.querySelector('input[name="interface"]');
const gestionContenus = document.querySelector('input[name="gestion"]');
const backEnd = document.querySelector('input[name="backend"]');
const formulaire = document.querySelector("form");

const cardGroup = document.querySelector(".card-group");

const allValues = [];

// Handling the number of letter of the textearea

biographie.addEventListener("input", (e) => {
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

btnAdd.addEventListener("click", (e) => {

    e.preventDefault();

    if (nom.value.trim().length < 5) {
        nom.classList.remove("green-border");
        nom.classList.add("red-border");
        return
    } else {
        nom.classList.remove("red-border");
        nom.classList.add("green-border");
    }

    if (prenom.value.trim().length < 3) {
        prenom.classList.remove("green-border");
        prenom.classList.add("red-border");
        return
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
        BaseDonnee: database.value,
        InterfaceUtilisateur: userInterface.value,
        Composant: composant.value,
        Cms: cms.value,
        InterfaceStatique: statiqueInterface.value,
        GestionContenu: gestionContenus.value,
        BackEnd: backEnd.value
    }

    formulaire.reset();

    // allValues.push(formValues);
    displayCards(formValues); 
}) 

// Handling the display of the card content 

let identifiant = 1;

let displayCards = (someContent) =>{
        cardGroup.insertAdjacentHTML("afterbegin", `
            <div class="card" data-id="${identifiant}">
                <div class="card-header"></div>
    
                     <div class="body-content">
                        <div class="body-img">
                            <img src="" alt="Picture" class="avatar">
                        </div>
                        <div class="content">
                            <h3 class="fullName"><span class="mon-nom">${someContent.Nom}</span> <span class="mon-prenom">${someContent.Prenom}</span></h3>
                            <i class="far fa-edit"></i>
                            <i class="far fa-trash-alt"></i>
                        </div>
                    </div>
                        <p class="biographie-description">
                            ${someContent.Biographie}
                        </p>
                            
                        <div class="card-footer">
                            <p class="card-level">
                                ${someContent.Niveau}
                            </p>
                        </div>
                    </div>     
        `)
        identifiant++
    // })

    // Deleting the values
    const deleteBtn = document.querySelector(".fa-trash-alt");
    deleteBtn.addEventListener("click", removeCard);

    // Updating the values
    const updateBtn = document.querySelector(".fa-edit");
    updateBtn.addEventListener("click", (e) => {
        updateCard(someContent)
        
    });
}

// Removing a card
let removeCard = (e) =>{
    e.target.parentElement.parentElement.parentElement.remove()
}

// Updating a card
const updateBtn = document.querySelector(".fa-edit");

let updateCard = (valeur) =>{
    console.log(formulaire.interface.textContent);

    const btnUpdate = document.querySelector(".btn-delete");
    btnUpdate.classList.remove("hide-form-btn");
    btnAdd.classList.add("hide-form-btn");
    formulaire.nom.value = valeur.Nom;
    formulaire.prenom.value = valeur.Prenom;
    // Have to Handle the select
    if(valeur.Niveau == "Debutant"){
        formulaire.formlevel[0].selected = true
        console.log("Yes");
    }

    if (valeur.Niveau == "Intermediaire") {
        formulaire.formlevel[1].selected = true
        console.log("Yes");
    }

    if (valeur.Niveau == "Avance") {
        formulaire.formlevel[2].selected = true
        console.log("Yes");
    }

    formulaire.formlevel.value = valeur.Niveau;
    formulaire.bio.value = valeur.Biographie;
    formulaire.mockup.value = valeur.Maquette;
    formulaire.database.value = valeur.BaseDonnee;
    formulaire.ui.value = valeur.InterfaceUtilisateur;
    formulaire.composant.value = valeur.Composant;
    formulaire.cms.value = valeur.Cms;
    formulaire.interface.value = valeur.InterfaceStatique;
    formulaire.gestion.value = valeur.GestionContenu;
    formulaire.backend.value = valeur.BackEnd;

    btnUpdate.addEventListener("click", (e) =>{
        e.preventDefault()
        let monNom = document.querySelector(".mon-nom");
        let monPrenom = document.querySelector(".mon-prenom");
        let bioDescription = document.querySelector(".biographie-description");
        let cardLevel = document.querySelector(".card-level");

        monNom.textContent = formulaire.nom.value;
        monPrenom.textContent = formulaire.prenom.value;
        bioDescription.textContent = formulaire.bio.value;
        cardLevel.textContent = formulaire.formlevel.value;

        valeur.Nom = monNom.textContent;
        valeur.Prenom = monPrenom.textContent;
        valeur.Biographie = bioDescription.textContent;
        valeur.Niveau = cardLevel.textContent;
        // Have to do the same with the ones left
        valeur.Maquette = formulaire.mockup.value;
        valeur.BaseDonnee = formulaire.database.value;
        valeur.InterfaceUtilisateur = formulaire.ui.value;
        valeur.Composant = formulaire.composant.value;
        valeur.Cms = formulaire.cms.value;
        valeur.InterfaceStatique = formulaire.interface.value;
        valeur.GestionContenu = formulaire.gestion.value;
        valeur.BackEnd = formulaire.backend.value;

        btnUpdate.classList.add("hide-form-btn");
        btnAdd.classList.remove("hide-form-btn");
        
    })
}