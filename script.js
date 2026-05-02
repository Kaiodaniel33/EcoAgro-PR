// Aguarda o HTML carregar para evitar erros no console
document.addEventListener('DOMContentLoaded', () => {

    /* ==================================================================
       1. MENU SANDUÍCHE (Mobile)
       ================================================================== */
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    // Função para abrir e fechar o menu no celular
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('ativo');
    });

    // Função para fechar o menu sanduíche quando um link for clicado
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('ativo')) {
                navLinks.classList.remove('ativo');
            }
        });
    });

    /* ==================================================================
       2. MODO ESCURO / CLARO (Usabilidade)
       ================================================================== */
    const btnTema = document.getElementById('btn-tema');
    const iconeTema = document.getElementById('icone-tema');
    const textoTema = document.getElementById('texto-tema');
    const bodySite = document.body;
    
    // Verifica preferência anterior no LocalStorage
    if (localStorage.getItem('tema') === 'dark') {
        bodySite.classList.add('dark-mode');
        iconeTema.textContent = '☀️';
        textoTema.textContent = 'Modo Claro';
    }

    // Função para alternar as cores e o texto do botão
    btnTema.addEventListener('click', () => {
        bodySite.classList.toggle('dark-mode');
        
        if (bodySite.classList.contains('dark-mode')) {
            localStorage.setItem('tema', 'dark');
            iconeTema.textContent = '☀️';
            textoTema.textContent = 'Modo Claro'; // Se está escuro, botão oferece Modo Claro
        } else {
            localStorage.setItem('tema', 'light');
            iconeTema.textContent = '🌙';
            textoTema.textContent = 'Modo Escuro'; // Se está claro, botão oferece Modo Escuro
        }
    });

    /* ==================================================================
       3. ANIMAÇÃO DE ROLAGEM (Scroll Reveal)
       ================================================================== */
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

    /* ==================================================================
       4. LÓGICA DO SIMULADOR E MANIPULAÇÃO DE DOM (Requisito Agrinho)
       ================================================================== */
    const formulario = document.getElementById('form-agro');
    const inputNome = document.getElementById('nome-produtor'); // Captura o nome
    const inputHectares = document.getElementById('hectares');
    const selectManejo = document.getElementById('manejo');
    
    const divLoading = document.getElementById('status-carregamento');
    const divResultado = document.getElementById('resultado-relatorio');
    const btnSubmit = document.getElementById('btn-calcular');

    // Função para calcular a pontuação e impacto ambiental
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Impede o envio padrão

        // Trava o botão para evitar cliques duplos
        btnSubmit.disabled = true;
        btnSubmit.style.opacity = '0.5';

        // Esconde resultado antigo e mostra div de carregamento
        divResultado.classList.add('oculto');
        divLoading.classList.remove('oculto');

        // Armazena as informações nas variáveis
        const nomeUsuario = inputNome.value.trim();
        const areaHectares = parseFloat(inputHectares.value);
        const tipoManejo = selectManejo.value;

        // Processamento fake de 1.5s para UX
        setTimeout(() => {
            let sacasPorHa = 0;
            let litrosPreservadosPorHa = 0;

            if (tipoManejo === 'basico') {
                sacasPorHa = 50;
                litrosPreservadosPorHa = 0;
            } else if (tipoManejo === 'intermediario') {
                sacasPorHa = 68;
                litrosPreservadosPorHa = 15000;
            } else if (tipoManejo === 'avancado') {
                sacasPorHa = 85;
                litrosPreservadosPorHa = 40000;
            }

            // Cálculos
            const sacasTotais = areaHectares * sacasPorHa;
            const aguaTotal = areaHectares * litrosPreservadosPorHa;
            const formatador = new Intl.NumberFormat('pt-BR');

            // Injeta o HTML com a personalização "Olá, [nome]"
            divResultado.innerHTML = `
                <div class="box-relatorio">
                    <h3>Olá, ${nomeUsuario}! Aqui está seu relatório:</h3>
                    <hr>
                    <p>Com base nos seus <strong>${areaHectares} hectares</strong>, a projeção é:</p>
                    <br>
                    <p>🌾 <strong>Colheita Estimada:</strong> <span class="dado-verde">${formatador.format(sacasTotais)} sacas</span></p>
                    <p>💧 <strong>Água Preservada:</strong> <span class="dado-verde">${formatador.format(aguaTotal)} Litros</span></p>
                </div>
            `;

            // Mostra a div de resultado e esconde o loading
            divLoading.classList.add('oculto');
            divResultado.classList.remove('oculto');
            
            // Destrava o botão
            btnSubmit.disabled = false;
            btnSubmit.style.opacity = '1';
            btnSubmit.textContent = "Refazer Simulação";

        }, 1500);
    });
});
