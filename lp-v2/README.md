# LP Pulse Telecom — versão aprovada

Página pública: `/index.html`. Assets, fontes locais e código desta versão ficam em `lp-v2/`.

As páginas dos parceiros em `/lamins/` e `/maysa/` mantêm seus arquivos independentes.

## Manutenção

Edite `styles.css` e `script.js`. Gere os arquivos minificados carregados pela página:

```powershell
powershell -File lp-v2/tools/build.ps1
```

Ao atualizar esses arquivos, avance a versão dos links de CSS e JavaScript em `index.html`.

## Conteúdo e contato

Quatro planos iguais nas dez cidades: 700 Mega (89,90), 800 Mega (99,90), 1 Giga (129,90) e 1 Giga + 1 Mesh (139,90). PulseTV incluso em todos, com mais de 160 canais, filmes e séries e até cinco telas simultâneas.

Todos os contatos e o formulário abrem WhatsApp com a frase aprovada, variando somente cidade e número regional. O nome preenchido não é acrescentado à mensagem, conforme o padrão solicitado para rastreamento no CRM. Esta página não envia o formulário às APIs legadas de captura de leads.

Artes fornecidas pelo usuário, otimizadas em WebP com variantes responsivas. Logo oficial PulseTV aplicada sem redesenho. Fontes Poppins locais com licença em `assets/fonts/OFL.txt`.

Animações nativas de entrada e filtros, respeitando movimento reduzido. O mapa só carrega quando se aproxima da área visível. As evidências e ferramentas de inspeção do preview não fazem parte da publicação.
