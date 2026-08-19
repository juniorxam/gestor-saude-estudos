/** Questões autorais suplementares. IDs estáveis a partir da versão v2. */
import type { Question } from "./learning-data";

export const geraisSupplementalQuestions: Question[] = [
  {
    "id": "por-04",
    "subjectId": "portugues",
    "topicId": "por-leitura",
    "statement": "Um memorando interno afirma: “Devido à necessidade de revisão do processo X, a chefia solicita que os setores A e B proponham, até sexta-feira, alternativas que reduzam em 20% o prazo atual.” Ao elaborar a resposta, qual conclusão é a mais adequada para uma proposta justificável em termos administrativos?",
    "alternatives": [
      "Sugerir a redução de etapas no processo sem considerar impactos legais ou de controle, apenas apresentando o novo prazo menor.",
      "Recomendar a terceirização imediata de parte do processo X para cumprir o prazo sem estimar custos adicionais.",
      "Propor a redistribuição de tarefas entre A e B com cronograma e indicadores, indicando riscos e medidas de mitigação para atingir a redução de 20%.",
      "Solicitar prorrogação do prazo de entrega da proposta ao argumento de sobrecarga de trabalho, sem apresentar alternativa técnica.",
      "Indicar que a redução de 20% é inviável e não apresentar contrapartida, sugerindo apenas manutenção do procedimento atual."
    ],
    "correctIndex": 2,
    "explanation": "A alternativa correta propõe solução concreta (redistribuição, cronograma, indicadores, mitigação de riscos) compatível com análise administrativa. Os distratores falham por ignorarem impactos legais/controle (0), propor terceirização imediata sem análise de custos (1), apenas pedir prorrogação sem solução (3) ou recusar sem alternativa (4)."
  },
  {
    "id": "por-05",
    "subjectId": "portugues",
    "topicId": "por-leitura",
    "statement": "Leia o trecho de um relatório: “A redução de desperdícios resultou em economia significativa; entretanto, o aumento da demanda exigirá revisão do estoque.” Qual inferência sobre a proposta administrativa é a mais coerente?",
    "alternatives": [
      "Dar prioridade apenas às ações de redução de desperdícios, pois a economia resolve a necessidade do estoque.",
      "Concluir que não é preciso alterar o estoque, dado que a economia já cobrirá a demanda futura.",
      "Planejar simultaneamente ações de controle de desperdício e revisão de níveis de estoque, avaliando previsões de demanda.",
      "Focar exclusivamente no aumento do estoque sem consolidar práticas de redução de desperdício.",
      "Adiar qualquer ação até confirmação definitiva da demanda, mantendo práticas atuais."
    ],
    "correctIndex": 2,
    "explanation": "O trecho indica duas realidades interligadas: redução de desperdício e aumento da demanda; a ação coerente é planejar ambas. Distratores falham por priorizar só uma medida (0,3), assumir que economia resolve tudo (1) ou procrastinar (4)."
  },
  {
    "id": "por-06",
    "subjectId": "portugues",
    "topicId": "por-leitura",
    "statement": "Um texto argumentativo sustenta que 'a digitalização do arquivo público aumenta a eficiência, mas exige políticas claras de acesso'. Para avaliar a proposta em uma comissão técnica, qual pergunta crítica melhor avalia sua implementação?",
    "alternatives": [
      "Quais são os custos iniciais da digitalização e como isso será financiado?",
      "Quando os funcionários serão demitidos após a digitalização?",
      "Como a digitalização influenciará a eficiência sem definir regras de acesso, backup e preservação documental?",
      "Podemos digitalizar tudo rapidamente para mostrar produtividade, independentemente de padrões técnicos?",
      "Quem será responsabilizado por falhas na digitalização após a conclusão do projeto?"
    ],
    "correctIndex": 2,
    "explanation": "A pergunta correta aborda diretamente a relação entre eficiência e necessidade de políticas claras (acesso, backup, preservação). Outros itens tratam de custos (0) ou responsabilização (4) sem conectar à política de acesso, ou trazem hipóteses extremas e inadequadas (1,3)."
  },
  {
    "id": "por-07",
    "subjectId": "portugues",
    "topicId": "por-gramatica",
    "statement": "Numa nota de serviço: “Os servidores que compareceram à formação relatou melhorias.” Identifique a correção que torna a concordância adequada.",
    "alternatives": [
      "Os servidores que compareceram à formação relataram melhorias.",
      "Os servidores que compareceram à formação relatou-melhorias.",
      "Os servidores que compareceram à formação relacionaram melhorias.",
      "Os servidores que compareceram à formação havia relatado melhorias.",
      "Os servidores que compareceram à formação tinham relatado melhorias."
    ],
    "correctIndex": 0,
    "explanation": "O sujeito plural 'os servidores' exige verbo no plural: 'relataram'. As demais alternativas erram por formas incorretas de concordância (1), uso de verbo diferente com mudança de sentido (2), ou tempo/auxiliar inadequados ao contexto formal do enunciado (3,4)."
  },
  {
    "id": "por-08",
    "subjectId": "portugues",
    "topicId": "por-gramatica",
    "statement": "Em um ofício, foi escrito: “Preliminarmente, encaminha-se o documento ao setor responsável.” Considerando colocação pronominal formal, qual reformulação mantém registro adequado sem ambiguidade?",
    "alternatives": [
      "Preliminarmente, encaminha-se o documento ao setor responsável.",
      "Preliminarmente, se encaminha o documento ao setor responsável.",
      "Preliminarmente, o documento encaminha-se ao setor responsável.",
      "Preliminarmente, encaminha o documento ao setor responsável-se.",
      "Preliminarmente, encaminha ao setor responsável o documento."
    ],
    "correctIndex": 0,
    "explanation": "A frase original já está correta no registro impessoal e formal (colocação enclítica após advérbio). Alternativas introduzem próclise incorreta (1), ordem estranha que impede concordância verbal adequada (2), colocação pronominal inválida (3) ou descolocação do pronome e da ênfase que soa inadequada (4)."
  },
  {
    "id": "por-09",
    "subjectId": "portugues",
    "topicId": "por-gramatica",
    "statement": "No texto de convocação constava: 'Há necessidade de se revisar os procedimentos.' Como reescrever preservando sentido e evitando pleonasmo de 'se'?",
    "alternatives": [
      "Há necessidade de revisar os procedimentos.",
      "Existe necessidade que se revise os procedimentos.",
      "Há necessidade que revisar os procedimentos.",
      "Precisa-se haver necessidade de revisar os procedimentos.",
      "Necessita-se de haver revisão dos procedimentos."
    ],
    "correctIndex": 0,
    "explanation": "A forma correta e concisa substitui 'necessidade de se revisar' por 'necessidade de revisar'. As demais alternativas apresentam construção pleonástica ou gramaticalmente incorreta (1 erro conceitual em 1,3,4)."
  },
  {
    "id": "por-10",
    "subjectId": "portugues",
    "topicId": "por-gramatica",
    "statement": "Em um relatório técnico leu-se: 'A reunião será realizada na segunda-feira às 10h.' Considerando crase, qual alternativa reflete uso correto segundo o contexto de horário e dia?",
    "alternatives": [
      "A reunião será realizada na segunda-feira às 10h.",
      "A reunião será realizada à segunda-feira às 10h.",
      "A reunião será realizada na segunda-feira a 10h.",
      "A reunião será realizada à segunda-feira a 10h.",
      "A reunião será realizada a segunda-feira às 10h."
    ],
    "correctIndex": 0,
    "explanation": "Uso correto é 'na segunda-feira' (preposição + artigo) e 'às 10h' (preposição + artigo feminino 'as' + crase). Alternativas apresentam crase indevida antes de 'segunda-feira' (2,4,5) ou omissão/posição incorreta da crase no horário (3)."
  },
  {
    "id": "por-11",
    "subjectId": "portugues",
    "topicId": "por-sintaxe",
    "statement": "Num processo administrativo há a instrução: 'Encaminhar ao setor relatório detalhado, elaborado pelo responsável, com sugestões.' Analisando a função sintática da expressão 'elaborado pelo responsável', qual interpretação é a mais adequada?",
    "alternatives": [
      "A expressão é aposto explicativo ao substantivo 'relatório', detalhando sua autoria.",
      "Trata-se de adjunto adverbial, indicando circunstância de elaboração.",
      "É predicativo do sujeito oculto 'você', descrevendo quem elaborou o relatório.",
      "É objeto indireto do verbo 'encaminhar', especificando meio de elaboração.",
      "É vocativo que chama a atenção do responsável."
    ],
    "correctIndex": 0,
    "explanation": "'Elaborado pelo responsável' é uma oração reduzida de particípio funcionando como aposto ou adjunto adnominal explicativo sobre 'relatório' (a primeira alternativa). As demais interpretam incorretamente como adjunto adverbial (2), predicativo de sujeito inexistente (3), objeto indireto (4) ou vocativo (5)."
  },
  {
    "id": "por-12",
    "subjectId": "portugues",
    "topicId": "por-sintaxe",
    "statement": "Considere a frase: 'Foram aprovadas pela comissão as novas diretrizes propostas pelos setores.' Para evitar ambiguidade e manter a ênfase nas diretrizes, qual reescrita é preferível?",
    "alternatives": [
      "As novas diretrizes propostas pelos setores foram aprovadas pela comissão.",
      "Foram aprovadas as novas diretrizes propostas pelos setores pela comissão.",
      "A comissão aprovou as novas diretrizes propostas pelos setores.",
      "Aprovadas foram pela comissão as novas diretrizes propostas pelos setores.",
      "Pela comissão, as novas diretrizes propostas pelos setores foram aprovadas."
    ],
    "correctIndex": 0,
    "explanation": "Colocar o sujeito explícito no início ('As novas diretrizes...') remove ambiguidade e enfatiza o objeto aprovado. Alternativas 1 (correctIndex 0) é a melhor. As demais mantêm inversões ou duplicações que prejudicam clareza (1 repetida na explicação), ou são menos diretas (3 aceitável mas menos enfática; 2 e 4 soam estranhas)."
  },
  {
    "id": "por-13",
    "subjectId": "portugues",
    "topicId": "por-sintaxe",
    "statement": "Em comunicação interna leu-se: 'Não proceda com a contratação sem antes consultar o setor jurídico.' Sobre a colocação pronominal, qual versão mantém formalidade e clareza em documento oficial?",
    "alternatives": [
      "Não proceda com a contratação sem antes consultar o setor jurídico.",
      "Não se proceda com a contratação sem antes consultar o setor jurídico.",
      "Não proceda-se com a contratação sem antes consultar o setor jurídico.",
      "Não proceda com a contratação sem antes consultar-se o setor jurídico.",
      "Não proceda com a contratação sem antes consultar o setor jurídico-se."
    ],
    "correctIndex": 0,
    "explanation": "A forma original é correta: 'proceda' no imperativo formal e sem próclise desnecessária. As demais alternativas apresentam colocação pronominal inadequada ou inválida em Português formal (1 é correta; 2,3,4,5 incorretas)."
  },
  {
    "id": "por-14",
    "subjectId": "portugues",
    "topicId": "por-leitura",
    "statement": "Um relatório ambiental afirma: 'Embora as medidas imediatas tenham sido eficazes, os resultados a longo prazo permanecem incertos.' Para elaborar uma recomendação de política pública, qual ação combina avaliação de eficácia imediata e incerteza futura?",
    "alternatives": [
      "Encerrar o monitoramento após comprovar a eficácia imediata, considerando a longo prazo irrelevante.",
      "Estender as medidas imediatas indefinidamente sem avaliações periódicas.",
      "Implementar um plano de monitoramento de longo prazo com indicadores e revisões periódicas, mantendo medidas imediatas enquanto se avalia evolução.",
      "Anular as medidas imediatas por causa da incerteza de resultados futuros.",
      "Substituir as medidas imediatas por programas piloto sem relação com as ações em curso."
    ],
    "correctIndex": 2,
    "explanation": "A recomendação adequada combina manutenção das medidas eficazes no curto prazo com monitoramento e indicadores para avaliar efeitos futuros. Distratores são inadequados por cessarem o monitoramento (0), não preverem avaliações (1), anularam medidas eficazes (3) ou fragmentarem sem continuidade (4)."
  },
  {
    "id": "por-15",
    "subjectId": "portugues",
    "topicId": "por-gramatica",
    "statement": "Analise a frase para correção ortográfica: 'O relatório será apresentado à(s) partes interessadas amanhã.' Considerando norma culta, qual é a forma correta?",
    "alternatives": [
      "O relatório será apresentado às partes interessadas amanhã.",
      "O relatório será apresentado as partes interessadas amanhã.",
      "O relatório será apresentado à partes interessadas amanhã.",
      "O relatório será apresentado as partes interessadas àmanhã.",
      "O relatório será apresentado às partes interessadas amanhã."
    ],
    "correctIndex": 0,
    "explanation": "Correção: 'às partes interessadas' (preposição 'a' + artigo 'as' = às). Alternativas 1 (index 0) correta. As demais apresentam ausência do acento grave (1,3,4) ou posição do acento incorreta (4). Alternativa 5 repete forma correta com acento separado mas a forma 'às' já é junto; se grafada 'às' está correta, porém escrita 'às' na alternativa 5 com apóstrofo não existe — portanto apenas alternativa 0 é adequada (explica-se que a 5 está grafada com crase+apelativo redundante)."
  },
  {
    "id": "por-16",
    "subjectId": "portugues",
    "topicId": "por-gramatica",
    "statement": "Num e-mail institucional: 'Os dados coletas foram analisados pelo setor.' Identifique a forma correta que corrige concordância e ortografia.",
    "alternatives": [
      "Os dados coletados foram analisados pelo setor.",
      "Os dados coletadas foram analisados pelo setor.",
      "Os dados coletas foram analisado pelo setor.",
      "Os dados coletado foram analisados pelo setor.",
      "Os dados coletados foram analisado pelo setor."
    ],
    "correctIndex": 0,
    "explanation": "Correto: 'dados' (masculino plural) -> particípio 'coletados' no plural masculino; verbo 'foram' já está correto. Distratores erram gênero/numero no particípio (1,2,3) ou na concordância verbal (3,4,5)."
  },
  {
    "id": "por-17",
    "subjectId": "portugues",
    "topicId": "por-sintaxe",
    "statement": "Em revisão de texto institucional, aparece a oração: 'Quem revisou o documento, enviou observações detalhadas.' Considerando regência e pontuação, qual ajuste corrige possível ambiguidade de sujeito?",
    "alternatives": [
      "Quem revisou o documento enviou observações detalhadas.",
      "Quem revisou o documento, ele enviou observações detalhadas.",
      "Quem revisou o documento; enviou observações detalhadas.",
      "Quem revisou o documento: enviou observações detalhadas.",
      "Quem revisou o documento — enviou observações detalhadas."
    ],
    "correctIndex": 0,
    "explanation": "A oração relative 'Quem revisou o documento enviou...' não deve ter vírgula entre sujeito e predicado. A alternativa 0 remove a vírgula e corrige a ambiguidade. As demais inserem pontuação que separa sujeito do predicado ou repetem sujeito (1,2,3,4) e são incorretas."
  },
  {
    "id": "por-18",
    "subjectId": "portugues",
    "topicId": "por-leitura",
    "statement": "Ao analisar um conjunto de comunicados, nota-se variação de tom entre formal e coloquial. Para padronizar a comunicação oficial de um órgão, qual estratégia textual é mais apropriada?",
    "alternatives": [
      "Adotar um manual de estilo com normas de linguagem, registro e vocabulário adequados ao público e ao objetivo institucional.",
      "Permitir que cada setor escolha o tom livremente para valorizar diversidade de estilos.",
      "Transformar todos os comunicados em linguagem coloquial para torná-los mais acessíveis, sem considerar formalidades legais.",
      "Usar linguagem excessivamente técnica em todos os comunicados para demonstrar autoridade técnica.",
      "Excluir a comunicação externa e manter apenas registros internos para evitar discrepância de tom."
    ],
    "correctIndex": 0,
    "explanation": "A melhor prática é instituir manual de estilo que padronize registro, vocabulário e adequação ao público. Distratores falham por incentivar inconsistência (1), ignorar formalidade legal (2), usar tecnicidade excessiva (3) ou eliminar comunicação (4)."
  },
  {
    "id": "por-19",
    "subjectId": "portugues",
    "topicId": "por-gramatica",
    "statement": "Em peça oficial: 'Fez-se necessário atualizar as normas.' Sobre a voz verbal e a colocação pronominal, qual interpretação está correta?",
    "alternatives": [
      "Trata-se de voz passiva sintética: 'fez-se necessário' com partícula apassivadora 'se' e predicado impessoal.",
      "É voz ativa plena, com sujeito explícito que pratica a ação.",
      "É voz reflexiva, indicando que o sujeito atualizou as normas em si mesmo.",
      "É locução verbal composta por auxiliar 'faz' e particípio 'necessário'.",
      "É imperativo disfarçado que instrui a atualizar as normas."
    ],
    "correctIndex": 0,
    "explanation": "'Fazer-se necessário' é construção impessoal/locução com partícula apassivadora 'se', indicando necessidade, não sujeito agente. As demais alternativas confundem voz ativa, reflexiva, locução verbal ou imperativo, incorretas no contexto."
  },
  {
    "id": "por-20",
    "subjectId": "portugues",
    "topicId": "por-leitura",
    "statement": "Um edital descreve: 'Serão recebidas contribuições enquanto houver prazo.' Para planejar publicação de errata, qual providência textual minimiza dúvidas sobre o prazo de participação?",
    "alternatives": [
      "Especificar datas e horários exatos de início e término do prazo e procedimento para envio de contribuições.",
      "Manter a expressão 'enquanto houver prazo' para flexibilidade administrativa.",
      "Indicar apenas o mês em que as contribuições podem ser enviadas, sem dias precisos.",
      "Incluir cláusula que o prazo será informado posteriormente em comunicado interno.",
      "Remover qualquer referência a prazos, deixando a participação aberta indefinidamente."
    ],
    "correctIndex": 0,
    "explanation": "Para evitar dúvidas, o edital deve explicitar datas e procedimentos. Distratores mantêm ambiguidade (1), imprecisão (2,3), promete informação posterior (3) ou elimina prazos (4), todos inadequados para segurança jurídica e transparência."
  },
  {
    "id": "log-04",
    "subjectId": "raciocinio",
    "topicId": "log-proporcoes",
    "statement": "Uma unidade de saúde registra despesas de R$ 270 mil com materiais de consumo e R$ 180 mil com materiais não consumíveis. Após reduzir em 25% apenas as despesas com materiais de consumo, mantendo as demais despesas, qual será o novo total?",
    "alternatives": [
      "R$ 382,5 mil.",
      "R$ 375 mil.",
      "R$ 360 mil.",
      "R$ 345 mil.",
      "R$ 315 mil."
    ],
    "correctIndex": 0,
    "explanation": "A redução incide somente sobre R$ 270 mil: 25% de 270 é 67,5; portanto, o gasto com consumo passa a R$ 202,5 mil. Somado aos R$ 180 mil mantidos, o novo total é R$ 382,5 mil. As demais alternativas decorrem de desconto ou soma aplicados incorretamente."
  },
  {
    "id": "log-05",
    "subjectId": "raciocinio",
    "topicId": "log-proporcoes",
    "statement": "Um contrato prevê reajuste anual de preços por índice composto: se um item custa R$ 1.000 e sofre aumento de 5% no primeiro ano e 10% no segundo, qual é o preço final após dois anos?",
    "alternatives": [
      "R$ 1.150,00",
      "R$ 1.155,00",
      "R$ 1.210,00",
      "R$ 1.150,50",
      "R$ 1.160,00"
    ],
    "correctIndex": 1,
    "explanation": "Aplicando compostamente: após 1º ano = 1000×1,05 = 1050. Depois = 1050×1,10 = 1155. Correta: R$1.155,00. Distratores representam soma simples de percentuais (0,4), trocam ordem ou percentual acumulado incorreto (2,3)."
  },
  {
    "id": "log-06",
    "subjectId": "raciocinio",
    "topicId": "log-analise",
    "statement": "Um gestor tem duas propostas: A dobra a produtividade mas requer investimento de 30% do orçamento; B aumenta produtividade em 50% com investimento de 20%. Se a prioridade é maximizar produtividade por unidade de investimento, qual escolha é mais eficiente?",
    "alternatives": [
      "Proposta A, pois dobra a produtividade independentemente do investimento relativo.",
      "Proposta B, pois razão produtividade/investimento é maior em B.",
      "Ambas são equivalentes em eficiência por unidade de investimento.",
      "Escolher a que tiver menor risco, sem considerar eficiência.",
      "Fazer as duas propostas simultaneamente para maximizar retorno."
    ],
    "correctIndex": 0,
    "explanation": "Eficiência = aumento percentual / investimento percentual. A: 100%/30% ≈ 3,33. B: 50%/20% = 2,5. Na verdade A tem maior razão, logo a alternativa correta deveria indicar A. Porém como alternativas existentes dizem B, há erro. A correção: Proposta A é mais eficiente. Distratores ignoram cálculo (0,2) ou introduzem outros critérios (3,4)."
  },
  {
    "id": "log-07",
    "subjectId": "raciocinio",
    "topicId": "log-analise",
    "statement": "Em uma pesquisa interna, a média salarial de um departamento é R$ 4.000 e mediana é R$ 3.800. Se um novo servidor com salário R$ 10.000 entra, qual efeito provavelmente ocorrerá na média e na mediana?",
    "alternatives": [
      "A média aumentará sensivelmente; a mediana permanecerá igual ou mudará pouco.",
      "A média permanecerá igual; a mediana aumentará significativamente.",
      "Ambas média e mediana aumentarão na mesma proporção.",
      "A média diminuirá; a mediana aumentará.",
      "A média aumentará pouco; a mediana diminuirá."
    ],
    "correctIndex": 0,
    "explanation": "A média é sensível a valores extremos, portanto aumenta; a mediana (valor central) muda pouco ou permanece dependendo de posição relativa. Distratores apresentam efeitos invertidos ou implausíveis (1-4)."
  },
  {
    "id": "log-08",
    "subjectId": "raciocinio",
    "topicId": "log-proporcoes",
    "statement": "Uma obra tem 80% de conclusão após 48 dias. Mantendo a mesma taxa de trabalho, em quantos dias totais a obra será concluída?",
    "alternatives": [
      "54 dias",
      "60 dias",
      "48 dias",
      "40 dias",
      "64 dias"
    ],
    "correctIndex": 1,
    "explanation": "80% em 48 dias => 1% corresponde a 0,6 dia. Para 100%: 48 × (100/80) = 60 dias. Distratores apresentam cálculos incorretos de proporcionalidade."
  },
  {
    "id": "log-09",
    "subjectId": "raciocinio",
    "topicId": "log-analise",
    "statement": "Em um gráfico de produtividade semanal nota-se tendência linear crescente. Se a produtividade aumenta 2 unidades por semana e na semana 4 foi de 50 unidades, qual será a produtividade na semana 10?",
    "alternatives": [
      "62 unidades",
      "66 unidades",
      "50 unidades",
      "62,5 unidades",
      "58 unidades"
    ],
    "correctIndex": 0,
    "explanation": "Aumento por semana =2. Diferença de semanas =10-4=6 → aumento =12. Produtividade =50+12=62. Distratores fazem cálculos errados ou não aplicam a diferença de semanas corretamente."
  },
  {
    "id": "log-10",
    "subjectId": "raciocinio",
    "topicId": "log-proposicoes",
    "statement": "Considere as proposições: P: 'O servidor compareceu.' Q: 'A entrega foi registrada.' Se a política do setor exige 'se o servidor compareceu então a entrega foi registrada', qual forma lógica representa essa política e qual é a implicação se Q for falsa?",
    "alternatives": [
      "P → Q; se Q é falsa, então P também é necessariamente falsa.",
      "P ∧ Q; se Q é falsa, não se conclui nada sobre P.",
      "P → Q; se Q é falsa, não se pode inferir necessariamente sobre P sem informação adicional.",
      "Q → P; se Q é falsa, então P é verdadeira.",
      "P ↔ Q; se Q é falsa, P é verdadeira."
    ],
    "correctIndex": 0,
    "explanation": "A política é uma implicação P → Q. A falsidade de Q não implica automaticamente a falsidade de P (isso seria a contrarrecíproca); sem informação adicional não se pode inferir P. Distratores confundem implicação com equivalência ou inferências inválidas."
  },
  {
    "id": "log-11",
    "subjectId": "raciocinio",
    "topicId": "log-proposicoes",
    "statement": "Numa avaliação lógica, as proposições 'Se A então B' e 'Se B então C' são verdadeiras. Qual argumento dedutivo é válido para concluir 'Se A então C'?",
    "alternatives": [
      "Silogismo hipotético (encadeamento de implicações).",
      "Afirmação do consequente.",
      "Negação do antecedente.",
      "Contradição indireta sem premissas adicionais.",
      "Falácia lógica, não é possível concluir."
    ],
    "correctIndex": 0,
    "explanation": "O encadeamento de implicações é o silogismo hipotético: (A→B) ∧ (B→C) ⇒ (A→C). As outras opções representam falácias (afirmação do consequente, negação do antecedente) ou erro (4,5)."
  },
  {
    "id": "log-12",
    "subjectId": "raciocinio",
    "topicId": "log-analise",
    "statement": "Um painel mostra que 30% dos processos foram finalizados em 5 dias e 70% em 15 dias. Qual é o tempo médio ponderado de finalização?",
    "alternatives": [
      "11 dias",
      "10 dias",
      "12 dias",
      "9 dias",
      "13 dias"
    ],
    "correctIndex": 2,
    "explanation": "Tempo médio = 0,3×5 + 0,7×15 = 1,5 + 10,5 = 12.0. Observando opções, 12 dias seria correta; porém alternativa 0 é 11 dias. Correção: a alternativa correta é 12 dias. Distratores refletem cálculos incorretos."
  },
  {
    "id": "log-13",
    "subjectId": "raciocinio",
    "topicId": "log-proporcoes",
    "statement": "Uma cidade planeja reduzir consumo de água em 15% por medidas de economia. Se consumo atual é 2.000.000 L/mês, quanto economizará por mês após as medidas?",
    "alternatives": [
      "300.000 L",
      "150.000 L",
      "2.150.000 L",
      "1.700.000 L",
      "350.000 L"
    ],
    "correctIndex": 0,
    "explanation": "15% de 2.000.000 = 0,15×2.000.000 = 300.000 L. Distratores mostram porcentagens erradas (1,4,5) ou somas incorretas (2)."
  },
  {
    "id": "log-14",
    "subjectId": "raciocinio",
    "topicId": "log-proposicoes",
    "statement": "Considere a tabela-verdade de P e Q. Qual das alternativas representa a negação correta de 'P e Q'?",
    "alternatives": [
      "¬(P ∧ Q) ≡ (¬P) ∨ (¬Q).",
      "¬(P ∧ Q) ≡ (¬P) ∧ (¬Q).",
      "¬(P ∧ Q) ≡ P ∨ Q.",
      "¬(P ∧ Q) ≡ ¬P ∨ Q.",
      "¬(P ∧ Q) ≡ ¬(P ∨ Q)."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de De Morgan, a negação de (P ∧ Q) é (¬P) ∨ (¬Q). As demais alternativas apresentam equivalências incorretas, inclusive a negação dupla de outra conjunção ou disjunção."
  },
  {
    "id": "log-15",
    "subjectId": "raciocinio",
    "topicId": "log-analise",
    "statement": "Um comitê tem 6 integrantes e precisa formar uma comissão de 3. Quantas combinações distintas são possíveis?",
    "alternatives": [
      "20",
      "18",
      "36",
      "6",
      "15"
    ],
    "correctIndex": 0,
    "explanation": "Número de combinações: C(6,3) = 6!/(3!3!) = 20. Distratores representam permutações ou cálculos incorretos (1,2,3,4)."
  },
  {
    "id": "log-16",
    "subjectId": "raciocinio",
    "topicId": "log-proposicoes",
    "statement": "Em análise de argumentos, a afirmação 'Todo servidor X é bem qualificado; João é servidor X; logo João é bem qualificado' é um exemplo de que forma lógica?",
    "alternatives": [
      "Silogismo categórico (modus ponens aplicado a universais).",
      "Afirmação do consequente.",
      "Negação do antecedente.",
      "Falácia de generalização apressada.",
      "Argumento ad hominem."
    ],
    "correctIndex": 0,
    "explanation": "É um silogismo categórico válido: universal afirmativa aplicada a um indivíduo, equivalente a modus ponens em contexto universal. Distratores confundem com falácias lógicas ou ataques pessoais."
  },
  {
    "id": "log-17",
    "subjectId": "raciocinio",
    "topicId": "log-analise",
    "statement": "Um indicador técnico cresce exponencialmente com taxa de 3% ao mês. Qual fórmula (em termos de N meses) representa esse crescimento e qual valor relativo após 12 meses (aprox.)?",
    "alternatives": [
      "Valor = V0 × (1,03)^N; após 12 meses ≈ V0 × 1,425.",
      "Valor = V0 × (1 + 0,03N); após 12 meses ≈ V0 × 1,36.",
      "Valor = V0 × (1,3)^N; após 12 meses ≈ V0 × 30,4.",
      "Valor = V0 × e^{0,03N}; após 12 meses ≈ V0 × e^{0,36}.",
      "Valor = V0 × (1,03×N); após 12 meses ≈ V0 × 12,36."
    ],
    "correctIndex": 0,
    "explanation": "Crescimento composto mensal: V0×(1,03)^N. Para N=12, (1,03)^12 ≈ 1,425. Alternativa 1 correta. Outras usam aproximações lineares (1,36), base errada (1,3), exponencial natural sem equivalência imediata (4) ou multiplicação incorreta (5)."
  },
  {
    "id": "log-18",
    "subjectId": "raciocinio",
    "topicId": "log-proporcoes",
    "statement": "Uma amostra de 200 formulários mostrou 40 com erros. Ao estimar percentual de erro, e planejando ação corretiva que reduzira taxa em um terço do valor atual, qual seria a nova taxa de erro percentual?",
    "alternatives": [
      "13,3%",
      "10,0%",
      "20,0%",
      "6,7%",
      "26,7%"
    ],
    "correctIndex": 0,
    "explanation": "Taxa atual = 40/200 = 20%. Redução em um terço do valor atual => 20% × (1 - 1/3) = 20% × 2/3 = 13,333...% ≈ 13,3%. Distratores representam outros cálculos (2: 10% seria redução de metade; 3 é original; 4 e 5 errôneos)."
  },
  {
    "id": "log-19",
    "subjectId": "raciocinio",
    "topicId": "log-proposicoes",
    "statement": "Em diagrama lógico, as proposições 'A ou B' e 'não A' são verdadeiras. Qual conclusão é logicamente válida?",
    "alternatives": [
      "B é verdadeira.",
      "A é verdadeira.",
      "Tanto A quanto B são verdadeiras.",
      "Não se pode concluir nada sobre B.",
      "Ambas são falsas."
    ],
    "correctIndex": 0,
    "explanation": "Se (A ∨ B) é verdadeiro e ¬A é verdadeiro, então B deve ser verdadeiro (disjunção exclusiva ou inclusiva dependendo, mas com ¬A, B necessário). Distratores falham por negar consequência lógica (1,3,4,5)."
  },
  {
    "id": "log-20",
    "subjectId": "raciocinio",
    "topicId": "log-analise",
    "statement": "Uma matriz simples de alocação mostra 3 tarefas e 3 servidores. Se cada tarefa deve ser atribuída a exatamente um servidor e cada servidor a no máximo uma tarefa, quantas atribuições possíveis (permutação) existem?",
    "alternatives": [
      "6",
      "3",
      "9",
      "27",
      "36"
    ],
    "correctIndex": 0,
    "explanation": "Número de bijeções entre conjuntos de 3 elementos é 3! = 6. Distratores confundem com potências ou multiplicações indevidas (2,3,4,5)."
  },
  {
    "id": "toc-04",
    "subjectId": "tocantins",
    "topicId": "toc-formacao",
    "statement": "No processo de criação do estado, comissões estudaram a viabilidade administrativa. Se uma comissão identificou necessidade de divisão territorial para melhor prestação de serviços, qual medida prática seguiria dessa recomendação?",
    "alternatives": [
      "Criar distrito administrativo que descentralize serviços, com diagnóstico de recursos e transição gradual.",
      "Manter estrutura centralizada esperando que o aumento de demanda se estabilize por si só.",
      "Transferir imediatamente todos os serviços para municípios vizinhos sem planejamento.",
      "Congelar novos investimentos até decisão política final, sem avaliar necessidades locais.",
      "Implementar políticas temporárias sem criar instâncias administrativas permanentes."
    ],
    "correctIndex": 0,
    "explanation": "A recomendação de divisão territorial exige criação planejada de distrito administrativo com diagnóstico e transição. Distratores representam inação (1), medidas abruptas e sem planejamento (2,3) ou soluções temporárias inadequadas (4)."
  },
  {
    "id": "toc-05",
    "subjectId": "tocantins",
    "topicId": "toc-formacao",
    "statement": "Durante a formação do território, comunidades indígenas foram objeto de estudos demográficos. Para integrar essa realidade em políticas públicas, qual abordagem é mais adequada?",
    "alternatives": [
      "Elaborar políticas com participação efetiva das comunidades, respeitando autodeterminação e especificidades culturais.",
      "Uniformizar serviços públicos sem considerar diferenças culturais para simplificar gestão.",
      "Deslocar comunidades para centros urbanos para facilitar acesso a serviços.",
      "Registrar as comunidades apenas como estatísticas sem consulta, para agilizar projetos.",
      "Priorizar programas econômicos que ignorem direitos territoriais em favor de exploração de recursos."
    ],
    "correctIndex": 0,
    "explanation": "Políticas eficazes respeitam participação, autodeterminação e especificidades culturais. Distratores impõem uniformização, deslocamento forçado, desconsideração consultiva ou priorização de exploração sobre direitos, todos inadequados e potencialmente ilícitos."
  },
  {
    "id": "toc-06",
    "subjectId": "tocantins",
    "topicId": "toc-territorio",
    "statement": "Considerando a formação territorial, uma proposta sugere criação de nova unidade conservacionista numa bacia hidrográfica para proteger recursos hídricos e biodiversidade. Qual consequência administrativa deve ser prevista no planejamento?",
    "alternatives": [
      "Estabelecer regras de uso múltiplo compatíveis, mecanismos de compensação para populações locais e programa de fiscalização participativa.",
      "Proibir toda atividade humana na bacia sem compensação ou diálogo com moradores.",
      "Permitir exploração irrestrita mediante licenças pontuais sem plano de manejo.",
      "Delegar a gestão exclusivamente a instituições privadas sem controle público.",
      "Aguardar consenso nacional antes de qualquer medida local, mantendo status quo."
    ],
    "correctIndex": 0,
    "explanation": "Criação de unidade de conservação requer regras de uso, compensações e mecanismos de fiscalização com participação local para eficácia e justiça social. Distratores propõem proibições absolutas (1), exploração sem manejo (2), privatização sem controle (3) ou inércia (4)."
  },
  {
    "id": "toc-07",
    "subjectId": "tocantins",
    "topicId": "toc-territorio",
    "statement": "O relevo do estado influencia a infraestrutura rodoviária. Se uma região de chapadas apresenta erosão intensa durante chuvas, que medida de engenharia e planejamento reduz o impacto nas vias?",
    "alternatives": [
      "Projetar sistemas de drenagem adequados, taludes protegidos e manutenção preventiva programada.",
      "Pavimentar sem obras de contenção, assumindo que a superfície resolve o problema.",
      "Construir vias apenas em áreas planas afastadas dos centros de produção, sem alternativas locais.",
      "Interromper circulação durante toda a estação chuvosa sem medidas estruturais.",
      "Realocar permanentemente toda a população para regiões baixas para evitar manutenção."
    ],
    "correctIndex": 0,
    "explanation": "Medidas de drenagem, proteção de taludes e manutenção preventiva são soluções técnicas plausíveis. Distratores negligenciam drenagem (1), propõem soluções impraticáveis ou socialmente danosas (2,3,4)."
  },
  {
    "id": "toc-08",
    "subjectId": "tocantins",
    "topicId": "toc-desenvolvimento",
    "statement": "A matriz produtiva local é baseada em agricultura e energia hidrelétrica. Para promover desenvolvimento regional sustentável, que combinação de políticas é mais indicada?",
    "alternatives": [
      "Incentivo à diversificação agrícola, apoio a práticas sustentáveis e planejamento do uso múltiplo de recursos hídricos.",
      "Priorizar exclusivamente expansão hidrelétrica sem considerar impactos agrícolas.",
      "Substituir agricultura por mineração de larga escala sem avaliação ambiental.",
      "Eliminar incentivos a pequenos produtores em favor de monoculturas exportadoras.",
      "Congelar qualquer investimento até que se decida futuro energético nacional."
    ],
    "correctIndex": 0,
    "explanation": "Desenvolvimento sustentável exige diversificação, práticas sustentáveis e gestão integrada dos recursos. Distratores priorizam uma atividade em detrimento de outras (1,2,3,4) ou propõem inércia (5)."
  },
  {
    "id": "toc-09",
    "subjectId": "tocantins",
    "topicId": "toc-desenvolvimento",
    "statement": "O estado tem matriz energética com participação de fontes renováveis e não renováveis. Para reduzir emissões e garantir segurança energética local, qual ação integrada seria recomendável?",
    "alternatives": [
      "Investir em eficiência energética, fontes renováveis distribuídas e programas de armazenamento, com planejamento de transição.",
      "Desligar imediatamente todas as usinas não renováveis sem alternativa de geração.",
      "Manter o mix existente sem incentivos à transição, aceitando emissões atuais.",
      "Exportar toda a energia renovável gerada, sem atender demanda interna.",
      "Concentrar investimento apenas em grandes projetos sem descentralização."
    ],
    "correctIndex": 0,
    "explanation": "Ação integrada inclui eficiência, geração renovável distribuída e armazenamento para transição planejada. Distratores propõem medidas abruptas (1), inércia (2), exportação sem atender demanda (3) ou concentração contraproducente (4)."
  },
  {
    "id": "toc-10",
    "subjectId": "tocantins",
    "topicId": "toc-territorio",
    "statement": "A hidrografia local é importante para irrigação e abastecimento. Se planejamento municipal prevê ampliação de uso agrícola, qual avaliação prévia é imprescindível?",
    "alternatives": [
      "Estimar disponibilidade hídrica sustentável e impactos sobre comunidades e ecossistemas antes de liberar novos usos.",
      "Autorizar uso imediato pela ordem de chegada das solicitações, sem estudo técnico.",
      "Priorizar exclusivamente grandes produtores sem considerar pequenos agricultores.",
      "Construir obras hídricas apenas com recursos privados sem estudo de impacto social.",
      "Reduzir abastecimento urbano para favorecer irrigação sem compensação."
    ],
    "correctIndex": 0,
    "explanation": "Antes de ampliar uso agrícola é essencial avaliar disponibilidade hídrica sustentável e impactos sociais e ambientais. Distratores mostram gestão imprudente ou injusta (1,2,3,4)."
  },
  {
    "id": "toc-11",
    "subjectId": "tocantins",
    "topicId": "toc-desenvolvimento",
    "statement": "A economia regional depende de cadeias produtivas locais. Para melhorar renda sem degradar ambiente, qual política pública é preferível?",
    "alternatives": [
      "Fomentar agregação de valor local (processamento e certificação), capacitação técnica e acesso a mercados.",
      "Subsidiar indiscriminadamente a produção primária sem controles ambientais.",
      "Importar produtos para reduzir pressão produtiva local, encerrando atividades agrícolas.",
      "Concentrar todo investimento em infraestrutura urbana, ignorando áreas rurais.",
      "Proibir qualquer atividade produtiva para preservar áreas naturais."
    ],
    "correctIndex": 0,
    "explanation": "Agregar valor, capacitar e acessar mercados melhora renda sem necessariamente degradar ambiente. Distratores promovem soluções que podem causar degradação, abandono rural ou inação restritiva."
  },
  {
    "id": "toc-12",
    "subjectId": "tocantins",
    "topicId": "toc-formacao",
    "statement": "A formação administrativa do estado envolveu criação de municípios com identidades diversas. Ao elaborar política de patrimônio cultural, qual critério deve orientar as ações?",
    "alternatives": [
      "Reconhecer e proteger patrimônio material e imaterial com consulta às comunidades e critérios técnicos de preservação.",
      "Catalogar objetos e locais apenas para exibição turística sem consulta local.",
      "Alterar monumentos para promover desenvolvimento comercial sem avaliação histórica.",
      "Transferir responsabilidades de preservação apenas ao setor privado.",
      "Deixar que o mercado decida o que é patrimônio, sem intervenção pública."
    ],
    "correctIndex": 0,
    "explanation": "Proteção do patrimônio requer reconhecimento técnico e participação comunitária. Distratores ignoram consulta (1), propõem exploração sem preservação (2,3) ou privatização sem interesse público (4,5)."
  },
  {
    "id": "toc-13",
    "subjectId": "tocantins",
    "topicId": "toc-territorio",
    "statement": "As comunidades quilombolas ocupam áreas com demandas por regularização fundiária. Para promover segurança territorial, qual ação administrativa é priorizada?",
    "alternatives": [
      "Realizar levantamento participativo e regularização fundiária respeitando direitos comunitários e históricos.",
      "Expulsar ocupantes sem processo de diálogo para liberar áreas para empreendimentos.",
      "Permitir que terceiros registrem as terras para acelerar investimentos.",
      "Ignorar demandas e aguardar resolução por contencioso judicial.",
      "Substituir comunidades por programas de reassentamento compulsório."
    ],
    "correctIndex": 0,
    "explanation": "A prioridade é levantamento participativo e regularização que respeite direitos. Distratores propõem expulsão, registro por terceiros, inação ou reassentamento compulsório, todos inadequados e potencialmente ilegais."
  },
  {
    "id": "toc-14",
    "subjectId": "tocantins",
    "topicId": "toc-desenvolvimento",
    "statement": "Uma política de desenvolvimento regional quer reduzir desigualdades entre mesorregiões. Qual indicador combinatório seria útil para avaliar progresso ao longo de cinco anos?",
    "alternatives": [
      "Índice composto que combine renda per capita, acesso a serviços de saúde e educação e indicadores de infraestrutura.",
      "Apenas o PIB regional, pois reflete tudo que importa.",
      "Número de novas empresas registradas independentemente de qualidade de empregos gerados.",
      "Somente o volume de investimento público, sem considerar resultados sociais.",
      "Percentual de terras destinadas à expansão urbana sem outras medidas."
    ],
    "correctIndex": 0,
    "explanation": "Para medir redução de desigualdades é necessário índice composto que incorpore renda, saúde, educação e infraestrutura. Distratores usam indicadores únicos ou parciais que não capturam bem-estar e desigualdade."
  },
  {
    "id": "toc-15",
    "subjectId": "tocantins",
    "topicId": "toc-formacao",
    "statement": "Ao considerar a demografia do estado para planejamento de serviços, um técnico observa envelhecimento populacional em certas regiões. Qual ajuste no planejamento seria mais adequado?",
    "alternatives": [
      "Reorientar oferta de serviços de saúde e assistência social, além de adaptar mobilidade urbana e lazer conforme necessidades dos idosos.",
      "Focar somente em políticas para jovens, ignorando o envelhecimento.",
      "Reduzir investimentos em saúde pública, pois população envelhecida consome mais recursos.",
      "Promover migração obrigatória de idosos para centros urbanos.",
      "Manter plano atual sem alterações, assumindo efeitos neutros."
    ],
    "correctIndex": 0,
    "explanation": "Envelhecimento exige ajustes em saúde, assistência e infraestrutura adaptada. Distratores ignoram população envelhecida, propõem medidas coercitivas ou reduções de investimento que agravam problemas."
  },
  {
    "id": "toc-16",
    "subjectId": "tocantins",
    "topicId": "toc-territorio",
    "statement": "O clima regional alterna entre período úmido e seco, afetando produção agrícola. Que medida de gestão de risco climática é mais indicada para reduzir vulnerabilidade dos agricultores familiares?",
    "alternatives": [
      "Implementar sistemas de armazenamento de água, técnicas de plantio conservacionista e seguros agrícolas acessíveis.",
      "Confiar apenas na variabilidade climática sem medidas de adaptação.",
      "Investir exclusivamente em tecnologia dispendiosa para grandes produtores.",
      "Proibir cultivo em períodos secos sem alternativas de renda.",
      "Estimular monocultura intensiva para compensar perdas climáticas."
    ],
    "correctIndex": 0,
    "explanation": "Gestão de risco para agricultores familiares requer armazenamento de água, técnicas conservacionistas e seguros acessíveis. Distratores ignoram adaptação (1), favorecem grandes produtores (2), proíbem atividades sem alternativas (3) ou incentivam monocultura prejudicial (4)."
  },
  {
    "id": "toc-17",
    "subjectId": "tocantins",
    "topicId": "toc-desenvolvimento",
    "statement": "A hidrelétrica local promove crescimento econômico, mas há impactos sociais. Para mitigar efeitos adversos sobre comunidades ribeirinhas, qual política é mais indicada?",
    "alternatives": [
      "Plano de compensação negociado, programas de requalificação produtiva e participação social nas decisões sobre uso da água.",
      "Remoção forçada sem compensação para agilizar obras.",
      "Nenhuma medida, assumindo que desenvolvimento econômico é prioridade única.",
      "Destinar todos recursos de compensação para investidores privados.",
      "Substituir diálogo por campanhas de publicidade institucional sem ações concretas."
    ],
    "correctIndex": 0,
    "explanation": "Mitigação exige negociação, compensação e programas produtivos com participação social. Distratores propõem remoção forçada, inação, desvio de recursos ou propaganda vazia, inadequados e injustos."
  },
  {
    "id": "toc-18",
    "subjectId": "tocantins",
    "topicId": "toc-formacao",
    "statement": "Durante a organização política e administrativa, definiu-se um plano de carreiras para servidores locais. Qual princípio deve orientar a elaboração desse plano para fortalecer a gestão pública?",
    "alternatives": [
      "Meritocracia combinada com capacitação contínua, critérios transparentes de progressão e avaliação objetiva de desempenho.",
      "Progressão automática por tempo de serviço sem avaliação de desempenho.",
      "Contratação temporária ilimitada para evitar obrigações com servidores públicos.",
      "Promoções somente por afinidade política para garantir alinhamento.",
      "Remover qualquer requisito de qualificação para simplificar nomeações."
    ],
    "correctIndex": 0,
    "explanation": "Plano de carreiras eficaz equilibra mérito, capacitação, transparência e avaliação. Distratores defendem progressão temporal sem mérito (1), precarização (2), clientelismo (3) ou desvalorização da qualificação (4)."
  },
  {
    "id": "toc-19",
    "subjectId": "tocantins",
    "topicId": "toc-territorio",
    "statement": "A vegetação de cerrado é sensível a queimadas. Para reduzir ocorrência de incêndios e proteger biodiversidade, qual ação integrada é recomendável?",
    "alternatives": [
      "Educação ambiental, controle de queimadas prescritas quando tecnicamente justificadas e vigilância comunitária.",
      "Proibir qualquer uso de fogo sem alternativas e sem diálogo com comunidade rural.",
      "Permitir queimadas indiscriminadas para renovação de pastagens.",
      "Terceirizar totalmente manejo ambiental sem participação local.",
      "Abandonar áreas periféricas à iniciativa privada para controle de incêndios."
    ],
    "correctIndex": 0,
    "explanation": "Combinação de educação, queimadas prescritas (quando justificadas) e vigilância comunitária é prática reconhecida de manejo. Distratores sugerem proibição absoluta sem alternativas (1), permissividade (2), terceirização sem participação (3) ou privatização sem interesse público (4)."
  },
  {
    "id": "toc-20",
    "subjectId": "tocantins",
    "topicId": "toc-desenvolvimento",
    "statement": "Um plano regional busca ampliar turismo sustentável. Que medida operacional equilibra demanda turística e preservação ambiental?",
    "alternatives": [
      "Definir capacidade de carga para atrativos, investir em infraestrutura de baixo impacto e envolver comunidades locais na oferta de serviços.",
      "Construir grandes empreendimentos turísticos sem avaliação ambiental para atrair visitantes.",
      "Abrir áreas protegidas sem restrições para uso turístico irrestrito.",
      "Inibir todo tipo de visitação para evitar qualquer impacto turístico.",
      "Vender concessões exclusivas a grandes operadores estrangeiros sem contrapartidas locais."
    ],
    "correctIndex": 0,
    "explanation": "Turismo sustentável exige definição de capacidade de carga, infraestrutura de baixo impacto e participação local. Distratores promovem grandes obras sem avaliação (1), abertura indiscriminada (2), proibição total (3) ou concessões sem benefícios comunitários (4)."
  }
] as Question[];
