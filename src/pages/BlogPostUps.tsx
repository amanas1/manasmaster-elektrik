import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Shield, Phone, CheckCircle2, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostUps = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO
        title="Зачем нужен ИБП для дома: защита техники от отключений и скачков | Мастер Манас"
        description="ИБП (источник бесперебойного питания) — как выбрать и подключить для защиты компьютера, котла, NAS и дорогой электроники. Советы электрика Алматы."
        keywords="ИБП для дома, источник бесперебойного питания Алматы, защита техники от скачков, ИБП для котла, электрик Алматы ИБП"
        canonical="https://manasmaster.kz/blog/ups"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Защита техники: зачем нужен ИБП для дома",
          "description": "Как защитить компьютер, котел и дорогую электронику от внезапных отключений света и скачков напряжения.",
          "datePublished": "2024-03-09",
          "dateModified": "2025-01-10",
          "author": { "@type": "Person", "name": "Манас" },
          "publisher": { "@type": "Organization", "name": "Мастер Манас" },
          "image": "https://manasmaster.kz/images/blog/ups.png",
          "mainEntityOfPage": "https://manasmaster.kz/blog/ups"
        })}
      </script>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-[#DC2626] transition-colors mb-8 group font-medium">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Назад к списку статей
          </Link>

          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="h-80 md:h-[450px] relative overflow-hidden">
              <img
                src="/images/blog/ups.png"
                alt="Источник бесперебойного питания ИБП для дома в Алматы"
                title="ИБП для защиты техники от скачков напряжения"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Защита</span>
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Оборудование</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Защита техники: зачем нужен ИБП для дома
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 9 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 text-gray-700 font-medium leading-relaxed">
              <p className="text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">
                Внезапное отключение электричества или скачок напряжения способны за секунду уничтожить данные на компьютере и вывести из строя дорогостоящую технику. ИБП — простой и надёжный способ этого избежать.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Что такое ИБП и как он работает?</h2>
              <p className="mb-4">
                ИБП (источник бесперебойного питания, UPS — Uninterruptible Power Supply) — это устройство с аккумулятором, которое при исчезновении напряжения в сети мгновенно переключает подключённую технику на питание от батареи. Переключение происходит за 2–20 миллисекунд — техника этого не замечает.
              </p>
              <p className="mb-6">
                Кроме резервного питания, ИБП также фильтрует напряжение: убирает высокочастотные помехи, сглаживает просадки и выбросы. Это особенно важно в районах Алматы с нестабильным электроснабжением.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Три типа ИБП — какой выбрать?</h2>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Off-line (резервный)", desc: "Самый дешёвый. Переключается на батарею только при отключении сети. Небольшое время переключения (4–20 мс). Подходит для ПК и периферии.", price: "от 15 000 ₸", tag: "Для ПК" },
                  { title: "Line-interactive (интерактивный)", desc: "Средний класс. Постоянно регулирует входное напряжение с помощью AVR-трансформатора. Защита от просадок без перехода на батарею.", price: "от 35 000 ₸", tag: "Для сервера/котла" },
                  { title: "On-line (двойное преобразование)", desc: "Профессиональный класс. Всё время питает технику от инвертора — полная гальваническая развязка от сети. Время переключения 0 мс.", price: "от 80 000 ₸", tag: "Для критичной техники" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <span className="bg-[#DC2626] text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">{item.tag}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                    <div className="shrink-0 font-extrabold text-[#DC2626]">{item.price}</div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Что защищать с помощью ИБП?</h2>
              <ul className="space-y-3 mb-8">
                {[
                  { item: "Компьютер и ноутбук", why: "внезапное отключение приводит к потере несохранённых данных и повреждению файловой системы" },
                  { item: "Газовый котёл", why: "при скачке напряжения сгорает электронный блок управления (замена — 30 000–80 000 ₸)" },
                  { item: "NAS (сетевое хранилище)", why: "аварийное отключение разрушает RAID-массив и уничтожает данные" },
                  { item: "Роутер и сетевое оборудование", why: "стабильный интернет даже при кратковременных отключениях" },
                  { item: "Медицинское оборудование", why: "концентраторы кислорода, аппараты СИПАП — не должны прерываться ни на секунду" },
                ].map((el, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <div><span className="font-bold text-gray-900">{el.item}</span>{" — "}<span className="text-gray-600">{el.why}</span></div>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Как рассчитать нужную мощность ИБП?</h2>
              <p className="mb-4">
                Мощность ИБП выбирается с запасом 20–30% от суммарной нагрузки подключённого оборудования. ИБП указывает два параметра: <strong>VA (вольт-амперы)</strong> и <strong>Вт (ватты)</strong>. Для расчёта используйте ватты.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="text-left p-4 font-bold text-gray-900">Сценарий использования</th>
                      <th className="text-center p-4 font-bold text-gray-900">Нагрузка</th>
                      <th className="text-right p-4 font-bold text-gray-900">Рекомендуемый ИБП</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["ПК + монитор + роутер", "300–450 Вт", "650–800 ВА"],
                      ["Газовый котёл", "100–200 Вт", "500–600 ВА (line-interactive)"],
                      ["NAS (4 диска)", "50–80 Вт", "400–500 ВА"],
                      ["Сервер малого бизнеса", "500–800 Вт", "1000–1200 ВА (on-line)"],
                    ].map(([use, load, ups], i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 text-gray-700">{use}</td>
                        <td className="p-4 text-center text-gray-600">{load}</td>
                        <td className="p-4 text-right font-bold text-[#DC2626]">{ups}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl my-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={22} />
                  <p className="m-0 font-medium">Для газового котла используйте только line-interactive или on-line ИБП с чистым синусом на выходе. Большинство котлов не работают с аппроксимированным (ступенчатым) синусом дешёвых off-line моделей.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Установка и подключение ИБП</h2>
              <p className="mb-4">
                Простые ИБП для ПК подключаются самостоятельно — воткнул в розетку, подключил технику в выходы ИБП. Но для серьёзных задач (котёл, стойка серверов, целая комната) требуется профессиональная прокладка кабелей и правильное заземление.
              </p>
              <p className="mb-8">
                Неправильное заземление — одна из причин, почему ИБП не защищает должным образом: при скачке напряжение «стекает» не туда. Вызовите электрика для проверки заземления и правильного монтажа.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Часто задаваемые вопросы</h2>
              <div className="space-y-5 mb-8">
                {[
                  { q: "Как долго ИБП держит нагрузку на батарее?", a: "Зависит от ёмкости аккумулятора и нагрузки. Стандартный ИБП для ПК 650 ВА даёт 5–15 минут — достаточно для корректного завершения работы. Для котла берите модели с внешними АКБ — они дают 2–8 часов." },
                  { q: "Нужно ли обслуживать ИБП?", a: "Да. Акккумулятор ИБП нужно менять каждые 3–5 лет. Иначе он не держит заряд и при отключении сети ИБП мгновенно выключается." },
                  { q: "Защищает ли ИБП от молнии?", a: "Частично. ИБП гасит небольшие перенапряжения, но мощный грозовой разряд пробьёт любой ИБП. Для полной защиты от молнии нужен УЗИП (устройство защиты от импульсных перенапряжений) в щитке." },
                ].map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <Shield size={40} className="text-[#DC2626] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-700 mb-4">Нужна помощь с выбором и подключением ИБП в Алматы?</h3>
              <p className="text-gray-600 mb-6">Поможем подобрать оптимальный ИБП и правильно подключить. Проверим заземление и защитим вашу технику.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+77055535332" className="inline-flex items-center justify-center px-8 py-4 bg-[#DC2626] text-white font-bold rounded-2xl shadow-xl hover:bg-[#B91C1C] transition-all text-lg flex-1">
                  <Phone size={20} className="mr-2" /> +7 (705) 553-53-32
                </a>
                <a href="tel:+77074791020" className="inline-flex items-center justify-center px-8 py-4 bg-[#DC2626] text-white font-bold rounded-2xl shadow-xl hover:bg-[#B91C1C] transition-all text-lg flex-1">
                  <Phone size={20} className="mr-2" /> +7 (707) 479-10-20
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostUps;
