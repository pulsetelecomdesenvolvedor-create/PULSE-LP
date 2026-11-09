# LP Pulse Telecom — Redesign v3

Integração local do redesign entregue em `preview-local/HANDOFF-CODEX-redesign-v3.md`. A prévia foi aprovada visualmente; os textos novos listados abaixo precisam de confirmação antes de publicar. Commit local não autoriza push, deploy ou exclusão das artes anteriores.

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

Os três banners e os cabeçalhos dos planos agora usam HTML/CSS/SVG, com textos e preços editáveis. A seção PulseTV apresenta TV e celular com interface ilustrativa de categorias genéricas. Logo oficial PulseTV aplicada sem redesenho. Fontes Poppins locais com licença em `assets/fonts/OFL.txt`.

As imagens anteriores `campaign-*`, `plan-*` e `poster-*` continuam preservadas em `assets/`, embora não sejam mais referenciadas pela página. Só podem ser removidas após confirmação do usuário.

## Conteúdo pendente de confirmação

- Frases de uso dos quatro planos: navegar/estudar/família; home office/várias telas; casa cheia/jogos/downloads; "Sinal forte em todos os cômodos".
- Chamada do Mesh "Wi-Fi 6 na casa toda" e descrição de sinal forte em todos os cômodos.
- Selo "Recomendado" no plano 800 Mega.
- Redação "Tecnologia Wi-Fi 6" na lista de todos os planos.
- Título "Leve a Pulse com você: Chip Pulse" e tag "Pulse móvel".
- Mockup com categorias genéricas e legenda "Interface ilustrativa".

Animações nativas de entrada e filtros, respeitando movimento reduzido. O mapa só carrega quando se aproxima da área visível. As evidências e ferramentas de inspeção do preview não fazem parte da publicação.
