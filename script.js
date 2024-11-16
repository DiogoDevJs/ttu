// Data de início do namoro (16 de novembro de 2023 às 16:00)
const dataInicioNamoro = new Date('2023-11-16T16:00:00');

// Função para verificar respostas das etapas intermediárias
function verificarResposta(botao) {
    const pergunta = botao.parentElement;
    const respostaCerta = pergunta.getAttribute('data-resposta').toLowerCase(); // Resposta correta em minúsculas
    const respostaUsuario = pergunta.querySelector('input').value.trim().toLowerCase(); // Resposta do usuário em minúsculas

    if (respostaUsuario === respostaCerta) {
        pergunta.style.display = 'none';
        const proximaPergunta = pergunta.nextElementSibling;
        if (proximaPergunta) {
            proximaPergunta.style.display = 'block';
        }
    } else {
        alert('Resposta incorreta. Tente novamente!');
    }
}

// Função para verificar a resposta final
function verificarRespostaFinal(botao) {
    const pergunta = botao.parentElement;
    const respostaCerta = pergunta.getAttribute('data-resposta').toLowerCase();
    const respostaUsuario = pergunta.querySelector('input').value.trim().toLowerCase();

    if (respostaUsuario === respostaCerta) {
        pergunta.style.display = 'none';
        iniciarContador();
    } else {
        alert('Resposta incorreta. Tente novamente!');
    }
}

// Função para iniciar o contador de tempo
function iniciarContador() {
    const contador = document.getElementById('contador');
    contador.style.display = 'block';

    setInterval(() => {
        const agora = new Date();
        const diferencaTempo = agora - dataInicioNamoro;

        const dias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencaTempo % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencaTempo % (1000 * 60)) / 1000);

        document.getElementById('tempoJuntos').textContent = 
            `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    }, 1000);
}
