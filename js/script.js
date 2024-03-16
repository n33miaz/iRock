function toqueRock() {
    const nomeUsuario = prompt("Como você se chama? Digite:");

    if (nomeUsuario) {
        alert("Muito prazer, " + nomeUsuario + "!");
        document.getElementById("img-irock").src = "./assets/irock-sorrindo.png";
    }
};