// TODO
// 1. Changer la couleur du paragraphe
const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge");
aMettreEnRouge.style.color = "red";

// 2. Réagir à un clic sur le bouton
const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click");

enRougeSuiteAClick.addEventListener("click", (evt) => {
  evt.target.style.color = "red";
});

// 3. Réagir à un clic sur les H2
const collH2 = document.querySelectorAll("h2");

collH2.forEach((elm) => {
  elm.addEventListener("click", (evt) => {
    evt.target.style.color = "red";
  });
});