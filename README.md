# Agentic Assistant Showcase

Интерактивное веб-приложение, отвечающее на вопрос «что ты умеешь?». Оно демонстрирует основные компетенции агентного ассистента в разработке, продуктовой работе с контентом и аналитике.

## Стек

- Next.js 15 (App Router, TypeScript)
- Tailwind CSS (через `@tailwindcss/postcss`)
- Geist шрифты от Vercel

## Быстрый старт

```bash
cd webapp
npm install
npm run dev
```

Приложение запустится на `http://localhost:3000`.

## Структура

- `webapp/src/app/page.tsx` — главная страница с интерактивными блоками и описанием возможностей.
- `webapp/src/app/globals.css` — глобальные стили и фоновые градиенты.
- `webapp/src/app/layout.tsx` — метаданные и корневой макет.

## Развертывание

```bash
cd webapp
npm run build
npm run start
```

Для продакшен-публикации используется Vercel (см. `vercel deploy` в разделе задач).

## Лицензия

MIT — используйте и адаптируйте приложение под свои задачи.
