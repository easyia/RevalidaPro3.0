-- ===============================================
-- ESTAÇÕES ADICIONAIS - ESPECIALIDADES FALTANTES
-- Execute no Supabase SQL Editor para adicionar mais estações
-- ===============================================

-- Adicionar estações para especialidades que faltam cores

-- 1. Cirurgia Geral
INSERT INTO public.stations (
    area, 
    title, 
    case_description, 
    setting_description, 
    actor_script, 
    tasks, 
    station_code
) VALUES (
    'Cirurgia Geral',
    'Abdome Agudo Obstrutivo (Brida)',
    'Paciente com dor abdominal tipo cólica, distensão abdominal, náuseas e vômitos com histórico de cirurgia prévia.',
    'Local de atuação: Pronto-Socorro de Hospital Geral.

A unidade conta com a seguinte infraestrutura:
- Laboratório de análises clínicas urgente;
- Tomografia computadorizada;
- Radiografia simples;
- Centro cirúrgico 24h.

Descrição do caso:
Paciente com dor abdominal em cólica, distensão, náuseas e vômitos. Histórico de apendicectomia há 2 anos.

Tarefas, nos próximos 10 Min. realize:
- Realizar anamnese sistemática;
- Exame físico abdominal completo;
- Solicitar exames complementares;
- Estabelecer diagnóstico de abdome agudo;
- Propor conduta cirúrgica.',
    '{"dados_pessoais": "João, 35 anos, casado, pedreiro.", "motivo_consulta": "Doutor, estou com uma dor muito forte na barriga desde ontem à noite."}'::jsonb,
    'Anamnese sistemática; Exame físico abdominal; Solicitar exames complementares; Diagnóstico de abdome agudo; Conduta cirúrgica',
    'CG-001'
);

-- 2. Medicina Interna  
INSERT INTO public.stations (
    area, 
    title, 
    case_description, 
    setting_description, 
    actor_script, 
    tasks, 
    station_code
) VALUES (
    'Medicina Interna',
    'Diabetes Mellitus Descompensado',
    'Paciente diabético com poliúria, polidipsia e perda de peso. Avaliação de descompensação metabólica.',
    'Local de atuação: Ambulatório de Endocrinologia.

A unidade conta com a seguinte infraestrutura:
- Laboratório de análises clínicas;
- Glicosímetro;
- Hemoglicoteste;
- Consultório médico.

Descrição do caso:
Paciente diabético conhecido com sintomas de descompensação há 1 semana.

Tarefas, nos próximos 10 Min. realize:
- Anamnese direcionada ao diabetes;
- Exame físico geral;
- Avaliar complicações do diabetes;
- Ajustar terapia hipoglicemiante;
- Orientações sobre autocuidado.',
    '{"dados_pessoais": "Maria, 58 anos, diabética há 10 anos.", "motivo_consulta": "Doutora, estou urinando muito e com muita sede."}'::jsonb,
    'Anamnese do diabetes; Exame físico; Avaliar complicações; Ajustar medicação; Orientações',
    'MI-001'
);

-- 3. Cirurgia Geral - Apendicite
INSERT INTO public.stations (
    area, 
    title, 
    case_description, 
    setting_description, 
    actor_script, 
    tasks, 
    station_code
) VALUES (
    'Cirurgia Geral',
    'Apendicite Aguda',
    'Paciente jovem com dor abdominal iniciada na região epigástrica e migrou para fossa ilíaca direita.',
    'Local de atuação: Pronto-Socorro.

A unidade conta com a seguinte infraestrutura:
- Laboratório urgente;
- Ultrassonografia;
- Tomografia computadorizada;
- Centro cirúrgico.

Descrição do caso:
Jovem com dor abdominal migratória, náuseas e febre baixa há 12 horas.

Tarefas, nos próximos 10 Min. realize:
- Anamnese da dor abdominal;
- Exame físico direcionado;
- Aplicar escalas diagnósticas;
- Solicitar exames complementares;
- Indicar tratamento cirúrgico.',
    '{"dados_pessoais": "Pedro, 22 anos, estudante.", "motivo_consulta": "Doutor, a dor começou em volta do umbigo e agora está aqui do lado direito."}'::jsonb,
    'Anamnese da dor; Exame físico; Escalas diagnósticas; Exames complementares; Indicação cirúrgica',
    'CG-002'
);

