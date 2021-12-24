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

// Handling the database
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDMzNjk4OCwiZXhwIjoxOTU1OTEyOTg4fQ.O26EjW0Jzrc88FqWI-vffu3w8BZb5rIog5lXRvZsdLY";
const API_URL = "https://ucfwtahmifokneimhmrx.supabase.co/rest/v1/studentList";

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

// Getting the values of the card
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

    // allValues.push(formValues);
    // displayCards(formValues); 
    allValues.push(formValues);
    displayCards(allValues);

    // Reseting the form
    formulaire.reset();
}) 

// Handling the display of the card content 

let identifiant = 0;

let displayCards = (someContent) =>{
        cardGroup.innerHTML = "";
        someContent.forEach((content) => {
            cardGroup.insertAdjacentHTML("afterbegin", `
            <div class="card" data-id="${identifiant}">
                <div class="card-header"></div>
    
                     <div class="body-content">
                        <div class="body-img">
                            <img src="" alt="Picture" class="avatar">
                        </div>
                        <div class="content">
                            <h3 class="fullName"><span class="mon-nom">${content.Nom}</span> <span class="mon-prenom">${content.Prenom}</span></h3>
                            <i class="far fa-edit"></i>
                            <i class="far fa-trash-alt"></i>
                        </div>
                    </div>
                        <p class="biographie-description">
                            ${content.Biographie}
                        </p>
                            
                        <div class="card-footer">
                            <p class="card-level">
                                ${content.Niveau}
                            </p>
                        </div>
                    </div>     
        `)
            identifiant++
        });
        
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

let updateCard = (valeur) =>{
    const btnUpdate = document.querySelector(".btn-delete");
    btnUpdate.classList.remove("hide-form-btn");
    btnAdd.classList.add("hide-form-btn");

    console.log(valeur);

    // Array code
    const updateBtn = document.querySelector(".fa-edit");
    console.log(updateBtn);
    let updateBtnId = updateBtn.parentElement.parentElement.parentElement.dataset.id
    console.log(updateBtnId);
    let numberBtnId = Number(updateBtnId);
    console.log(numberBtnId);

    formulaire.nom.value = valeur[numberBtnId].Nom;
    formulaire.prenom.value = valeur[numberBtnId].Prenom;
    // Have to Handle the select
    if(valeur[numberBtnId].Niveau == "Debutant"){
        formulaire.formlevel[0].selected = true
    }

    if (valeur[numberBtnId].Niveau == "Intermediaire") {
        formulaire.formlevel[1].selected = true
    }

    if (valeur[numberBtnId].Niveau == "Avance") {
        formulaire.formlevel[2].selected = true
    }

    formulaire.formlevel.value = valeur[numberBtnId].Niveau;
    formulaire.bio.value = valeur[numberBtnId].Biographie;
    formulaire.mockup.value = valeur[numberBtnId].Maquette;
    formulaire.database.value = valeur[numberBtnId].BaseDonnee;
    formulaire.ui.value = valeur[numberBtnId].InterfaceUtilisateur;
    formulaire.composant.value = valeur[numberBtnId].Composant;
    formulaire.cms.value = valeur[numberBtnId].Cms;
    formulaire.interface.value = valeur[numberBtnId].InterfaceStatique;
    formulaire.gestion.value = valeur[numberBtnId].GestionContenu;
    formulaire.backend.value = valeur[numberBtnId].BackEnd;

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

        valeur[numberBtnId].Nom = monNom.textContent;
        valeur[numberBtnId].Prenom = monPrenom.textContent;
        valeur[numberBtnId].Biographie = bioDescription.textContent;
        valeur[numberBtnId].Niveau = cardLevel.textContent;
        // Have to do the same with the ones left
        valeur[numberBtnId].Maquette = formulaire.mockup.value;
        valeur[numberBtnId].BaseDonnee = formulaire.database.value;
        valeur[numberBtnId].InterfaceUtilisateur = formulaire.ui.value;
        valeur[numberBtnId].Composant = formulaire.composant.value;
        valeur[numberBtnId].Cms = formulaire.cms.value;
        valeur[numberBtnId].InterfaceStatique = formulaire.interface.value;
        valeur[numberBtnId].GestionContenu = formulaire.gestion.value;
        valeur[numberBtnId].BackEnd = formulaire.backend.value;

        btnUpdate.classList.add("hide-form-btn");
        btnAdd.classList.remove("hide-form-btn");
        
    })
}