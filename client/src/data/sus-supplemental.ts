/** Questões autorais suplementares. IDs estáveis a partir da versão v2. */
import type { Question } from "./learning-data";

export const susSupplementalQuestions: Question[] = [
  {
    "id": "sus-04",
    "subjectId": "sus",
    "topicId": "sus-organizacao",
    "statement": "Uma rede municipal de atenção à saúde enfrenta sobreposição de serviços entre dois hospitais de pequeno porte e três unidades básicas que oferecem atendimentos semelhantes. Considerando os princípios e a organização do SUS, qual medida administrativa é mais adequada para melhorar a eficiência e a integralidade do cuidado nessa rede?",
    "alternatives": [
      "Fechar uma das unidades básicas para concentrar atendimento nos demais serviços e reduzir custos.",
      "Criar um protocolo de regulação local que redistribua fluxos, definindo portas de entrada e vinculação por território e por nível de complexidade.",
      "Transformar um dos hospitais em unidade de referência para consultas especializadas, transferindo para fora os atendimentos de baixa complexidade.",
      "Aumentar o número de leitos hospitalares para absorver a demanda antiga e evitar sobrecarga nas unidades básicas.",
      "Realizar campanhas de comunicação incentivando a população a procurar unidades específicas, sem alterar a organização da rede."
    ],
    "correctIndex": 1,
    "explanation": "A medida correta é organizar fluxos e referenciação por território e complexidade para promover integralidade e evitar sobreposição. Fechar unidade pode prejudicar acessibilidade; transferir atendimentos de baixa complexidade para hospital vai contra a lógica de atenção primária; aumentar leitos não resolve fragmentação e pode custar mais; só comunicação sem reorganização não altera a rede."
  },
  {
    "id": "sus-05",
    "subjectId": "sus",
    "topicId": "sus-participacao",
    "statement": "Em um município, o Conselho Municipal de Saúde recebeu denúncia de ausência de prestação de contas de um contrato de gestão firmado entre o poder público e uma Organização Social (OS). Considerando o papel do controle social e do Conselho, qual é a ação mais apropriada a ser tomada pelo Conselho Municipal de Saúde?",
    "alternatives": [
      "Solicitar formalmente à gestão pública a apresentação dos relatórios e documentos do contrato e convocar reunião do Conselho com representantes da OS para esclarecer dúvidas.",
      "Suspender o contrato de gestão imediatamente até que a OS apresente nova proposta de trabalho assinada por dirigentes do Conselho.",
      "Encaminhar a denúncia diretamente ao Ministério Público sem ouvir a administração municipal ou a OS.",
      "Organizar uma manifestação pública para pressionar a OS a divulgar informações financeiras.",
      "Elaborar um relatório condenatório sem solicitar documentos, com base apenas na denúncia recebida."
    ],
    "correctIndex": 0,
    "explanation": "O Conselho deve exercer controle social exigindo documentos e promovendo espaço de diálogo. Suspender contrato é atribuição administrativa da gestão, não do Conselho; encaminhar direto ao MP sem tentativa prévia de diálogo ignora possibilidade de fiscalização interna; manifestações e relatórios sem instrução formal não garantem o devido processo e podem comprometer legitimidade."
  },
  {
    "id": "sus-06",
    "subjectId": "sus",
    "topicId": "sus-organizacao",
    "statement": "Uma região de saúde enfrenta problemas de acesso a serviços de média complexidade por falta de pactuação entre municípios vizinhos. À luz das regras de regionalização e do Decreto que organiza a atenção, qual procedimento deve ser priorizado pelos gestores locais para assegurar assistência adequada à população regional?",
    "alternatives": [
      "Cada município deve contratar por conta própria serviços de média complexidade para evitar depender dos vizinhos.",
      "Promover a constituição ou revisão do bloco regional de planejamento, pactuando responsabilidades e formas de financiamento entre os entes envolvidos.",
      "Encaminhar pacientes para o centro estadual sem formalizar acordos intermunicipais, à medida que surjam necessidades individuais.",
      "Focar apenas na ampliação da atenção primária local e delegar totalmente a média complexidade para o nível federal.",
      "Apostar exclusivamente em telemedicina para resolver todas as lacunas de média complexidade na região."
    ],
    "correctIndex": 1,
    "explanation": "A solução adequada é pactuar a regionalização e financiamento entre municípios, responsabilizando-se coletivamente pela oferta de média complexidade. Contratação isolada pode ser ineficiente; encaminhamentos esporádicos a nível estadual sem pactuação não garantem fluxos; ampliar APS é importante, mas não substitui a necessidade de serviços de média complexidade; telemedicina é complementar, não solução única."
  },
  {
    "id": "sus-07",
    "subjectId": "sus",
    "topicId": "sus-participacao",
    "statement": "Uma conferência municipal de saúde precisa definir prioridades para o quadriênio e organizar propostas que serão levadas ao Conselho. Como os participantes devem proceder para garantir que as propostas sejam legítimas, representativas e passíveis de implementação pelo gestor público?",
    "alternatives": [
      "Aprovar um conjunto amplo de propostas sem priorização, para que o gestor escolha posteriormente o que implementar.",
      "Construir propostas baseadas em diagnóstico local, priorizando por impacto e viabilidade, e registrar as deliberações em ata pública para encaminhamento ao Conselho e à gestão.",
      "Limitar a participação a representantes de serviços de saúde somente, excluindo usuários e trabalhadores para agilizar decisões técnicas.",
      "Redigir um documento com demandas fragmentadas por grupos sem articular critérios de prioridade ou estimativas de custos.",
      "Enviar as propostas diretamente ao nível estadual, ignorando a tramitação local via Conselho Municipal de Saúde."
    ],
    "correctIndex": 1,
    "explanation": "A opção correta é construir propostas com diagnóstico, priorização e registro formal em ata. Aprovar propostas sem priorização dificulta implementação; excluir usuários e trabalhadores fere princípios de participação; enviar diretamente ao estado sem tramitação local ignora instâncias do controle social; redigir demandas fragmentadas sem critérios impede gestão atuar de forma eficaz."
  },
  {
    "id": "sus-08",
    "subjectId": "sus",
    "topicId": "sus-organizacao",
    "statement": "Uma equipe gestora estadual propõe alterar a rede de oferta de serviços para melhorar resolutividade, transferindo atenção especializada de hospitais para centros de especialidades. Ao avaliar essa mudança segundo as diretrizes do SUS, qual aspecto deve ser avaliado com prioridade para não fragilizar o sistema?",
    "alternatives": [
      "A capacidade de cada município de aportar recursos próprios sem acordo formal, para financiar a transferência.",
      "A articulação entre níveis de atenção, garantindo encaminhamento, regulação e financiamento compatível entre gestores.",
      "A possibilidade de terceirizar os centros de especialidades para acelerar implantação, independentemente da integração com a APS.",
      "A redução imediata de leitos hospitalares para forçar a utilização dos centros de especialidades.",
      "A substituição da regulação por critérios de livre demanda diretamente pelos pacientes."
    ],
    "correctIndex": 1,
    "explanation": "É essencial avaliar articulação entre níveis, regulação e financiamento para manter a integralidade. Recursos sem acordo formal podem gerar desequilíbrio; terceirização sem integração pode fragmentar o cuidado; reduzir leitos à força pode prejudicar acesso; liberar demanda sem regulação compromete ordenamento e equidade."
  },
  {
    "id": "sus-09",
    "subjectId": "sus",
    "topicId": "sus-participacao",
    "statement": "Em reunião de controle social, representantes de usuários alegam que não recebem informações sobre os indicadores de desempenho do serviço local. Segundo os instrumentos de participação e controle social, qual ação o Conselho de Saúde pode adotar para promover transparência efetiva?",
    "alternatives": [
      "Exigir que a gestão disponibilize relatórios acessíveis e realizar audiências públicas periódicas para discutir indicadores com a população.",
      "Publicar comunicados técnicos complexos apenas em diários oficiais, considerando que a informação está disponível formalmente.",
      "Delegar a tarefa de informar a população exclusivamente às equipes de comunicação da Secretaria de Saúde, sem participação do Conselho.",
      "Solicitar aos usuários que busquem informações diretamente nas unidades de saúde, sem intervenções do Conselho.",
      "Manter as reuniões do Conselho em formato fechado para evitar interpretações públicas equivocadas sobre os dados."
    ],
    "correctIndex": 0,
    "explanation": "A medida correta é exigir relatórios acessíveis e promover audiências públicas. Publicar apenas em diários oficiais não garante acessibilidade; delegar exclusivamente à comunicação sem fiscalização do Conselho pode ser ineficaz; pedir que usuários busquem informação sem facilitar acesso não promove transparência; reuniões fechadas reduzem controle social."
  },
  {
    "id": "sus-10",
    "subjectId": "sus",
    "topicId": "sus-organizacao",
    "statement": "Um gestor municipal pretende estabelecer convênio com outro município para compartilhamento de um serviço de tomografia. Para que a parceria esteja em consonância com os dispositivos legais que regem gestão e financiamento do SUS, qual condição é imprescindível antes da celebração do convênio?",
    "alternatives": [
      "Obter parecer favorável do Conselho Municipal de Saúde sobre os aspectos assistenciais e de transparência do convênio.",
      "Assinar o convênio imediatamente, desde que haja capacidade financeira municipal, sem necessidade de pactuação regional.",
      "Executar o convênio apenas como termo verbal entre secretários, para dar agilidade ao serviço.",
      "Contratar a operação do equipamento diretamente com empresa privada, sem formalizar instrumentos intermunicipais.",
      "Garantir que apenas o município proponente arque com todos os custos operacionais, sem compartilhar responsabilidades."
    ],
    "correctIndex": 0,
    "explanation": "Antes de firmar convênio é imprescindível haver parecer e participação do Conselho; assim a opção correta é obter parecer favorável do Conselho. Assinar sem pactuação regional não atende requisitos de governança; termos verbais e contratos informais são inadequados; terceirização sem formalização e ausência de compartilhamento de responsabilidades fragilizam a rede e a transparência."
  },
  {
    "id": "sus-11",
    "subjectId": "sus",
    "topicId": "sus-participacao",
    "statement": "Durante avaliação da Conferência Municipal de Saúde, surgem conflitos entre representantes de trabalhadores e gestores sobre prioridades orçamentárias. Considerando a função deliberativa das conferências, qual prática fortalece a legitimidade das decisões tomadas naquele espaço?",
    "alternatives": [
      "Adotar critérios públicos de escolha e priorização, com base em diagnóstico e participação ampliada, e registrar as deliberações em ata e relatório final.",
      "Permitir que somente representantes do governo definam prioridades para simplificar a implementação.",
      "Resolver os conflitos com vote de minoria para acelerar a aprovação de propostas urgentes pelo gestor.",
      "Postergar a tomada de decisões até que todos os trabalhadores concordem unanimemente com as propostas.",
      "Enviar as decisões da conferência como sugestão não vinculante, sem necessidade de formalização."
    ],
    "correctIndex": 0,
    "explanation": "Práticas que usam critérios públicos, diagnóstico e registro formal reforçam legitimidade. Permitir decisão apenas do governo e usar voto de minoria enfraquecem participação; exigir unanimidade inviabiliza deliberação; tratar decisões como não vinculantes sem formalização reduz eficácia do controle social."
  },
  {
    "id": "sus-12",
    "subjectId": "sus",
    "topicId": "sus-organizacao",
    "statement": "Uma equipe de saúde do trabalhador propõe implantar ações de prevenção em várias indústrias de uma microrregião. Para integrar essas ações à organização do SUS e garantir continuidade, qual enfoque de coordenação é mais coerente com as diretrizes da Política Nacional de Saúde do Trabalhador e da Trabalhadora?",
    "alternatives": [
      "Realizar ações pontuais e isoladas por setor industrial, sem articulação com a atenção primária e vigilância em saúde.",
      "Estruturar um plano regional articulado entre serviços de atenção primária, vigilância em saúde e serviços especializados, com fluxos definidos para notificação e atenção.",
      "Ter a equipe de saúde do trabalhador responsável por todos os atendimentos ocupacionais sem envolver outros pontos da rede.",
      "Concentrar todas as ações de prevenção em um único centro especializado localizado na capital estadual, excluindo a atuação local.",
      "Focar exclusivamente em ações educativas gerais, sem integrar medidas de vigilância e assistência específicas."
    ],
    "correctIndex": 1,
    "explanation": "A melhor opção é estruturar plano articulado entre APS, vigilância e serviços especializados com fluxos e continuidade. Ações pontuais isoladas e centralização exclusiva na capital fragilizam a rede; responsabilizar apenas a equipe do trabalhador sem articulação quebra integralidade; apenas educação sem integração com vigilância e assistência é insuficiente."
  },
  {
    "id": "sus-13",
    "subjectId": "sus",
    "topicId": "sus-participacao",
    "statement": "Um Conselho Estadual de Saúde precisa compor uma Comissão Intergestores Bipartite para negociar pactuações. Para que as decisões dessa comissão reflitam corretamente a representação dos entes federados e do controle social, qual procedimento deve ser observado na sua formação e funcionamento?",
    "alternatives": [
      "Garantir que as delegações municipais e estaduais sejam formalizadas por ato administrativo e que haja participação do controle social nas instâncias deliberativas conforme regulação local.",
      "Constituir a comissão apenas com representantes estaduais para maior celeridade nas decisões.",
      "Permitir que apenas técnicos das secretarias participem e proíbem representantes sociais para evitar conflitos políticos.",
      "Estabelecer composição informal baseada em líderes espontâneos da sociedade civil sem formal ato algum.",
      "Substituir as reuniões presenciais por votações eletrônicas sem critérios de representação para ampliar participação."
    ],
    "correctIndex": 0,
    "explanation": "A resposta correta é garantir formalização por ato administrativo e participação do controle social. Constituir apenas representantes estaduais ou técnicos exclui municípios e controle social; composição informal sem formalidade compromete legitimidade; votações eletrônicas sem critérios de representação não asseguram legitimidade e representatividade."
  },
  {
    "id": "sus-14",
    "subjectId": "sus",
    "topicId": "sus-organizacao",
    "statement": "Ao revisar contratos e instrumentos de gestão compartilhada, a secretaria de saúde detecta divergência entre o que foi pactuado regionalmente e como os recursos estão sendo aplicados. Qual é a medida administrativa compatível com a governança do SUS para corrigir essa discrepância?",
    "alternatives": [
      "Instaurar mecanismo de monitoramento conjunto regional, com indicadores de desempenho e reuniões periódicas para ajustar execução e responsabilidades financeiras.",
      "Impor unilateralmente novas regras de aplicação de recursos sem consultar os demais gestores envolvidos na pactuação regional.",
      "Suspender imediatamente todos os repasses financeiros até que haja concordância unânime entre os gestores.",
      "Transferir a gestão do serviço à iniciativa privada para padronizar a aplicação dos recursos.",
      "Modificar os instrumentos de gestão de forma retroativa para validar as aplicações já realizadas."
    ],
    "correctIndex": 0,
    "explanation": "Medida adequada é instaurar monitoramento conjunto com indicadores e revisão periódica. Unilateralidade fere pactuação; suspender repasses sem negociação prejudica serviços; transferência à iniciativa privada não resolve governança intergestores; alterações retroativas dos instrumentos podem violar normas e transparência."
  },
  {
    "id": "sus-15",
    "subjectId": "sus",
    "topicId": "sus-participacao",
    "statement": "Uma comissão de usuários quer fiscalizar a execução de uma política de humanização em hospitais locais. Para exercer controle social com efetividade, qual abordagem é mais indicada pelos princípios de participação previstos nas normas de saúde?",
    "alternatives": [
      "Realizar visitas sistemáticas com checklists participativos, registrar achados em relatórios públicos e encaminhar recomendações ao Conselho e à gestão.",
      "Publicar críticas anônimas nas redes sociais sem comunicar formalmente os achados aos órgãos competentes.",
      "Exigir que a gestão implemente todas as mudanças solicitadas pelos usuários em prazo curto sem processo de negociação técnica.",
      "Limitar a fiscalização a reuniões internas da comissão sem comunicar a população sobre os resultados.",
      "Aprovar externamente práticas de cuidados sem consultar profissionais e gestores, apenas com base em percepção pessoal."
    ],
    "correctIndex": 0,
    "explanation": "A abordagem adequada envolve visitas com instrumentos participativos, relatório público e encaminhamento formal. Críticas anônimas e ações sem processo de negociação reduzem eficácia; limitar a fiscalização a reuniões internas restringe transparência; aprovar mudanças sem diálogo técnico pode ser inaplicável e descumprir procedimentos."
  },
  {
    "id": "sus-16",
    "subjectId": "sus",
    "topicId": "sus-marcos",
    "statement": "Um gestor local pretende reorganizar a atenção primária com base em princípios constitucionais e na Lei que rege o SUS. Ao justificar a iniciativa, qual princípio constitucional deve ser destacado como fundamento da universalidade e da responsabilidade do Estado no campo da saúde?",
    "alternatives": [
      "A ideia de que a saúde é um bem de mercado e dependerá da capacidade financeira de cada indivíduo.",
      "A afirmação de que o Estado tem função apenas supletiva, devendo priorizar outros setores antes da saúde.",
      "O princípio de que a saúde é direito de todos e dever do Estado, garantindo acesso universal e igualitário às ações e serviços.",
      "A noção de que somente o setor privado deve prover serviços de saúde, com participação estatal mínima.",
      "A visão de que a oferta de serviços deve ser determinada exclusivamente por critérios locais sem base em normas federais."
    ],
    "correctIndex": 2,
    "explanation": "O princípio constitucional central é que saúde é direito de todos e dever do Estado, com acesso universal e igualitário. As alternativas que tratam saúde como mercadoria, função estatal supletiva, provisão exclusiva do setor privado ou autonomia local sem base normativa não refletem o marco constitucional do SUS."
  },
  {
    "id": "sus-17",
    "subjectId": "sus",
    "topicId": "sus-marcos",
    "statement": "Ao planejar ações de fortalecimento da Política Nacional de Humanização em uma rede hospitalar, a coordenação regional considera os marcos normativos do SUS. Qual estratégia operacional está mais alinhada com os objetivos dessa política?",
    "alternatives": [
      "Implementar protocolos centrados exclusivamente em procedimentos clínicos, sem envolver pacientes e trabalhadores em sua elaboração.",
      "Promover espaços de escuta, potencializar acolhimento e formação de equipes para formas de trabalho que valorizem o vínculo entre usuários e profissionais.",
      "Adotar indicadores de produtividade estritos como principal medida de avaliação do sucesso da humanização.",
      "Priorizar apenas ações de infraestrutura física, sem mudança nas rotinas de trabalho e nas relações de cuidado.",
      "Substituir debates interprofissionais por decisões administrativas centralizadas para acelerar mudanças."
    ],
    "correctIndex": 1,
    "explanation": "A política de humanização enfatiza escuta, acolhimento e valorização do vínculo e das relações de trabalho. Protocolos sem participação, foco exclusivo em produtividade, só infraestrutura ou decisões centralizadas conflitam com os princípios de humanização."
  },
  {
    "id": "sus-18",
    "subjectId": "sus",
    "topicId": "sus-marcos",
    "statement": "Em face de um surto ocupacional em uma fábrica local, o serviço de vigilância em saúde do trabalhador precisa articular resposta com base na Política Nacional de Saúde do Trabalhador e da Trabalhadora. Qual ação demonstra melhor integração entre atenção, vigilância e gestão regional?",
    "alternatives": [
      "Notificar os casos à vigilância, elaborar linha de cuidado envolvendo APS, serviços especializados e ações de prevenção articuladas com os municípios e o estado.",
      "Aguardar que a empresa resolva internamente a situação sem informar os serviços de saúde para evitar conflitos trabalhistas.",
      "Atuar apenas na esfera ocupacional da fábrica, sem articular com a rede de atenção à saúde local.",
      "Encaminhar todos os trabalhadores afetados diretamente para o nível federal, sem utilização da rede regional.",
      "Divulgar apenas comunicados gerais de prevenção na mídia sem realizar ações de vigilância ativa."
    ],
    "correctIndex": 0,
    "explanation": "A resposta correta é notificar e articular linha de cuidado entre APS, serviços especializados e prevenção regional. Aguardar empresa, atuar isoladamente, encaminhar ao nível federal ou apenas comunicar sem vigilância ativa não promovem integração necessária entre atenção e vigilância."
  },
  {
    "id": "sus-19",
    "subjectId": "sus",
    "topicId": "sus-marcos",
    "statement": "Ao avaliar a implementação de uma Política Nacional voltada ao trabalhador, a equipe gestora quer assegurar mecanismos de responsabilização e financiamento permanente. Qual prática está em consonância com as diretrizes do SUS para garantir sustentabilidade dessas ações?",
    "alternatives": [
      "Estabelecer financiamento compartilhado entre os níveis de governo e incorporar ações nos instrumentos de planejamento regional e municipal, com monitoramento de resultados.",
      "Depender exclusivamente de projetos temporários financiados por emendas e parcerias sem integração ao planejamento público.",
      "Financiar as ações apenas com recursos extraordinários da secretaria municipal, sem previsão de continuidade orçamentária.",
      "Encaminhar a responsabilidade financeira integral para as empresas privadas sem contrapartida ou regulação pública.",
      "Adotar financiamento unicamente por doações de organizações não governamentais para reduzir custo público."
    ],
    "correctIndex": 0,
    "explanation": "A prática alinhada ao SUS é financiamento compartilhado e incorporação aos instrumentos de planejamento com monitoramento. Depender de projetos temporários, recursos extraordinários, transferir custo integral às empresas ou depender de doações não garantem sustentabilidade, responsabilização ou integração à gestão pública."
  },
  {
    "id": "sus-20",
    "subjectId": "sus",
    "topicId": "sus-marcos",
    "statement": "Um gestor cita as Leis que regulamentam o SUS ao defender redistribuição de recursos entre regiões para reduzir desigualdades. Observando os princípios estabelecidos pelo marco legal e constitucional, qual argumento jurídico-político sustenta essa redistribuição?",
    "alternatives": [
      "A necessidade de promover equidade no acesso, alocando recursos conforme necessidades epidemiológicas e condições socioeconômicas das populações.",
      "A distribuição igualitária de recursos por pessoa de forma uniforme entre todas as regiões, independentemente de suas necessidades.",
      "A obrigação de priorizar sempre as regiões mais próximas ao centro administrativo, por motivos de eficiência logística.",
      "A liberdade de cada gestor aplicar os recursos apenas onde houver maior retorno político, sem considerar critérios técnicos.",
      "A imposição de que recursos destinados à saúde sejam exclusivamente geridos pelo nível federal, sem participação de estados e municípios."
    ],
    "correctIndex": 0,
    "explanation": "O fundamento para redistribuição é a busca por equidade, alocando recursos conforme necessidades e desigualdades regionais. Distribuição uniforme por pessoa não atende desigualdades; priorizar proximidade administrativa, retorno político ou centralização exclusiva federal conflitam com o princípio da divisão de responsabilidades e equidade do SUS."
  }
] as Question[];
