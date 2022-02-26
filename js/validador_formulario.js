(function () {
    // Procura por todos os formularios que tenham classe de validacao
    var forms = document.querySelectorAll('.needs-validation')

    // Valida antes do envio do formulario
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();