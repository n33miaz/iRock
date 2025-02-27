## README - iRock: A Rocha Virtual de Estimação

Olá! Este é o projeto iRock, uma rocha virtual de estimação que fiz como exercício do livro "Use a Cabeça! JavaScript" (Head First JavaScript). O objetivo era praticar os conceitos de JavaScript, HTML e CSS, criando uma aplicação web interativa e divertida.

### Como Funciona

O iRock simula uma rocha de estimação, onde você pode interagir dando carinho e cuidando dela. A aplicação permite:

*   **Dar Carinho:** Clicar na imagem da iRock para aumentar o contador de carinhos e mudar o humor para feliz.
*   **Humor Dinâmico:** A iRock muda de humor com base nas ações do usuário, ficando feliz quando recebe carinho, triste quando está carente, irritada quando o usuário clica fora dela, e neutra quando não há interação recente.
*   **Personalização:** O usuário pode definir um nome para a iRock e ajustar o tempo de carência (tempo até a iRock ficar triste).
*   **Configurações:** A iRock tem algumas configurações básicas, como tempo de carência e o nome.
*   **Cookies:** Utilização de cookies para lembrar o nome do usuário entre as sessões.

### Tecnologias Utilizadas

*   **HTML:** Estrutura da página web.
*   **CSS (Tailwind CSS):** Estilização da interface, proporcionando um visual moderno e responsivo.
*   **JavaScript:** Lógica da aplicação, interatividade e manipulação do DOM.
*   **`cookie.js`:** Utilitário para facilitar a leitura e escrita de cookies.
*    **Imagens**: Utilizei imagens (iRock.png, iRock-feliz.png, iRock-triste.png, iRock-irritada.png) para representar diferentes estados de humor da rocha.

### Estrutura do Projeto

O projeto está organizado da seguinte forma:

*   `index.html`: Arquivo HTML principal.
*   `css/styles.css`: Arquivo CSS para estilos adicionais (Tailwind CSS é usado principalmente).
*   `js/script.js`: Arquivo JavaScript com a lógica da aplicação.
*   `js/cookie.js`: Arquivo JavaScript para manipulação de cookies.
*   `assets/`: Pasta contendo as imagens da iRock.
