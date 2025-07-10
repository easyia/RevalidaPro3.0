# 🚀 CHECKLIST DE DEPLOY - Easy AI

## ✅ Variáveis de Ambiente no Vercel

### 📋 **OBRIGATÓRIAS** (Copie exatamente):

1. **VITE_SUPABASE_URL**
   ```
   https://jwperaccelytdlruymxi.supabase.co
   ```

2. **VITE_SUPABASE_ANON_KEY**
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3cGVyYWNjZWx5dGRscnV5bXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MjY1MTYsImV4cCI6MjA2NjQwMjUxNn0.HyYOhzRs7jVZkG2npu1EQlh01XYHDSf7Z1kPeqAepK8
   ```

### 🔧 **Como Configurar:**

1. Acesse: https://vercel.com/dashboard
2. Clique no seu projeto
3. Vá em **Settings** → **Environment Variables**
4. Adicione cada variável com:
   - ✅ **Production** marcado
   - ✅ **Preview** marcado  
   - ✅ **Development** marcado

### 🔄 **Após Salvar:**

1. Vá em **Deployments**
2. Clique nos **⋯** do último deploy
3. Selecione **Redeploy** 
4. Aguarde o build terminar
5. Teste o site

### 🐛 **Troubleshooting:**

- **Se ainda der erro**: Delete todas as env vars e recrie
- **Cache**: Force hard refresh (Ctrl+Shift+R)
- **Console**: Verifique se aparece "🔧 Supabase Config Debug"

### 🌐 **URLs Esperadas:**

- Landing Page: `https://seu-projeto.vercel.app/`
- Lead Capture: `https://seu-projeto.vercel.app/lead-capture`
- App Login: `https://seu-projeto.vercel.app/app` 