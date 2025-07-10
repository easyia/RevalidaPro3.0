<<<<<<< HEAD
-- SQL para debug da tabela medical_history

-- 1. Verificar políticas RLS existentes
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'medical_history';

-- 2. Verificar se RLS está ativado
SELECT schemaname, tablename, rowsecurity, forcerowsecurity 
FROM pg_tables 
WHERE tablename = 'medical_history';

-- 3. Verificar registros existentes na tabela
SELECT 
  id,
  simulation_id,
  medical_user_id,
  station_name,
  completed_at,
  CASE 
    WHEN score_actor_review IS NULL THEN 'NULL'
    ELSE 'HAS_DATA'
  END as score_status
FROM medical_history 
ORDER BY completed_at DESC 
LIMIT 10;

-- 4. Remover políticas antigas (se existirem)
DROP POLICY IF EXISTS "Medical users can view their own history details" ON public.medical_history;
DROP POLICY IF EXISTS "Actors can update their simulation review score" ON public.medical_history;
DROP POLICY IF EXISTS "Ator pode criar medical_history para simulação que atua" ON public.medical_history;

-- 5. Criar políticas RLS corretas

-- Política para médicos lerem seus próprios registros
CREATE POLICY "Médicos podem ver seu próprio histórico" ON public.medical_history
FOR SELECT TO authenticated
USING (medical_user_id = auth.uid());

-- Política para atores criarem registros para médicos
CREATE POLICY "Atores podem criar histórico médico" ON public.medical_history
FOR INSERT TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.simulations
    WHERE
      simulations.id = medical_history.simulation_id
      AND simulations.ator_id = auth.uid()
      AND simulations.medico_id = medical_history.medical_user_id
  )
);

-- Política para atores atualizarem score_actor_review
CREATE POLICY "Atores podem atualizar correção" ON public.medical_history
FOR UPDATE TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.simulations
    WHERE
      simulations.id = medical_history.simulation_id
      AND simulations.ator_id = auth.uid()
      AND simulations.medico_id = medical_history.medical_user_id
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.simulations
    WHERE
      simulations.id = medical_history.simulation_id
      AND simulations.ator_id = auth.uid()
      AND simulations.medico_id = medical_history.medical_user_id
  )
);

-- 6. Garantir que RLS está ativado
=======
-- SQL para debug da tabela medical_history

-- 1. Verificar políticas RLS existentes
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'medical_history';

-- 2. Verificar se RLS está ativado
SELECT schemaname, tablename, rowsecurity, forcerowsecurity 
FROM pg_tables 
WHERE tablename = 'medical_history';

-- 3. Verificar registros existentes na tabela
SELECT 
  id,
  simulation_id,
  medical_user_id,
  station_name,
  completed_at,
  CASE 
    WHEN score_actor_review IS NULL THEN 'NULL'
    ELSE 'HAS_DATA'
  END as score_status
FROM medical_history 
ORDER BY completed_at DESC 
LIMIT 10;

-- 4. Remover políticas antigas (se existirem)
DROP POLICY IF EXISTS "Medical users can view their own history details" ON public.medical_history;
DROP POLICY IF EXISTS "Actors can update their simulation review score" ON public.medical_history;
DROP POLICY IF EXISTS "Ator pode criar medical_history para simulação que atua" ON public.medical_history;

-- 5. Criar políticas RLS corretas

-- Política para médicos lerem seus próprios registros
CREATE POLICY "Médicos podem ver seu próprio histórico" ON public.medical_history
FOR SELECT TO authenticated
USING (medical_user_id = auth.uid());

-- Política para atores criarem registros para médicos
CREATE POLICY "Atores podem criar histórico médico" ON public.medical_history
FOR INSERT TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.simulations
    WHERE
      simulations.id = medical_history.simulation_id
      AND simulations.ator_id = auth.uid()
      AND simulations.medico_id = medical_history.medical_user_id
  )
);

-- Política para atores atualizarem score_actor_review
CREATE POLICY "Atores podem atualizar correção" ON public.medical_history
FOR UPDATE TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.simulations
    WHERE
      simulations.id = medical_history.simulation_id
      AND simulations.ator_id = auth.uid()
      AND simulations.medico_id = medical_history.medical_user_id
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.simulations
    WHERE
      simulations.id = medical_history.simulation_id
      AND simulations.ator_id = auth.uid()
      AND simulations.medico_id = medical_history.medical_user_id
  )
);

-- 6. Garantir que RLS está ativado
>>>>>>> edfd5a9274d9a96c3e18b5281c89f2e90dc5f0bc
ALTER TABLE public.medical_history ENABLE ROW LEVEL SECURITY; 