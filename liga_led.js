const btnLigar = document.getElementById("btnLigar")
const btnDesligar = document.getElementById("btnDesligar")
const statusDiv = document.getElementById("status")

// Função para atualizar o texto do status
function atualizarStatus(msg) {
    statusDiv.textContent = "Status: " + msg

    // Remove classes antigas para ajuste da cor
    statusDiv.classList.remove("status-verde", "status-vermelho", "status-branco")

    // Aplica cor conforme a mensagem
    if (msg.toLowerCase() === "ligado") {
        statusDiv.classList.add("status-verde")
    } else if (msg.toLowerCase() === "desligado") {
        statusDiv.classList.add("status-vermelho")
    } else {
        statusDiv.classList.add("status-branco") // aguardando 
    }
}

// ----- Botão Ligar -----
btnLigar.addEventListener("click", async () => {
    try {
        const resposta = await fetch("http://localhost:3000/ligar")
        const json = await resposta.json()
        atualizarStatus(json.led.toUpperCase())
    } catch (error) {
        atualizarStatus("Erro ao conectar")
    }
})

// ----- Botão Desligar -----
btnDesligar.addEventListener("click", async () => {
    try {
        const resposta = await fetch("http://localhost:3000/desligar");
        const json = await resposta.json()
        atualizarStatus(json.led.toUpperCase())
    } catch (error) {
        atualizarStatus("Erro ao conectar")
    }
})