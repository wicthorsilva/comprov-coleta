document.addEventListener("DOMContentLoaded", function() {
    const inputNFs = document.querySelector("input[name='NFs']");
    const contentNF = document.querySelector(".contentNF");

    inputNFs.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const valorNFs = inputNFs.value.trim();
            if (valorNFs !== "") {
                exibirNotaFiscal(valorNFs);
                inputNFs.value = "";
            }
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
        botaoEditar.addEventListener("click", function(event) {
            event.preventDefault();
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

        contentNF.appendChild(divNotaFiscal);
    }

    const preencherBtn = document.getElementById("preencherBtn");

    preencherBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Previne o envio do formulário

        const transportSelect = document.getElementById("transport");
        const volumesInput = document.getElementById("volumes");
        const nfsInput = document.getElementById("nfs");

        const selectedTransport = transportSelect.value;
        const volumes = volumesInput.value;
        const nfs = nfsInput.value;

        // Coletando os valores das notas fiscais
        const notasFiscais = [];
        const notasFiscaisElements = document.querySelectorAll('.notaFiscal span');
        notasFiscaisElements.forEach(element => {
            notasFiscais.push(element.textContent.replace('Nota Fiscal: ', ''));
        });

        // Redirecionando para a página modelPrint.html com os parâmetros
        window.location.href = `./src/modelPrint/modelPrint.html?transport=${selectedTransport}&volumes=${volumes}&nfs=${nfs}&notasFiscais=${JSON.stringify(notasFiscais)}`;
    });
});

