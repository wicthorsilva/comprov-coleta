const parametros = [
    "volumes", "NFs"
];

document.addEventListener("DOMContentLoaded", function() {
    const inputNFs = document.querySelector("input[name='NFs']");

    inputNFs.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita o comportamento padrão do formulário de enviar
            const valorNFs = inputNFs.value;
            exibirNotaFiscal(valorNFs);
            inputNFs.value = ""; // Limpa o campo de entrada após exibir o valor
        }
    });

    function exibirNotaFiscal(valor) {
        const divNotasFiscais = document.createElement("div");
        divNotasFiscais.textContent = "Nota Fiscal: " + valor;
        document.body.appendChild(divNotasFiscais);
    }
});
