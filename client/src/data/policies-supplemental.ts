/** Questões autorais suplementares. IDs estáveis a partir da versão v2. */
import type { Question } from "./learning-data";

export const politicasSupplementalQuestions: Question[] = [
  {
    "id": "pol-04",
    "subjectId": "politicas",
    "topicId": "pol-politicas",
    "statement": "Uma secretaria municipal de saúde enfrenta aumento de atendimentos em atenção primária sem expansão do orçamento. Considerando princípios de priorização em políticas públicas de saúde, qual medida é mais adequada para manter cobertura e equidade no curto prazo?",
    "alternatives": [
      "Redirecionar recursos destinados a programas preventivos para garantir o pagamento de serviços ambulatoriais prioritários.",
      "Implementar regulação de encaminhamento por profissionais de saúde para priorizar casos de maior risco clínico.",
      "Reduzir horários de funcionamento de unidades com menor demanda para concentrar equipe nas unidades mais procuradas.",
      "Suspender temporariamente programas de atenção domiciliar para realocar equipe a unidades de maior fluxo.",
      "Aumentar taxas de coparticipação em serviços não emergenciais para reduzir procura desnecessária."
    ],
    "correctIndex": 1,
    "explanation": "A regulação de encaminhamento (porta de entrada bem gerida) prioriza casos de maior risco, preservando equidade sem realocar fundos essenciais. Redirecionar recursos preventivos compromete ações de promoção e pode aumentar demanda futura; reduzir horários pode restringir acesso e prejudicar equidade; suspender atenção domiciliar afeta populações vulneráveis e pode elevar internações; aumentar coparticipação cria barreira financeira e viola princípio de universalidade."
  },
  {
    "id": "pol-05",
    "subjectId": "politicas",
    "topicId": "pol-auditoria",
    "statement": "Em auditoria operacional de um programa municipal de vacinação, o auditor identifica baixa taxa de atualização de dados no sistema informatizado. Qual ação de auditoria é mais apropriada para diagnosticar a origem do problema?",
    "alternatives": [
      "Recomendar imediatamente a implementação de treinamento para todos os profissionais de saúde do município.",
      "Verificar o fluxo de registro de vacinas nas unidades, confrontando registros físicos com lançamentos no sistema.",
      "Exigir a suspensão temporária do uso do sistema até correção do fornecedor de TI.",
      "Prescrever penalidades administrativas para responsáveis pelas unidades com maiores discrepâncias.",
      "Aprovar um aditivo contratual para aquisição de novo sistema de informação."
    ],
    "correctIndex": 1,
    "explanation": "Confrontar registros físicos com lançamentos permite identificar se a falha é de processo, capacitação ou tecnológica. Recomendar treinamento sem diagnóstico pode ser inadequado; suspender sistema é medida extrema e pode interromper serviços; penalidades sem apuração são precipitadas; trocar sistema sem prova de falha tecnológica é desperdício de recursos."
  },
  {
    "id": "pol-06",
    "subjectId": "politicas",
    "topicId": "pol-politicas",
    "statement": "Um gestor estadual precisa priorizar investimentos em três programas concorrentes com impacto populacional diferente. Qual critério ponderado é mais adequado para orientar a decisão alinhada com princípios de políticas públicas em saúde?",
    "alternatives": [
      "Priorizar o programa com maior retorno financeiro imediato para reduzir déficit orçamentário.",
      "Alocar recursos proporcionalmente ao número de beneficiários registrados em cada programa.",
      "Priorizar o programa que atenda populações com maiores desigualdades em indicadores de saúde.",
      "Distribuir recursos igualmente entre os três programas para evitar conflitos políticos.",
      "Investir no programa com maior visibilidade pública para garantir apoio político."
    ],
    "correctIndex": 2,
    "explanation": "Priorizar populações mais vulneráveis promove equidade, um princípio chave em saúde pública. Focar em retorno financeiro ignora necessidade social; alocar por número de beneficiários favorece maior volume sem considerar desigualdade; dividir igualmente pode diluir impacto onde necessidade é maior; escolher por visibilidade busca apoio político em detrimento de critérios técnicos."
  },
  {
    "id": "pol-07",
    "subjectId": "politicas",
    "topicId": "pol-auditoria",
    "statement": "Durante auditoria de conformidade em contrato de prestação de serviços de ambulância, constatou-se documento de pagamento sem comprovação de jornada efetiva. Qual procedimento de auditoria é mais adequado para fundamentar uma recomendação de controle?",
    "alternatives": [
      "Solicitar cancelamento imediato de todos os pagamentos até nova comprovação de jornadas.",
      "Analisar amostra de ordens de serviço, registros de GPS e assinaturas de atendimentos para verificar consistência.",
      "Recomendar substituição do prestador por outro com histórico comprovado.",
      "Exigir devolução integral dos valores pagos sem aguardar apuração detalhada.",
      "Aprovar incremento de cláusulas penais no contrato futuro para prevenir reincidência."
    ],
    "correctIndex": 1,
    "explanation": "Analisar ordens de serviço, GPS e assinaturas permite verificar efetiva prestação e embasar recomendação administrativa. Cancelar pagamentos ou exigir devolução sem apuração prejudica serviço e risco legal; substituir prestador sem prova pode ser arbitrário; inserir cláusulas penais é preventiva, mas não resolve situação atual nem substitui investigação documental."
  },
  {
    "id": "pol-08",
    "subjectId": "politicas",
    "topicId": "pol-politicas",
    "statement": "Uma política municipal de saúde mental prevê atendimento comunitário, mas relatório aponta baixa demanda nas equipes. Como gestor, qual intervenção favorecerá melhor a efetividade da política?",
    "alternatives": [
      "Reduzir o número de equipes para concentrar recursos em unidades com maior procura por outros serviços.",
      "Realizar diagnóstico participativo para identificar barreiras de acesso e ajustar oferta às necessidades locais.",
      "Transferir recursos para programas hospitalares de psiquiatria para uso mais intensivo de leitos.",
      "Aumentar campanhas de comunicação massiva sem alteração nas rotinas de atendimento.",
      "Estabelecer metas de produtividade rígidas para as equipes existentes, com corte de financiamento se não atingidas."
    ],
    "correctIndex": 1,
    "explanation": "O diagnóstico participativo identifica barreiras (estigma, horário, localização) e permite ajustar a política à realidade, aumentando demanda adequada. Reduzir equipes e transferir recursos a hospitais contrariam a lógica comunitária; campanhas massivas sem abordar barreiras podem ser ineficazes; metas rígidas e corte de financiamento podem reduzir qualidade e acesso."
  },
  {
    "id": "pol-09",
    "subjectId": "politicas",
    "topicId": "pol-auditoria",
    "statement": "Na auditoria de indicadores de um programa de combate a arboviroses, constatou-se discrepância entre indicadores municipais e sinais vitais de vigilância epidemiológica. Qual abordagem o auditor deve adotar para avaliar a confiabilidade dos indicadores?",
    "alternatives": [
      "Ajustar os indicadores municipais para igualar os valores federais e encerrar divergência.",
      "Examinar métodos de coleta, rotinas de notificação e critérios de definição de caso utilizados no município.",
      "Recomendar suspensão imediata das ações de vigilância até regularização dos indicadores.",
      "Concluir que os dados municipais são incorretos por padrão e propor substituição da equipe responsável.",
      "Sugerir a exclusão dos indicadores divergentes dos relatórios oficiais para preservar imagem institucional."
    ],
    "correctIndex": 1,
    "explanation": "Examinar métodos de coleta e definição de caso identifica origem das discrepâncias e permite recomendações técnicas. Ajustar dados sem investigação é manipulação; suspender vigilância é contraproducente; presumir erro da equipe sem análise é julgamento precipitado; excluir indicadores é prática inadequada que compromete transparência."
  },
  {
    "id": "pol-10",
    "subjectId": "politicas",
    "topicId": "pol-politicas",
    "statement": "Uma região com grande dispersão geográfica apresenta baixa cobertura de imunização em comunidades rurais. Qual estratégia de política é mais eficaz para aumentar cobertura mantendo custos controlados?",
    "alternatives": [
      "Implantar unidades fixas adicionais em todas as comunidades rurais, independentemente do tamanho.",
      "Organizar campanhas vacinais itinerantes combinadas com ações de educação em saúde e uso de registros mobilizáveis.",
      "Exigir que moradores desloquem-se às unidades urbanas para recebimento de vacinas para centralizar recursos.",
      "Contratar equipe exclusiva para vigilância estacionária nas áreas rurais por tempo indeterminado.",
      "Substituir vacinas gratuitas por clínicas privadas mediante subsídio apenas para grupos prioritários."
    ],
    "correctIndex": 1,
    "explanation": "Campanhas itinerantes com educação e uso de registros são custo-efetivas em áreas dispersas, aumentando alcance sem manter infraestrutura fixa em cada local. Implantar unidades fixas onde demanda é baixa é oneroso; exigir deslocamento cria barreiras de acesso; contratar equipe estacionária por tempo indeterminado pode ser ineficiente; subsídio a clínicas privadas fragiliza universalidade e equidade."
  },
  {
    "id": "pol-11",
    "subjectId": "politicas",
    "topicId": "pol-auditoria",
    "statement": "Ao auditar um contrato de aquisição de insumos, o auditor detecta cláusula de reajuste baseada em índice não divulgado publicamente. Qual recomendação de controle é mais apropriada?",
    "alternatives": [
      "Suspender o contrato por ser ilegal até que índice público seja definido federalmente.",
      "Exigir que o fornecedor aplique índice da própria empresa para justificar reajustes.",
      "Recomendar inclusão no contrato de referência a índices públicos e critérios claros de aplicação retroativa ou prospectiva.",
      "Aceitar a cláusula pois a negociação privada entre partes é legítima e dispensa intervenção.",
      "Orientar desconto unilateral nos pagamentos para compensar qualquer reajuste não transparente."
    ],
    "correctIndex": 2,
    "explanation": "Exigir referência a índices públicos e critérios transparentes promove previsibilidade e controle das despesas. Suspender contrato pode interromper fornecimento crítico; exigir índice do fornecedor não assegura transparência; aceitar cláusula opaca compromete fiscalização; desconto unilateral sem respaldo contratual gera risco jurídico."
  },
  {
    "id": "pol-12",
    "subjectId": "politicas",
    "topicId": "pol-politicas",
    "statement": "Uma gestão municipal planeja integrar serviços de saúde e assistência social para atender crianças em situação de vulnerabilidade. Para avaliar risco e efetividade da integração, qual indicador composto é mais relevante?",
    "alternatives": [
      "Percentual de unidades de saúde com sala de atendimento social disponível.",
      "Número absoluto de atendimentos sociais realizados por mês.",
      "Proporção de crianças em situação de vulnerabilidade com acompanhamento integrado saúde-assistência e resultado em indicadores de nutrição e frequência escolar.",
      "Quantidade de reuniões intersetoriais realizadas pela gestão por semestre.",
      "Percentual do orçamento municipal destinado a projetos intersetoriais."
    ],
    "correctIndex": 2,
    "explanation": "A proporção com acompanhamento integrado e resultados em nutrição e frequência reflete tanto processo quanto impacto, avaliando efetividade da integração. Ter sala disponível ou número de atendimentos não mede qualidade ou resultados; reuniões e orçamento indicam esforço, mas não garantem resultados."
  },
  {
    "id": "pol-13",
    "subjectId": "politicas",
    "topicId": "pol-auditoria",
    "statement": "Em auditoria de desempenho de um centro de atenção especializada, verificou-se alto índice de faltas a consultas. Qual medida gerada a partir do relatório de auditoria tem maior probabilidade de reduzir faltas e melhorar eficiência?",
    "alternatives": [
      "Implementar multa financeira para pacientes que faltarem sem aviso prévio.",
      "Reforçar a confirmação de agendamentos por mensagem e permitir reagendamento remoto em prazos curtos.",
      "Aumentar o número de consultas agendadas por dia para compensar faltas previsíveis.",
      "Eliminar a prática de agendamento prévio e adotar atendimento por ordem de chegada.",
      "Transferir pacientes com maior risco de faltar para atendimento em rede privada."
    ],
    "correctIndex": 1,
    "explanation": "Confirmação de agendamentos e flexibilidade de reagendamento abordam causas práticas de faltas (esquecimento, barreiras logísticas), melhorando comparecimento. Multas desestimulam acesso; aumentar agendamentos pode sobrecarregar serviços; atendimento por ordem de chegada reduz planejamento; transferir pacientes ao privado não é solução pública equitativa."
  },
  {
    "id": "pol-14",
    "subjectId": "politicas",
    "topicId": "pol-politicas",
    "statement": "Uma coordenação regional pretende implementar avaliação de tecnologias em saúde (ATS) para compras regionais. Considerando limitação de dados locais, qual abordagem é mais adequada para tomada de decisão informada?",
    "alternatives": [
      "Adotar imediatamente a tecnologia com maior promoção comercial entre fornecedores locais.",
      "Realizar síntese crítica das evidências internacionais, adaptar às condições locais e pilotar uso em pequena escala antes da expansão.",
      "Proibir a incorporação de novas tecnologias até acumular estudos locais robustos de longo prazo.",
      "Comprar lote único de tecnologia de menor custo sem avaliação para atender demanda imediata.",
      "Decidir pela adoção mediante votação entre gestores sem análise técnica prévia."
    ],
    "correctIndex": 1,
    "explanation": "Sintetizar evidências externas, adaptar ao contexto e pilotar reduz incertezas e custos antes de escala. Adotar por promoção comercial favorece interesses comerciais; proibir até estudos locais priva população de benefícios; comprar pelo menor custo ignora eficácia; votar sem análise técnica pode levar a decisões não fundamentadas."
  },
  {
    "id": "pol-15",
    "subjectId": "politicas",
    "topicId": "pol-auditoria",
    "statement": "Ao planejar uma auditoria clínica sobre controle de infecção hospitalar, qual elemento deve orientar a seleção de unidades e períodos a auditar para maximizar detecção de riscos?",
    "alternatives": [
      "Selecionar unidades com melhores indicadores auto-declarados para validar boas práticas.",
      "Priorizar unidades com histórico de surtos ou registros de não conformidade e períodos de maior ocupação.",
      "Auditar apenas unidades centrais evitando pequenas unidades por falta de recursos.",
      "Escolher aleatoriamente unidades sem considerar risco para manter imparcialidade estatística.",
      "Concentrar-se exclusivamente em unidades cirúrgicas porque têm maior complexidade."
    ],
    "correctIndex": 1,
    "explanation": "Priorizar unidades com histórico de problemas e períodos de maior ocupação foca recursos onde risco é maior, aumentando eficiência da auditoria. Selecionar melhores indicadores valida práticas mas pouco detecta risco; auditar só unidades centrais ou apenas cirúrgicas ignora outros pontos críticos; aleatoriedade pode diluir detecção sem risco-stratification."
  },
  {
    "id": "pol-16",
    "subjectId": "politicas",
    "topicId": "pol-politicas",
    "statement": "Uma campanha regional de redução de tabagismo obteve boa adesão inicial, mas acompanhamento mostrou alta taxa de recaída após três meses. Que ajuste de política tende a reduzir recaídas mantendo custos viáveis?",
    "alternatives": [
      "Encerrar suporte psicossocial e focar em medicamentos de alto custo para os que permanecerem abstinentes.",
      "Introduzir programa de apoio continuado com grupos de manutenção, reforço por telefone e integração com atenção básica.",
      "Exigir prescrição médica contínua para acesso a qualquer terapia de cessação do tabagismo.",
      "Limitar oferta de terapia de reposição para casos de alto risco somente.",
      "Converter a campanha em ações pontuais anuais com foco em prevenção escolar."
    ],
    "correctIndex": 1,
    "explanation": "Apoio continuado (grupos, telefonia, atenção básica) reduz recaídas com custo relativamente baixo por compartilhar recursos. Remover suporte psicossocial e focar só em medicamentos ignora componentes comportamentais; exigir prescrição cria barreira; limitar a terapia a poucos reduz impacto populacional; ações pontuais não atuam na manutenção de abstinência."
  },
  {
    "id": "pol-17",
    "subjectId": "politicas",
    "topicId": "pol-auditoria",
    "statement": "Durante auditoria financeira de uma UBS, foram encontradas pequenas aquisições fracionadas do mesmo fornecedor sem processo licitatório. Qual hipótese de auditoria deve ser investigada primeiro?",
    "alternatives": [
      "Que as aquisições foram feitas de forma fracionada intencional para evitar regras de contratação.",
      "Que houve emergência real e justificável em cada compra, dispensando licitação.",
      "Que o fornecedor é exclusivo e, portanto, dispensa qualquer procedimento.",
      "Que os pagamentos foram realizados por outra unidade e não pertencem à UBS auditada.",
      "Que os itens adquiridos foram doados e erroneamente registrados como compra."
    ],
    "correctIndex": 0,
    "explanation": "Fracionamento intencional é prática comum para evadir licitação e deve ser investigada como hipótese principal. Emergência pode justificar dispensas, mas requer documentação; fornecedor exclusivo demanda comprovação da exclusividade; pagamentos por outra unidade e doações são possibilidades, mas menos prováveis sem evidência; auditor deve verificar documentações antes de concluir."
  },
  {
    "id": "pol-18",
    "subjectId": "politicas",
    "topicId": "pol-politicas",
    "statement": "Um programa de fornecimento de medicamentos para doenças crônicas observa evasão de pacientes na renovação de receita. Qual intervenção administrativa é mais indicada para reduzir evasão e garantir continuidade terapêutica?",
    "alternatives": [
      "Exigir renovação presencial estrita a cada período sem alternativas remotas.",
      "Implementar renovação por protocolo na atenção básica para pacientes estáveis e entrega em pontos alternativos próximos à residência.",
      "Restringir fornecimento apenas a hospitais de referência para aumentar controle clínico.",
      "Intensificar identificação e aplicação de penalidades administrativas a pacientes inadimplentes.",
      "Terceirizar integralmente distribuição de medicamentos para empresas privadas sem monitoramento."
    ],
    "correctIndex": 1,
    "explanation": "Renovação por protocolo para estáveis e entrega em pontos próximos facilita acesso e reduz evasão mantendo continuidade terapêutica. Exigir presencialidade cria barreiras; centralizar em hospitais reduz acessibilidade; penalidades a pacientes são inadequadas; terceirização sem monitoramento aumenta risco de falhas no fornecimento."
  },
  {
    "id": "pol-19",
    "subjectId": "politicas",
    "topicId": "pol-auditoria",
    "statement": "No relatório de auditoria, a equipe propõe recomendação para medir impacto de uma mudança de processo clínico usando indicadores antes e depois. Qual desenho de avaliação oferece maior controle para inferir efeito da mudança no contexto municipal?",
    "alternatives": [
      "Comparar indicadores do mesmo serviço apenas no período pós-implementação.",
      "Analisar tendência histórica dos indicadores do serviço sem considerar grupo comparador.",
      "Usar desenho de intervenção com grupo controle similar (não exposto à mudança) e séries temporais antes e depois.",
      "Realizar pesquisa de satisfação dos usuários após implementação e inferir impacto clínico.",
      "Confiar em opiniões de especialistas para validar que a mudança foi benéfica."
    ],
    "correctIndex": 2,
    "explanation": "Usar grupo controle semelhante e séries temporais antes/depois aumenta capacidade de atribuir mudanças ao processo, controle de tendências e fatores externos. Apenas pós-implementação, tendência histórica isolada, pesquisa de satisfação ou opiniões de especialistas não permitem inferência causal robusta."
  },
  {
    "id": "pol-20",
    "subjectId": "politicas",
    "topicId": "pol-politicas",
    "statement": "Uma comissão intergestores analisa contratos com organizações sociais para gestão de unidades de saúde e quer reduzir riscos de desempenho insuficiente. Qual cláusula contratual operacional melhor equilibra autonomia do parceiro e controle público?",
    "alternatives": [
      "Prever pagamentos fixos sem vinculação a metas, para garantir previsibilidade financeira do parceiro.",
      "Estabelecer indicadores de desempenho com metas mensuráveis, mecanismos de monitoramento e cláusulas de revisão e rescisão por não cumprimento.",
      "Delegar integralmente ao parceiro a definição de metas e critérios de avaliação para flexibilizar gestão.",
      "Eliminar relatórios periódicos para reduzir burocracia e aumentar eficiência operacional.",
      "Proibir qualquer fiscalização por parte da administração para preservar autonomia técnica."
    ],
    "correctIndex": 1,
    "explanation": "Indicadores mensuráveis, monitoramento e cláusulas de revisão/rescisão permitem equilíbrio entre autonomia operacional e responsabilidade pública. Pagamentos fixos sem metas reduzem accountability; delegar definição de metas integralmente enfraquece controle; eliminar relatórios ou proibir fiscalização compromete transparência e gestão pública."
  }
] as Question[];
