# 🌱 Grow Tracker — Itaituba/PA

App de acompanhamento de cultivo indoor, da germinação à colheita.

## Funcionalidades

- 📊 **Painel** — Parâmetros semana a semana (temp, RH, luz, EC, dosagem EasyCoco)
- 📋 **Diário** — Registro com foto, pH, EC, temperatura, umidade, ações
- 🔬 **Diagnóstico IA** — Envie foto da planta e receba análise inteligente
- 🌡 **Calculadora VPD** — Com heatmap interativo por fase
- 🧪 **Calculadora de Nutrientes** — Dosagem exata por litros de água
- 📈 **Gráficos de Evolução** — Sparklines de todos os dados registrados
- ⚙️ **Equipamentos** — Inventário com checkbox de adquirido/pendente
- 🌱 **Gerenciamento de Plantas** — Editar genéticas, descartar, adicionar, novo ciclo

## Deploy Rápido (Vercel)

### 1. Instalar Node.js
Baixe em https://nodejs.org (versão LTS)

### 2. Instalar dependências
```bash
cd grow-tracker
npm install
```

### 3. Testar localmente
```bash
npm run dev
```
Acesse http://localhost:5173

### 4. Subir para GitHub
```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/grow-tracker.git
git push -u origin main
```

### 5. Deploy na Vercel
1. Acesse https://vercel.com e faça login com GitHub
2. Clique em "New Project"
3. Importe o repositório `grow-tracker`
4. Framework: Vite (detectado automaticamente)
5. Clique "Deploy"
6. Pronto! Seu app estará em `https://grow-tracker-XXXX.vercel.app`

## Deploy Alternativo (Netlify)

1. Acesse https://netlify.com
2. "Add new site" → "Import an existing project"
3. Conecte o GitHub e selecione o repositório
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

## Estrutura
```
grow-tracker/
├── index.html          ← Página principal
├── package.json        ← Dependências
├── vite.config.js      ← Configuração Vite
├── vercel.json         ← Config Vercel (SPA)
├── netlify.toml        ← Config Netlify (SPA)
├── .gitignore
├── README.md
└── src/
    ├── main.jsx        ← Entry point React
    └── App.jsx         ← App completo (690 linhas)
```

## Tecnologias
- React 18
- Vite 6
- API Anthropic (diagnóstico por foto)
- LocalStorage (dados persistidos no navegador)
