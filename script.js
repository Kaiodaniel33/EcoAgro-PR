// Função global para aguardar o carregamento da página
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // MÓDULO 1: MELHORIA DE USABILIDADE (MODO ESCURO)
    // ==========================================
    const btnTema = document.getElementById('btn-tema');
    const corpoSite = document.body;
    
    // Verifica no LocalStorage se o usuário já preferia o modo escuro
    if (localStorage.getItem('tema_agrinho') === 'dark') {
        corpoSite.classList.add('dark-mode');
        btnTema.textContent = '☀️';
    }

    // Função para alternar entre temas claro e escuro
    btnTema.addEventListener('click', () => {
        corpoSite.classList.toggle('dark-mode');
        
        if (corpoSite.classList.contains('dark-mode')) {
            localStorage.setItem('tema_agrinho', 'dark');
            btnTema.textContent = '☀️';
        } else {
            localStorage.setItem('tema_agrinho', 'light');
            btnTema.textContent = '🌙';
        }
    });

    // ==========================================
    // MÓDULO 2: EFEITOS VISUAIS E ANIMAÇÃO DE ROLAGEM
    // ==========================================
    const elementosParaAnimar = document.querySelectorAll('.reveal');

    // API de Intersecção para fazer os cards surgirem ao rolar a página
    const observadorDeRolagem = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('ativo');
            }
        });
    }, { threshold: 0.1 });

    elementosParaAnimar.forEach(elemento => {
        observadorDeRolagem.observe(elemento);
    });

    // ==========================================
    // MÓDULO 3: LÓGICA DA CALCULADORA E MANIPULAÇÃO DE DOM
    // ==========================================
    const formCalculadora = document.getElementById('form-simulador');
    const inputArea = document.getElementById('area');
    const selectTecnologia = document.getElementById('tecnologia');
    const divLoading = document.getElementById('loading');
    const divResultado = document.getElementById('resultado');
    const btnCalcular = document.getElementById('btn-calcular');

    // Função para capturar dados e calcular o impacto agronômico
    formCalculadora.addEventListener('submit', (evento) => {
        // Previne o envio padrão do formulário para não recarregar a tela
        evento.preventDefault();

        // Esconde o resultado e mostra a simulação de processamento
        btnCalcular.classList.add('oculto');
        divResultado.classList.add('oculto');
        divLoading.classList.remove('oculto');

        // Captura e validação das variáveis
        const hectares = parseFloat(inputArea.value);
        const tecnologia = selectTecnologia.value;

        // Simula um delay no algoritmo para melhorar a percepção de processamento (UX)
        setTimeout(() => {
            let sacasPorHectare = 0;
            let aguaPreservadaPorHectare = 0;
            let statusSolo = "";

            // Lógica condicional agronômica com base na seleção do usuário
            if (tecnologia === 'convencional') {
                sacasPorHectare = 52;
                aguaPreservadaPorHectare = 0;
                statusSolo = "Risco de degradação alto. Perda de nutrientes por lixiviação.";
            } else if (tecnologia === 'direto') {
                sacasPorHectare = 65;
                aguaPreservadaPorHectare = 18000;
                statusSolo = "Saudável. A palhada mantém a umidade e a biologia da terra.";
            } else if (tecnologia === 'avancado') {
                sacasPorHectare = 82;
                aguaPreservadaPorHectare = 45000;
                statusSolo = "Excelente. Equilíbrio perfeito entre altíssima produção e sustentabilidade.";
            }

            // Processamento matemático total
            const totalSacas = hectares * sacasPorHectare;
            const totalAgua = hectares * aguaPreservadaPorHectare;
            
            // Formatador de números para o padrão Brasileiro (ex: 1.000,00)
            const formatoBR = new Intl.NumberFormat('pt-BR');

            // Manipulação dinâmica de DOM injetando HTML e Variáveis
            divResultado.innerHTML = `
                <div class="box-resultado">
                    <h3>✅ Análise Gerada com Sucesso</h3>
                    <p>Propriedade mapeada: <strong>${hectares} hectares</strong></p>
                    <hr style="margin: 10px 0; border: 1px solid var(--cor-borda);">
                    <p>🌾 <strong>Projeção de Colheita:</strong> <span class="destaque-dado">${formatoBR.format(totalSacas)} sacas totais</span></p>
                    <p>💧 <strong>Água Preservada:</strong> <span class="destaque-dado">${formatoBR.format(totalAgua)} Litros</span> por ciclo</p>
                    <p>🌍 <strong>Diagnóstico do Solo:</strong> <span class="destaque-dado">${statusSolo}</span></p>
                </div>
            `;

            // Finaliza o processamento trocando as classes ocultas
            divLoading.classList.add('oculto');
            divResultado.classList.remove('oculto');
            btnCalcular.classList.remove('oculto');
            btnCalcular.textContent = "Refazer Simulação";

        }, 1200); // 1.2 segundos de delay
    });
});
