import Audience from "@/components/Audience";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InlineCTA from "@/components/InlineCTA";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Results from "@/components/Results";
import Services, { ServiceItem } from "@/components/Services";
import VideoShowcase from "@/components/VideoShowcase";
import { TELEGRAM_CONTACT_URL } from "@/lib/config";

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "AI-видео для брендов",
    text: "Продумываем идею, сценарий, подачу, визуальный стиль и то, как ролик должен работать на задачу бренда.\n\nAI-видео может быть рекламным роликом, промо под продукт, AI-сериалом, интеграцией бренда в сюжет или визуальным миром вокруг компании.",
  },
  {
    number: "02",
    title: "Ведение аккаунта",
    text: "Для бизнеса, которому нужен не один ролик, а регулярное присутствие в соцсетях.\n\nВы не думаете каждый день, что публиковать.\nУ вас появляется понятная контент-система: идеи, видео, посты, визуальная подача и регулярность.",
  },
  {
    number: "03",
    title: "AI-агенты и цифровые помощники",
    text: "Создаём AI-помощников под задачи бизнеса.\n\nАгент может писать посты, помогать со сценариями, анализировать материалы, отвечать на вопросы команды, собирать контент-план, помогать в продажах или обрабатывать заявки.\n\nТакой помощник забирает часть рутины и помогает быстрее работать с контентом, клиентами и внутренними задачами.",
  },
  {
    number: "04",
    title: "Сайты и лендинги под бизнес",
    text: 'Делаем сайты, которые не просто "висят в шапке профиля", а объясняют услугу и ведут человека к заявке.\n\nСобираем структуру, тексты, дизайн, блоки услуг, форму заявки, переход в Telegram, подключение домена и основу под будущую оплату, тарифы или личный кабинет.',
  },
  {
    number: "05",
    title: "Упаковка бизнеса",
    text: "Помогаем бизнесу понять, как себя подать и через какие смыслы выходить к аудитории.\n\nРазбираем нишу, продукт, аудиторию, боли клиентов, конкурентов, оффер, каналы продаж, контент-стратегию и позиционирование.\n\nНа выходе вы получаете понятную структуру: что говорить, как отличаться и какие материалы нужны для продвижения.",
  },
  {
    number: "06",
    title: "Обучение AI",
    text: "Разбираем, как использовать AI в реальных задачах блога или бизнеса.\n\nПрограмма может включать: знакомство с AI, мастер-промптинг, написание сценариев, работу с передовыми инструментами, выбор ниши, монетизацию контента и маркетинг.",
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <VideoShowcase />

      <section
        id="services"
        className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24"
      >
        <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
          Что мы делаем
        </h2>
        <div className="mt-10">
          <Services items={SERVICES.slice(0, 2)} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <InlineCTA
          headline="Нужен контент, который не выглядит случайным?"
          text="Опишите задачу — подскажем, что лучше собрать для вашего бизнеса: ролики, ведение аккаунта или полноценную контент-систему."
          buttonLabel="Написать менеджеру"
          href={TELEGRAM_CONTACT_URL}
        />
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <Services items={SERVICES.slice(2, 4)} />
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <InlineCTA
          headline="Хотите, чтобы сайт и AI-помощник работали вместе?"
          text="Можно собрать связку: сайт объясняет услугу, Telegram принимает заявки, AI-агент помогает с контентом, ответами и внутренними задачами."
          buttonLabel="Обсудить решение"
          href={TELEGRAM_CONTACT_URL}
        />
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 md:pb-24">
        <Services items={SERVICES.slice(4, 6)} />
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <InlineCTA
          headline="Не знаете, с чего начать внедрение AI?"
          text="Начните с разбора бизнеса. Мы посмотрим задачу и предложим понятный вариант: упаковка, обучение, сайт, агент или контент."
          buttonLabel="Получить предложение"
          href={TELEGRAM_CONTACT_URL}
        />
      </section>

      <ProjectsShowcase />
      <Results />
      <Audience />
      <FinalCTA />
      <Footer />
    </main>
  );
}
