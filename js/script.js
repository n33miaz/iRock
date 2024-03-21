function toqueRock() {
    const nomeUsuario = prompt("Como você se chama? Digite:");

    if (nomeUsuario) {
        alert("Muito prazer, " + nomeUsuario + "!");
        document.getElementById("img-irock").src = "./assets/irock-sorrindo.png";
    } else {
        alert("Queria muito saber o seu nome. ");
        document.getElementById("img-irock").src = "./assets/irock-triste.png";
    }
};