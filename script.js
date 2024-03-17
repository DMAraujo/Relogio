const hora = document.querySelector('#hora')
const min = document.querySelector('#min')
const seg = document.querySelector('#seg')

setInterval(() => {
    let tempo = new Date();
    
    let dHora = tempo.getHours()
    let dMin = tempo.getMinutes()
    let dSeg = tempo.getSeconds()

    hora.innerHTML = `${formatoRelogio(dHora)}`
    min.innerHTML = `${formatoRelogio(dMin)}`
    seg.innerHTML = `${formatoRelogio(dSeg)}`
}, 1000)

function formatoRelogio(tempo) {
    return tempo < 10 ? '0' + tempo : tempo
}

