# Configuração de Variáveis de Ambiente

## Variáveis necessárias no Vercel:

### Supabase
- `VITE_SUPABASE_URL=https://jwperaccelytdlruymxi.supabase.co`
- `VITE_SUPABASE_ANON_KEY=sua_chave_anonima_supabase`

### URLs de Redirecionamento
- `VITE_EMAIL_REDIRECT_URL=https://www.dreasyai.com/`
- `VITE_GOOGLE_REDIRECT_URL=https://www.dreasyai.com/app/dashboard`

### Google AI Studio (Gemini)
- `GOOGLE_AI_API_KEY=sua_chave_do_google_ai_studio`

## Como obter a chave do Google AI Studio:
1. Acesse https://aistudio.google.com/
2. Clique em "Get API Key"
3. Copie a chave gerada
4. Adicione no Vercel como `GOOGLE_AI_API_KEY` 