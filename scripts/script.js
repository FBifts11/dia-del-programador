function calcular_dia(fecha) {
    const inicio_anio = new Date(fecha.getFullYear(), 0, 0);
    const diferencia = fecha - inicio_anio;
    const un_dia = 1000 * 60 * 60 * 24;
    const dia_del_anio = Math.floor(diferencia / un_dia);
    return dia_del_anio;
}

const hoy = new Date();


setTimeout(() => {
    if (calcular_dia(hoy) == 256) {
        document.getElementById('mensaje').innerText = '¡¡¡Feliz día del programador!!!'
    }else {
        document.getElementById('mensaje').innerText = 'Hoy no es el día del programador pero igual queremos saludarlos!'
    }
}, 2500);