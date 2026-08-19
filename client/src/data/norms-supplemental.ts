/** Questões autorais suplementares. IDs estáveis a partir da versão v2. */
import type { Question } from "./learning-data";

export const normasSupplementalQuestions: Question[] = [
  {
    "id": "nor-04",
    "subjectId": "normas",
    "topicId": "nor-licitacoes",
    "statement": "Como gestor de um hospital público federal, você precisa contratar, com urgência, serviços de manutenção de equipamentos críticos de diagnóstico. À luz da Lei 14.133/2021, qual procedimento é o mais adequado para assegurar legalidade e mitigação de risco enquanto se busca a contratação imediata?",
    "alternatives": [
      "Abrir um procedimento licitatório ordinário sem dispensa, mesmo que demore, e acionar medidas provisórias internas para manter os serviços em caráter emergencial até a conclusão da licitação.",
      "Utilizar a modalidade de contratação direta por dispensa ou inexigibilidade prevista na lei, documentando claramente a emergência, critérios de escolha e fundamentação técnica que justifique a contratação imediata.",
      "Realizar uma compra direta ao fornecedor que já presta serviços ao hospital com base na relação de confiança, sem formalização, para acelerar o atendimento.",
      "Publicar apenas um convite informal a três empresas para apresentar proposta e escolher a mais barata, sem formular processo administrativo, pois o fato da urgência dispensa formalidades.",
      "Contratar por meio de pregão eletrônico, mesmo em caráter emergencial, porque é sempre a modalidade mais econômica, deixando a justificativa para os autos após a contratação."
    ],
    "correctIndex": 0,
    "explanation": "Resposta correta: usar dispensa/inexigibilidade devidamente fundamentada (alternativa 0). A Lei 14.133/2021 prevê hipóteses para contratações diretas em situações de urgência ou quando a competição é inviável, desde que haja fundamentação e documentação técnicas e administrativas. Os distratores falham porque: 1) postergar com licitação ordinária (alt.1) pode colocar em risco serviços essenciais; 2) contratar sem formalização (alt.2) viola exigência de motivação/documentação; 3) convite informal sem processo (alt.3) e 4) contratar antes de justificar (alt.4) afrontam princípios de publicidade, motivação e controle."
  },
  {
    "id": "nor-05",
    "subjectId": "normas",
    "topicId": "nor-licitacoes",
    "statement": "Um município pretende adquirir insumos padronizados para a rede básica de atenção à saúde por meio de um consórcio público de municípios. De acordo com as previsões da Lei 14.133/2021, qual é o aspecto mais importante a observar na execução do processo de contratação por consórcio?",
    "alternatives": [
      "Que o consórcio obrigatoriamente realize processo licitatório próprio, independentemente de quem será o executor do contrato, e que o ente municipal não precise participar da fase de planejamento.",
      "Que o consórcio adote regras de licitação e critérios técnicos congruentes com os gestores municipais participantes, com clara delegação de responsabilidades e previsibilidade sobre execução e pagamento.",
      "Que cada município celebre contrato individual com o mesmo fornecedor escolhido pelo consórcio, sem vínculo jurídico entre as contratações, para evitar responsabilidades solidárias.",
      "Que o consórcio prefira contratação por inexigibilidade para aproveitar fornecedores locais já conhecidos, visto que a padronização impede competição.",
      "Que o consórcio execute um pregão presencial para ampliar a publicidade e evitar a utilização de meios eletrônicos, pois estes reduzem a transparência."
    ],
    "correctIndex": 1,
    "explanation": "Resposta correta: alinhamento de regras, delegação de responsabilidades e previsibilidade (alternativa 1). Contratações por consórcio exigem coordenação entre entes, definição de responsabilidades e observância das normas de licitação. Distratores: 1) consórcio pode realizar processo, mas os gestores devem participar do planejamento; 2) celebrar contratos individuais sem coordenação (alt.2) pode gerar incoerência jurídica; 3) inexigibilidade por padronização (alt.3) é inadequada quando há competição; 4) evitar meios eletrônicos (alt.4) contradiz princípios de eficiência e publicidade."
  },
  {
    "id": "nor-06",
    "subjectId": "normas",
    "topicId": "nor-licitacoes",
    "statement": "Você é responsável pela elaboração do termo de referência para contratar serviços terceirizados de limpeza em uma unidade de saúde. Para adequar-se às exigências da Lei 14.133/2021 e assegurar boa fiscalização contratual, qual elemento não pode faltar no termo de referência?",
    "alternatives": [
      "Descrição detalhada dos serviços, indicadores de desempenho, critérios de medição e penalidades previstas em caso de descumprimento.",
      "Cláusula que permita ao contratado subcontratar sem consentimento do contratante, para maior flexibilidade operacional.",
      "Indicação apenas do valor estimado global, sem detalhamento de quantidades ou padrões, para preservar margem de negociação.",
      "Previsão de reajuste livre a critério do contratado, para garantir continuidade do serviço em períodos de inflação.",
      "Determinação de que as rotinas internas da unidade ficarão a cargo exclusivo do gestor, sem estabelecer critérios para interface com o contratado."
    ],
    "correctIndex": 0,
    "explanation": "Resposta correta: descrição detalhada com indicadores e penalidades (alternativa 0). O termo de referência deve conter especificações, indicadores e instrumentos para fiscalização. Distratores: 1) permitir subcontratação sem controle (alt.1) compromete responsabilização; 2) omitir quantidades/ padrões (alt.2) impede avaliação de propostas; 3) reajuste livre (alt.3) fere princípio da vinculação ao instrumento convocatório; 4) ausência de critérios de interface (alt.4) prejudica execução e fiscalização."
  },
  {
    "id": "nor-07",
    "subjectId": "normas",
    "topicId": "nor-portaria-1",
    "statement": "Na gestão de um Centro de Especialidades Odontológicas (CEO) municipal, um coordenador observa filas excessivas para consultas especializadas. À luz das Portarias de Consolidação do Ministério da Saúde (Consolidação I), qual ação é mais coerente para reorganizar a oferta dentro da rede de atenção básica e especializada?",
    "alternatives": [
      "Reduzir a oferta de consultas especializadas para priorizar emergências e remanejar recursos para a atenção básica sem estudar fluxos de referência.",
      "Implementar protocolos clínicos de referência e contrarreferência, ajustar agendas regionalmente e articular com a atenção básica para racionalizar encaminhamentos.",
      "Suspender a regulação e permitir que os pacientes agendem consultas diretamente no CEO para acelerar o atendimento.",
      "Concentrar todas as consultas em uma única unidade especializada central e fechar vagas em unidades periféricas para otimizar recursos.",
      "Introduzir cobrança simbólica por consulta para reduzir a demanda de pacientes que usam a rede de forma inadequada."
    ],
    "correctIndex": 1,
    "explanation": "Resposta correta: implementar protocolos de referência/contrarreferência e ajuste de agendas (alternativa 1). As Portarias enfatizam a organização em redes com fluxos claros entre atenção básica e especializada. Distratores: 1) reduzir oferta sem análise (alt.0) pode agravar problemas; 3) suspender regulação (alt.2) compromete equidade; 4) concentrar serviços (alt.3) aumenta barreiras de acesso; 5) cobrança simbólica (alt.4) contraria princípios de universalidade e pode ferir normas."
  },
  {
    "id": "nor-08",
    "subjectId": "normas",
    "topicId": "nor-portaria-1",
    "statement": "Uma equipe de vigilância epidemiológica local precisa integrar informações de atenção primária sobre casos de uma doença de notificação compulsória. Segundo orientações contidas nas Portarias de Consolidação (Consolidação I), que ação fortalece essa integração?",
    "alternatives": [
      "Exigir que a atenção primária só reporte casos após confirmação laboratorial para evitar sobrecarga do sistema de vigilância.",
      "Estabelecer fluxos de comunicação, definir responsabilidades de notificação imediata e capacitar profissionais da atenção primária para identificação e notificação.",
      "Centralizar todas as decisões de vigilância no nível nacional, delegando apenas a coleta de dados às equipes locais.",
      "Implementar relatórios mensais padronizados, sem necessidade de notificação imediata, para preservar recursos humanos locais.",
      "Orientar a atenção primária a encaminhar todos os casos suspeitos diretamente para hospitais de referência sem notificar a vigilância local."
    ],
    "correctIndex": 1,
    "explanation": "Resposta correta: estabelecer fluxos de comunicação, responsabilidades e capacitação (alternativa 1). Portarias reforçam a integração entre atenção e vigilância com notificação imediata e capacitação. Distratores: 1) exigir confirmação laboratorial (alt.0) atrasa resposta; 3) centralizar decisões nacionais (alt.2) reduz agilidade local; 4) relatórios mensais (alt.3) são insuficientes para eventos que exigem ação imediata; 5) encaminhar sem notificar (alt.4) quebra a cadeia de vigilância."
  },
  {
    "id": "nor-09",
    "subjectId": "normas",
    "topicId": "nor-portaria-1",
    "statement": "Em um município, há reclamações de usuários quanto ao descumprimento de seus direitos na atenção primária. Conforme as Portarias de Consolidação I, qual medida administrativa contribui mais para assegurar direitos e deveres dos usuários na unidade de saúde?",
    "alternatives": [
      "Instituir canal de ouvidoria com procedimentos claros para acolhimento, registro e retorno, além de promover divulgação desses direitos dentro da unidade.",
      "Orientar a equipe a não registrar reclamações formalmente para preservar a imagem da unidade e resolver internamente os casos.",
      "Criar multa administrativa automática ao usuário que formalizar reclamação visando reduzir o número de manifestações.",
      "Priorizar ações de fiscalização externa em detrimento de iniciativas internas de esclarecimento aos usuários sobre seus direitos.",
      "Reduzir horários de atendimento para controlar a demanda e assim evitar reclamações sobre demora."
    ],
    "correctIndex": 0,
    "explanation": "Resposta correta: instituir ouvidoria com procedimentos e divulgação (alternativa 0). A consolidação orienta mecanismos de participação e proteção de direitos. Distratores: 1) não registrar reclamações (alt.1) impede transparência; 2) multar usuário reclamante (alt.2) viola direito de manifestação; 3) só fiscalização externa (alt.3) não garante acolhimento cotidiano; 4) reduzir horários (alt.4) prejudica acesso e agrava direitos."
  },
  {
    "id": "nor-10",
    "subjectId": "normas",
    "topicId": "nor-portaria-2",
    "statement": "Uma secretaria municipal de saúde quer implantar uma estratégia de Atenção Domiciliar para pacientes crônicos, alinhada às Portarias de Consolidação GM/MS (Consolidação II). Que aspecto operacional deve ser priorizado para garantir continuidade e integração com a rede de atenção?",
    "alternatives": [
      "Contratar equipes domiciliares que atuem de forma autônoma, sem vínculo com unidades básicas, para reduzir trâmites burocráticos.",
      "Definir critérios clínicos e administrativos para inclusão, protocolos de coordenação com a atenção básica e fluxos de regulação para consultas e internamentos.",
      "Limitar o atendimento domiciliar apenas a pacientes do sexo idoso para otimizar recursos, independentemente de necessidades clínicas.",
      "Substituir totalmente as visitas domiciliares por teleatendimento para cortar custos operacionais.",
      "Criar uma fila única regional sem critérios clínicos claros para priorizar os atendimentos domiciliares por ordem de inscrição."
    ],
    "correctIndex": 1,
    "explanation": "Resposta correta: definir critérios de inclusão, protocolos e fluxos com atenção básica (alternativa 1). Consolidação II orienta integração, critérios e coordenação para atenção domiciliar. Distratores: 1) equipes autônomas sem vínculo (alt.0) fragilizam continuidade; 2) restringir por idade (alt.2) não respeita necessidades clínicas; 3) substituir totalmente por teleatendimento (alt.3) pode não atender casos que exigem presença; 4) fila única sem critérios (alt.4) compromete equidade e priorização clínica."
  },
  {
    "id": "nor-11",
    "subjectId": "normas",
    "topicId": "nor-portaria-2",
    "statement": "Ao planejar financiamento de ações de saúde relacionadas à atenção materna, um gestor estadual precisa alocar recursos que respeitem orientações das Portarias (Consolidação II). Qual critério contribui para melhor rendimento dos recursos?",
    "alternatives": [
      "Distribuir igualmente verbas por município independentemente de volume populacional, necessidades epidemiológicas ou oferta de serviços.",
      "Alocar recursos segundo indicadores de vulnerabilidade, demanda estimada e capacidade de serviço, articulando com metas pactuadas na rede materna.",
      "Concentrar recursos apenas nas capitais para garantir centros de excelência, já que municípios menores podem se deslocar quando necessário.",
      "Atribuir todo o montante para ações hospitalares, deixando a atenção primária sem investimentos específicos porque esta já atende gestantes.",
      "Reservar parte dos recursos para contratações por tempo indeterminado de profissionais sem critérios de necessidade para assegurar estabilidade."
    ],
    "correctIndex": 1,
    "explanation": "Resposta correta: alocação baseada em vulnerabilidade, demanda e capacidade (alternativa 1). Portarias orientam financiamento alinhado a necessidades e metas de rede. Distratores: 1) distribuição igualitária indevida (alt.0) ignora desigualdades; 2) concentrar só nas capitais (alt.2) reduz acesso regional; 3) destinar todo recurso a hospitais (alt.3) desarticula atenção primária; 4) contratar sem critérios (alt.4) pode gerar ineficiência e desperdício."
  },
  {
    "id": "nor-12",
    "subjectId": "normas",
    "topicId": "nor-portaria-2",
    "statement": "Durante auditoria, identificou-se que protocolos clínicos previstos para a rede de atenção foram alterados por iniciativa isolada de uma equipe local. Considerando as Portarias de Consolidação II, qual providência administrativa é a mais adequada para restabelecer a governança da rede?",
    "alternatives": [
      "Manter as alterações locais se elas agradarem à equipe, para valorizar a autonomia profissional, sem necessidade de alinhamento com a rede.",
      "Suspender imediatamente os atendimentos da equipe até que todos os pacientes sejam transferidos para outra unidade.",
      "Reunir coordenação regional da rede, revisar as alterações, promover educação continuada e atualizar protocolos mediante processo técnico-participativo.",
      "Impor penalidade administrativa à equipe sem análise técnica, como advertência formal, para desincentivar novas alterações.",
      "Ignorar o caso se não houver reclamações de usuários, pois mudanças locais podem ser inócuas."
    ],
    "correctIndex": 2,
    "explanation": "Resposta correta: reunião da coordenação regional, revisão técnica e educação continuada (alternativa 2). Consolidação II valoriza governança, pactuação e atualização técnica participativa. Distratores: 1) aceitar alterações sem alinhamento (alt.0) fragiliza padronização; 2) suspender atendimentos (alt.1) é medida extrema e pode prejudicar usuários; 3) penalização sem análise técnica (alt.3) ignora necessidade de entender razões; 4) ignorar (alt.4) compromete qualidade e segurança."
  },
  {
    "id": "nor-13",
    "subjectId": "normas",
    "topicId": "nor-portaria-3",
    "statement": "Você coordena a Vigilância em Saúde no município e precisa responder a um risco ambiental identificado próximo a um conjunto habitacional. Segundo diretrizes das Portarias de Consolidação (Consolidação III), qual ação priorizar para proteção da população?",
    "alternatives": [
      "Emitir informativo apenas nas redes sociais do órgão, acreditando que isso alcançará todos os afetados.",
      "Desenvolver rapidamente plano de ação integrado entre vigilância, atenção primária e defesa civil, com comunicação clara à população e medidas de controle.",
      "Aguardar confirmação de todos os dados laboratoriais antes de comunicar a população, para evitar alarmismo.",
      "Recomendar que os moradores procurem por conta própria serviços privados para avaliação, sem acionar a rede pública.",
      "Transferir a responsabilidade pela comunicação e medidas ao nível estadual sem articular ações locais."
    ],
    "correctIndex": 2,
    "explanation": "Resposta correta: desenvolver plano de ação integrado e comunicação clara (alternativa 2). Consolidação III orienta ações integradas de vigilância e resposta imediata com comunicação efetiva. Distratores: 1) usar apenas redes sociais (alt.0) pode não alcançar grupos vulneráveis; 3) aguardar confirmação laboratorial (alt.2) prejudica medidas preventivas imediatas; 4) direcionar à rede privada (alt.3) nega dever público de proteção; 5) transferir responsabilidade (alt.4) dificulta resposta ágil local."
  },
  {
    "id": "nor-14",
    "subjectId": "normas",
    "topicId": "nor-portaria-3",
    "statement": "Em um cenário de surto localizado, a vigilância recomenda testagens e isolamento domiciliar, mas há resistência política em reconhecer o surto por medo de impacto econômico. De acordo com as Portarias de Consolidação III, qual postura técnica o gestor de saúde deve adotar?",
    "alternatives": [
      "Ceder à pressão política e não divulgar a situação para evitar pânico na população e impacto econômico.",
      "Tomar medidas de transparência, comunicar o risco de maneira clara, implementar ações de mitigação e registrar tecnicamente as decisões para fins de responsabilização e controle.",
      "Desalocar recursos de vigilância para setores que evitem repercussão midiática, mesmo que prejudique a resposta ao surto.",
      "Executar ações de vigilância sigilosas sem notificação oficial para minimizar efeitos econômicos locais.",
      "Aguardar orientações externas internacionais antes de agir, para ter respaldo em qualquer decisão."
    ],
    "correctIndex": 3,
    "explanation": "Resposta correta: comunicar com transparência, implementar mitigação e registrar decisões (alternativa 3). Consolidação III recomenda transparência, registro técnico e medidas de controle. Distratores: 1) ceder à pressão (alt.0) compromete saúde pública; 2) desalocar recursos (alt.2) prejudica resposta; 3) ações sigilosas (alt.3) ferem princípios de notificação e controle; 4) aguardar orientações internacionais (alt.4) pode atrasar medidas necessárias localmente."
  },
  {
    "id": "nor-15",
    "subjectId": "normas",
    "topicId": "nor-portaria-4",
    "statement": "Uma região do estado busca aprimorar a Rede de Atenção Psicossocial (RAPS) conforme as Portarias de Consolidação (Consolidação IV). Para garantir o caráter territorial da rede, qual iniciativa promove maior eficácia na organização dos serviços?",
    "alternatives": [
      "Criar serviços especializados apenas na capital e transferir usuários de todo o território para esses centros, concentrando recursos.",
      "Mapear a oferta existente, identificar lacunas por território, fortalecer equipes comunitárias e articular fluxo entre atenção básica, serviços especializados e comunitários.",
      "Padronizar um único modelo de atendimento idêntico para todas as localidades sem considerar especificidades territoriais.",
      "Reduzir investimentos em ações comunitárias e priorizar internações quando houver demanda para garantir tratamento intensivo.",
      "Substituir as equipes locais por teleatendimento exclusivo para reduzir custos e evitar deslocamentos."
    ],
    "correctIndex": 1,
    "explanation": "Resposta correta: mapear oferta, identificar lacunas, fortalecer equipes comunitárias e articular fluxos (alternativa 1). Consolidação IV privilegia organização territorializada e articulação de serviços. Distratores: 1) concentrar recursos na capital (alt.0) aumenta barreiras; 2) padronizar sem considerar contexto (alt.2) desconsidera necessidades locais; 3) priorizar internações (alt.3) contraria cuidado comunitário; 4) substituir por teleatendimento exclusivo (alt.4) pode não atender necessidades presenciais."
  },
  {
    "id": "nor-16",
    "subjectId": "normas",
    "topicId": "nor-portaria-4",
    "statement": "Na avaliação de qualidade da atenção em saúde mental, quais indicadores são mais alinhados às orientações da Portaria de Consolidação IV para monitorar a efetividade da rede local?",
    "alternatives": [
      "Número de leitos psiquiátricos inaugurados no último ano como único indicador de desempenho.",
      "Taxas de reinternação em curto prazo, cobertura das equipes territoriais, acesso aos serviços de atenção psicossocial e participação social nos serviços.",
      "Tempo médio de deslocamento dos profissionais até a capital do estado, sem relação com a oferta local de serviços.",
      "Quantidade de exames laboratoriais executados por pacientes psiquiátricos como indicador principal de qualidade.",
      "Número de campanhas publicitárias realizadas para divulgar serviços de saúde mental, mensurado apenas por impressões."
    ],
    "correctIndex": 1,
    "explanation": "Resposta correta: indicadores como reinternação, cobertura territorial, acesso e participação social (alternativa 1). Consolidação IV orienta indicadores que reflitam cuidado contínuo, acesso e protagonismo. Distratores: 1) número de leitos (alt.0) é parcial e não reflete atenção comunitária; 2) deslocamento de profissionais até capital (alt.2) é irrelevante; 3) exames laboratoriais (alt.3) não medem qualidade do cuidado psicossocial; 4) campanhas e impressões (alt.4) medem comunicação, não efetividade clínica."
  },
  {
    "id": "nor-17",
    "subjectId": "normas",
    "topicId": "nor-portaria-5",
    "statement": "Um gestor regional precisa planejar ações de promoção da saúde e prevenção de agravos crônicos, conforme Portarias de Consolidação V. Em termos de alocação de recursos, qual estratégia tende a oferecer melhor retorno em saúde para a população local?",
    "alternatives": [
      "Destinar a maior parte dos recursos para tratamentos de alta complexidade, pois representam casos urgentes.",
      "Investir em ações intersetoriais de promoção e prevenção, fortalecimento da atenção primária e programas de educação em saúde voltados para fatores de risco.",
      "Concentrar recursos em campanhas massivas de mídia sem integração com serviços locais, acreditando no efeito educativo amplo.",
      "Reduzir investimentos preventivos e usar os recursos para ampliar compras de medicamentos de uso pessoal, pois isso atende demandas imediatas.",
      "Financiar exclusivamente projetos de pesquisa locais sem vínculo operacional com serviços de atenção à saúde."
    ],
    "correctIndex": 2,
    "explanation": "Resposta correta: investir em ações intersetoriais, atenção primária e educação em saúde (alternativa 2). Consolidação V incentiva promoção, prevenção e fortalecimento da base da rede para melhor retorno em saúde. Distratores: 1) priorizar alta complexidade (alt.0) negligencia prevenção; 3) campanhas sem integração (alt.2) têm impacto limitado; 4) só comprar medicamentos (alt.3) trata consequência sem prevenir; 5) financiar pesquisa sem vínculo operacional (alt.4) não garante benefício direto à população."
  },
  {
    "id": "nor-18",
    "subjectId": "normas",
    "topicId": "nor-portaria-5",
    "statement": "Durante uma revisão de políticas locais, detectou-se baixa adesão a programas de promoção à saúde entre populações vulneráveis. Com base nas Portarias de Consolidação V, qual medida programática pode aumentar a adesão e equidade?",
    "alternatives": [
      "Manter a oferta dos programas apenas nos horários padrão das unidades, pois ampliar horários custa mais e não traz resultado comprovado.",
      "Adaptar ações aos contextos locais, articular com políticas sociais, realizar mobilização comunitária e garantir oferta em horários e locais acessíveis.",
      "Oferecer os programas apenas em formato digital para modernizar a gestão, excluindo ações presenciais.",
      "Cobrar taxa simbólica de adesão para aumentar o comprometimento dos participantes com os programas.",
      "Centralizar as ações em centros de excelência longe das áreas vulneráveis para proporcionar atendimento de melhor qualidade."
    ],
    "correctIndex": 3,
    "explanation": "Resposta correta: adaptar ações ao contexto, articular com políticas sociais e garantir acessibilidade (alternativa 3). Consolidação V aponta importância de ações localmente adaptadas e intersetoriais. Distratores: 1) manter horários padrão (alt.0) pode limitar acesso; 2) só formato digital (alt.2) exclui populações sem acesso; 3) cobrar taxa (alt.3) cria barreira financeira; 4) centralizar em centros distantes (alt.4) aumenta desigualdade de acesso."
  },
  {
    "id": "nor-19",
    "subjectId": "normas",
    "topicId": "nor-portaria-6",
    "statement": "Na implementação de medidas de financiamento da atenção à saúde, é necessário compatibilizar incentivos com resultados esperados pela rede. Segundo as Portarias de Consolidação VI, qual desenho de financiamento tende a promover melhor qualidade e responsabilização das unidades executoras?",
    "alternatives": [
      "Repasse de recursos de forma genérica e sem vinculação a metas ou indicadores, para dar máxima autonomia gestor-índividuo.",
      "Mecanismos que combinem financiamento por resultados e indicadores de desempenho com monitoramento contínuo e pactuação regional de metas.",
      "Financiamento exclusivo por demanda histórica do ano anterior, sem ajustes por variação populacional ou indicadores de necessidade.",
      "Distribuição de recursos igualitária entre todas as unidades, independente da produção efetiva ou dos resultados em saúde.",
      "Destinar recursos apenas para obras e infraestrutura, sem vincular investimentos a processos de qualificação e avaliação de resultados."
    ],
    "correctIndex": 1,
    "explanation": "Resposta correta: combinar financiamento por resultados com monitoramento e pactuação (alternativa 1). Consolidação VI recomenda mecanismos que incentivem desempenho, com monitoramento e pactuação. Distratores: 1) repasse sem metas (alt.0) reduz responsabilização; 2) financiamento apenas por demanda histórica (alt.2) ignora necessidades e eficiência; 3) distribuição igualitária (alt.3) desconsidera diferenças de capacidade e demanda; 4) investir só em infraestrutura (alt.4) sem qualificação não assegura melhores resultados."
  },
  {
    "id": "nor-20",
    "subjectId": "normas",
    "topicId": "nor-portaria-6",
    "statement": "Um conselho de saúde estadual quer avaliar a efetividade de um programa cofinanciado entre estados e municípios. Segundo as orientações da Portaria de Consolidação VI, qual procedimento de avaliação é mais consistente com a governança participativa prevista?",
    "alternatives": [
      "Realizar avaliação externa unicamente por consultoria privada contratada sem participação dos gestores locais ou usuários.",
      "Estabelecer um processo de avaliação participativa que envolva gestores, profissionais, usuários e monitoramento de indicadores acordados, com relatórios públicos.",
      "Solicitar apenas relatórios financeiros dos municípios e considerar esses relatórios suficientes para medir efetividade do programa.",
      "Conduzir auditorias surpresa com foco exclusivo em documentação contábil, sem análise de resultados em saúde.",
      "Delegar a avaliação ao nível federal para que haja padronização, sem espaço para adaptações regionais."
    ],
    "correctIndex": 0,
    "explanation": "Resposta correta: avaliação participativa com gestores, profissionais, usuários e indicadores acordados (alternativa 0). Consolidação VI ressalta governança participativa, transparência e avaliação de resultados. Distratores: 1) avaliação externa sem participação local (alt.1) perde legitimidade; 2) apenas relatórios financeiros (alt.2) não medem efetividade em saúde; 3) auditorias só contábeis (alt.3) negligenciam impacto de serviços; 4) delegar exclusivamente ao nível federal (alt.4) reduz adequação regional."
  }
] as Question[];
