"use client";

import { useMemo, useState } from "react";

type Capability = {
  id: string;
  title: string;
  description: string;
  impact: string;
};

type CapabilityGroup = {
  id: string;
  label: string;
  headline: string;
  summary: string;
  accent: string;
  capabilities: Capability[];
};

const capabilityGroups: CapabilityGroup[] = [
  {
    id: "engineering",
    label: "Разработка",
    headline: "От идеи до production без остановок",
    summary:
      "Проектирую архитектуру, пишу фронтенд/бэкенд, настраиваю CI/CD и покрываю тестами.",
    accent:
      "from-violet-500/90 via-fuchsia-400/80 to-sky-400/80 shadow-violet-400/60",
    capabilities: [
      {
        id: "architecture",
        title: "Архитектура и проектирование",
        description:
          "Подбираю стек, структурирую монорепозитории, раскладываю сервисы по слоям, пишу ADR.",
        impact: "Снижает риск пересборок и ускоряет онбординг команды.",
      },
      {
        id: "fullstack",
        title: "Fullstack реализация",
        description:
          "Создаю UI на React/Next.js, Express/FastAPI слои, оптимизирую запросы и состояние.",
        impact: "Доставляет фичи быстрее, сохраняя читаемость и масштабируемость.",
      },
      {
        id: "quality",
        title: "Качество и надежность",
        description:
          "Настраиваю тесты (unit/e2e), линтеры, типизацию, профилирование и мониторинг.",
        impact: "Исключает регрессии, поддерживает стабильно низкий MTTR.",
      },
    ],
  },
  {
    id: "product",
    label: "Продукт и контент",
    headline: "Понимаю пользователей и превращаю сложности в ясность",
    summary:
      "Пишу тексты, сценарии, преза, UX-копирайтинг и подкаст-скрипты на русском или английском.",
    accent:
      "from-amber-400/90 via-orange-300/80 to-rose-300/80 shadow-orange-300/60",
    capabilities: [
      {
        id: "uxcopy",
        title: "UX-копирайтинг и сценарии",
        description:
          "Прорабатываю коммуникацию в интерфейсе, делаю последовательные онбординги и скрипты.",
        impact: "Повышает конверсию и снижает churn за счёт понятных формулировок.",
      },
      {
        id: "docs",
        title: "Техническая документация",
        description:
          "Создаю гайды, README, API-спеки, миграционные инструкции и changelog без воды.",
        impact: "Ускоряет синхронизацию команды и снижает количество вопросов в саппорт.",
      },
      {
        id: "story",
        title: "Нарратив и сторителлинг",
        description:
          "Подбираю тональность, строю структуру презентаций, формирую четкие call-to-action.",
        impact: "Помогает донести ценность продукта инвесторам и пользователям.",
      },
    ],
  },
  {
    id: "analytics",
    label: "Аналитика",
    headline: "Данные превращаю в гипотезы, а гипотезы — в эксперименты",
    summary:
      "Формулирую метрики, проверяю гипотезы, настраиваю трекинг и автоматизирую отчеты.",
    accent:
      "from-cyan-400/90 via-emerald-300/80 to-blue-300/80 shadow-cyan-400/60",
    capabilities: [
      {
        id: "metrics",
        title: "Продуктовые метрики",
        description:
          "Разрабатываю северную звезду, дерево метрик, карту пользовательских событий.",
        impact: "Выстраивает прозрачную систему принятия решений.",
      },
      {
        id: "experiments",
        title: "Эксперименты и A/B тесты",
        description:
          "Собираю экспериментальную матрицу, считаю размер выборки, проверяю значимость.",
        impact: "Минимизирует риски выкаток и увеличивает ROI экспериментов.",
      },
      {
        id: "automation",
        title: "Автоматизация отчетов",
        description:
          "Строю дашборды в Superset/Metabase, пишу SQL, автоматизирую расписания выгрузок.",
        impact: "Освобождает руки и даёт актуальные цифры в один клик.",
      },
    ],
  },
];

const workflow = [
  {
    phase: "Диагностика",
    focus:
      "Собираю контекст задачи, кодовую базу и цели продукта. Подсвечиваю риски и быстрые победы.",
    result: "Вы получаете карту возможностей с оценкой влияния и сроками.",
  },
  {
    phase: "Проектирование",
    focus:
      "Формирую архитектуру, план интеграции, контент-стратегию или аналитическую схему.",
    result: "Появляется план работ с понятными точками контроля.",
  },
  {
    phase: "Реализация",
    focus:
      "Пишу код, тексты или SQL, запускаю эксперименты, настраиваю пайплайны и автоматизацию.",
    result: "Получаете готовый функционал без пробелов и с документацией.",
  },
  {
    phase: "Усиление",
    focus:
      "Добавляю тесты, алерты, метрики, улучшаю DX, готовлю ретро и план следующих итераций.",
    result: "Система становится устойчивой, команда экономит время.",
  },
];

