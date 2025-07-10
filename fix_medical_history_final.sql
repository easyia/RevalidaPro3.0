-- ===============================================
-- FIX FINAL: Corrigir políticas RLS medical_history
-- Aplicar no Supabase SQL Editor
-- ===============================================

-- 1. Verificar estrutura atual da tabela medical_history
SELECT table_name, column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'medical_history' 
AND table_schema = 'public'
ORDER BY ordinal_position;

-- 2. Desabilitar RLS temporariamente para limpeza
ALTER TABLE public.medical_history DISABLE ROW LEVEL SECURITY;

-- 3. Remover todas as políticas existentes
DROP POLICY IF EXISTS "Medical users can view own history" ON public.medical_history;
DROP POLICY IF EXISTS "Actors can update score_actor_review" ON public.medical_history;
DROP POLICY IF EXISTS "Actors can update their simulation review score" ON public.medical_history;
DROP POLICY IF EXISTS "Allow insert medical history on simulation completion" ON public.medical_history;

-- 4. Habilitar RLS novamente
ALTER TABLE public.medical_history ENABLE ROW LEVEL SECURITY;

-- 5. Criar políticas RLS SIMPLIFICADAS e sem conflitos

-- Política SELECT: Médicos podem ler seu próprio histórico
CREATE POLICY "medical_history_select_policy" ON public.medical_history
FOR SELECT TO authenticated
USING (medical_user_id = auth.uid());

-- Política INSERT: Qualquer usuário autenticado pode inserir se for parte da simulação
CREATE POLICY "medical_history_insert_policy" ON public.medical_history
FOR INSERT TO authenticated
WITH CHECK (
    EXISTS (
        SELECT 1 FROM public.simulations 
        WHERE simulations.id = simulation_id 
        AND (simulations.medico_id = auth.uid() OR simulations.ator_id = auth.uid())
    )
);

-- Política UPDATE: Apenas ator pode atualizar score_actor_review da sua simulação
CREATE POLICY "medical_history_update_policy" ON public.medical_history
FOR UPDATE TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.simulations 
        WHERE simulations.id = medical_history.simulation_id 
        AND simulations.ator_id = auth.uid()
    )
)
WITH CHECK (
    EXISTS (
        SELECT 1 FROM public.simulations 
        WHERE simulations.id = medical_history.simulation_id 
        AND simulations.ator_id = auth.uid()
    )
);

-- 6. Verificar se as políticas foram criadas corretamente
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'medical_history';

-- 7. Garantir que simulations table tem RLS adequado
-- Política para que usuários vejam simulações que participam
DROP POLICY IF EXISTS "Users can read their own simulations" ON public.simulations;

CREATE POLICY "simulations_select_policy" ON public.simulations
FOR SELECT TO authenticated
USING (
    (ator_id = auth.uid()) OR (medico_id = auth.uid())
);

-- Política para que atores possam atualizar simulações que criaram
DROP POLICY IF EXISTS "Actors can update their simulations" ON public.simulations;

CREATE POLICY "simulations_update_policy" ON public.simulations
FOR UPDATE TO authenticated
USING (
    (ator_id = auth.uid()) OR (medico_id = auth.uid())
);

-- 8. Testar as políticas criadas
SELECT 'Políticas RLS configuradas com sucesso!' as status;

-- 9. Limpar dados duplicados ou conflitantes (se existirem)
-- Remover duplicatas na tabela medical_history (manter apenas o mais recente)
DELETE FROM public.medical_history 
WHERE id IN (
    SELECT id FROM (
        SELECT id, 
               ROW_NUMBER() OVER (
                   PARTITION BY simulation_id, medical_user_id 
                   ORDER BY created_at DESC
               ) as rn
        FROM public.medical_history
    ) t WHERE t.rn > 1
);

-- 10. Verificar resultado final
SELECT 
    COUNT(*) as total_records,
    COUNT(DISTINCT simulation_id) as unique_simulations,
    COUNT(CASE WHEN score_actor_review IS NOT NULL THEN 1 END) as records_with_score
FROM public.medical_history;

SELECT 'Setup finalizado! Agora teste o fluxo de correção.' as final_message; 