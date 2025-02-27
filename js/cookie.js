/**
 * Escreve um cookie com o nome, valor e tempo de vida especificados.
 * @param {string} nome - O nome do cookie.
 * @param {string} valor - O valor do cookie.
 * @param {number} dias - O número de dias até a expiração do cookie.
 */
function escreverCookie(nome, valor, dias) {
    let expires = "";

    if (dias) {
        const data = new Date();
        data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
        expires = "; expires=" + data.toUTCString();
    }

    document.cookie = nome + "=" + valor + expires + "; path=/";
}

/**
 * Lê o valor de um cookie com o nome especificado.
 * @param {string} nome - O nome do cookie a ser lido.
 * @returns {string|null} - O valor do cookie ou null se não encontrado.
 */
function lerCookie(nome) {
    const nomeProcurado = nome + "=";
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nomeProcurado) === 0) {
            return cookie.substring(nomeProcurado.length);
        }
    }

    return null;
}

/**
 * Apaga um cookie com o nome especificado, definindo sua data de expiração para o passado.
 * @param {string} nome - O nome do cookie a ser apagado.
 */
function apagarCookie(nome) {
    escreverCookie(nome, "", -1);
}