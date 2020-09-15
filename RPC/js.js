const formulaire = document.querySelector(".formulaire");
const jouer = document.querySelector(".jouer");
const game = document.querySelector(".game");
const rejouer = document.querySelector(".rejouer");



jouer.addEventListener("click", () => {
  //nom
  const nomFormulaire = document.querySelector(".nom").value;
  const nomJoueur = document.querySelector(".playerName");
  nomJoueur.innerHTML = nomFormulaire;

  //peau
  var couleurPeau = document.getElementsByName("couleur");
  for (i = 0; i < couleurPeau.length; i++) {
    if (couleurPeau[i].checked) console.log(couleurPeau[i].value);
  }

  //choix
  const choixFormulaire = document.querySelector(".choix");
  const choixOption = choixFormulaire.options[choixFormulaire.selectedIndex];
  const choixJoueur = document.querySelector(".playerHand");
  choixJoueur.innerHTML = choixOption.text;

  //cpu
  const mainCPU = document.querySelector(".cpuHand");
  const choixCPU = [
    "✊",
    "✋",
    "✌️",
    "✊🏻",
    "✋🏻",
    "✌🏻",
    "✊🏽",
    "✋🏽",
    "✌🏽",
    "✊🏿",
    "✋🏿",
    "✌🏿"
  ];
  const randomCPU = choixCPU[Math.floor(Math.random() * choixCPU.length)];
  mainCPU.innerHTML = randomCPU;

  //résultat
  
  
  
  //gsap
  gsap
    .timeline({})
    .to(".formulaire", { y: "100vh" })
    .to(".game", { opacity: 1 }, "<");
});



rejouer.addEventListener("click", function () {
  gsap
    .timeline({})
    .to(".formulaire", { y: "0vh", ease: "back" })
    .to(".game", { opacity: 0 }, "<");
});
