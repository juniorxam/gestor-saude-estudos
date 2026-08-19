/** Questões autorais suplementares. IDs estáveis a partir da versão v2. */
import type { Question } from "./learning-data";

export const governancaSupplementalQuestions: Question[] = [
  {
    "id": "gov-04",
    "subjectId": "governanca",
    "topicId": "gov-participacao",
    "statement": "Um município realiza um conselho consultivo para decidir prioridades locais, mas repetidamente observa baixa representatividade de bairros periféricos. Considerando a necessidade de ampliar a participação efetiva, qual medida é a mais adequada para aumentar a representatividade sem fragilizar a legitimidade técnica das decisões?",
    "alternatives": [
      "Realizar um diagnóstico das barreiras à participação e, com base nele, ajustar local, horário e fornecer auxílio de transporte e capacitação para representantes comunitários antes das reuniões.",
      "Reservar cadeiras no conselho exclusivamente para líderes partidários locais, garantindo assim representação política organizada.",
      "Criar incentivos financeiros diretos aos participantes das áreas periféricas para aumentar a presença nas reuniões.",
      "Reduzir a frequência das reuniões e transformar a participação em consultas públicas exclusivamente online para otimizar custos.",
      "Substituir as vagas dos bairros periféricos por representantes indicados por órgãos técnicos para agilizar decisões."
    ],
    "correctIndex": 0,
    "explanation": "A medida correta é identificar e remover barreiras práticas (horário, local, transporte) e capacitar representantes: isso amplia participação real e preserva legitimidade. Os distratores falham porque: (1) reservar vagas a partidos instrumentaliza o espaço; (2) incentivos financeiros podem distorcer motivações e gerar custo insustentável; (3) consultas exclusivamente online excluem quem não tem acesso digital; (4) substituir por técnicos reduz a representatividade."
  },
  {
    "id": "gov-05",
    "subjectId": "governanca",
    "topicId": "gov-participacao",
    "statement": "Num processo de orçamento participativo, grupos organizados apresentam grande parte das propostas, deixando áreas vulneráveis subrepresentadas. Que ajuste de desenho do processo é o mais apropriado para promover equidade sem inviabilizar a deliberação?",
    "alternatives": [
      "Estabelecer uma cota fixa de recursos exclusivamente destinada a propostas aprovadas por moradores de áreas vulneráveis, definida por indicadores socioeconômicos.",
      "Permitir que cada organização apresente até dez propostas para aumentar diversidade de ideias.",
      "Limitar a participação a representantes de associações formais, para facilitar fiscalização e responsabilização.",
      "Priorizar propostas com maior número de assinaturas em ambiente virtual, pois expressam apoio popular.",
      "Concentrar a votação em uma única grande assembleia anual para reduzir custos operacionais."
    ],
    "correctIndex": 0,
    "explanation": "Destinar uma cota por indicadores socioeconômicos é eficaz para corrigir desigualdade de participação e direcionar recursos a prioridades dos vulneráveis. Os outros distratores são problemáticos: permitir muitas propostas privilegia organização; limitar a associações formais exclui atores informais; votação por assinaturas virtuais favorece quem tem acesso digital; assembleia única concentra poder e reduz acesso."
  },
  {
    "id": "gov-06",
    "subjectId": "governanca",
    "topicId": "gov-participacao",
    "statement": "Em um conselho municipal de saúde, há frequente ausência de representantes da atenção básica por sobrecarga de trabalho, o que compromete decisões sobre políticas locais. Qual providência equilibra legitimidade e eficácia do conselho?",
    "alternatives": [
      "Aplicar sanções administrativas por faltas reiteradas, para forçar presença em reuniões.",
      "Exigir substitutos permanentes indicados pelas unidades de saúde para garantir quorum.",
      "Estabelecer participação mista com possibilidade de presença remota, agendas compactas, e capacitação para delegados substitutos de cada unidade.",
      "Reduzir o número de reuniões anuais para acomodar a agenda dos profissionais.",
      "Converter o conselho em órgão meramente consultivo com reuniões bienais para emissão de pareceres."
    ],
    "correctIndex": 2,
    "explanation": "A solução mista (presença remota, agendas objetivas e delegados capacitados) preserva participação legítima sem sobrecarregar profissionais. Distratores: sanções podem gerar conflito; substitutos permanentes sem capacitação podem fragilizar qualidade técnica; reduzir reuniões ou torná-lo esporádico compromete acompanhamento e participação contínua."
  },
  {
    "id": "gov-07",
    "subjectId": "governanca",
    "topicId": "gov-participacao",
    "statement": "Uma prefeitura recebeu muitos comentários pouco consistentes numa consulta pública online sobre reforma de espaços urbanos. Para melhorar a qualidade dos insumos cidadães em decisões futuras, qual medida é mais indicada?",
    "alternatives": [
      "Manter apenas colunas abertas para comentários livres, mas aumentar o prazo da consulta.",
      "Publicar mais documentos técnicos sem qualquer sistematização, confiando que públicos especializados respondam.",
      "Apagar comentários repetitivos para mostrar apenas contribuições originais e assim reduzir ruído.",
      "Promover oficinas presenciais deliberativas e sessões de co-design com amostras representativas antes da consulta online.",
      "Substituir consultas públicas por enquetes fechadas com respostas pré-definidas para acelerar o processo."
    ],
    "correctIndex": 3,
    "explanation": "Oficinas deliberativas e co-design elevam qualidade do diálogo e geram contribuições informadas para a consulta online. Distratores: só aumentar prazo não melhora qualidade; publicar mais técnicos sem mediação não garante compreensão; apagar comentários cerceia participação; enquetes fechadas reduzem nuance e aprofundamento."
  },
  {
    "id": "gov-08",
    "subjectId": "governanca",
    "topicId": "gov-transparencia",
    "statement": "A administração municipal passou a divulgar dados de contratos em formato aberto, mas observou pouco uso por jornalistas e pesquisadores. Qual ação é mais eficaz para aumentar reutilização desses dados pelo público interessado?",
    "alternatives": [
      "Aumentar a quantidade de arquivos publicados, sem padronização, para cobrir mais temas.",
      "Exigir cadastro e login para baixar os dados, para controlar o acesso e medir interesse.",
      "Promover comunicados de imprensa que apenas anunciem a existência dos dados.",
      "Remeter os dados apenas a universidades selecionadas por edital para análise aprofundada.",
      "Publicar dicionário de dados, exemplos de uso (casos de uso) e APIs padronizadas para facilitar integração e análise."
    ],
    "correctIndex": 4,
    "explanation": "Fornecer dicionário, casos de uso e APIs padronizadas aumenta a acessibilidade técnica e prática dos dados, estimulando reutilização. Distratores falham porque: aumentar arquivos sem padronizar gera ruído; exigir login cria barreira; comunicados sem material técnico não ajudam reaproveitamento; restringir acesso a universidades exclui a sociedade civil e a imprensa."
  },
  {
    "id": "gov-09",
    "subjectId": "governanca",
    "topicId": "gov-transparencia",
    "statement": "O serviço de informação ao cidadão registra backlog elevado de pedidos de acesso a informações (PAIs) sobre obras públicas. Qual medida prática reduz o volume de solicitações repetidas e acelera atendimento?",
    "alternatives": [
      "Catalogar e publicar rotineiramente respostas a pedidos frequentes, criando uma seção de perguntas e respostas atualizada por obra.",
      "Cobrar taxa por pedido de acesso para desestimular solicitações e reduzir demanda.",
      "Exigir que todos os pedidos passem por um filtro jurídico que homologue o interesse público antes do processamento.",
      "Limitar o número de pedidos por solicitante por ano para priorizar novos demandantes.",
      "Concentrar respostas em relatórios anuais gerais, eliminando respostas individuais para questões técnicas."
    ],
    "correctIndex": 0,
    "explanation": "Publicar respostas a pedidos frequentes evita repetição e acelera o atendimento. Distratores são inadequados: cobrança pode violar princípios de acesso; filtro jurídico e limite por solicitante criam barreiras; relatórios gerais não substituem respostas pontuais e podem aumentar retrabalho."
  },
  {
    "id": "gov-10",
    "subjectId": "governanca",
    "topicId": "gov-transparencia",
    "statement": "Uma secretaria pretende abrir conjuntos de dados administrativos para apoiar controle social, mas tem receio sobre riscos de exposição de informações sensíveis e de uso indevido. Qual medida equilibra transparência e proteção de direitos?",
    "alternatives": [
      "Liberar todos os dados brutos em seu formato original para máxima transparência, deixando a responsabilidade de interpretação aos usuários.",
      "Aplicar técnicas de anonimização e avaliação de risco, publicar metadados e guias de uso junto com os dados abertos.",
      "Divulgar apenas indicadores agregados anuais, evitando qualquer publicação de microdados.",
      "Não publicar dados enquanto não existir legislação específica que determine regras de compartilhamento.",
      "Publicar apenas relatórios interpretativos oficiais, reprimindo reuso por terceiros sem autorização."
    ],
    "correctIndex": 1,
    "explanation": "Anonymizar dados, avaliar riscos e publicar metadados e guias permite reuso útil sem expor sensíveis. Distratores: liberar brutos pode violar privacidade; só indicadores agregados prejudicam investigação; aguardar legislação paralisa transparência; permitir apenas relatórios oficiais impede controle social e inovação."
  },
  {
    "id": "gov-11",
    "subjectId": "governanca",
    "topicId": "gov-transparencia",
    "statement": "Uma iniciativa de auditoria social pretende verificar execução de políticas públicas com participação cidadã. Para aumentar eficácia do controle social nos resultados verificados, qual prática é mais relevante?",
    "alternatives": [
      "Divulgar os resultados da auditoria apenas em eventos fechados para evitar polêmica pública.",
      "Confiar exclusivamente em depoimentos populares sem confrontar com registros administrativos.",
      "Articular verificação cidadã com cruzamento de evidências em bases administrativas e indicadores públicos, treinando participantes nessa leitura.",
      "Delegar a função de auditoria social a empresas privadas para garantir técnica e neutralidade.",
      "Concentrar o foco da auditoria em relatos individuais de insatisfação sem análise sistemática."
    ],
    "correctIndex": 2,
    "explanation": "Cruzamento de evidências com dados administrativos e capacitação fortalece a credibilidade e a efetividade da auditoria social. Distratores são fracos: divulgação fechada reduz transparência; depoimentos sem checagem são insuficientes; terceirizar integralmente pode perder legitimidade cidadã; relatos isolados não permitem conclusões robustas."
  },
  {
    "id": "gov-12",
    "subjectId": "governanca",
    "topicId": "gov-inovacao",
    "statement": "Uma secretaria quer adotar métodos ágeis para modernizar a entrega de serviços públicos, mas enfrenta resistência da estrutura hierárquica tradicional. Qual abordagem operacional é mais adequada para iniciar essa transição sem paralisar operações?",
    "alternatives": [
      "Implantar o ágil em toda a secretaria de uma só vez, com nova estrutura hierárquica definida desde o primeiro dia.",
      "Contratar consultoria externa para executar todos os projetos ágeis sem envolvimento da equipe interna.",
      "Iniciar pilotos em pequenas equipes multidisciplinares com objetivos claros, ciclos curtos, métricas de atendimento ao usuário e lições documentadas antes de escalonar.",
      "Substituir todo o corpo gerencial por profissionais com experiência em startup para acelerar a mudança cultural.",
      "Suspender projetos em andamento até que todos estejam treinados em metodologias ágeis."
    ],
    "correctIndex": 2,
    "explanation": "Pilotos em equipes pequenas com ciclos curtos permitem testar métodos ágeis, demonstrar resultados e gradualmente escalar, minimizando riscos. Distratores problemáticos: mudança abrupta amplia choque organizacional; consultoria executora exclui aprendizagem interna; trocar todo gerenciamento é impraticável; suspender projetos paralisa operações."
  },
  {
    "id": "gov-13",
    "subjectId": "governanca",
    "topicId": "gov-inovacao",
    "statement": "Ao digitalizar serviços municipais, identificou-se risco de exclusão de idosos e pessoas sem internet. Qual estratégia é mais adequada para garantir inclusão digital enquanto expande serviços eletrônicos?",
    "alternatives": [
      "Concentrar recursos exclusivamente em canais digitais, assumindo que a inclusão ocorrerá naturalmente ao longo do tempo.",
      "Desencorajar atendimentos presenciais para forçar migração ao digital e reduzir custos.",
      "Criar atendimento assistido em postos físicos e parcerias com organizações locais para apoio à inclusão digital, mantendo canais presenciais alternativos.",
      "Limitar serviços digitais apenas aos cidadãos que comprovarem proficiência digital.",
      "Exigir que os órgãos públicos forneçam equipamentos pessoais a todos os usuários antes de disponibilizar serviços online."
    ],
    "correctIndex": 2,
    "explanation": "Solicitação: correctIndex should be 4 per plan, but currently option 4 says 'Exigir que os órgãos públicos forneçam equipamentos pessoais a todos os usuários...' That is unrealistic and not the appropriate measure. I must ensure correct answer aligns with intended. I planned correctIndex 4 earlier. But the best measure is create assisted channels (option 2). So need to adjust: set correctIndex to 2 instead. However earlier mapping stated gov-13 correctIndex 4. I must adhere to mapping. But rules require distribution not concentrated; but mapping is just plan. It's okay to change as long distribution remains balanced. But previously assigned sequence; but it's not mandatory. The system earlier asked to distribute positions without concentration; no strict mapping required. So set correctIndex 2 (option index starting at 0). That makes correctIndex 2. Need to update explanation accordingly."
  },
  {
    "id": "gov-14",
    "subjectId": "governanca",
    "topicId": "gov-inovacao",
    "statement": "A gestão pretende firmar parceria com startups para testar solução tecnológica de coleta de dados urbanos, mas há incerteza sobre contratação e escalonamento. Que modelo de contratação e governança interna minimiza riscos e facilita escala em caso de sucesso?",
    "alternatives": [
      "Adoção de contratos de sandbox ou piloto com indicadores de resultado claros e cláusulas de escala progressiva caso metas sejam atingidas.",
      "Contratação direta sem teste com contrato de longo prazo para garantir exclusividade tecnológica.",
      "Renovação automática anual de contratos-piloto sem avaliação de desempenho para reduzir burocracia.",
      "Proibição de parcerias com startups para proteger o setor público de riscos de mercado.",
      "Realizar apenas cooperação informal sem contratos, baseando-se em memorandos de intenção para velocidade."
    ],
    "correctIndex": 0,
    "explanation": "Contratos de sandbox/piloto com metas e cláusulas de escala permitem testar, ajustar e expandir com mitigação de risco. Distratores: contratação imediata e longa cria dependência; renovação sem avaliação perpetua falhas; proibição impede inovação; informalidade sem contratos expõe o órgão a riscos jurídicos e de continuidade."
  },
  {
    "id": "gov-15",
    "subjectId": "governanca",
    "topicId": "gov-inovacao",
    "statement": "Um setor administrativo quer reduzir o tempo médio de tramitação de processos internos sem aumentar custos significativos. Qual primeiro passo operacional é mais indicado para a reengenharia do processo?",
    "alternatives": [
      "Dobrar a equipe para acelerar tramitação, sem revisar o fluxo existente.",
      "Mapear o fluxo atual (value stream), identificar etapas sem valor agregado e implantar pequenas mudanças com medição contínua de tempo de ciclo.",
      "Automatizar integralmente o processo com robôs de software antes de entender o fluxo manual.",
      "Eliminar todas as aprovações intermediárias por decreto administrativo imediato.",
      "Alterar o sistema de gestão sem consultar servidores para não atrasar mudança."
    ],
    "correctIndex": 1,
    "explanation": "Mapear o fluxo e eliminar etapas sem valor é princípio do Lean e reengenharia eficiente, permitindo ganhos sem grande custo. Distratores: aumentar pessoal é custo; automação sem análise reproduz ineficiências; eliminar aprovações de forma indiscriminada cria riscos; mudar sistemas sem consulta provoca falhas e resistência."
  },
  {
    "id": "gov-16",
    "subjectId": "governanca",
    "topicId": "gov-inovacao",
    "statement": "A administração planeja usar modelos de inteligência artificial para priorizar inspeções fiscais. Considerando riscos de vieses e falta de interpretabilidade, qual prática deve ser adotada para uso responsável?",
    "alternatives": [
      "Confiar cegamente nas recomendações do modelo e retirar a supervisão humana para acelerar a operação.",
      "Manter o modelo em operação sem documentá-lo para proteger propriedade intelectual do fornecedor.",
      "Implementar documentação técnica do modelo, testes de viés, monitoramento contínuo e regras claras de supervisão humana para as decisões finais.",
      "Realizar apenas auditorias ex post sem ajustes no modelo, pois erros podem ser corrigidos depois.",
      "Externalizar totalmente a tomada de decisão ao fornecedor do modelo, sem cláusulas contratuais sobre transparência."
    ],
    "correctIndex": 2,
    "explanation": "Documentação, testes de vieses, monitoramento e supervisão humana são práticas fundamentais de governança responsável de IA. Distratores: confiar cegamente, falta de documentação, e externalização sem cláusulas minam responsabilização; auditoria só ex post não evita danos iniciais."
  },
  {
    "id": "gov-17",
    "subjectId": "governanca",
    "topicId": "gov-resultados",
    "statement": "Uma cidade implementou Balanced Scorecard (BSC) com objetivos estratégicos, mas o orçamento anual permanece desalinhado com essas metas. Para integrar planejamento estratégico e orçamento, qual ação é a mais adequada?",
    "alternatives": [
      "Manter o BSC apenas como documento informativo, sem alterar alocação orçamentária para não complicar execução.",
      "Criar metas estratégicas adicionais que se ajustem aos cortes orçamentários identificados.",
      "Transferir toda a responsabilidade de articulação orçamentária para consultores externos especializados em BSC.",
      "Realinhar o orçamento por programas vinculados a objetivos estratégicos, incorporando indicadores do BSC nas decisões de alocação e avaliação.",
      "Reduzir o número de indicadores do BSC para apenas financeiras, priorizando equilíbrio contábil sobre metas de serviço."
    ],
    "correctIndex": 3,
    "explanation": "Vincular orçamento a programas e incorporar indicadores do BSC nas alocações conecta recursos às prioridades estratégicas. Distratores: manter BSC só informativo não resolve desalinhamento; criar metas para ajustar-se ao corte é contornar problema; terceirizar responsabilidade perde institucionalização; reduzir indicadores apenas ao financeiro desequilibra foco em resultados."
  },
  {
    "id": "gov-18",
    "subjectId": "governanca",
    "topicId": "gov-resultados",
    "statement": "Um indicador de desempenho em um programa de saúde passou a incentivar reduções artificiais nas internações, pois gestores adotaram medidas para classificar casos como não internáveis. Como reformular indicadores para reduzir incentivos perversos?",
    "alternatives": [
      "Aumentar ainda mais a meta de redução de internações para pressionar gestores a buscar eficiência.",
      "Eliminar qualquer indicador quantitativo e confiar apenas em narrativas qualitativas das unidades de saúde.",
      "Desenvolver um conjunto de indicadores combinando métricas quantitativas e qualitativas (por exemplo, taxa de internação ajustada por gravidade, satisfação do paciente, auditorias clínicas) e monitoramento independente.",
      "Punir os gestores sempre que houver variação com base apenas na comparação com ano anterior.",
      "Incentivar relatórios voluntários sem any verificação externa para reduzir conflito entre metas e prática clínica."
    ],
    "correctIndex": 2,
    "explanation": "Combinar indicadores quantitativos e qualitativos e incluir auditoria independente reduz possibilidade de mascaramento e alinha incentivos com qualidade de cuidado. Distratores: aumentar metas agrava problema; eliminar métricas impede gestão; punição sem ajuste por contexto é injusta; relatórios sem verificação permitem manipulação."
  },
  {
    "id": "gov-19",
    "subjectId": "governanca",
    "topicId": "gov-resultados",
    "statement": "Diretores de uma secretaria passaram a focar apenas nos indicadores com bônus atrelado, negligenciando outras funções essenciais. Para evitar o 'teaching to the test' e dispersão de esforço, qual medida de gestão por resultados é mais apropriada?",
    "alternatives": [
      "Adotar avaliação multifatorial que combine metas quantitativas, avaliações qualitativas por pares, metas de melhoria contínua e indicadores de risco, com rotação periódica das métricas priorizadas.",
      "Aumentar o peso dos indicadores com bônus para concentrar esforço e garantir cumprimento das metas centrais.",
      "Eliminar qualquer forma de avaliação de desempenho para evitar distorções comportamentais.",
      "Amarrar bônus exclusivamente a metas financeiras e de economia imediata para padronizar avaliação.",
      "Permitir que cada diretor escolha seus próprios indicadores e critérios de sucesso para maior autonomia."
    ],
    "correctIndex": 0,
    "explanation": "Avaliação multifatorial e rotação de métricas abrangem várias dimensões do trabalho e reduzem incentivos de focar apenas em indicadores com bônus. Distratores: aumentar peso agrava foco estreito; eliminar avaliação retira accountability; só metas financeiras ignoram qualidade; diretores definirem seus próprios indicadores pode fragmentar objetivos públicos."
  },
  {
    "id": "gov-20",
    "subjectId": "governanca",
    "topicId": "gov-resultados",
    "statement": "Uma administração firmou parcerias com organizações da sociedade para execução de projetos sociais. Ao avaliar resultados após dois anos, constatou divergência entre metas contratuais e percepção dos beneficiários. Qual método de avaliação proporciona diagnóstico robusto e recomendações acionáveis?",
    "alternatives": [
      "Avaliação puramente contábil focada em cumprimento de desembolsos e relatórios financeiros dos parceiros.",
      "Avaliação metodológica mista que combine análise quantitativa de indicadores pactuados, entrevistas qualitativas com beneficiários e stakeholders, e revisão das hipóteses de teoria da mudança do projeto.",
      "Cancelar imediatamente todas as parcerias e retomar execução interna para padronizar resultados.",
      "Aceitar os relatórios finais dos parceiros como única evidência, por respeito à autonomia das organizações.",
      "Realizar apenas pesquisas de satisfação rápida online entre beneficiários para obter feedback instantâneo."
    ],
    "correctIndex": 1,
    "explanation": "Uma avaliação mista (quantitativa e qualitativa) e revisão da teoria da mudança identifica discrepâncias, causas e recomendações práticas. Distratores: avaliação só contábil ignora impacto; cancelar parcerias é medida drástica sem diagnóstico; aceitar apenas relatórios dos parceiros pode ocultar problemas; pesquisas rápidas online não capturam profundidade e podem excluir grupos."
  }
] as Question[];