-- 4. Pneumologia
INSERT INTO public.stations (
    area, 
    title, 
    case_description, 
    setting_description, 
    actor_script, 
    tasks, 
    station_code
) VALUES (
    'Pneumologia',
    'Pneumonia Adquirida na Comunidade',
    'Paciente com tosse produtiva, febre e dispneia há 5 dias. Suspeita de pneumonia comunitária.',
    'Local de atuação: Ambulatório de Pneumologia.

A unidade conta com a seguinte infraestrutura:
- Radiografia de tórax;
- Oximetria de pulso;
- Laboratório;
- Gasometria arterial.

Descrição do caso:
Adulto com síndrome respiratória aguda sugestiva de pneumonia.

Tarefas, nos próximos 10 Min. realize:
- Anamnese respiratória;
- Exame físico pulmonar;
- Avaliar gravidade (CURB-65);
- Solicitar exames;
- Prescrever antibioticoterapia.',
    '{"dados_pessoais": "Carlos, 45 anos, fumante.", "motivo_consulta": "Doutor, estou com tosse e febre há quase uma semana."}'::jsonb,
    'Anamnese respiratória; Exame pulmonar; Avaliar gravidade; Exames; Antibioticoterapia',
    'PNEUMO-001'
);

-- 5. Medicina da Família e Comunidade
INSERT INTO public.stations (
    area, 
    title, 
    case_description, 
    setting_description, 
    actor_script, 
    tasks, 
    station_code
) VALUES (
    'Medicina da Família e Comunidade',
    'Hipertensão Arterial na Atenção Primária',
    'Paciente com hipertensão arterial não controlada em consulta de rotina na UBS. Foco em abordagem integral.',
    'Local de atuação: Unidade Básica de Saúde (UBS).

A unidade conta com a seguinte infraestrutura:
- Consultório médico básico;
- Esfigmomanômetro;
- Balança antropométrica;
- Glicosímetro;
- Medicamentos básicos.

Descrição do caso:
Paciente em consulta de rotina com pressão arterial elevada e fatores de risco cardiovascular.

Tarefas, nos próximos 10 Min. realize:
- Anamnese integral (bio-psico-social);
- Exame físico completo;
- Estratificação de risco cardiovascular;
- Abordagem não medicamentosa;
- Ajuste da terapia anti-hipertensiva;
- Orientações sobre estilo de vida;
- Agendar acompanhamento.',
    '{"dados_pessoais": "José, 55 anos, casado, aposentado.", "motivo_consulta": "Vim para consulta de rotina, doutor. Tô tomando o remédio da pressão, mas às vezes esqueço."}'::jsonb,
    'Anamnese integral; Exame físico; Estratificação de risco; Abordagem não medicamentosa; Ajuste medicamentoso; Orientações; Acompanhamento',
    'MFC-001'
);

-- 6. Cirurgia Geral adicional
INSERT INTO public.stations (
    area, 
    title, 
    case_description, 
    setting_description, 
    actor_script, 
    tasks, 
    station_code
) VALUES (
    'Cirurgia Geral',
    'Colecistite Aguda',
    'Paciente com dor intensa em hipocôndrio direito, febre e sinais de irritação peritoneal.',
    'Local de atuação: Pronto Socorro Cirúrgico.

A unidade conta com a seguinte infraestrutura:
- Leito de emergência;
- Monitor multiparamétrico;
- Acesso venoso;
- Medicações analgésicas e antibióticas;
- Equipamento para exame físico abdominal.

Descrição do caso:
Paciente com quadro clínico sugestivo de colecistite aguda com possível complicação.

Tarefas, nos próximos 10 Min. realize:
- Anamnese direcionada;
- Exame físico abdominal completo;
- Pesquisa de sinais específicos;
- Avaliação de complicações;
- Indicação cirúrgica;
- Solicitação de exames pré-operatórios.',
    '{"dados_pessoais": "Maria, 45 anos, obesa, com história de cálculos biliares.", "motivo_consulta": "Doutor, estou com uma dor terrível aqui do lado direito, parece que vai explodir!"}'::jsonb,
    'Anamnese direcionada; Exame físico abdominal; Sinais específicos; Avaliação de complicações; Indicação cirúrgica; Exames pré-operatórios',
    'CG-002'
);

-- Verificar as estações inseridas
SELECT 
    area,
    title,
    station_code,
    'Estação adicionada com sucesso!' as status
FROM public.stations 
WHERE station_code IN ('CG-001', 'MI-001', 'CG-002', 'PNEUMO-001', 'OFTALMO-001')
ORDER BY area, title; 