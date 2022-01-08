// Handling the database
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDMzNjk4OCwiZXhwIjoxOTU1OTEyOTg4fQ.O26EjW0Jzrc88FqWI-vffu3w8BZb5rIog5lXRvZsdLY";
const API_URL = "https://ucfwtahmifokneimhmrx.supabase.co/rest/v1/studentList";

const cardGroupList = document.querySelector(".card-group-list");
const hiddenDetail = document.querySelector(".detailCard");

// Getting all the fields
const nom = document.querySelector(".detail-nom");
const prenom = document.querySelector(".detail-prenom");
const detailDescription = document.querySelector(".detail-description");
const detailLevel = document.querySelector(".detail-level");
const maquette = document.querySelector("#detail-maquette");
const detailDatabase = document.querySelector("#detail-database");
const detailUi = document.querySelector("#detail-ui");
const detailComposant = document.querySelector("#detail-composant");
const detailCms = document.querySelector("#detail-cms");
const detailInterface = document.querySelector("#detail-interface");
const detailGestion = document.querySelector("#detail-gestion");
const detailBack = document.querySelector("#detail-backend");

// Handling all the things linked with the student list
window.addEventListener("DOMContentLoaded", (event) => {

    fetch(API_URL, {
        method: "GET",
        headers: {
            apikey: API_KEY,
        },
    })
        .then((response) => response.json())
        .then((learners) => {
            learners.forEach((learner) => {
               displayCards(learner)
            })
        })
})

// Creation de cartes
let displayCards = (content) => {
    // cardGroupList.innerHTML = "";
        let identifiant = content.id;
        cardGroupList.insertAdjacentHTML("afterbegin", `
            <div class="card" data-id="${identifiant}">
                <div class="card-header"></div>
    
                     <div class="body-content">
                        <div class="body-img">
                            <img src="#" alt="Picture" class="avatar">
                        </div>
                        <div class="content">
                            <h3 class="fullName"><span class="mon-nom">${content.Nom}</span> <span class="mon-prenom">${content.Prenom}</span></h3>
                            <i class="far fa-edit"></i>
                            <i class="far fa-trash-alt"></i>
                             <i class="far fa-address-card"></i>
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

        let detailBtn = document.querySelector(".fa-address-card");
        let cardId = detailBtn.parentElement.parentElement.parentElement.getAttribute("data-id");

        detailBtn.addEventListener("click", (e)=> {
            cardGroupList.classList.add("hide-content");
            hiddenDetail.classList.remove("hide-content");
            let listClose = document.querySelector(".list-close");

            nom.innerHTML = content.Nom;
            prenom.innerHTML = content.Prenom;
            detailDescription.innerHTML = content.Biographie;
            detailLevel.innerHTML = content.Niveau;
            maquette.innerHTML = content.Maquette;
            maquette.value = content.Maquette;
            detailDatabase.innerHTML = content.BaseDonnee;
            detailDatabase.value = content.BaseDonnee;
            detailUi.innerHTML = content.InterfaceUtilisateur;
            detailUi.value = content.InterfaceUtilisateur;
            detailComposant.innerHTML = content.Composant;
            detailComposant.value = content.Composant;
            detailCms.innerHTML = content.Cms;
            detailCms.value = content.Cms;
            detailInterface.innerHTML = content.InterfaceStatique;
            detailInterface.value = content.InterfaceStatique;
            detailGestion.innerHTML = content.GestionContenu;
            detailGestion.value = content.GestionContenu;
            detailBack.innerHTML = content.BackEnd;
            detailBack.value = content.BackEnd;

            listClose.addEventListener("click", (e)=>{
                hiddenDetail.classList.add("hide-content");
                cardGroupList.classList.remove("hide-content");
            })
        });
}