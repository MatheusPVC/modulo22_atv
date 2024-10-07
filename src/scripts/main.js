AOS.init();

const dataDoAniversario = new Date('Mar 16, 2025 06:00:00');
const timeStampDoAniversario = dataDoAniversario.getTime();

const contador = setInterval(function(){
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const distanciaAteOAniversario = timeStampDoAniversario - timeStampAgora;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    
    const diasAteOAniversario = Math.floor(distanciaAteOAniversario / diaEmMs);
    const horasAteOAniversario = Math.floor((distanciaAteOAniversario % diaEmMs) / horaEmMs)
    const minutosAteOAniversario = Math.floor((distanciaAteOAniversario % horaEmMs) / minutoEmMs)
    const segundosAteOAniversario = Math.floor((distanciaAteOAniversario % minutoEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`;

    if (timeStampDoAniversario < timeStampAgora) {
        clearInterval(contador);
        document.getElementById('contador').innerHTML = '<p style="color:red">ELE JÁ FEZ ANIVERSÁRIO</p>'
    }

}, 1000)