let segundos = 0;
let mile = 0
let intervalo = null;

const display = document.getElementById('display');
const iniciarBtn = document.getElementById('iniciar');
const pausarBtn = document.getElementById('pausar');
const resetarBtn = document.getElementById('reset');

iniciarBtn.addEventListener("click", start);
pausarBtn.addEventListener("click", pause);
resetarBtn.addEventListener("click", reset);

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

// pausar cronometro
function pause() {
    clearInterval(intervalo);
    intervalo = null

    
}

// resetar cronometro
function reset() {
    pause();
    segundos = 0;
    mile = 0;
    atualizaDisplay();


}


// formatação de tempo
function formatarTempo(segundosTotais) {
    const minutos = Math.floor(segundosTotais / 60)
    const segundos = segundosTotais % 60;
    const ms = Math.floor(mile /10)
    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}:${String(ms).padStart(2, '0')}`

}

function atualizaDisplay() {
    display.textContent = formatarTempo(segundos, mile);
}

