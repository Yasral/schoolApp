/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("// This is for the modules\n\nconsole.log(\"Tout vas bien\");\n\n// Getting all the form inputs\n\nconst biographie = document.querySelector(\"textarea\");\nconst contenuTextuelRestant = document.querySelector(\".char-number\");\nconst btnAdd = document.querySelector(\".btn-add\");\nconst nom = document.querySelector('input[name=\"nom\"]');\nconst prenom = document.querySelector('input[name=\"prenom\"]');\nconst niveau = document.querySelector(\"select\");\nconst maquette = document.querySelector('input[name=\"mockup\"]');\nconst database = document.querySelector('input[name=\"database\"]');\nconst userInterface = document.querySelector('input[name=\"ui\"]');\nconst composant = document.querySelector('input[name=\"composant\"]');\nconst cms = document.querySelector('input[name=\"cms\"]');\nconst statiqueInterface = document.querySelector('input[name=\"interface\"]');\nconst gestionContenus = document.querySelector('input[name=\"gestion\"]');\nconst backEnd = document.querySelector('input[name=\"backend\"]');\nconst formulaire = document.querySelector(\"form\");\n\nconst cardGroup = document.querySelector(\".card-group\");\n\nconst allValues = [];\n\n// Handling the database\nconst API_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDMzNjk4OCwiZXhwIjoxOTU1OTEyOTg4fQ.O26EjW0Jzrc88FqWI-vffu3w8BZb5rIog5lXRvZsdLY\";\nconst API_URL = \"https://ucfwtahmifokneimhmrx.supabase.co/rest/v1/studentList\";\n\n// Handling the number of letter of the textearea\n\nbiographie.addEventListener(\"input\", (e) => {\n    const texteMaximal = 20;\n    const texteSaisi = e.target.value;\n    const longueurTexteSaisi = texteSaisi.length\n\n    const texteRestant = texteMaximal - longueurTexteSaisi;\n\n    contenuTextuelRestant.innerHTML = texteRestant;\n\n    if (texteRestant < 0) {\n        btnAdd.disabled = true;\n        btnAdd.classList.add(\"hide-btn\");\n        biographie.classList.remove(\"green-border\");\n        biographie.classList.add(\"red-border\");\n    } else if (texteSaisi.trim().length >= 10) {\n        btnAdd.disabled = false;\n        btnAdd.classList.remove(\"hide-btn\");\n        biographie.classList.remove(\"red-border\");\n        biographie.classList.add(\"green-border\");\n    }\n\n}, true)\n\n// Getting the values of the card\nbtnAdd.addEventListener(\"click\", (e) => {\n\n    e.preventDefault();\n\n    if (nom.value.trim().length < 5) {\n        nom.classList.remove(\"green-border\");\n        nom.classList.add(\"red-border\");\n        return\n    } else {\n        nom.classList.remove(\"red-border\");\n        nom.classList.add(\"green-border\");\n    }\n\n    if (prenom.value.trim().length < 3) {\n        prenom.classList.remove(\"green-border\");\n        prenom.classList.add(\"red-border\");\n        return\n    } else {\n        prenom.classList.remove(\"red-border\");\n        prenom.classList.add(\"green-border\");\n    }\n    const formValues = {\n        Nom: nom.value,\n        Prenom: prenom.value,\n        Niveau: niveau.value,\n        Biographie: biographie.value,\n        Maquette: maquette.value,\n        BaseDonnee: database.value,\n        InterfaceUtilisateur: userInterface.value,\n        Composant: composant.value,\n        Cms: cms.value,\n        InterfaceStatique: statiqueInterface.value,\n        GestionContenu: gestionContenus.value,\n        BackEnd: backEnd.value\n    }\n\n    // allValues.push(formValues);\n    // displayCards(formValues); \n    allValues.push(formValues);\n    displayCards(allValues);\n\n    // Reseting the form\n    formulaire.reset();\n}) \n\n// Handling the display of the card content \n\nlet identifiant = 0;\n\nlet displayCards = (someContent) =>{\n        cardGroup.innerHTML = \"\";\n        someContent.forEach((content) => {\n            cardGroup.insertAdjacentHTML(\"afterbegin\", `\n            <div class=\"card\" data-id=\"${identifiant}\">\n                <div class=\"card-header\"></div>\n    \n                     <div class=\"body-content\">\n                        <div class=\"body-img\">\n                            <img src=\"\" alt=\"Picture\" class=\"avatar\">\n                        </div>\n                        <div class=\"content\">\n                            <h3 class=\"fullName\"><span class=\"mon-nom\">${content.Nom}</span> <span class=\"mon-prenom\">${content.Prenom}</span></h3>\n                            <i class=\"far fa-edit\"></i>\n                            <i class=\"far fa-trash-alt\"></i>\n                        </div>\n                    </div>\n                        <p class=\"biographie-description\">\n                            ${content.Biographie}\n                        </p>\n                            \n                        <div class=\"card-footer\">\n                            <p class=\"card-level\">\n                                ${content.Niveau}\n                            </p>\n                        </div>\n                    </div>     \n        `)\n            identifiant++\n        });\n        \n    // })\n\n    // Deleting the values\n    const deleteBtn = document.querySelector(\".fa-trash-alt\");\n    deleteBtn.addEventListener(\"click\", removeCard);\n\n    // Updating the values\n    const updateBtn = document.querySelector(\".fa-edit\");\n    updateBtn.addEventListener(\"click\", (e) => {\n        updateCard(someContent)\n        \n    });\n}\n\n// Removing a card\nlet removeCard = (e) =>{\n    e.target.parentElement.parentElement.parentElement.remove()\n}\n\nlet updateCard = (valeur) =>{\n    const btnUpdate = document.querySelector(\".btn-delete\");\n    btnUpdate.classList.remove(\"hide-form-btn\");\n    btnAdd.classList.add(\"hide-form-btn\");\n\n    console.log(valeur);\n\n    // Array code\n    const updateBtn = document.querySelector(\".fa-edit\");\n    console.log(updateBtn);\n    let updateBtnId = updateBtn.parentElement.parentElement.parentElement.dataset.id\n    console.log(updateBtnId);\n    let numberBtnId = Number(updateBtnId);\n    console.log(numberBtnId);\n\n    formulaire.nom.value = valeur[numberBtnId].Nom;\n    formulaire.prenom.value = valeur[numberBtnId].Prenom;\n    // Have to Handle the select\n    if(valeur[numberBtnId].Niveau == \"Debutant\"){\n        formulaire.formlevel[0].selected = true\n    }\n\n    if (valeur[numberBtnId].Niveau == \"Intermediaire\") {\n        formulaire.formlevel[1].selected = true\n    }\n\n    if (valeur[numberBtnId].Niveau == \"Avance\") {\n        formulaire.formlevel[2].selected = true\n    }\n\n    formulaire.formlevel.value = valeur[numberBtnId].Niveau;\n    formulaire.bio.value = valeur[numberBtnId].Biographie;\n    formulaire.mockup.value = valeur[numberBtnId].Maquette;\n    formulaire.database.value = valeur[numberBtnId].BaseDonnee;\n    formulaire.ui.value = valeur[numberBtnId].InterfaceUtilisateur;\n    formulaire.composant.value = valeur[numberBtnId].Composant;\n    formulaire.cms.value = valeur[numberBtnId].Cms;\n    formulaire.interface.value = valeur[numberBtnId].InterfaceStatique;\n    formulaire.gestion.value = valeur[numberBtnId].GestionContenu;\n    formulaire.backend.value = valeur[numberBtnId].BackEnd;\n\n    btnUpdate.addEventListener(\"click\", (e) =>{\n        e.preventDefault()\n        let monNom = document.querySelector(\".mon-nom\");\n        let monPrenom = document.querySelector(\".mon-prenom\");\n        let bioDescription = document.querySelector(\".biographie-description\");\n        let cardLevel = document.querySelector(\".card-level\");\n\n        monNom.textContent = formulaire.nom.value;\n        monPrenom.textContent = formulaire.prenom.value;\n        bioDescription.textContent = formulaire.bio.value;\n        cardLevel.textContent = formulaire.formlevel.value;\n\n        valeur[numberBtnId].Nom = monNom.textContent;\n        valeur[numberBtnId].Prenom = monPrenom.textContent;\n        valeur[numberBtnId].Biographie = bioDescription.textContent;\n        valeur[numberBtnId].Niveau = cardLevel.textContent;\n        // Have to do the same with the ones left\n        valeur[numberBtnId].Maquette = formulaire.mockup.value;\n        valeur[numberBtnId].BaseDonnee = formulaire.database.value;\n        valeur[numberBtnId].InterfaceUtilisateur = formulaire.ui.value;\n        valeur[numberBtnId].Composant = formulaire.composant.value;\n        valeur[numberBtnId].Cms = formulaire.cms.value;\n        valeur[numberBtnId].InterfaceStatique = formulaire.interface.value;\n        valeur[numberBtnId].GestionContenu = formulaire.gestion.value;\n        valeur[numberBtnId].BackEnd = formulaire.backend.value;\n\n        btnUpdate.classList.add(\"hide-form-btn\");\n        btnAdd.classList.remove(\"hide-form-btn\");\n        \n    })\n}\n\n//# sourceURL=webpack://schoolapp/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;