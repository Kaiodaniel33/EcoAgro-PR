// Aguarda o carregamento do HTML para executar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // Captura os elementos necessários do DOM
    const formulario = document.getElementById('form-simulador');
    const inputArea = document.getElementById('area');
    const divResultado = document.getElementById('resultado');

    // Variáveis constantes para a lógica de negócio (Dados baseados em estimativas agro)
    const ECONOMIA_AGUA_POR_HECTARE = 12500; // Litros economizados por mês por hectare com irrigação inteligente
    const REDUCAO_CO2_POR_HECTARE = 45; // Quilos de CO2 a menos na atmosfera por hectare

    // Adiciona o evento de 'submit' no formulário
    formulario.addEventListener('submit', function(evento) {
        // Previne o recarregamento da página padrão do formulário
        evento.preventDefault();

        // Captura o valor digitado e converte para número
        const hectares = parseFloat(inputArea.value);

        // Processamento lógico matemático
        const totalAguaEconomizada = hectares * ECONOMIA_AGUA_POR_HECTARE;
        const totalCo2Reduzido = hectares * REDUCAO_CO2_POR_HECTARE;

        // Formatação dos números para o padrão brasileiro (ex: 1.000.000)
        const aguaFormatada = totalAguaEconomizada.toLocaleString('pt-BR');
        const co2Formatado = totalCo2Reduzido.toLocaleString('pt-BR');

        // Manipulação do DOM: Injeta o HTML processado dinamicamente
        divResultado.innerHTML = `
            <div class="box-resultado">
                <h3>O Impacto da sua Lavoura</h3>
                <p>Ao modernizar seus <span>${hectares} hectares</span> com tecnologias sustentáveis, você estaria contribuindo com:</p>
                <br>
                <p>💧 Economia de <span>${aguaFormatada} Litros</span> de água potável por mês.</p>
                <p>🌬️ Redução de <span>${co2Formatado} kg</span> de CO2 lançados na atmosfera.</p>
                <br>
                <p><strong>Conclusão:</strong> Maior produtividade com respeito absoluto ao meio ambiente. O verdadeiro Agro Forte!</p>
            </div>
        `;

        // Remove a classe que esconde a div para exibir o resultado com animação
        divResultado.classList.remove('escondido');
        
        // Limpa o input após o cálculo (Boa prática de UX)
        inputArea.value = '';
    });
});
