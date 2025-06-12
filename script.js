let segundos = 0;
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
        segundos++;
        atualizaDisplay();

        
        
    }, 1000);
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
    atualizaDisplay();


}


// formatação de tempo
function formatarTempo(segundosTotais) {
    const minutos = Math.floor(segundosTotais / 60)
    const segundos = segundosTotais % 60;
    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`

}

function atualizaDisplay() {
    display.textContent = formatarTempo(segundos);
}

