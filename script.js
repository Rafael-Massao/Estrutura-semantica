function gerarTicket() {
    const nomeRaw = document.getElementById("input-nome").value;
    const urgenciaRaw = document.getElementById("input-urgencia").value;
    const nomeLimpo = nomeRaw.toUpperCase().trim();
    const minCaracteres = 3;

    // 1. Validação de Nome
    if (nomeLimpo.length < minCaracteres) {
        alert("Erro: O nome deve ter pelo menos " + minCaracteres + " caracteres.");
        document.getElementById("ticket-resultado").style.display = "none";
        return;
    }

    // 2. Primeiro e último nome
    const partesNome = nomeLimpo.split(" ");
    const primeiroNome = partesNome[0];
    const ultimoNome = partesNome.length > 1 ? partesNome[partesNome.length - 1] : "";
    const nomeFinal = (primeiroNome + " " + ultimoNome).trim();

    // 3. Validação de Urgência
    if (urgenciaRaw === "") {
        alert("Por favor, selecione um nível de urgência.");
        return;
    }

    const dataAtual = new Date();
    const dataPrazo = new Date();

    dataPrazo.setDate(dataAtual.getDate() + (+urgenciaRaw));

    document.getElementById("out-nome").innerText = nomeFinal;
    document.getElementById("out-data").innerText = dataAtual.toLocaleDateString('pt-BR');
    document.getElementById("out-prazo").innerText = dataPrazo.toLocaleDateString('pt-BR');

    document.getElementById("ticket-resultado").style.display = "block";
}