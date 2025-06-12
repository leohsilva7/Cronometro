let segundos = 0;
let mile = 0;
let intervalo = null;

const display = document.getElementById('display');
const iniciarBtn = document.getElementById('iniciar');
const pausarBtn = document.getElementById('pausar');
const resetarBtn = document.getElementById('reset');
const trocaTema = document.getElementById('tema');

iniciarBtn.addEventListener("click", start);
pausarBtn.addEventListener("click", pause);
resetarBtn.addEventListener("click", reset);
trocaTema.addEventListener("click", trocarCor); // <-- CORRIGIDO AQUI

// trocas de cor
let cores = ['#2F4F4F', '#DAA520', '#4B0082', '#FF0000'];
let mudar = 0;
let corPadrao = 'rgb(27, 27, 27)'; // removido array desnecessário

// trocar cor
function trocarCor() {
    if (mudar >= cores.length) {
        document.body.style.backgroundColor = corPadrao;
        mudar = 0;
    } else {
        document.body.style.backgroundColor = cores[mudar];
        mudar++;
    }
}

// começar cronometro
function start() {
    if (intervalo) return;

    intervalo = setInterval(() => {
        mile += 10;
        if (mile >= 1000) {
            mile = 0;
            segundos++;
        }
        atualizaDisplay();
    }, 10);
}

// pausar cronômetro
function pause() {
    clearInterval(intervalo);
    intervalo = null;
}

// resetar cronômetro
function reset() {
    pause();
    segundos = 0;
    mile = 0;
    atualizaDisplay();
}

// formatação de tempo
function formatarTempo(segundosTotais) {
    const minutos = Math.floor(segundosTotais / 60);
    const segundos = segundosTotais % 60;
    const ms = Math.floor(mile / 10);
    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}:${String(ms).padStart(2, '0')}`;
}

// atualizar display
function atualizaDisplay() {
    display.textContent = formatarTempo(segundos);
}
