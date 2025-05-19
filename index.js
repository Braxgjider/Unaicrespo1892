let validat = false;
let nom, contrasenya;
let scriptURL = "https://braxgjider.github.io/Unaicrespo1892/";

function inicia_sessio() {
  nom = document.getElementById("nom_usuari").value;
  contrasenya = document.getElementById("contrasenya").value;
  let consulta = scriptURL + "?query=select&where=usuari&is=" + nom + "&and=contrasenya&equal=" + contrasenya;

  fetch(consulta)
    .then((resposta) => resposta.json())
    .then((resposta) => {
      if (resposta.length == 0) {
        window.alert("El nom d'usuari o la contrasenya no són correctes.");
      } else {
        window.alert("S'ha iniciat correctament la sessió.");
        validat = true;
        canvia_seccio(1); // Canvia a una secció inicial adequada
      }
    });
}
