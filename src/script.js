const parametros = [
        "volumes", "NFs", "transport"
    ];

document.addEventListener("DOMContentLoaded", function() {
    

    const inputNFs = document.querySelector("input[name='NFs']");
    let editando = null;

    inputNFs.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const valorNFs = inputNFs.value;
            if (editando) {
                editando.textContent = "Nota Fiscal: " + valorNFs;
                editando = null;
            } else {
                exibirNotaFiscal(valorNFs);
            }
            inputNFs.value = "";
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
            const inputNFs = document.querySelector("input[name='NFs']");
            inputNFs.value = valor;
            inputNFs.focus();
            editando = textoNF;
        });
        divNotaFiscal.appendChild(botaoEditar);

        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.addEventListener("click", function() {
            divNotaFiscal.remove();
            if (editando === textoNF) {
                editando = null;
            }
        });
        divNotaFiscal.appendChild(botaoExcluir);

        const divContentNF = document.querySelector(".contentNF");
        divContentNF.appendChild(divNotaFiscal);
    }

    // Função para enviar o formulário

    const params = new URLSearchParams(window.location.search);

    parametros.forEach(param => {
        document.getElementById(param).textContent = params.get(param) || "";
    });

    function getInputValue(id) {
        return document.getElementById(id).value;
    }

    document.getElementById("formulario").addEventListener("submit", function (event) {
        const valores = parametros.reduce((acc, param) => {
            acc[param] = getInputValue(param + "Input");
            return acc;
        }, {});


        const searchParams = new URLSearchParams(valores);

        window.location.href = `src/modelPrint/modelPrint.html?${searchParams.toString()}`;

    // Evitar o comportamento padrão de envio do formulário
    event.preventDefault();


    // function enviarFormulario() {
    // // Obtém os valores dos campos do formulário
    // const transportadora = document.querySelector("select[name='transport']").value;
    // const volumes = document.querySelector("input[name='volumes']").value;
    // const NFs = document.querySelector("input[name='NFs']").value;

    // // Constrói a URL com os parâmetros
    // const searchParams = new URLSearchParams();
    // searchParams.set('transport', transportadora);
    // searchParams.set('volumes', volumes);
    // searchParams.set('NFs', NFs);
    // const url = `src/modelPrint/modelPrint.html?${searchParams.toString()}`;

    // Redireciona para a página modelPrint.html com os parâmetros na URL
    // window.location.href = url;

    // Impede o envio padrão do formulário
    // return false;
    }



    // Event listener para o envio do formulário
    // const form = document.getElementById("formulario");
    // form.addEventListener("submit", function(event) {
    //     event.preventDefault(); // Impede o envio padrão do formulário
    //     enviarFormulario(); // Chama a função para enviar o formulário
    // });
});
