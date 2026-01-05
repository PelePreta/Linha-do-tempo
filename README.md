# Linha do Tempo — Análise cronológica da Saga Star Wars

Arquivo estático com uma linha do tempo cronológica comentada das principais séries e filmes da saga Star Wars, criado como trabalho da disciplina Desenvolvimento Web.

## Visão geral

Este projeto apresenta uma página principal com o resumo da Saga e outra com uma linha do tempo horizontal contendo cards descritivos (ano, tema, ângulo e observações) para filmes e séries da saga.

O objetivo principal é apresentar conhecimentos de HTML, CSS e JavaScript básico em um trabalho educativo e sem fins comerciais.

## Como visualizar localmente

Por ser um site estático, basta abrir os arquivos HTML no seu navegador. Passos recomendados:

- Abrir `index.html` ou `linha_do_tempo.html` no navegador (arrastar o arquivo para a janela do navegador ou usar "Abrir com").
- Para uma experiência mais próxima de um servidor (evita problemas com algumas fontes/loads), você pode rodar um servidor HTTP simples:

  - Com Python 3 instalado (no PowerShell):

    python -m http.server 8000

    e então abra http://localhost:8000/linha-do-tempo.html

  - Ou use uma extensão de editor como Live Server (VS Code) para servir a pasta do projeto.

## Estrutura do projeto

- Raiz do projeto (apresenta apenas os arquivos principais):

- `index.html` — Página principal com o resumo da Saga Star Wars.
- `linha_do_tempo.html` — Página com a linha do tempo.
- `README.md` — Este arquivo.
- `css/` — Pasta com o arquivo de estilos:
  - `style.css` — Estilos principais, fontes via @font-face, variáveis CSS e layout responsivo.
- `scripts/` — Scripts JavaScript:
  - `footer.js` — Funções simples para mostrar/esconder o rodapé.
- `fonts/` — Fontes usadas pelo projeto (woff2).
- `assets/` — Imagens (ex.: imagem de fundo usada no `style.css`).

## Tecnologias

- HTML5
- CSS3 (Custom Properties, Flexbox)
- JavaScript (vanilla)

## Notas sobre conteúdo e licenças

- O conteúdo referenciado (filmes, séries, personagens) pertence a seus respectivos detentores (LucasFilm Ltda., The Walt Disney Company, etc.). Este projeto é um trabalho de fã e educacional, sem fins comerciais.
- As fontes e imagens incluídas devem ser usadas conforme suas licenças. Verifique a origem das fontes em `fonts/` e a imagem `assets/` antes de reutilizá-las em projetos comerciais.

## Observações de desenvolvimento

- O layout principal usa uma grade horizontal rolável (`.timeline-grid`) para acomodar eras/colunas.
- Há customizações visuais (efeitos de luz, sabres) implementadas em CSS puro.
- O rodapé é controlado pelo `scripts/footer.js` com duas funções simples: `mostrarFooter()` e `esconderFooter()`. Atualmente elas apenas alternam o estilo `display`. Sugestões: usar `aria-hidden`/transições e acrescentar controles de acessibilidade.

## Autor

Desenvolvido por Stéfany — Trabalho final da disciplina Desenvolvimento Web (Instituto Federal). Projeto criado como fã e com fins educativos.


## Aviso legal

Este site é NÃO OFICIAL e criado para fins educativos. Todas as marcas registradas e direitos autorais sobre as obras referenciadas pertencem aos seus respectivos proprietários.
