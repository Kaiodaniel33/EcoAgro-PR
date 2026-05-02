document.addEventListener('DOMContentLoaded', () => {
    
    /* ==================================================================
       1. TEMA DARK/LIGHT (Com memória no navegador)
       Pontuação Extra de Usabilidade
       ================================================================== */
    const btnTema = document.getElementById('btn-tema');
    const body = document.body;
    
    // Verifica se o usuário já escolheu o tema antes
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'dark') {
        body.classList.add('dark-mode');
        btnTema.textContent = '☀️';
    }

    btnTema.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Salva a preferência e troca o ícone
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('tema', 'dark');
            btnTema.textContent = '☀️';
        } else {
            localStorage.setItem('tema', 'light');
            btnTema.textContent = '🌙';
        }
    });

    /* ==================================================================
       2. ANIMAÇÕES DE SCROLL (Intersection Observer)
       ================================================================== */
    const elementosReveal = document.querySelectorAll('.reveal');

    const animarNoScroll = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('ativo');
                observador.unobserve(entrada.target); // Anima só uma vez
            }
        });
    }, {
        threshold: 0.1, // Dispara quando 10% do elemento aparece
        rootMargin: "0px 0px -50px 0px"
    });

    elementosReveal.forEach(elemento => {
        animarNoScroll.observe(elemento);
    });

    /* ==================================================================
       3. MOTOR DA CALCULADORA (Lógica de Negócio e DOM)
       ================================================================== */
    const form = document.getElementById('form-simulador');
    const inputArea = document.getElementById('area');
    const selectTec = document.getElementById('tecnologia');
    const divLoading = document.getElementById('loading');
    const divResultado = document.getElementById('resultado');
    const btnCalcular = document.getElementById('btn-calcular');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Esconde botão e resultado anterior, mostra o loading
        btnCalcular.classList.add('oculto');
        divResultado.classList.add('oculto');
        divLoading.classList.remove('oculto');

        // Captura e validação
        const hectares = parseFloat(inputArea.value);
        const tecSelecionada = selectTec.value;

        // Simulando um tempo de processamento de rede/API (1.5 segundos)
        setTimeout(() => {
            let sacas = 0;
            let aguaEconomizada = 0;
            let nivelC02 = "";

            // Lógica de cálculo
            switch (tecSelecionada) {
                case 'convencional':
                    sacas = 50;
                    aguaEconomizada = 0;
                    nivelC02 = "Alta Emissão (Aração expõe carbono do solo)";
                    break;
                case 'direto':
                    sacas = 65;
                    aguaEconomizada = 15000;
                    nivelC02 = "Neutro (Carbono retido na palhada)";
                    break;
                case 'agricultura_40':
                    sacas = 85;
                    aguaEconomizada = 45000;
                    nivelC02 = "Sequestro Ativo (O solo atua como filtro positivo)";
                    break;
            }

            const totalSacas = hectares * sacas;
            const totalAgua = hectares * aguaEconomizada;
            const fmt = new Intl.NumberFormat('pt-BR');

            // Injeção de DOM Dinâmica
            divResultado.innerHTML = `
                <div class="box-resultado">
                    <h3>✅ Relatório de Impacto Gerado</h3>
                    <p>Projeção para <strong>${hectares} hectares</strong> operando em regime de ${selectTec.options[selectTec.selectedIndex].text}.</p>
                    <hr>
                    <p>🌾 <strong>Produtividade Esperada:</strong> <span class="dado-destaque">${fmt.format(totalSacas)} sacas</span> (${sacas} sc/ha)</p>
                    <p>💧 <strong>Economia Hídrica:</strong> <span class="dado-destaque">${fmt.format(totalAgua)} Litros</span> preservados</p>
                    <p>🌍 <strong>Pegada de Carbono:</strong> <span class="dado-destaque">${nivelC02}</span></p>
                </div>
            `;

            // Oculta loading, mostra resultado e volta o botão
            divLoading.classList.add('oculto');
            divResultado.classList.remove('oculto');
            btnCalcular.classList.remove('oculto');
            btnCalcular.textContent = "Refazer Cálculo";

        }, 1500); // 1500 milissegundos = 1.5s de animação
    });
});
