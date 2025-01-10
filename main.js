const form = document.getElementById('form-validacao');

form.addEventListener('submit', function(e) {
    validacampo();
});

    function validacampo(){
    const campoA = document.getElementById('campo-A');
    const campoB = document.getElementById('campo-B');
    if (campoB.value <= campoA.value) {
        alert('Inválido! O campo B precisa ser maior do que o campo A.');
    }
    if (campoA.value < campoB.value) {
        alert('Validado com sucesso!');
    }}

console.log(form);
