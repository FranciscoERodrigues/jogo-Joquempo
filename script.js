const gameContainer = document.querySelector(".container"),
    resultadoUsuario = document.querySelector(".resultado-usuario img"),
    resultadoCpu = document.querySelector(".resultado-cpu img"),
    resultado = document.querySelector(".resultado"),
    opcoesImagens = document.querySelectorAll(".opcoes-imagem");

const opcoes = ["pedra", "tesoura", "papel"];

opcoesImagens.forEach((Image, index) => {
    Image.addEventListener("click", () => {

        // ativa imagem clicada
        Image.classList.add("active");
        opcoesImagens.forEach((Image2, index2) => {
            if (index !== index2) {
                Image2.classList.remove("active");
            }
        });

        // Coloca as mãos para mexer
        resultadoUsuario.classList.add("animando");
        resultadoCpu.classList.add("animando-cpu");

        // atraso para fazer suspense
        setTimeout(() => {

            // tira animação
            resultadoUsuario.classList.remove("animando");
            resultadoCpu.classList.remove("animando-cpu");

            // jogadas
            const jogadaUsuario = opcoes[index];
            const jogadaCPU = opcoes[Math.floor(Math.random() * 3)];

            resultadoUsuario.src = `img/${jogadaUsuario}.png`;
            resultadoCpu.src = `img/${jogadaCPU}.png`;

            // verificar vencedor
            let mensagem = "";

            if (jogadaUsuario === jogadaCPU) {
                mensagem = "Empate!";
            } else if (
                (jogadaUsuario === "pedra" && jogadaCPU === "tesoura") ||
                (jogadaUsuario === "papel" && jogadaCPU === "pedra") ||
                (jogadaUsuario === "tesoura" && jogadaCPU === "papel")
            ) {
                mensagem = "Você ganhou! 🎉";
            } else {
                mensagem = "CPU ganhou! 😢";
            }

            resultado.textContent = mensagem;

        }, 700); // tempo do suspense
    });
});
