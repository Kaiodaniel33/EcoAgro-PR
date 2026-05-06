# 🌱 CoopAgro PR | Plataforma de Impacto Sustentável

## 🎯 Objetivo do Projeto e Alinhamento Temático
Este projeto foi desenvolvido exclusivamente para o **Concurso Agrinho 2026** (Categoria Programação Front-End - Subcategoria 3). A plataforma atende rigorosamente ao tema central: *"Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"*.

O objetivo é provar, através de uma interface web interativa e orientada a dados, que a adoção de tecnologias no campo — como Agricultura de Precisão e Plantio Direto — não apenas preserva os recursos naturais, mas também otimiza os processos operacionais, aumentando a lucratividade e a produtividade das propriedades rurais.

## ⚙️ Funcionalidades e Instruções de Uso
A aplicação foi projetada com foco absoluto em Usabilidade (UX/UI), Acessibilidade e prevenção de erros:

1. **Navegação Fluida e Responsiva (One-Page):** O usuário navega pelas seções de forma intuitiva. Em dispositivos móveis, um menu *Sanduíche* dinâmico (☰) é ativado via JavaScript. Um botão interativo de "Voltar ao Topo" facilita a rolagem em telas menores.
2. **Modo Noturno (Acessibilidade Avançada):** Um botão de alternância de tema no cabeçalho ajusta as variáveis globais de cor (CSS) de toda a aplicação. A preferência do usuário é gravada de forma persistente no navegador via API `localStorage`.
3. **Simulador Inteligente (Motor Lógico):** A principal ferramenta de otimização da plataforma. O produtor insere seu nome, a área mapeada em hectares e seleciona um pacote tecnológico. O sistema realiza uma validação dinâmica (impedindo dados incorretos ou negativos), processa os cálculos matemáticos em funções isoladas, simula um tempo de carregamento assíncrono e injeta no DOM um relatório customizado com projeções reais de produtividade e economia hídrica.

## 💻 Arquitetura Técnica (Critérios de Nível 4)
O desenvolvimento seguiu estritamente as diretrizes do regulamento, utilizando **exclusivamente tecnologias Front-End nativas**, sem o uso de frameworks externos ou bibliotecas prontas:

* **HTML5 (Semântico e Acessível):** Estruturação lógica com tags corretas (`<main>`, `<section>`, `<article>`, `<nav>`) e implementação de atributos de acessibilidade para leitores de tela (`aria-live`, `aria-label`).
* **CSS3 (Modular e Fluido):** Uso avançado de Variáveis Globais (`:root`), Flexbox, CSS Grid e `Media Queries` para adaptação impecável da interface em *smartphones*, *tablets* e *desktops*. Implementação de transições de estado (`hover` e `focus`) para navegação via teclado.
* **JavaScript (Vanilla):** Lógica estruturada em funções de escopo isolado para o motor de cálculo. O script captura eventos nativos (`addEventListener`), manipula o DOM de forma segura injetando *Template Strings* e utiliza processamento assíncrono básico (`setTimeout`). Código livre de *bugs* e sem erros no console.

## 📂 Estrutura de Diretórios
O repositório foi organizado e higienizado para manter apenas os arquivos essenciais à execução da aplicação:

```text
/
├── index.html          # Estrutura semântica principal e conteúdo textual
├── style.css           # Folha de estilos globais, variáveis e responsividade
├── script.js           # Lógica de programação estruturada e interatividade
├── README.md           # Documentação técnica e apresentação do projeto
└── /assets             # Diretório isolado para recursos visuais
    └── /img            # Logotipos e imagens devidamente otimizadas
