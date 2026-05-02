// Aguarda o HTML ser completamente carregado para rodar o JS (Evita Bugs)
document.addEventListener('DOMContentLoaded', () => {
    
    /* ==================================================================
       1. MELHORIA DE USUÁRIO: MODO ESCURO (Nível 4 de Usabilidade)
       ================================================================== */
    const btnTema = document.getElementById('btn-tema');
    const textoTema = document.querySelector('.texto-tema');
    const iconeTema = document.getElementById('icone-tema');
    const bodySite = document.body;
    
    // Checa na memória do navegador se o usuário já preferia o modo escuro
    if (localStorage.getItem('preferencia_tema') === 'dark') {
        bodySite.classList.add('dark-mode');
        textoTema.textContent = 'Modo Claro';
        iconeTema.textContent = '☀️';
    }

    // Ação do botão de tema
    btnTema.addEventListener('click', () => {
        bodySite.classList.toggle('dark-mode'); // Adiciona ou tira a classe
        
        // Se ativou o modo escuro, salva no navegador e troca o texto/ícone
        if (bodySite.classList.contains('dark-mode')) {
            localStorage.setItem('preferencia_tema', 'dark');
            textoTema.textContent = 'Modo Claro';
            iconeTema.textContent = '☀️';
        } else {
            // Se voltou para o claro
            localStorage.setItem('preferencia_tema', 'light');
            textoTema.textContent = 'Modo Escuro';
            iconeTema.textContent = '🌗';
        }
    });

    /* ==================================================================
       2. EFEITOS VISUAIS: ANIMAÇÃO DE ROLAGEM (Scroll Reveal)
       ================================================================== */
    const elementosAnimados = document.querySelectorAll('.reveal');

    // Cria um observador que avisa quando o elemento entra na tela
    const observador = new IntersectionObserver((elementosNaTela) => {
        elementosNaTela.forEach(elemento => {
            if (elemento.isIntersecting) {
                // Adiciona a classe que faz o elemento aparecer suavemente
                elemento.target.classList.add('ativo');
                // Para de observar depois que apareceu uma vez (melhora o desempenho)
                observador.unobserve(elemento.target); 
            }
        });
    }, { threshold: 0.15 }); // Dispara quando 15% do elemento estiver visível

    // Pede para o observador vigiar todos os elementos com a classe .reveal
    elementosAnimados.forEach(el => observador.observe(el));


    /* ==================================================================
       3. MOTOR DE CÁLCULO (Variáveis e Manipulação Funcional de DOM)
       ================================================================== */
    const formulario = document.getElementById('form-agro');
    const inputHectares = document.getElementById('hectares');
    const selectManejo = document.getElementById('manejo');
    
    const divLoading = document.getElementById('status-carregamento');
    const divResultado = document.getElementById('resultado-relatorio');
    const btnSubmit = document.getElementById('btn-calcular');

    formulario.addEventListener('submit', (evento) => {
        // Previne o recarregamento da página (Bug Fix)
        evento.preventDefault();

        // Evita múltiplos cliques (Bug Fix Avançado)
        btnSubmit.disabled = true;
        btnSubmit.style.opacity = '0.5';
        btnSubmit.textContent = 'Processando...';

        // Interface UX: Esconde resultado, mostra loading
        divResultado.classList.add('oculto');
        divLoading.classList.remove('oculto');

        // Captura e converte as variáveis (Nível 4 de JS)
        const areaDigitada = parseFloat(inputHectares.value);
        const tipoManejo = selectManejo.value;

        // Simulando delay do sistema para percepção de valor (1.5s)
        setTimeout(() => {
            let sacasPorHa = 0;
            let litrosPreservadosPorHa = 0;
            let parecerSolo = "";

            // Lógica Condicional do Negócio
            if (tipoManejo === 'basico') {
                sacasPorHa = 50;
                litrosPreservadosPorHa = 0;
                parecerSolo = "⚠️ Risco de erosão e perda de umidade.";
            } else if (tipoManejo === 'intermediario') {
                sacasPorHa = 68;
                litrosPreservadosPorHa = 15000; // 15 mil litros preservados
                parecerSolo = "✅ Palhada atua como esponja protetora.";
            } else if (tipoManejo === 'avancado') {
                sacasPorHa = 85;
                litrosPreservadosPorHa = 40000; // 40 mil litros preservados
                parecerSolo = "🌟 Perfeição: Raízes fundas e tecnologia IoT operando.";
            }

            // Matemática do Resultado
            const sacasTotais = areaDigitada * sacasPorHa;
            const aguaTotal = areaDigitada * litrosPreservadosPorHa;
            
            // Formatador do JavaScript para padrão Brasil
            const formatador = new Intl.NumberFormat('pt-BR');

            // Injeção de Resultado no HTML manipulando o DOM
            divResultado.innerHTML = `
                <div class="box-relatorio">
                    <h3>📊 Relatório da Propriedade</h3>
                    <p>Área analisada: <strong>${areaDigitada} Hectares</strong>.</p>
                    <hr>
                    <p>🌾 <strong>Projeção de Colheita:</strong> <span class="dado-verde">${formatador.format(sacasTotais)} sacas</span></p>
                    <p>💧 <strong>Água Doce Preservada:</strong> <span class="dado-verde">${formatador.format(aguaTotal)} Litros</span></p>
                    <p>🌍 <strong>Diagnóstico:</strong> ${parecerSolo}</p>
                </div>
            `;

            // Finaliza o fluxo restaurando os botões e ocultando o loading
            divLoading.classList.add('oculto');
            divResultado.classList.remove('oculto');
            
            btnSubmit.disabled = false;
            btnSubmit.style.opacity = '1';
            btnSubmit.textContent = "Refazer Simulação";

        }, 1500); // Fim do setTimeout
    });
});
