// Aguarda o HTML carregar para evitar bugs no console
document.addEventListener('DOMContentLoaded', () => {
    
    /* ==================================================================
       1. MELHORIA DE USUÁRIO: MODO ESCURO 
       ================================================================== */
    const btnTema = document.getElementById('btn-tema');
    const iconeTema = document.getElementById('icone-tema');
    const bodySite = document.body;
    
    // Verifica na memória se o usuário já escolheu o tema
    if (localStorage.getItem('preferencia_tema_agrinho') === 'dark') {
        bodySite.classList.add('dark-mode');
        iconeTema.textContent = '☀️';
    }

    // Função para alternar as cores e salvar a preferência
    btnTema.addEventListener('click', () => {
        bodySite.classList.toggle('dark-mode'); // Manipula classe no Body
        
        if (bodySite.classList.contains('dark-mode')) {
            localStorage.setItem('preferencia_tema_agrinho', 'dark');
            iconeTema.textContent = '☀️';
        } else {
            localStorage.setItem('preferencia_tema_agrinho', 'light');
            iconeTema.textContent = '🌙';
        }
    });

    /* ==================================================================
       2. USABILIDADE: MENU SANDUÍCHE (Celular/Tablet)
       ================================================================== */
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    // Função para abrir e fechar o menu no celular
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('ativo');
    });

    // Função para fechar o menu ao clicar em um link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('ativo')) {
                navLinks.classList.remove('ativo');
            }
        });
    });

    /* ==================================================================
       3. EFEITOS VISUAIS: ANIMAÇÃO DE SCROLL (Scroll Reveal)
       ================================================================== */
    const elementosAnimados = document.querySelectorAll('.reveal');

    // API de IntersectionObserver para animações suaves
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('ativo');
                observador.unobserve(entrada.target); // Anima só uma vez
            }
        });
    }, { threshold: 0.15 });

    elementosAnimados.forEach(el => observador.observe(el));


    /* ==================================================================
       4. MOTOR DE CÁLCULO AGRO UNIFICADO 
       ================================================================== */
    const formularioAgro = document.getElementById('form-agro');
    const inputNome = document.getElementById('nome-usuario'); // Captura o nome aqui
    const inputHectares = document.getElementById('area');
    const selectTec = document.getElementById('tecnologia');
    const divLoading = document.getElementById('loading');
    const divResultado = document.getElementById('resultado');
    const btnCalcular = document.getElementById('btn-calcular');

    formularioAgro.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Interface: Esconde botão e resultado anterior, mostra loading simulado (UX)
        btnCalcular.classList.add('oculto');
        divResultado.classList.add('oculto');
        divLoading.classList.remove('oculto');

        // Captura e converte variáveis 
        const nomeUsuario = inputNome.value.trim(); // Pega o nome digitado
        const hectares = parseFloat(inputHectares.value);
        const tecSelecionada = selectTec.value;

        // Validação básica do nome
        if (nomeUsuario === "") {
            alert("Por favor, preencha seu nome completo.");
            divLoading.classList.add('oculto');
            btnCalcular.classList.remove('oculto');
            return;
        }

        // Simulando delay de processamento agronômico (1.5s)
        setTimeout(() => {
            let sacas = 0;
            let aguaEconomizadaLitros = 0;
            let parecerSolo = "";

            // Lógica de cálculo baseada no Nível de Tecnologia
            switch (tecSelecionada) {
                case 'convencional':
                    sacas = 55;
                    aguaEconomizadaLitros = 0;
                    parecerSolo = "⚠️ Solo exposto. Risco de erosão e perda de nutrientes.";
                    break;
                case 'direto':
                    sacas = 68;
                    aguaEconomizadaLitros = 15000; // 15 mil litros preservados por ha
                    parecerSolo = "✅ Palhada atua como esponja natural de umidade.";
                    break;
                case 'agricultura_40':
                    sacas = 85;
                    aguaEconomizadaLitros = 45000; // 45 mil litros preservados por ha
                    parecerSolo = "🌟 Perfeição tecnológica: Solo saudável e em equilíbrio.";
                    break;
            }

            // Cálculos Totais (Processamento de variáveis)
            const totalSacas = hectares * sacas;
            const totalAgua = hectares * aguaEconomizadaLitros;
            const fmt = new Intl.NumberFormat('pt-BR'); // Formatador nativo de números

            // Manipulação dinâmica de DOM para injetar o relatório (Nível 4 JS)
            // Incluindo o Olá Personalizado
            divResultado.innerHTML = `
                <div class="box-relatorio">
                    <h3>📊 Olá, ${nomeUsuario}! <br> Aqui está seu Relatório Sustentável</h3>
                    <hr style="margin: 15px 0; border: 0; border-top: 1px dashed var(--cor-borda);">
                    <p>Mapeamento de <strong>${hectares} hectares</strong> operando em regime de ${selectTec.options[selectTec.selectedIndex].text}.</p>
                    <br>
                    <p>🌾 <strong>Produtividade Esperada:</strong> <span class="dado-verde">${fmt.format(totalSacas)} sacas</span> (${sacas} sc/ha)</p>
                    <p>💧 <strong>Água Doce Preservada:</strong> <span class="dado-verde">${fmt.format(totalAgua)} Litros</span> por ciclo</p>
                    <p>🌍 <strong>Diagnóstico do Solo:</strong> <span class="dado-verde">${parecerSolo}</span></p>
                </div>
            `;

            // Mostra resultado e volta o botão
            divLoading.classList.add('oculto');
            divResultado.classList.remove('oculto');
            btnCalcular.classList.remove('oculto');
            btnCalcular.textContent = "Refazer Projeção";

        }, 1500); // 1.5s de delay simulado
    });
});
