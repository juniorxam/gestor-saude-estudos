/**
 * Cartografia do Cuidado: página-editorial de estudo com rota lateral, evidências e calma operacional.
 * A hierarquia assimétrica e a paleta Verde Vigília materializam a direção definida em ideas.md.
 */
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  Compass,
  FileText,
  Flag,
  GraduationCap,
  LayoutDashboard,
  ListChecks,
  MapPinned,
  Menu,
  PauseCircle,
  Play,
  RotateCcw,
  Sparkles,
  Target,
  TimerReset,
  Trophy,
  X,
} from "lucide-react";
import {
  Question,
  questions as allQuestions,
  simulationQuestionIds,
  studyMeta,
  subjects,
  type StudyTopic,
  type Subject,
} from "@/data/learning-data";

type View = "estudo" | "simulado" | "progresso";
type AnswerMap = Record<string, number>;

const STORAGE_KEYS = {
  completed: "cartografia-cuidado-completed-v1",
  answers: "cartografia-cuidado-answers-v1",
};

const subjectArt: Record<string, string> = {
  tocantins: "/manus-storage/gestor-saude-territorio_ddbd43b5.png",
  organizacoes: "/manus-storage/gestor-saude-gestao_1e7c5b59.png",
  governanca: "/manus-storage/gestor-saude-gestao_1e7c5b59.png",
  pessoas: "/manus-storage/gestor-saude-pratica_0c3c872c.png",
  politicas: "/manus-storage/gestor-saude-territorio_ddbd43b5.png",
  normas: "/manus-storage/gestor-saude-gestao_1e7c5b59.png",
  portugues: "/manus-storage/gestor-saude-pratica_0c3c872c.png",
  raciocinio: "/manus-storage/gestor-saude-pratica_0c3c872c.png",
  sus: "/manus-storage/gestor-saude-territorio_ddbd43b5.png",
};

