AOS.init();

const dataAniversario = new Date("Sep 08, 2025 08:00:00");
const timeSteampAniversario = dataAniversario.getTime();

const contagemHoras = setInterval(function() {
    const atual = new Date();
    const timeSteamAtual = atual.getTime();

    const tempoAniversario = timeSteampAniversario - timeSteamAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 *  60;

    const diasAteEvento = Math.floor(tempoAniversario / diaEmMs);
    const horasAteEvento = Math.floor((tempoAniversario % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor(tempoAniversario % horaEmMs / minutoEmMs)
    const segundosAteEvento = Math.floor((tempoAniversario % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}D ${horasAteEvento}Hrs ${minutosAteEvento}Min ${segundosAteEvento}seg`

    if (tempoAniversario < 0) {
        clearInterval(contagemHoras);
        document.getElementById('contador').innerHTML = "Evento expirado";
    }

}, 1000)