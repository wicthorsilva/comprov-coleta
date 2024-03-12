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
    const divNotaFiscal = document.createElement("div");
    divNotaFiscal.classList.add("notaFiscal");

    const textoNF = document.createElement("span");
    textoNF.textContent = "Nota Fiscal: " + valor;
    divNotaFiscal.appendChild(textoNF);

    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.addEventListener("click", function() {
        const inputNFs = document.querySelector("input[name='NFs']");
        inputNFs.value = valor;
        inputNFs.focus();
    });
    divNotaFiscal.appendChild(botaoEditar);

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.addEventListener("click", function() {
        divNotaFiscal.remove();
    });
    divNotaFiscal.appendChild(botaoExcluir);

    const divContentNF = document.querySelector(".contentNF");
    divContentNF.appendChild(divNotaFiscal);
}

    
});
