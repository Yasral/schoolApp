// Handling the database
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDMzNjk4OCwiZXhwIjoxOTU1OTEyOTg4fQ.O26EjW0Jzrc88FqWI-vffu3w8BZb5rIog5lXRvZsdLY";
const API_URL = "https://ucfwtahmifokneimhmrx.supabase.co/rest/v1/studentList";

const cardGroupList = document.querySelector(".card-group-list");
const hiddenDetail = document.querySelector(".detailCard");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal-close");
const saveModal = document.querySelector("#modal-form");

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

// Getting all the fields from the modal
const modalNom = document.querySelector("#modal-nom");
const modalPrenom = document.querySelector("#modal-prenom");
const modalFormLevel = document.querySelector("#modal-formlevel");
const modalBio = document.querySelector("#modal-bio");
const modalMockup = document.querySelector("#modal-mockup");
const modalDatabase = document.querySelector("#modal-database");
const modalUi = document.querySelector("#modal-ui");
const modalComposant = document.querySelector("#modal-composant");
const modalCms = document.querySelector("#modal-cms");
const modalInterface = document.querySelector("#modal-interface");
const modalGestion = document.querySelector("#modal-gestion");
const modalBackEnd = document.querySelector("#modal-backend");

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
                            <h3 class="fullName"><span class="liste-nom">${content.Nom}</span> <span class="liste-prenom">${content.Prenom}</span></h3>
                            <i class="far fa-edit detail-update"></i>
                            <i class="far fa-trash-alt detail-delete"></i>
                             <i class="far fa-address-card"></i>
                        </div>
                    </div>
                        <p class="liste-description">
                            ${content.Biographie}
                        </p>
                            
                        <div class="card-footer">
                            <p class="liste-level">
                                ${content.Niveau}
                            </p>
                        </div>
                    </div>     
        `)

        let detailBtn = document.querySelector(".fa-address-card");
        let deleteBtn = document.querySelector(".detail-delete");

        deleteBtn.addEventListener("click", (e)=>{
            let cardToDelete = e.target.parentElement.parentElement.parentElement;
            let cardId = cardToDelete.getAttribute("data-id");
            fetch(API_URL + "?id=eq." + cardId,{
                method: "DELETE",
                headers: {
                    apikey: API_KEY,
                    "Content-Type": "application/json",
                     Prefer: "return=representation",
                }
            })
            .then((response)=> response.json())
            .then((data) =>{
                let identifiantCarte = data[0].id;
                if(identifiantCarte == cardId){
                    cardToDelete.remove();
                }
            })
        });

        let updateBtn = document.querySelector(".detail-update");

        updateBtn.addEventListener("click", (e)=>{
            let cardToUpdate = e.target.parentElement.parentElement.parentElement;
            let cardId = cardToUpdate.getAttribute("data-id");

            cardGroupList.classList.add("hide-content");
            modal.classList.remove("hide-content")

            modalNom.value = content.Nom;
            modalPrenom.value = content.Prenom;
            modalFormLevel.value = content.Niveau;
            modalBio.value = content.Biographie;
            modalMockup.value = content.Maquette;
            modalDatabase.value = content.BaseDonnee;
            modalUi.value = content.InterfaceUtilisateur;
            modalComposant.value = content.Composant;
            modalCms.value = content.Cms;
            modalInterface.value = content.InterfaceStatique;
            modalGestion.value = content.GestionContenu;
            modalBackEnd.value = content.BackEnd;

            saveModal.addEventListener("submit", (e)=>{
                e.preventDefault();
                let newStudent = {
                    Nom: modalNom.value,
                    Prenom: modalPrenom.value,
                    Niveau: modalFormLevel.value,
                    Biographie: modalBio.value,
                    Maquette: modalMockup.value,
                    BaseDonnee: modalDatabase.value,
                    InterfaceUtilisateur: modalUi.value,
                    Composant: modalComposant.value,
                    Cms: modalCms.value,
                    InterfaceStatique: modalInterface.value,
                    GestionContenu: modalGestion.value,
                    BackEnd: modalBackEnd.value
                }

                fetch(API_URL + "?id=eq." + cardId, {
                    method: "PATCH",
                    headers:{
                        apikey: API_KEY,
                        "Content-Type": "application/json",
                        Prefer: "return=representation",
                    },
                    body: JSON.stringify(newStudent)
                })
                .then((response) => response.json())
                .then((data) => {
                    let identifiantCarte = data[0].id;
                    if(identifiantCarte == cardId){
                        console.log("Yes");
                        const listeNom = document.querySelector(".liste-nom");
                        const listePrenom = document.querySelector(".liste-prenom");
                        const listeBio = document.querySelector(".liste-description");
                        const listeNiveau = document.querySelector(".liste-level");

                        listeNom.innerHTML = data[0].Nom;
                        listePrenom.innerHTML = data[0].Prenom;
                        listeBio.innerHTML = data[0].Biographie;
                        listeNiveau.innerHTML = data[0].Niveau;

                        modal.classList.add("hide-content");
                        cardGroupList.classList.remove("hide-content");

                        detailBtn.addEventListener("click", (e) => {
                            cardGroupList.classList.add("hide-content");
                            hiddenDetail.classList.remove("hide-content");
                            let listClose = document.querySelector(".list-close");

                            maquette.innerHTML = data[0].Maquette;
                            maquette.value = data[0].Maquette;
                            detailDatabase.innerHTML = data[0].BaseDonnee;
                            detailDatabase.value = data[0].BaseDonnee;
                            detailUi.innerHTML = data[0].InterfaceUtilisateur;
                            detailUi.value = data[0].InterfaceUtilisateur;
                            detailComposant.innerHTML = data[0].Composant;
                            detailComposant.value = data[0].Composant;
                            detailCms.innerHTML = data[0].Cms;
                            detailCms.value = data[0].Cms;
                            detailInterface.innerHTML = data[0].InterfaceStatique;
                            detailInterface.value = data[0].InterfaceStatique;
                            detailGestion.innerHTML = data[0].GestionContenu;
                            detailGestion.value = data[0].GestionContenu;
                            detailBack.innerHTML = data[0].BackEnd;
                            detailBack.value = data[0].BackEnd;

                            listClose.addEventListener("click", (e) => {
                                hiddenDetail.classList.add("hide-content");
                                cardGroupList.classList.remove("hide-content");
                            })
                        }, true)

                        // maquette.innerHTML = data[0].Maquette;
                        // maquette.value = data[0].Maquette;
                        // detailDatabase.innerHTML = data[0].BaseDonnee;
                        // detailDatabase.value = data[0].BaseDonnee;
                        // detailUi.innerHTML = data[0].InterfaceUtilisateur;
                        // detailUi.value = data[0].InterfaceUtilisateur;
                        // detailComposant.innerHTML = data[0].Composant;
                        // detailComposant.value = data[0].Composant;
                        // detailCms.innerHTML = data[0].Cms;
                        // detailCms.value = data[0].Cms;
                        // detailInterface.innerHTML = data[0].InterfaceStatique;
                        // detailInterface.value = data[0].InterfaceStatique;
                        // detailGestion.innerHTML = data[0].GestionContenu;
                        // detailGestion.value = data[0].GestionContenu;
                        // detailBack.innerHTML = data[0].BackEnd;
                        // detailBack.value = data[0].BackEnd;

                    }
                })
            })

            closeModal.addEventListener("click", (e)=>{
                modal.classList.add("hide-content");
                cardGroupList.classList.remove("hide-content");
            })

        })

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