export default function HomePage() {
  const [activeGroupId, setActiveGroupId] = useState(capabilityGroups[0].id);

  const activeGroup = useMemo(
    () => capabilityGroups.find((group) => group.id === activeGroupId),
    [activeGroupId],
  );

  return (
    <div className="relative z-0 flex min-h-screen flex-col bg-background px-4 pb-24 pt-16 text-foreground sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/25 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[32rem] translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-bl from-secondary/30 via-transparent to-transparent blur-3xl" />
      </div>

      <header className="mx-auto flex w-full max-w-5xl flex-col gap-10 text-center sm:text-left">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-4 py-2 text-sm font-medium shadow backdrop-blur">
          <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Вопрос
          </span>
          <span>Что ты умеешь?</span>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Я — ваш агентный ассистент, который превращает разрозненные идеи в
            продукт, код и метрики.
          </h1>
          <p className="mx-auto max-w-3xl text-pretty text-lg leading-relaxed text-foreground/80 sm:mx-0">
            Беру на себя полный цикл: от исследования и выбора стека до
            реализации, документации и аналитической поддержки. Работаю
            автономно, но синхронно с вашими целями.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
          {capabilityGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setActiveGroupId(group.id)}
              className={`group relative overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                activeGroupId === group.id
                  ? "bg-foreground text-background shadow-lg shadow-foreground/20"
                  : "border border-foreground/10 bg-background/80 text-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              <span>{group.label}</span>
            </button>
          ))}
        </div>
      </header>

      {activeGroup && (
        <section className="mx-auto mt-16 w-full max-w-5xl">
          <div
            className={`rounded-3xl border border-white/10 bg-white/70 p-10 shadow-2xl shadow-white/5 backdrop-blur dark:border-white/5 dark:bg-zinc-950/80 dark:shadow-black/40`}
          >
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <span className="mb-3 inline-block rounded-md bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  {activeGroup.label}
                </span>
                <h2 className="text-3xl font-semibold text-foreground">
                  {activeGroup.headline}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/80">
                  {activeGroup.summary}
                </p>
              </div>
              <aside className="rounded-2xl border border-foreground/10 bg-gradient-to-br p-6 text-sm text-foreground shadow-lg backdrop-blur-md lg:max-w-md">
                <div
                  className={`rounded-xl border border-white/20 bg-gradient-to-br ${activeGroup.accent} p-[1px]`}
                >
                  <div className="rounded-[0.9rem] bg-white/95 p-6 text-left text-sm leading-relaxed text-foreground shadow-lg shadow-black/10 dark:bg-zinc-950/90 dark:text-white">
                    <p className="font-semibold uppercase tracking-wide text-foreground/70">
                      Почему это работает
                    </p>
                    <p className="mt-3 text-base text-foreground/80">
                      Поддерживаю темп команды за счёт готовых шаблонов, опыта
                      в продакшн-системах и системного подхода к знаниям.
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-foreground/70">
                      <li>• План работы и чек-листы поставляются заранее.</li>
                      <li>• Каждый артефакт сопровождается документацией.</li>
                      <li>• Нейтрализую риски через предварительный анализ.</li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {activeGroup.capabilities.map((capability) => (
                <article
                  key={capability.id}
                  className="flex h-full flex-col justify-between rounded-2xl border border-foreground/10 bg-white/90 p-6 text-left shadow-lg shadow-black/5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl dark:bg-zinc-950/80"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {capability.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                      {capability.description}
                    </p>
                  </div>
                  <p className="mt-6 rounded-md bg-foreground/5 p-3 text-xs uppercase tracking-wide text-foreground/80">
                    Результат: {capability.impact}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto mt-24 w-full max-w-5xl">
        <div className="rounded-3xl border border-foreground/15 bg-background/80 p-10 shadow-xl shadow-black/5 backdrop-blur">
          <h2 className="text-3xl font-semibold text-foreground">
            Как происходит совместная работа
          </h2>
          <p className="mt-3 max-w-2xl text-base text-foreground/75">
            Процесс выстроен так, чтобы минимизировать шум и экономить ваше
            время. Каждый этап можно запускать отдельно или объединять в
            непрерывный цикл.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {workflow.map((step) => (
              <div
                key={step.phase}
                className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-white/95 p-6 text-left shadow-lg shadow-black/5 dark:bg-zinc-950/85"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {step.phase}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                  {step.focus}
                </p>
                <div className="mt-5 rounded-lg bg-primary/10 p-4 text-xs text-foreground/90">
                  Итог: {step.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-r from-primary/90 to-secondary/80 p-[1px] shadow-xl shadow-black/10">
          <div className="grid gap-6 rounded-[1.4rem] bg-background/95 p-10 text-foreground md:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">
                Вы приносите задачу — я возвращаю готовое решение.
              </h2>
              <p className="text-base text-foreground/80">
                Готов подключиться к вашему репозиторию, Notion, Linear или
                аналитической системе. Чем подробнее контекст, тем быстрее
                появится результат.
              </p>
              <ul className="space-y-2 text-sm text-foreground/75">
                <li>— Работаю в темпе CI/CD, поддерживая прозрачность статуса.</li>
                <li>— Применяю лучшие практики разработки и продуктовой аналитики.</li>
                <li>— Передаю артефакты с инструкциями и рекомендациями по развитию.</li>
              </ul>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-white/15 bg-white/70 p-6 text-sm text-foreground shadow-inner dark:bg-zinc-900/70">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Быстрый старт
                </p>
                <p className="mt-3 text-base font-medium text-foreground">
                  Дайте исходные материалы, цель и сроки — остальное беру на
                  себя.
                </p>
              </div>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.25em] text-foreground/60">
                  Форматы
                </p>
                <ul className="mt-3 space-y-1">
                  <li>• Аудит и roadmap</li>
                  <li>• MVP под ключ</li>
                  <li>• Внедрение аналитики</li>
                  <li>• Контент-кампания</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
