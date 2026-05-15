document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // Função para alternar o Modo Escuro / Claro
    // ==========================================
    const btnTema = document.getElementById('btn-tema');
    const iconeTema = document.getElementById('icone-tema');
    const bodySite = document.body;
    
    // Recupera a preferência salva no navegador do usuário
    if (localStorage.getItem('tema_agrinho') === 'dark') {
        bodySite.classList.add('dark-mode');
        iconeTema.textContent = '☀️';
    }

    btnTema.addEventListener('click', () => {
        bodySite.classList.toggle('dark-mode');
        
        // Verifica a classe atual e altera o ícone e o localStorage
        if (bodySite.classList.contains('dark-mode')) {
            localStorage.setItem('tema_agrinho', 'dark');
            iconeTema.textContent = '☀️';
        } else {
            localStorage.setItem('tema_agrinho', 'light');
            iconeTema.textContent = '🌙';
        }
    });

    // ==========================================
    // Função do Menu Mobile (Menu Sanduíche)
    // ==========================================
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('ativo');
    });

    // Oculta o menu ao clicar em algum link de navegação
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('ativo');
        });
    });

    // ==========================================
    // Função para Animações de Scroll (Reveal)
    // ==========================================
    const elementosAnimados = document.querySelectorAll('.reveal');
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('ativo');
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.15 });

    elementosAnimados.forEach(el => observador.observe(el));

    // ==========================================
    // Função para exibir e ocultar botão "Voltar ao Topo"
    // ==========================================
    const btnTopo = document.getElementById('btn-topo');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnTopo.classList.add('visivel');
            btnTopo.classList.remove('oculto');
        } else {
            btnTopo.classList.remove('visivel');
            btnTopo.classList.add('oculto');
        }
    });

    btnTopo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==========================================
    // Lógica e Cálculos do Simulador Agronômico
    // ==========================================
    const formAgro = document.getElementById('form-agro');
    const inputNome = document.getElementById('nome-usuario'); 
    const inputHectares = document.getElementById('area');
    const selectTec = document.getElementById('tecnologia');
    const divLoading = document.getElementById('status-carregamento'); 
    const divResultado = document.getElementById('resultado');
    const btnCalcular = document.getElementById('btn-calcular');

    // Função auxiliar que processa as variáveis com base na tecnologia
    function calcularProjecao(tecnologia, hectares) {
        let dados = { sacas: 0, agua: 0, solo: "" };
        
        switch (tecnologia) {
            case 'convencional':
                dados.sacas = 55;
                dados.agua = 0;
                dados.solo = "⚠️ Solo exposto. Risco de erosão e perda de nutrientes.";
                break;
            case 'direto':
                dados.sacas = 68;
                dados.agua = 15000;
                dados.solo = "✅ Palhada atua como esponja natural de umidade.";
                break;
            case 'agricultura_40':
                dados.sacas = 85;
                dados.agua = 45000;
                dados.solo = "🌟 Perfeição tecnológica: Solo saudável e em equilíbrio.";
                break;
        }
        
        return {
            totalSacas: dados.sacas * hectares,
            totalAgua: dados.agua * hectares,
            sacasPorHa: dados.sacas,
            parecer: dados.solo
        };
    }

    // Evento de submissão do formulário
    formAgro.addEventListener('submit', (e) => {
        e.preventDefault(); 

        // Captura e sanitiza o nome para prevenir ataques XSS simples (diferencial técnico)
        const nomeUsuarioBruto = inputNome.value.trim();
        const nomeUsuario = nomeUsuarioBruto.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        
        const hectares = parseFloat(inputHectares.value);
        const tecSelecionada = selectTec.value;

        // Validação de segurança básica
        if (isNaN(hectares) || hectares <= 0) {
            alert("Erro: Insira um valor válido e maior que zero para a área.");
            inputHectares.focus();
            return; 
        }

        // Esconde resultado anterior e mostra animação de carregamento
        btnCalcular.classList.add('oculto');
        divResultado.classList.add('oculto');
        divLoading.classList.remove('oculto');

        // Simula tempo de processamento de API para melhorar experiência visual (UX)
        setTimeout(() => {
            const projecao = calcularProjecao(tecSelecionada, hectares);
            const fmt = new Intl.NumberFormat('pt-BR'); 
            const nomeTec = selectTec.options[selectTec.selectedIndex].text;

            // Manipula o DOM injetando HTML limpo. CSS inline removido (<hr class="linha-divisoria">) para respeitar o edital.
            divResultado.innerHTML = `
                <div class="box-relatorio">
                    <h3>📊 Olá, ${nomeUsuario}! <br> Aqui está seu Relatório Sustentável</h3>
                    <hr class="linha-divisoria">
                    <p>Mapeamento de <strong>${hectares} hectares</strong> operando em regime de ${nomeTec}.</p>
                    <br>
                    <p>🌾 <strong>Produtividade Esperada:</strong> <span class="dado-verde">${fmt.format(projecao.totalSacas)} sacas</span> (${projecao.sacasPorHa} sc/ha)</p>
                    <p>💧 <strong>Água Doce Preservada:</strong> <span class="dado-verde">${fmt.format(projecao.totalAgua)} Litros</span> por ciclo</p>
                    <p>🌍 <strong>Diagnóstico do Solo:</strong> <span class="dado-verde">${projecao.parecer}</span></p>
                </div>
            `;

            // Exibe resultado e esconde carregamento
            divLoading.classList.add('oculto');
            divResultado.classList.remove('oculto');
            btnCalcular.classList.remove('oculto');
            btnCalcular.textContent = "Refazer Projeção";

        }, 1200); 
    });
});
