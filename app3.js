console.log('Inicio del Programa');


setTimeout(function() {
    console.log('Primer Timeout');
}, 3000);

setTimeout(function() {
    console.log('Segundo Timeout');
}, 0);

setTimeout(function() {
    console.log('Tercero Timeout');
}, 0);

console.log('Fin del Programa');