document.addEventListener('DOMContentLoaded', () => {
    
    const formManejo = document.getElementById('form-manejo');
    const inputArea = document.getElementById('area-propriedade');
    const selectTecnologia = document.getElementById('nivel-tecnologia');
    const divRelatorio = document.getElementById('relatorio-resultado');

    formManejo.addEventListener('submit', function(event) {
        // Impede a página de recarregar
        event.preventDefault();

        // Processamento dos dados (Regra da Rubrica de JS)
        const areaHectares = parseFloat(inputArea.value);
        const nivelTecnologia = selectTecnologia.value;

        // Validação defensiva
        if (isNaN(areaHectares) || areaHectares <= 0) {
            alert("Erro: Por favor, insira uma área válida maior que zero.");
            return;
        }

        // Variáveis lógicas
        let sacasEstimadasPorHectare = 0;
        let retencaoAguaPorHectare = 0; 
        let diagnosticoSolo = "";

        // Regras de negócio Agronômico
        switch (nivelTecnologia) {
            case 'convencional':
                sacasEstimadasPorHectare = 55;
                retencaoAguaPorHectare = 10000;
                diagnosticoSolo = "Atenção: Alto risco de erosão. O solo descompactado mecanicamente perde nutrientes rapidamente.";
                break;
            case 'direto':
                sacasEstimadasPorHectare = 65;
                retencaoAguaPorHectare = 25000;
                diagnosticoSolo = "Bom: A palhada atua como um escudo térmico, preservando a vida no solo e mantendo a umidade.";
                break;
            case 'avancado':
                sacasEstimadasPorHectare = 80;
                retencaoAguaPorHectare = 40000;
                diagnosticoSolo = "Excelente: O ecossistema está em equilíbrio. Máxima proteção contra pragas e uso inteligente da água da chuva.";
                break;
        }

        // Processamento matemático do total
        const totalSacas = areaHectares * sacasEstimadasPorHectare;
        const totalAguaRetida = areaHectares * retencaoAguaPorHectare;

        // API do JavaScript para formatar números (ex: 1.500.000)
        const formatadorNumeros = new Intl.NumberFormat('pt-BR');

        // Modificando o DOM dinamicamente
        divRelatorio.innerHTML = `
            <div class="relatorio-card">
                <h3>📊 Relatório Agronômico: Propriedade de ${areaHectares} ha</h3>
                <hr style="margin: 15px 0; border: 1px solid #ccc;">
                <p><strong>🌱 Saúde do Solo:</strong> ${diagnosticoSolo}</p>
                <p><strong>💧 Retenção Hídrica:</strong> ${formatadorNumeros.format(totalAguaRetida)} Litros de água preservados.</p>
                <p><strong>🚜 Produtividade Estimada (Soja):</strong> ${formatadorNumeros.format(totalSacas)} sacas totais (${sacasEstimadasPorHectare} sc/ha).</p>
                <br>
                <p><em>Sustentabilidade é lucro a longo prazo. O Paraná agradece!</em></p>
            </div>
        `;

        // Exibe o relatório na tela
        divRelatorio.classList.remove('oculto');
    });
});
