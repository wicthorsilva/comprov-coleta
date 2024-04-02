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

        // const botaoEditar = document.createElement("button");
        // botaoEditar.textContent = "Editar";
        // botaoEditar.addEventListener("click", function(event) {
        //     event.preventDefault();
        //     inputNFs.value = valor;
        //     inputNFs.focus();
        // });
        // divNotaFiscal.appendChild(botaoEditar);

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
        const dateColet = document.getElementById("dateInput");

        const selectedTransport = transportSelect.value;
        const volumes = volumesInput.value;
        const nfs = nfsInput.value;
        const dateInput = dateColet.value;

        // Coletando os valores das notas fiscais
        const notasFiscais = [];
        const notasFiscaisElements = document.querySelectorAll('.notaFiscal span');
        notasFiscaisElements.forEach(element => {
            notasFiscais.push(element.textContent.replace('Nota Fiscal: ', ''));
        });

        // Redirecionando para a página modelPrint.html com os parâmetros
        window.location.href = `./src/modelPrint/modelPrint.html?transport=${selectedTransport}&dateInput=${dateInput}&volumes=${volumes}&nfs=${nfs}&notasFiscais=${JSON.stringify(notasFiscais)}`;
    });
});




    const url = `${window.location.origin}/src/modelPrint/modelPrint.html${window.location.search}`;




        function gerarPDF(url) {
    const element = document.getElementById("documento");

    html2pdf(element, {
        // margin: 20,
        filename: 'documento.pdf',
        html2canvas: { scale: 2, scrollX: 0, scrollY: 0 },  // Adicione estas opções
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).then((pdf) => {
        // Criar um blob com o conteúdo do PDF
        const blob = pdf.output('blob');

        // Criar um blob URL
        const blobURL = URL.createObjectURL(blob);

        // Abrir o blob URL em uma nova janela
        const newWindow = window.open(blobURL, '_blank');
        
        // Liberar o blob URL quando a janela for fechada
        newWindow.addEventListener('beforeunload', () => URL.revokeObjectURL(blobURL));
    });
}


// function imprimirDocumento() {
//     const url = `${window.location.origin}/src/modelPrint/modelPrint.html${window.location.search}`;
//     gerarPDF(url);
// }
