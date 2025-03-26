function generarContrasenia(longitud, incluirMayusculas, incluirNumeros, incluirEspeciales) {
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const mayusculas = minusculas.toUpperCase();
    const numeros = '0123456789';
    const especiales = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let caracteresPermitidos = minusculas;
    let contrasenia = '';

    if (incluirMayusculas) caracteresPermitidos += mayusculas;
    if (incluirNumeros) caracteresPermitidos += numeros;
    if (incluirEspeciales) caracteresPermitidos += especiales;

    if (incluirMayusculas) {
        contrasenia += mayusculas.charAt(Math.floor(Math.random() * mayusculas.length));
    }
    if (incluirNumeros) {
        contrasenia += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }
    if (incluirEspeciales) {
        contrasenia += especiales.charAt(Math.floor(Math.random() * especiales.length));
    }

    while (contrasenia.length < longitud) {
        contrasenia += caracteresPermitidos.charAt(
            Math.floor(Math.random() * caracteresPermitidos.length)
        );
    }

    return contrasenia.split('').sort(() => Math.random() - 0.5).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    const botonGenerar = document.querySelector("#generarButon");
    const longitudInput = document.querySelector("#inputCh1");
    const mayusculasCheck = document.querySelector("#mayusculas");
    const numerosCheck = document.querySelector("#numeros");
    const especialesCheck = document.querySelector("#especiales");
    const resultadoElement = document.querySelector("#resultado");

    if (botonGenerar && longitudInput) {
        botonGenerar.addEventListener('click', function(){
            let longitudValue = longitudInput.value;
            
            if (longitudInput.value === '') {
                alert("Por favor, ingrese una longitud válida.");
                return;
            }
            
            if(longitudValue < 3){
                alert("La longitud debe ser de al menos 3 caracteres.");
                return;
            }
            else if(longitudValue > 10){
                alert("La longitud no debe ser mayor a 10 caracteres.")
                return;
            }

            const contrasenia = generarContrasenia(
                longitudValue,
                mayusculasCheck.checked,
                numerosCheck.checked,
                especialesCheck.checked
            );

            if(resultadoElement) {
                resultadoElement.textContent = contrasenia;
            }
        });
    }
});

