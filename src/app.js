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
const dbSaveBtn = document.querySelector(".btn-save > button");

const cardGroup = document.querySelector(".card-group");

const allValues = [];

// Handling the database
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDMzNjk4OCwiZXhwIjoxOTU1OTEyOTg4fQ.O26EjW0Jzrc88FqWI-vffu3w8BZb5rIog5lXRvZsdLY";
const API_URL = "https://ucfwtahmifokneimhmrx.supabase.co/rest/v1/studentList";

// Handling the number of letter of the textearea

biographie.addEventListener("input", (e) => {
    const texteMaximal = 130;
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
        index: Date.now(),
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

    allValues.push(formValues);
    displayCards(allValues);
    console.log(allValues);

    // Reseting the form
    formulaire.reset();
}) 

// Handling the display of the card content 

let displayCards = (someContent) =>{
        cardGroup.innerHTML = "";
        someContent.forEach((content) => {
            let identifiant = content.index;
            cardGroup.insertAdjacentHTML("afterbegin", `
            <div class="card" data-id="${identifiant}">
                <div class="card-header"></div>
    
                     <div class="body-content">
                        <div class="body-img">
                            <img src="#" alt="Picture" class="avatar">
                        </div>
                        <div class="content">
                            <h3><span class="mon-nom">${content.Nom}</span> <span class="mon-prenom">${content.Prenom}</span></h3>
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
            // Updating the values
            const updateBtn = document.querySelector(".fa-edit");
            updateBtn.addEventListener("click", (e) => {
                if(formulaire.nom.value != ""){
                    alert("Veuillez faire la mise a jour en cours d'abord");
                    return
                }else{
                    let carteParent = e.target.parentElement.parentElement.parentElement;
                    let carteId = carteParent.dataset.id;
                    allValues.forEach((carte, i) => {
                        if (carte.index == carteId) {
                            updateCard(content)
                            carteParent.remove();
                            allValues.splice(i, 1);
                            console.log(allValues);
                        }
                    });
                }  
            });
        });
        
    // Deleting the values
    const deleteBtn = document.querySelector(".fa-trash-alt");
    deleteBtn.addEventListener("click", removeCard);
}

// Removing a card
let removeCard = (e) =>{
 
    allValues.forEach((carte, i) => {
        let carteParent = e.target.parentElement.parentElement.parentElement;
        let carteId = carteParent.dataset.id;
        if (carte.index == carteId) {
            carteParent.remove();
            allValues.splice(i, 1);
            console.log(allValues);
        }
    });
}

// Updating a card
let updateCard = (valeur) =>{

    console.log(valeur);

    formulaire.nom.value = valeur.Nom;
    formulaire.prenom.value = valeur.Prenom;
    // Have to Handle the select
    if(valeur.Niveau == "Debutant"){
        formulaire.formlevel[0].selected = true
    }

    if (valeur.Niveau == "Intermediaire") {
        formulaire.formlevel[1].selected = true
    }

    if (valeur.Niveau == "Avance") {
        formulaire.formlevel[2].selected = true
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
}

// Saving in the database
dbSaveBtn.addEventListener("click", (e)=>{
    allValues.forEach((learner) => {
        delete learner["index"];
        // Saving the data in the database
        fetch(API_URL, {
            method: "POST",
            headers: {
                apikey: API_KEY,
                "Content-Type": "application/json",
                Prefer: "return=representation",
            },
            body: JSON.stringify(learner)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
    });

   while(allValues.length > 0){
       allValues.pop(); 
   }
   cardGroup.innerHTML = "";
});