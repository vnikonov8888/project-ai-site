# Project AI — сайт-презентация

Маркетинговый сайт-визитка (link-in-bio) для AI-студии **Project AI**:
показывает услуги и ведёт пользователя в Telegram (написать менеджеру или
подписаться на канал). Next.js (App Router) + TypeScript + Tailwind CSS,
mobile-first, готов к деплою на Vercel.

## Запуск локально

```bash
cd project-ai-site
npm install
npm run dev
```

Сайт будет доступен на [http://localhost:3000](http://localhost:3000).

Для продакшен-сборки локально:

```bash
npm run build
npm run start
```

> **Если `npm install` падает с ошибкой `UNABLE_TO_VERIFY_LEAF_SIGNATURE`**
> (например, из-за корпоративного антивируса/проксирования HTTPS): запустите
> установку с системными сертификатами Windows:
>
> ```bash
> NODE_OPTIONS="--use-system-ca" npm install
> ```
>
> На сборку на Vercel это не влияет — там используется чистое окружение.

## Как изменить ссылки

Все внешние ссылки собраны в одном файле — [lib/config.ts](lib/config.ts):

```ts
export const TELEGRAM_CONTACT_URL = "https://t.me/projectmanager404";
export const TELEGRAM_CHANNEL_URL = "https://t.me/+zoxuHnEJrd01ODU6";
export const INSTAGRAM_URL = "";
export const TIKTOK_URL = "";
```

- `TELEGRAM_CONTACT_URL` — куда ведут кнопки "Обсудить задачу", "Написать
  менеджеру", "Обсудить решение", "Получить предложение", "Написать нам".
- `TELEGRAM_CHANNEL_URL` — куда ведут кнопки "Перейти в Telegram-канал" и
  ссылка "Telegram-канал" в футере.
- `INSTAGRAM_URL` / `TIKTOK_URL` — зарезервированы под будущие ссылки
  (например, если в шапке/футере понадобятся иконки соцсетей). Сейчас пустые
  и не используются в интерфейсе.

Чтобы поменять любую ссылку — отредактируйте значение константы в этом файле,
весь сайт обновится автоматически (все компоненты импортируют ссылки отсюда).

## Как изменить тексты

- **Hero** (заголовок, тэглайн, описание, кнопки) — [components/Hero.tsx](components/Hero.tsx)
- **Услуги (01–06)** — массив `SERVICES` в [app/page.tsx](app/page.tsx) (заголовок и текст
  каждой карточки; карточный вид — в [components/Services.tsx](components/Services.tsx))
- **Промежуточные CTA-блоки** — пропсы `headline`/`text`/`buttonLabel`/`href`
  у каждого `<InlineCTA ... />` в [app/page.tsx](app/page.tsx)
- **"Что вы получите"** — массив `RESULTS` в [components/Results.tsx](components/Results.tsx)
- **"Для кого Project AI"** — массив `AUDIENCE` и итоговая фраза в
  [components/Audience.tsx](components/Audience.tsx)
- **Блок Telegram-канала** — [components/TelegramChannel.tsx](components/TelegramChannel.tsx)
- **Финальный CTA** — [components/FinalCTA.tsx](components/FinalCTA.tsx)
- **Футер** — [components/Footer.tsx](components/Footer.tsx)
- **Title/description страницы (SEO)** — `metadata` в [app/layout.tsx](app/layout.tsx)

## Деплой на Vercel

1. Залейте папку `project-ai-site` в Git-репозиторий (GitHub/GitLab/Bitbucket).
2. На [vercel.com](https://vercel.com) → **Add New → Project** → импортируйте
   репозиторий.
3. Если репозиторий содержит и бота, и сайт в одной папке — укажите Root
   Directory `project-ai-site` в настройках проекта.
4. Vercel автоматически определит Next.js: build command `next build`, output
   — стандартный для Next.js. Никакие переменные окружения не требуются.
5. Нажмите **Deploy** — после сборки сайт будет доступен на адресе вида
   `project-ai-site.vercel.app`.

Любой следующий push в основную ветку автоматически пересоберёт и обновит
сайт.

## Подключение собственного домена (.com)

1. В проекте на Vercel откройте **Settings → Domains**.
2. Введите свой домен (например `project-ai.com`) и нажмите **Add**.
3. Vercel покажет DNS-записи, которые нужно добавить у регистратора домена:
   - для корневого домена — `A`-запись на IP, который покажет Vercel;
   - для `www` (или поддомена) — `CNAME`-запись на `cname.vercel-dns.com`.
4. После обновления DNS (может занять от нескольких минут до пары часов)
   Vercel автоматически выпустит SSL-сертификат, и сайт станет доступен по
   `https://project-ai.com`.

## Будущие доработки (оплата, тарифы, личный кабинет)

Текущая структура легко расширяется без переделки готовых секций:

- **Тарифы/цены** — новая страница `app/pricing/page.tsx` со своими секциями
  (например, переиспользовать стиль карточек из `components/Services.tsx`).
- **Оплата** — подключить платёжный провайдер (например, Stripe или ЮKassa)
  через серверный route handler `app/api/.../route.ts`; ссылки на оплату
  можно добавить как новые кнопки рядом с существующими CTA.
- **Личный кабинет** — раздел `app/dashboard` с авторизацией (например,
  NextAuth.js или Clerk); ссылки на вход/регистрацию можно добавить в футер
  или отдельный блок на главной.

Все новые разделы можно собирать из тех же базовых элементов (`.btn-primary`,
`.btn-secondary`, карточки `rounded-2xl border border-white/10 bg-white/[0.03]`
из `app/globals.css`), чтобы сохранить единый визуальный стиль.
