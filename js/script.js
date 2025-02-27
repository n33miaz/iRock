let nomeUsuario;
let carinhos = 0;
let tempoCarencia = 60;
let timeoutCarencia;
let humorAtual = "Neutro";
let tentativasIncorretas = 0;
const maxTentativasIncorretas = 3;

const imagensIrock = {
    "irock.png": "Normal",
    "irock-sorrindo.png": "Feliz",
    "irock-triste.png": "Triste",
    "irock-irritada.png": "Irritada"
};

function iniciar() {
    carregarNomeUsuario();
    atualizarCarinhos();
    definirTimeoutCarencia();
    mudarHumor(humorAtual, false);
}

function darCarinho() {
    if (!nomeUsuario) {
        nomeUsuario = prompt("Qual o seu nome?", "Digite aqui");
        if (nomeUsuario) {
            exibirMensagem(`É um prazer te conhecer, ${nomeUsuario}!`);
            if (navigator.cookieEnabled) {
                escreverCookie("irock_username", nomeUsuario, 365);
            } else {
                alert("Cookies não estão habilitados, não poderei lembrar de você.");
            }
            atualizarNomePedra(nomeUsuario);
        } else {
            exibirMensagem("Queria saber seu nome...");
            mudarHumor("Triste");
            return;
        }
    }

    carinhos++;
    atualizarCarinhos();
    mudarHumor("Feliz");
    resetarTimeoutCarencia();
}

function irritarIrock() {
    mudarHumor("Irritada");
    exibirMensagem("A iRock não gostou disso!");
}

function irritarSeFora(event) {
    const containerPrincipal = document.getElementById("container-principal");
    if (!containerPrincipal.contains(event.target)) {
        irritarIrock();
    }
}

function mudarHumor(humor, temporario = true) {
    atualizarHumorPedra(humor);
    let imagem = "irock.png";

    switch (humor) {
        case "Feliz":
            imagem = "irock-sorrindo.png";
            break;
        case "Triste":
            imagem = "irock-triste.png";
            break;
        case "Irritada":
            imagem = "irock-bravo.png";
            break;
        default:
            humor = "Neutro";
            imagem = "irock.png";
            break;
    }

    document.getElementById("img-irock").src = "./assets/" + imagem;
    humorAtual = humor;

    if (temporario) {
        clearTimeout(timeoutHumor);
        timeoutHumor = setTimeout(() => {
            mudarHumor("Neutro", false);
        }, 3000);
    }
}

function atualizarNomePedra(nome) {
    document.getElementById("nome-pedra").textContent = nome;
}

function atualizarHumorPedra(humor) {
    document.getElementById("humor-pedra").textContent = humor;
}

function atualizarCarinhos() {
    document.getElementById("carinhos-pedra").textContent = carinhos;
}

function exibirMensagem(mensagem) {
    const mensagemAcao = document.getElementById("mensagem-acao");
    mensagemAcao.textContent = mensagem;
    setTimeout(() => {
        mensagemAcao.textContent = "";
    }, 3000);
}

function abrirConfiguracoes() {
    document.getElementById("tela-configuracoes").classList.remove("hidden");
    document.getElementById("novo-nome").value = nomeUsuario || "";
    document.getElementById("tempo-carencia").value = tempoCarencia;
    const imagemAtual = document.getElementById("img-irock").src.split('/').pop();
    document.getElementById("imagem-irock").value = imagemAtual;
}

function fecharConfiguracoes() {
    document.getElementById("tela-configuracoes").classList.add("hidden");
}

function salvarConfiguracoes() {
    const novoNome = document.getElementById("novo-nome").value;
    tempoCarencia = parseInt(document.getElementById("tempo-carencia").value);
    const novaImagem = document.getElementById("imagem-irock").value;

    if (novoNome && novoNome !== nomeUsuario) {
        nomeUsuario = novoNome;
        atualizarNomePedra(nomeUsuario);
        escreverCookie("irock_username", nomeUsuario, 365);
    }

    mudarHumor(imagensIrock[novaImagem], false);
    definirTimeoutCarencia();
    fecharConfiguracoes();
    exibirMensagem("Configurações salvas!");
}

// Carencia
function definirTimeoutCarencia() {
    clearTimeout(timeoutCarencia);
    timeoutCarencia = setTimeout(() => {
        mudarHumor("Triste");
        exibirMensagem("Sua iRock está se sentindo sozinha! Dê um pouco de carinho.");
    }, tempoCarencia * 1000);
}

function resetarTimeoutCarencia() {
    clearTimeout(timeoutCarencia);
    definirTimeoutCarencia();
}

// Inicialização
window.onload = iniciar;