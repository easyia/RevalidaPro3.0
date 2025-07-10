#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('\n🩺 Revalida Pro - Configuração Inicial\n');

// Verificar se o .env.local já existe
const envLocalPath = path.join(__dirname, '.env.local');
if (fs.existsSync(envLocalPath)) {
  console.log('✅ Arquivo .env.local já existe!\n');
  console.log('Se você quiser reconfigurar, delete o arquivo .env.local e execute este script novamente.\n');
  process.exit(0);
}

// Template do .env.local
const envTemplate = `# Configurações do Supabase para desenvolvimento local
# IMPORTANTE: Este arquivo contém informações sensíveis e não deve ser commitado no Git

# URL do seu projeto Supabase
# Encontre em: https://supabase.com -> Seu Projeto -> Settings -> API
VITE_SUPABASE_URL=https://SEU_PROJETO_ID.supabase.co

# Chave anônima pública do Supabase  
# Encontre em: https://supabase.com -> Seu Projeto -> Settings -> API -> anon/public
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_aqui

# =====================================================
# INSTRUÇÕES:
# =====================================================
# 1. Acesse https://supabase.com
# 2. Vá para seu projeto
# 3. Navegue para Settings > API
# 4. Copie a URL e a chave anon/public
# 5. Substitua os valores acima pelas suas credenciais reais
# 6. Salve este arquivo
# 7. Execute: npm run dev
# =====================================================
`;

try {
  // Criar o arquivo .env.local
  fs.writeFileSync(envLocalPath, envTemplate);
  
  console.log('✅ Arquivo .env.local criado com sucesso!\n');
  console.log('📝 Próximos passos:');
  console.log('   1. Abra o arquivo .env.local');
  console.log('   2. Substitua as credenciais de exemplo pelas suas credenciais reais do Supabase');
  console.log('   3. Execute: npm run dev\n');
  console.log('🔗 Para obter suas credenciais do Supabase:');
  console.log('   • Acesse: https://supabase.com');
  console.log('   • Vá para: Seu Projeto > Settings > API');
  console.log('   • Copie a URL e a chave anon/public\n');
  
} catch (error) {
  console.error('❌ Erro ao criar arquivo .env.local:', error.message);
  console.log('\n📝 Você pode criar o arquivo manualmente com o seguinte conteúdo:\n');
  console.log(envTemplate);
} 