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

eval("// This is for the modules\n\nconsole.log(\"Tout vas bien\");\n\n// Getting all the form inputs\n\nconst biographie = document.querySelector(\"textarea\");\nconst contenuTextuelRestant = document.querySelector(\".char-number\");\nconst btnAdd = document.querySelector(\".btn-add\");\nconst nom = document.querySelector('input[name=\"nom\"]');\nconst prenom = document.querySelector('input[name=\"prenom\"]');\nconst niveau = document.querySelector(\"select\");\nconst maquette = document.querySelector('input[name=\"mockup\"]');\nconst userInterface = document.querySelector('input[name=\"ui\"]');\nconst composant = document.querySelector('input[name=\"composant\"]');\nconst uiStatique = document.querySelector('input[name=\"ui-statique\"]');\nconst gestionContenus = document.querySelector('input[name=\"gestion-contenus\"]');\nconst backEnd = document.querySelector('input[name=\"back-end\"]');\nconst formulaire = document.querySelector(\"form\");\n\nconst allValues = [];\n\n// Handling the number of letter of the textearea\n\nbiographie.addEventListener(\"input\", (e) => {\n    // e.target.classList.add(\"red-border\")\n    const texteMaximal = 20;\n    const texteSaisi = e.target.value;\n    const longueurTexteSaisi = texteSaisi.length\n\n    const texteRestant = texteMaximal - longueurTexteSaisi;\n\n    contenuTextuelRestant.innerHTML = texteRestant;\n\n    if (texteRestant < 0) {\n        btnAdd.disabled = true;\n        btnAdd.classList.add(\"hide-btn\");\n        biographie.classList.remove(\"green-border\");\n        biographie.classList.add(\"red-border\");\n    } else if (texteSaisi.trim().length >= 10) {\n        btnAdd.disabled = false;\n        btnAdd.classList.remove(\"hide-btn\");\n        biographie.classList.remove(\"red-border\");\n        biographie.classList.add(\"green-border\");\n    }\n\n}, true)\n\nformulaire.addEventListener(\"submit\", (e) => {\n    // let name = nom.value;\n    // let surname = prenom.value;\n    // let level = niveau.value;\n    // let description = biographie.value;\n    // let mockup = maquette.value;\n    // let ui = userInterface.value;\n    // let composantDonnee = composant.value;\n    // let uiStatiques = uiStatique.value;\n    // let gestionContenu = gestionContenus.value;\n    // let backEnds = backEnd.value;\n\n    e.preventDefault();\n\n    if (nom.value.trim().length < 5) {\n        nom.classList.remove(\"green-border\");\n        nom.classList.add(\"red-border\");\n    } else {\n        nom.classList.remove(\"red-border\");\n        nom.classList.add(\"green-border\");\n    }\n\n    if (prenom.value.trim().length < 3) {\n        prenom.classList.remove(\"green-border\");\n        prenom.classList.add(\"red-border\");\n    } else {\n        prenom.classList.remove(\"red-border\");\n        prenom.classList.add(\"green-border\");\n    }\n    const formValues = {\n        Nom: nom.value,\n        Prenom: prenom.value,\n        Niveau: niveau.value,\n        Biographie: biographie.value,\n        Maquette: maquette.value,\n        InterfaceUtilisateur: userInterface.value,\n        Composant: composant.value,\n        InterfaceStatique: uiStatique.value,\n        GestionContenu: gestionContenus.value,\n        BackEnd: backEnd.value\n    }\n\n    allValues.push(formValues);\n    console.log(allValues);    \n})  \n\n//# sourceURL=webpack://schoolapp/./src/app.js?");

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