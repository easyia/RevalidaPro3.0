// Script para testar configuração do Supabase
// Execute com: node test-supabase-config.js

import { createClient } from '@supabase/supabase-js';

// Configuração do Supabase (use as mesmas variáveis do seu projeto)
const supabaseUrl = 'https://jwperaccelytdlruymxi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3cGVyYWNjZWx5dGRscnV5bXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MjY1MTYsImV4cCI6MjA2NjQwMjUxNn0.HyYOhzRs7jVZkG2npu1EQlh01XYHDSf7Z1kPeqAepK8';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testSupabaseConfig() {
  console.log('🔍 Testando configuração do Supabase...\n');

  try {
    // Teste 1: Verificar conexão
    console.log('1️⃣ Testando conexão...');
    const { data: healthData, error: healthError } = await supabase.from('stations').select('count').limit(1);
    
    if (healthError) {
      console.error('❌ Erro na conexão:', healthError);
      return;
    }
    console.log('✅ Conexão estabelecida com sucesso!\n');

    // Teste 2: Verificar configuração de autenticação
    console.log('2️⃣ Testando configuração de autenticação...');
    const { data: authData, error: authError } = await supabase.auth.getSession();
    
    if (authError) {
      console.error('❌ Erro na autenticação:', authError);
    } else {
      console.log('✅ Configuração de autenticação OK');
      console.log('   - Sessão atual:', authData.session ? 'Ativa' : 'Nenhuma');
    }
    console.log('');

    // Teste 3: Tentar cadastrar um usuário de teste
    console.log('3️⃣ Testando cadastro de usuário...');
    const testEmail = `test-${Date.now()}@example.com`;
    const testPassword = 'test123456';
    
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
      options: {
        emailRedirectTo: 'http://localhost:3000/',
        data: {
          display_name: 'Usuário Teste',
        }
      }
    });

    if (signUpError) {
      console.error('❌ Erro no cadastro:', signUpError);
      console.log('   - Mensagem:', signUpError.message);
      console.log('   - Status:', signUpError.status);
    } else {
      console.log('✅ Cadastro realizado com sucesso!');
      console.log('   - Usuário ID:', signUpData.user?.id);
      console.log('   - Email:', signUpData.user?.email);
      console.log('   - Email confirmado:', signUpData.user?.email_confirmed_at ? 'Sim' : 'Não');
      console.log('   - Session:', signUpData.session ? 'Criada' : 'Não criada');
      
      if (signUpData.user && !signUpData.user.email_confirmed_at) {
        console.log('   - ⚠️ Email de confirmação deve ter sido enviado');
        console.log('   - Verifique a caixa de entrada do email:', testEmail);
      }
    }
    console.log('');

    // Teste 4: Verificar configurações do projeto
    console.log('4️⃣ Informações do projeto:');
    console.log('   - URL:', supabaseUrl);
    console.log('   - Projeto ID:', supabaseUrl.split('//')[1].split('.')[0]);
    console.log('   - Chave anônima:', supabaseAnonKey.substring(0, 20) + '...');

  } catch (error) {
    console.error('❌ Erro geral:', error);
  }
}

// Executar teste
testSupabaseConfig().then(() => {
  console.log('🏁 Teste concluído!');
  process.exit(0);
}).catch((error) => {
  console.error('💥 Erro fatal:', error);
  process.exit(1);
}); 