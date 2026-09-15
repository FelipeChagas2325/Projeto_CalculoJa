# CálculoJá — Site de Calculadoras Trabalhistas

Site estático (HTML/CSS/JS puro, sem dependências) com 7 calculadoras trabalhistas, tabelas de 2026 atualizadas e espaços prontos para anúncios do Google AdSense.

## Estrutura de pastas

```
calculoja/
├── index.html              ← página inicial (landing) — fica na raiz para hospedagem
├── html/                    ← páginas das calculadoras
│   ├── rescisao.html        ← Rescisão CLT
│   ├── inss.html            ← INSS + estimativa de aposentadoria
│   ├── seguro-desemprego.html
│   ├── horas-extras.html
│   ├── salario-anual.html
│   ├── tabelas.html         ← Tabelas INSS/IRRF/Seguro-Desemprego 2026
│   ├── mp936.html           ← MP-936 (histórico)
│   └── privacidade.html     ← Política de Privacidade (obrigatória p/ AdSense)
├── css/
│   └── style.css            ← folha de estilos global (tema claro, responsivo)
├── js/
│   ├── common.js            ← funções compartilhadas + tabelas 2026 (INSS, IRRF, seguro)
│   ├── ui.js                ← menu mobile, ano no rodapé
│   ├── rescisao.js
│   ├── inss.js
│   ├── seguro-desemprego.js
│   ├── horas-extras.js
│   ├── salario-anual.js
│   └── mp936.js
└── README.md
```

## Como colocar no ar (hospedagem gratuita)

1. **GitHub Pages** (recomendado, gratuito):
   - Crie uma conta no github.com e um repositório público (ex: `calculoja`).
   - Envie toda a pasta para o repositório (arraste os arquivos no site ou use Git).
   - Em `Settings → Pages`, selecione a branch `main` e pasta `/ (root)`.
   - Seu site ficará em `https://seu-usuario.github.io/calculoja/`.
   - (Opcional) Compre um domínio (.com.br ~R$40/ano na Registro.br) e aponte para o GitHub Pages.

2. **Netlify** ou **Vercel**: arraste a pasta para app.netlify.com/drop — gratuito e com HTTPS.

3. **Hospedagem tradicional** (Hostinger, Locaweb, etc.): envie os arquivos via FTP para a pasta `public_html`.

## Como ganhar dinheiro com os acessos (monetização)

1. **Google AdSense** (principal):
   - Crie uma conta em google.com/adsense e adicione seu site.
   - O AdSense exige conteúdo original e uma **Política de Privacidade** (já inclusa em `html/privacidade.html` — basta colocar seu e-mail de contato).
   - Aprovação costuma levar de dias a semanas; tenha algumas páginas com texto original.
   - Os locais de anúncio já estão marcados no código com `<div class="ad-slot">`. **Substitua cada um** pelo código de bloco de anúncios gerado no AdSense (Auto Ads também funciona — basta colar o script no `<head>`).
   - Formatos sugeridos: leaderboard (topo), retângulo médio (336×280 na lateral/abaixo do resultado) e link units.

2. **Afiliados**: links para produtos financeiros (Simples Nacional, contabilidade, FGTS, empréstimo consignado) — programas como Lomadee, Monetizze, Hotmart.

3. **SEO (para atrair acessos gratuitos)**:
   - Cada página já tem `<title>`, `meta description` e cabeçalhos H1/H2 otimizados.
   - Escreva um parágrafo de texto original em cada página (o Google gosta de conteúdo).
   - Registre no Google Search Console e envie um sitemap.
   - Compartilhe em grupos de Facebook/WhatsApp de trabalhadores, LinkedIn, etc.

4. **Google Analytics**: crie uma propriedade em analytics.google.com e cole o script no `<head>` de cada página para acompanhar os acessos.

## Atualização anual das tabelas

Todo janeiro o governo reajusta as tabelas. Edite **apenas** o objeto `TABELA` no topo de `js/common.js` (salário mínimo, teto do INSS, faixas, IRRF, seguro-desemprego). O resto do site se atualiza sozinho.

## Aviso legal

Os cálculos são estimativas informativas. Inclua o aviso de que não substituem profissional habilitado (já presente no rodapé).
