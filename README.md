# CoopAgro PR | Plataforma de Impacto Sustentável

# Objetivo do Projeto e Alinhamento Temático

A plataforma **CoopAgro PR** foi desenvolvida exclusivamente para o **Concurso Agrinho 2026**, na Categoria Programação Front-End (Subcategoria 3), seguindo rigorosamente o tema:

> *“Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente.”*

O projeto tem como finalidade demonstrar, por meio de uma aplicação web moderna, interativa e orientada por dados, que a utilização de tecnologias no campo contribui diretamente para a construção de uma produção agrícola mais eficiente, sustentável e economicamente viável.

A plataforma evidencia como práticas inovadoras, como Agricultura de Precisão, Plantio Direto e monitoramento inteligente da produção, podem simultaneamente:

* preservar os recursos naturais;
* reduzir desperdícios;
* otimizar processos operacionais;
* aumentar a produtividade agrícola;
* ampliar a rentabilidade do produtor rural.

Além de apresentar informações educativas, o projeto busca conscientizar os usuários sobre a importância da integração entre tecnologia, produção agrícola e preservação ambiental.

---

# Funcionalidades e Experiência do Usuário

A aplicação foi desenvolvida com foco em usabilidade, acessibilidade, responsividade e interatividade, proporcionando uma navegação intuitiva em diferentes dispositivos.

# Navegação Responsiva e Estrutura One-Page

A plataforma utiliza uma estrutura do tipo *One-Page*, permitindo que o usuário navegue pelas seções de forma fluida e organizada.

Entre os recursos implementados, destacam-se:

* menu responsivo do tipo “Sanduíche” para dispositivos móveis;
* rolagem suave entre seções;
* botão interativo de “Voltar ao Topo”;
* adaptação automática para smartphones, tablets e computadores.

---

# Modo Noturno e Recursos de Acessibilidade

Com o objetivo de melhorar a experiência do usuário e ampliar a acessibilidade da aplicação, foi implementado um sistema de alternância entre tema claro e escuro.

O recurso utiliza:

* variáveis globais em CSS (`:root`);
* manipulação dinâmica de classes via JavaScript;
* armazenamento persistente da preferência do usuário utilizando `localStorage`.

Essa funcionalidade proporciona maior conforto visual e personalização da interface.

---

# Simulador Inteligente de Sustentabilidade Rural

O principal recurso da plataforma é o Simulador Inteligente, desenvolvido para demonstrar os impactos positivos da adoção de tecnologias sustentáveis no agronegócio.

O usuário informa:

* nome do produtor;
* área cultivada em hectares;
* pacote tecnológico desejado.

A partir dessas informações, o sistema:

* realiza validações automáticas dos campos;
* impede valores inválidos ou negativos;
* executa cálculos matemáticos em funções isoladas;
* simula carregamento assíncrono;
* gera relatórios personalizados diretamente na interface.

Os resultados apresentados incluem projeções relacionadas a:

* aumento da produtividade;
* economia hídrica;
* eficiência operacional;
* redução de impactos ambientais;
* potencial de lucratividade.

---

# Arquitetura Técnica do Projeto

O desenvolvimento foi realizado seguindo integralmente as exigências do regulamento, utilizando exclusivamente tecnologias Front-End nativas, sem frameworks ou bibliotecas externas.

# HTML5 — Estrutura Semântica e Acessível

A aplicação foi estruturada com HTML5 semântico, utilizando elementos apropriados como:

```html
<main>
<section>
<article>
<nav>
```

Também foram implementados recursos de acessibilidade, incluindo:

* `aria-label`;
* `aria-live`;
* organização hierárquica adequada de títulos;
* compatibilidade com leitores de tela.

---

# CSS3 — Design Responsivo e Modular

O sistema visual foi desenvolvido com CSS3 moderno, utilizando:

* Variáveis Globais (`:root`);
* Flexbox;
* CSS Grid Layout;
* Media Queries;
* efeitos de transição (`hover` e `focus`).

A interface foi projetada para garantir responsividade, organização visual e boa experiência de navegação em diferentes resoluções.

---

# JavaScript Vanilla — Lógica e Interatividade

Toda a lógica da aplicação foi construída em JavaScript puro (Vanilla JS), garantindo leveza, desempenho e compatibilidade.

Entre os recursos implementados, destacam-se:

* manipulação dinâmica do DOM;
* captura de eventos com `addEventListener`;
* utilização de funções organizadas por responsabilidade;
* uso de Template Strings;
* simulação assíncrona com `setTimeout`;
* validações dinâmicas em tempo real.

O código foi estruturado visando legibilidade, organização, manutenção facilitada e estabilidade da aplicação.

---

# Estrutura de Diretórios

O repositório foi organizado de forma limpa e profissional, contendo apenas os arquivos essenciais para execução da aplicação.

```text
/
├── index.html          # Estrutura principal da aplicação
├── style.css           # Estilos globais e responsividade
├── script.js           # Lógica de programação e interatividade
├── README.md           # Documentação técnica do projeto
└── /assets
    └── /img            # Recursos visuais otimizados
```

---

# Considerações Finais

A plataforma CoopAgro PR demonstra que inovação tecnológica e sustentabilidade podem atuar de forma integrada no agronegócio moderno.

O projeto busca incentivar práticas agrícolas mais conscientes, eficientes e responsáveis, reforçando a importância do equilíbrio entre produção e preservação ambiental para a construção de um futuro sustentável.
