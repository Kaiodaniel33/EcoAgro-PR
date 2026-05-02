// Aguarda o DOM carregar completamente antes de rodar os scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // Captura os elementos do DOM
    const btnCalcular = document.getElementById('btn-calcular');
    const inputHectares = document.getElementById('hectares');
    const selectMetodo = document.getElementById('metodo');
    const divResultado = document.getElementById('resultado-simulacao');

    // Função que processa os dados e manipula o DOM (Requisito de Nível 4)
    function calcularImpacto() {
        // Pega os valores e valida
        const hectares = parseFloat(inputHectares.value);
        const metodo = selectMetodo.value;

        // Validação simples
        if (isNaN(hectares) || hectares <= 0) {
            alert("Por favor, insira um valor válido para os hectares.");
            return;
        }

        // Lógica de negócio: Cálculo fictício de economia
        // Se mudar para Gotejamento Inteligente (Prática Sustentável)
        let economiaAguaPorHectare = 0; // em litros por dia

        if (metodo === 'aspersao') {
            economiaAguaPorHectare = 15000; // Economiza 15 mil litros/ha mudando para gotejamento inteligente
        } else if (metodo === 'inundacao') {
            economiaAguaPorHectare = 35000; // Economiza 35 mil litros/ha mudando para gotejamento inteligente
        }

        // Cálculo total usando variáveis
        const economiaTotal = hectares * economiaAguaPorHectare;
        
        // Formatação do número para ficar bonito na tela (ex: 1.500.000)
        const economiaFormatada = economiaTotal.toLocaleString('pt-BR');

        // Manipulação do DOM: Injetando o resultado dinamicamente com Template Literals
        divResultado.innerHTML = `
            <h3>Resultado da Transição Sustentável</h3>
            <p>Se você migrar seus <strong>${hectares} hectares</strong> para um sistema de Irrigação de Precisão Inteligente (IoT):</p>
            <br>
            <p>💧 Você economizaria aproximadamente <strong>${economiaFormatada} litros de água por mês</strong>.</p>
            <p>🌱 O meio ambiente agradece, e seu custo operacional cai drasticamente, gerando o verdadeiro equilíbrio entre produção e natureza!</p>
        `;

        // Remove a classe 'hidden' para mostrar a DIV com uma transição
        divResultado.classList.remove('hidden');
    }

    // Adiciona o Event Listener no botão
    btnCalcular.addEventListener('click', calcularImpacto);
});