const accentLabels = {
  green: "var(--vigilia)",
  blue: "var(--mineral)",
  clay: "var(--argila)",
  gold: "var(--ouro)",
};

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getStoredMap(key: string): AnswerMap {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function ScrollButton({
  children,
  onClick,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  return (
    <button className={`route-button ${variant} ${className}`} onClick={onClick} type="button">
      {children}
    </button>
  );
}

function Ring({ value, size = "regular" }: { value: number; size?: "small" | "regular" | "large" }) {
  const normalized = Math.min(100, Math.max(0, value));
  return (
    <div
      className={`progress-ring ${size}`}
      style={{ background: `conic-gradient(var(--argila) ${normalized}%, rgba(15, 92, 77, .12) ${normalized}% 100%)` }}
      aria-label={`${normalized}% concluído`}
      role="img"
    >
      <div className="progress-ring-core">
        <span>{normalized}%</span>
      </div>
    </div>
  );
}

function SubjectRow({
  subject,
  isActive,
  progress,
  onClick,
}: {
  subject: Subject;
  isActive: boolean;
  progress: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`subject-row ${isActive ? "active" : ""}`}
      onClick={onClick}
      aria-pressed={isActive}
    >
      <span className="subject-line" style={{ backgroundColor: accentLabels[subject.color] }} />
      <span className="subject-copy">
        <strong>{subject.shortTitle}</strong>
        <small>{subject.topics.length} blocos</small>
      </span>
      <span className="subject-progress">{progress}%</span>
    </button>
  );
}

export default function Home() {
  const [view, setView] = useState<View>("estudo");
  const [activeSubjectId, setActiveSubjectId] = useState("organizacoes");
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [menuOpen, setMenuOpen] = useState(false);
  const [simulationStarted, setSimulationStarted] = useState(false);
  const [simulationIndex, setSimulationIndex] = useState(0);
  const [simulationAnswers, setSimulationAnswers] = useState<AnswerMap>({});
  const [simulationSeconds, setSimulationSeconds] = useState(50 * 60);
  const [simulationSubmitted, setSimulationSubmitted] = useState(false);
  const [simulationReview, setSimulationReview] = useState(false);

  useEffect(() => {
    setCompleted(new Set(Object.keys(getStoredMap(STORAGE_KEYS.completed))));
    setAnswers(getStoredMap(STORAGE_KEYS.answers));
  }, []);

  useEffect(() => {
    if (!simulationStarted || simulationSubmitted || simulationSeconds <= 0) return;
    const timer = window.setInterval(() => setSimulationSeconds((time) => Math.max(0, time - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [simulationStarted, simulationSubmitted, simulationSeconds]);

  const activeSubject = subjects.find((subject) => subject.id === activeSubjectId) ?? subjects[0];
  const activeTopic = activeSubject.topics[activeTopicIndex] ?? activeSubject.topics[0];
  const topicQuestions = useMemo(
    () => questionsForSubject(activeSubject.id),
    [activeSubject.id],
  );
  const activeQuestion = topicQuestions[activeQuestionIndex] ?? topicQuestions[0];
  const simulationQuestions = useMemo(
    () => simulationQuestionIds
      .map((id) => allQuestions.find((question) => question.id === id))
      .filter((question): question is Question => Boolean(question)),
    [],
  );

  const allTopics = subjects.flatMap((subject) => subject.topics);
  const globalProgress = Math.round((completed.size / allTopics.length) * 100);
  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.entries(answers).filter(([id, option]) => allQuestions.find((question) => question.id === id)?.correctIndex === option).length;
  const accuracy = answeredCount ? Math.round((correctCount / answeredCount) * 100) : 0;
  const nextTopic = allTopics.find((topic) => !completed.has(topic.id)) ?? activeTopic;
  const nextSubject = subjects.find((subject) => subject.topics.some((topic) => topic.id === nextTopic.id)) ?? activeSubject;

  function subjectProgress(subject: Subject) {
    return Math.round((subject.topics.filter((topic) => completed.has(topic.id)).length / subject.topics.length) * 100);
  }

  function selectSubject(subjectId: string) {
    setActiveSubjectId(subjectId);
    setActiveTopicIndex(0);
    setActiveQuestionIndex(0);
    setView("estudo");
    setMenuOpen(false);
    window.setTimeout(() => document.getElementById("workspace")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  }

  function selectTopic(index: number) {
    const topic = activeSubject.topics[index];
    setActiveTopicIndex(index);
    const matchingQuestionIndex = topicQuestions.findIndex((question) => question.topicId === topic.id);
    setActiveQuestionIndex(matchingQuestionIndex >= 0 ? matchingQuestionIndex : 0);
  }

  function toggleCompleted(topicId: string) {
    setCompleted((current) => {
      const next = new Set(current);
      if (next.has(topicId)) next.delete(topicId);
      else next.add(topicId);
      const stored = Object.fromEntries(Array.from(next).map((id) => [id, true]));
      window.localStorage.setItem(STORAGE_KEYS.completed, JSON.stringify(stored));
      return next;
    });
  }

  function answerQuestion(question: Question, option: number) {
    setAnswers((current) => {
      const next = { ...current, [question.id]: option };
      window.localStorage.setItem(STORAGE_KEYS.answers, JSON.stringify(next));
      return next;
    });
  }

  function jumpToNextStep() {
    selectSubject(nextSubject.id);
    const index = nextSubject.topics.findIndex((topic) => topic.id === nextTopic.id);
    setActiveTopicIndex(Math.max(0, index));
  }

  function startSimulation() {
    setSimulationStarted(true);
    setSimulationIndex(0);
    setSimulationAnswers({});
    setSimulationSubmitted(false);
    setSimulationReview(false);
    setSimulationSeconds(50 * 60);
  }

  function submitSimulation(force = false) {
    const blanks = simulationQuestions.filter((question) => simulationAnswers[question.id] === undefined).length;
    if (blanks && !force) {
      setSimulationReview(true);
      return;
    }
    setSimulationSubmitted(true);
    setSimulationReview(false);
  }

  function resetSimulation() {
    setSimulationStarted(false);
    setSimulationSubmitted(false);
    setSimulationReview(false);
    setSimulationAnswers({});
    setSimulationSeconds(50 * 60);
  }

  function openView(nextView: View) {
    setView(nextView);
    setMenuOpen(false);
    window.setTimeout(() => document.getElementById("workspace")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" type="button" onClick={() => openView("estudo")} aria-label="Ir para a jornada de estudos">
          <img src="/manus-storage/gestor-saude-marca_a3a0e237.png" alt="" />
          <span>
            <em>Cartografia</em>
            <strong>do Cuidado</strong>
          </span>
        </button>
        <nav className="topnav" aria-label="Navegação principal">
          <button className={view === "estudo" ? "selected" : ""} onClick={() => openView("estudo")} type="button">Rota de estudo</button>
          <button className={view === "simulado" ? "selected" : ""} onClick={() => openView("simulado")} type="button">Simulado</button>
          <button className={view === "progresso" ? "selected" : ""} onClick={() => openView("progresso")} type="button">Monitor</button>
        </nav>
        <div className="topbar-actions">
          <div className="edition-chip"><span /> SES/TO · 2026</div>
          <button className="mobile-menu" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Abrir disciplinas">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className="hero-wrap">
        <section className="hero" aria-labelledby="hero-title">
          <img src="/manus-storage/gestor-saude-hero_c90e8925.png" alt="Mapa abstrato de redes e territórios de cuidado" />
          <div className="hero-content">
            <div className="eyebrow"><Compass size={14} /> jornada orientada pelo edital</div>
            <h1 id="hero-title">Estude com direção.<br /><i>Decida</i> com clareza.</h1>
            <p>Uma rota de preparação para <strong>Gestor em Saúde</strong>, desenhada a partir do conteúdo programático do SES/TO.</p>
            <div className="hero-actions">
              <ScrollButton onClick={jumpToNextStep}>Retomar trajetória <ArrowDownRight size={18} /></ScrollButton>
              <button className="edition-link" type="button" onClick={() => window.open(studyMeta.sourceUrl, "_blank", "noopener,noreferrer")}>Ver fonte do edital <ArrowUpRight size={15} /></button>
            </div>
          </div>
          <div className="hero-meta">
            <span>PROVA OBJETIVA</span>
            <strong>60 itens</strong>
            <small>90 pontos no total</small>
          </div>
        </section>
      </div>

      <div className={`study-layout ${menuOpen ? "menu-open" : ""}`}>
        <aside className="side-rail" aria-label="Mapa de disciplinas">
          <div className="rail-summary">
            <div className="summary-heading"><span>SEU MAPA</span><button onClick={() => openView("progresso")} type="button">ver monitor <ChevronRight size={14} /></button></div>
            <div className="mini-progress"><Ring value={globalProgress} size="small" /><div><strong>{completed.size} de {allTopics.length}</strong><span>blocos concluídos</span></div></div>
          </div>
          <div className="rail-section-label">Módulo I · Gerais</div>
          <div className="subject-list">
            {subjects.filter((subject) => subject.module === "Módulo I").map((subject) => <SubjectRow key={subject.id} subject={subject} isActive={activeSubject.id === subject.id && view === "estudo"} progress={subjectProgress(subject)} onClick={() => selectSubject(subject.id)} />)}
          </div>
          <div className="rail-section-label">Módulo II · Específicos</div>
          <div className="subject-list">
            {subjects.filter((subject) => subject.module === "Módulo II").map((subject) => <SubjectRow key={subject.id} subject={subject} isActive={activeSubject.id === subject.id && view === "estudo"} progress={subjectProgress(subject)} onClick={() => selectSubject(subject.id)} />)}
          </div>
          <button className="sidebar-simulated" type="button" onClick={() => openView("simulado")}><TimerReset size={18} /><span><small>PRÁTICA INTEGRADA</small><strong>Simulado de rota</strong></span><ChevronRight size={17} /></button>
        </aside>

        <main id="workspace" className="workspace">
          {view === "estudo" && <StudyWorkspace
            activeSubject={activeSubject}
            activeTopic={activeTopic}
            activeTopicIndex={activeTopicIndex}
            activeQuestion={activeQuestion}
            activeQuestionIndex={activeQuestionIndex}
            topicQuestions={topicQuestions}
            answer={activeQuestion ? answers[activeQuestion.id] : undefined}
            completed={completed.has(activeTopic.id)}
            onSelectTopic={selectTopic}
            onSelectQuestion={setActiveQuestionIndex}
            onToggleCompleted={() => toggleCompleted(activeTopic.id)}
            onAnswer={answerQuestion}
          />}
          {view === "simulado" && <SimulationWorkspace
            started={simulationStarted}
            submitted={simulationSubmitted}
            review={simulationReview}
            questions={simulationQuestions}
            currentIndex={simulationIndex}
            answers={simulationAnswers}
            seconds={simulationSeconds}
            onStart={startSimulation}
            onMove={setSimulationIndex}
            onAnswer={(questionId, option) => setSimulationAnswers((current) => ({ ...current, [questionId]: option }))}
            onSubmit={submitSimulation}
            onReset={resetSimulation}
          />}
          {view === "progresso" && <ProgressWorkspace
            globalProgress={globalProgress}
            accuracy={accuracy}
            answeredCount={answeredCount}
            correctCount={correctCount}
            completed={completed}
            answers={answers}
            onSelectSubject={selectSubject}
          />}
        </main>
      </div>
    </div>
  );
}

function StudyWorkspace({
  activeSubject,
  activeTopic,
  activeTopicIndex,
  activeQuestion,
  activeQuestionIndex,
  topicQuestions,
  answer,
  completed,
  onSelectTopic,
  onSelectQuestion,
  onToggleCompleted,
  onAnswer,
}: {
  activeSubject: Subject;
  activeTopic: StudyTopic;
  activeTopicIndex: number;
  activeQuestion?: Question;
  activeQuestionIndex: number;
  topicQuestions: Question[];
  answer?: number;
  completed: boolean;
  onSelectTopic: (index: number) => void;
  onSelectQuestion: (index: number) => void;
  onToggleCompleted: () => void;
  onAnswer: (question: Question, option: number) => void;
}) {
  const hasVideo = Boolean(activeTopic.videoId);
  return (
    <div className="study-workspace">
      <section className="workspace-head">
        <div>
          <div className="eyebrow subdued"><MapPinned size={14} /> {activeSubject.module} · {activeSubject.title}</div>
          <h2>{activeSubject.title}</h2>
          <p>{activeSubject.summary}</p>
        </div>
        <div className="subject-count"><span>{activeSubject.topics.length}</span><small>etapas<br />no mapa</small></div>
      </section>

      <section className="topic-route" aria-label="Tópicos da disciplina">
        <div className="topic-route-top"><span>TRILHA DA DISCIPLINA</span><small>{activeTopicIndex + 1} de {activeSubject.topics.length}</small></div>
        <div className="route-steps">
          {activeSubject.topics.map((topic, index) => (
            <button key={topic.id} type="button" onClick={() => onSelectTopic(index)} className={`route-step ${index === activeTopicIndex ? "active" : ""}`}>
              <span className="step-marker">{String(index + 1).padStart(2, "0")}</span>
              <span>{topic.shortTitle}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="lesson-panel">
        <div className="lesson-header">
          <div className="lesson-index">ETAPA {activeTopic.order}</div>
          <div className="lesson-heading"><h3>{activeTopic.title}</h3><p>{activeTopic.description}</p></div>
          <button className={`completion-button ${completed ? "done" : ""}`} type="button" onClick={onToggleCompleted}>
            {completed ? <CheckCircle2 size={19} /> : <CircleHelp size={19} />}
            <span>{completed ? "Concluído" : "Marcar concluído"}</span>
          </button>
        </div>
        <div className="lesson-body">
          <div className="lesson-content">
            <div className="focus-note"><Sparkles size={17} /><div><strong>Foco de prova</strong><p>{activeTopic.focus}</p></div></div>
            <div className="lesson-source"><FileText size={17} /><div><span>Material de referência</span><a href={activeTopic.sourceUrl} target="_blank" rel="noreferrer">{activeTopic.source} <ArrowUpRight size={14} /></a></div></div>
          </div>
          <div className={`media-frame ${hasVideo ? "video" : "art"}`}>
            {hasVideo ? (
              <>
                <iframe src={`https://www.youtube-nocookie.com/embed/${activeTopic.videoId}`} title={activeTopic.videoTitle} allowFullScreen />
                <a className="media-caption" href={activeTopic.sourceUrl} target="_blank" rel="noreferrer"><span><Play size={13} fill="currentColor" /> {activeTopic.teacher} · {activeTopic.duration}</span><ArrowUpRight size={14} /></a>
              </>
            ) : (
              <>
                <img src={subjectArt[activeSubject.id]} alt="Ilustração editorial associada à trilha de estudos" />
                <div className="art-label"><BookOpen size={15} /><span>Roteiro de leitura</span></div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="practice-panel">
        <div className="practice-head"><div><div className="eyebrow subdued"><Target size={14} /> prática autoral</div><h3>Verifique a decisão</h3><p>Questões inéditas, com cinco alternativas e explicação de raciocínio.</p></div><img src="/manus-storage/gestor-saude-pratica_0c3c872c.png" alt="Marcadores abstratos de prática e revisão" /></div>
        {activeQuestion ? <QuestionBlock question={activeQuestion} answer={answer} onAnswer={onAnswer} /> : <div className="empty-practice"><BookOpen size={22} /><p>Esta etapa usa leitura guiada. Selecione uma etapa com questão para praticar.</p></div>}
        {topicQuestions.length > 1 && <div className="question-selector" aria-label="Alternar questão"><span>OUTRAS QUESTÕES</span>{topicQuestions.map((question, index) => <button type="button" key={question.id} className={index === activeQuestionIndex ? "active" : ""} onClick={() => onSelectQuestion(index)}>{index + 1}</button>)}</div>}
      </section>
    </div>
  );
}

function QuestionBlock({ question, answer, onAnswer }: { question: Question; answer?: number; onAnswer: (question: Question, option: number) => void }) {
  const answered = answer !== undefined;
  return (
    <div className="question-block">
      <div className="question-label"><span>QUESTÃO DE ROTA</span><small>Estilo analítico · conteúdo autoral</small></div>
      <p className="question-statement">{question.statement}</p>
      <div className="alternatives">
        {question.alternatives.map((alternative, index) => {
          const selected = answer === index;
          const isCorrect = question.correctIndex === index;
          const state = answered ? (isCorrect ? "correct" : selected ? "incorrect" : "") : selected ? "selected" : "";
          return <button key={alternative} type="button" className={`alternative ${state}`} onClick={() => onAnswer(question, index)} disabled={answered}><span>{String.fromCharCode(65 + index)}</span>{alternative}{answered && isCorrect && <Check size={17} />}</button>;
        })}
      </div>
      {answered && <div className={`answer-feedback ${answer === question.correctIndex ? "correct" : "incorrect"}`}><BadgeCheck size={19} /><div><strong>{answer === question.correctIndex ? "Rota confirmada" : "Ajuste de rota"}</strong><p>{question.explanation}</p></div></div>}
    </div>
  );
}

function SimulationWorkspace({
  started,
  submitted,
  review,
  questions,
  currentIndex,
  answers,
  seconds,
  onStart,
  onMove,
  onAnswer,
  onSubmit,
  onReset,
}: {
  started: boolean;
  submitted: boolean;
  review: boolean;
  questions: Question[];
  currentIndex: number;
  answers: AnswerMap;
  seconds: number;
  onStart: () => void;
  onMove: (index: number) => void;
  onAnswer: (questionId: string, option: number) => void;
  onSubmit: (force?: boolean) => void;
  onReset: () => void;
}) {
  const question = questions[currentIndex];
  const blanks = questions.filter((item) => answers[item.id] === undefined).length;
  const correct = questions.filter((item) => answers[item.id] === item.correctIndex).length;
  const bySubject = subjects.map((subject) => {
    const scoped = questions.filter((item) => item.subjectId === subject.id);
    return { subject, total: scoped.length, correct: scoped.filter((item) => answers[item.id] === item.correctIndex).length };
  }).filter((item) => item.total);

  if (!started) {
    return <section className="simulation-intro">
      <div className="simulation-art"><img src="/manus-storage/gestor-saude-pratica_0c3c872c.png" alt="Representação abstrata de etapas para simulado" /></div>
      <div className="simulation-copy"><div className="eyebrow subdued"><TimerReset size={14} /> simulado de rota</div><h2>Uma prova curta para <i>calibrar</i> decisões.</h2><p>O percurso reúne 18 questões autorais distribuídas entre os módulos geral e específico, com navegação livre e resultado por área.</p><div className="simulation-rules"><span><Clock3 size={17} /><strong>50 min</strong> de tempo</span><span><ListChecks size={17} /><strong>18 itens</strong> equilibrados</span><span><Flag size={17} /><strong>Entrega explícita</strong></span></div><ScrollButton onClick={onStart}>Iniciar simulado <Play size={17} fill="currentColor" /></ScrollButton></div>
    </section>;
  }

  if (submitted) {
    return <section className="simulation-result"><div className="result-celebration"><Trophy size={29} /><span>SIMULADO CONCLUÍDO</span><h2>{correct}<small>/{questions.length}</small></h2><p>acertos na rota integrada</p></div><div className="result-detail"><h3>Leitura por território</h3><p>O resultado indica onde consolidar leitura, prática e revisão antes da próxima rodada.</p><div className="result-table">{bySubject.map(({ subject, total, correct: hits }) => <div key={subject.id}><span className="result-color" style={{ backgroundColor: accentLabels[subject.color] }} /><strong>{subject.shortTitle}</strong><span>{hits} de {total}</span><b>{Math.round((hits / total) * 100)}%</b></div>)}</div><div className="result-actions"><ScrollButton onClick={onReset} variant="secondary"><RotateCcw size={17} /> Refazer rota</ScrollButton></div></div></section>;
  }

  return <section className="simulation-run">
    <header className="simulation-top"><div><div className="eyebrow subdued"><TimerReset size={14} /> simulado de rota</div><h2>Prova integrada</h2></div><div className={`timer ${seconds < 300 ? "urgent" : ""}`}><Clock3 size={18} /><strong>{formatTime(seconds)}</strong><span>restantes</span></div><button className="finish-button" type="button" onClick={() => onSubmit()}>Entregar simulado <ArrowUpRight size={16} /></button></header>
    {review && <div className="blank-alert"><CircleHelp size={19} /><span>Há <strong>{blanks} item(ns) em branco</strong>. Você pode revisar a folha ou entregar mesmo assim.</span><button type="button" onClick={() => onSubmit(true)}>Entregar mesmo assim</button></div>}
    <div className="simulation-body"><aside className="answer-sheet"><div><span>FOLHA DE RESPOSTAS</span><small>{questions.length - blanks}/{questions.length} marcadas</small></div><div className="answer-grid">{questions.map((item, index) => <button key={item.id} type="button" className={`${index === currentIndex ? "current" : ""} ${answers[item.id] !== undefined ? "answered" : ""}`} onClick={() => onMove(index)}>{String(index + 1).padStart(2, "0")}</button>)}</div></aside><div className="simulation-question">{question && <><div className="question-label"><span>QUESTÃO {String(currentIndex + 1).padStart(2, "0")}</span><small>{subjects.find((subject) => subject.id === question.subjectId)?.shortTitle}</small></div><p className="question-statement">{question.statement}</p><div className="alternatives">{question.alternatives.map((alternative, index) => <button key={alternative} type="button" className={`alternative ${answers[question.id] === index ? "selected" : ""}`} onClick={() => onAnswer(question.id, index)}><span>{String.fromCharCode(65 + index)}</span>{alternative}</button>)}</div><div className="simulation-nav"><button type="button" disabled={currentIndex === 0} onClick={() => onMove(currentIndex - 1)}>Anterior</button><span>{currentIndex + 1} / {questions.length}</span><button type="button" disabled={currentIndex === questions.length - 1} onClick={() => onMove(currentIndex + 1)}>Próxima <ChevronRight size={16} /></button></div></>}</div></div>
  </section>;
}

function ProgressWorkspace({ globalProgress, accuracy, answeredCount, correctCount, completed, answers, onSelectSubject }: { globalProgress: number; accuracy: number; answeredCount: number; correctCount: number; completed: Set<string>; answers: AnswerMap; onSelectSubject: (subjectId: string) => void }) {
  return <section className="monitor-workspace"><header className="monitor-head"><div><div className="eyebrow subdued"><LayoutDashboard size={14} /> monitor de evidências</div><h2>Progresso que aponta<br />a <i>próxima escolha.</i></h2></div><p>O monitor combina avanço de conteúdo e desempenho em prática autoral. Os dados ficam salvos neste dispositivo.</p></header><div className="monitor-metrics"><div className="metric-feature"><Ring value={globalProgress} size="large" /><div><span>AVANÇO DO EDITAL</span><strong>{completed.size} <small>blocos concluídos</small></strong><p>de {subjects.flatMap((subject) => subject.topics).length} blocos rastreáveis</p></div></div><div className="metric-card"><Target size={20} /><span>PRECISÃO EM PRÁTICA</span><strong>{accuracy}%</strong><small>{correctCount} acertos em {answeredCount} respostas</small></div><div className="metric-card"><BookOpen size={20} /><span>COBERTURA ESPECÍFICA</span><strong>{subjects.filter((subject) => subject.module === "Módulo II").reduce((total, subject) => total + subject.topics.filter((topic) => completed.has(topic.id)).length, 0)}</strong><small>etapas do cargo concluídas</small></div></div><div className="coverage-card"><div className="coverage-title"><div><span>LEITURA POR DISCIPLINA</span><h3>Onde a rota já está sólida</h3></div><small>Clique em uma linha para estudar</small></div><div className="coverage-list">{subjects.map((subject) => { const complete = subject.topics.filter((topic) => completed.has(topic.id)).length; const progress = Math.round((complete / subject.topics.length) * 100); const subjectQuestions = allQuestions.filter((question) => question.subjectId === subject.id); const answered = subjectQuestions.filter((question) => answers[question.id] !== undefined); const hits = answered.filter((question) => answers[question.id] === question.correctIndex); return <button type="button" key={subject.id} className="coverage-row" onClick={() => onSelectSubject(subject.id)}><span className="coverage-color" style={{ backgroundColor: accentLabels[subject.color] }} /><strong>{subject.title}</strong><div className="coverage-track"><i style={{ width: `${progress}%`, backgroundColor: accentLabels[subject.color] }} /></div><small>{complete}/{subject.topics.length} blocos</small><b>{answered.length ? `${Math.round((hits.length / answered.length) * 100)}%` : "—"}</b><ChevronRight size={17} /></button>; })}</div></div></section>;
}

function questionsForSubject(subjectId: string) {
  return allQuestions.filter((question) => question.subjectId === subjectId);
}
