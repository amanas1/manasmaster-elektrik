import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Home, Phone, CheckCircle2, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostSmartHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Умный дом и энергосбережение: с чего начать в Алматы | Мастер Манас"
        description="Как сделать квартиру умной и начать экономить на электричестве. Обзор систем умного освещения, автоматических выключателей и умных розеток. Монтаж в Алматы."
        keywords="умный дом Алматы, энергосбережение, умное освещение, автоматизация дома, электрик умный дом Алматы"
        canonical="https://manasmaster.kz/blog/smarthome"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Энергосбережение и умный дом: с чего начать",
          "description": "Как сделать свой дом умнее и начать экономить на счетах за электричество.",
          "datePublished": "2024-03-11",
          "dateModified": "2025-01-10",
          "author": { "@type": "Person", "name": "Манас" },
          "publisher": { "@type": "Organization", "name": "Мастер Манас" },
          "image": "https://manasmaster.kz/images/blog/smarthome.png",
          "mainEntityOfPage": "https://manasmaster.kz/blog/smarthome"
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
                src="/images/blog/smarthome.png" 
                alt="Система умного дома и автоматизация освещения в Алматы" 
                title="Умный дом — автоматизация и энергосбережение"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Технологии</span>
                  <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Умный дом</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Умный дом и энергосбережение: с чего начать
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 11 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 text-gray-700 font-medium leading-relaxed">
              <p className="text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">
                Умный дом — это уже не фантастика и не привилегия богатых. Сегодня базовую систему автоматизации можно установить в обычной квартире от 50 000 тенге. Рассказываем, с чего начать.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Что такое умный дом и зачем он нужен?</h2>
              <p className="mb-4">
                «Умный дом» (Smart Home) — это система автоматизации, которая управляет освещением, климатом, безопасностью и бытовой техникой через смартфон, голосовые команды или датчики. 
              </p>
              <p className="mb-6">
                Основные преимущества: экономия электроэнергии на 20–40%, повышение безопасности (умные розетки отключатся при перегреве), удобство управления и удалённый контроль из любой точки мира.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">С чего начать: 5 шагов к умному дому</h2>
              <div className="space-y-4 mb-8">
                {[
                  { step: "1", title: "Умные лампочки", desc: "Самый простой старт. Лампочки Xiaomi, IKEA или Philips Hue вкручиваются в обычные патроны и управляются с телефона. Стоят от 2 500 ₸." },
                  { step: "2", title: "Умные розетки и выключатели", desc: "Контролируйте любой прибор дистанционно. Реле Sonoff или Tuya встраивается в подрозетник и управляется через Wi-Fi." },
                  { step: "3", title: "Датчики движения и присутствия", desc: "Автоматически включают/выключают свет в коридоре, туалете, гараже. Экономят до 30% на освещении." },
                  { step: "4", title: "Умный термостат", desc: "Управляет тёплым полом или климатической системой по расписанию. Не нагревает, когда вас нет дома." },
                  { step: "5", title: "Центральный хаб (Hub)", desc: "Объединяет все устройства в единую систему. Яндекс Станция, Apple HomeKit или Home Assistant — выбор зависит от экосистемы." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-gray-50 p-5 rounded-2xl">
                    <div className="w-10 h-10 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-extrabold shrink-0">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Умное освещение: экономия на практике</h2>
              <p className="mb-4">
                Обычная лампочка горит, пока кто-то не выключит. Умный светильник с датчиком движения гасится через 2 минуты после ухода человека. В коридоре, где свет часто забывают выключить, это сэкономит 50–70% электроэнергии по этой линии.
              </p>
              <p className="mb-6">
                Диммируемые LED-лампочки позволяют снижать яркость до 10–20% в вечернее время — это ещё 30–40% экономии и более комфортное освещение перед сном.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Какое оборудование лучше — обзор популярных систем</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-indigo-50">
                      <th className="text-left p-4 font-bold text-gray-900">Система</th>
                      <th className="text-center p-4 font-bold text-gray-900">Протокол</th>
                      <th className="text-center p-4 font-bold text-gray-900">Цена входа</th>
                      <th className="text-right p-4 font-bold text-gray-900">Сложность</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Tuya / Smart Life", "Wi-Fi", "Низкая", "Легко"],
                      ["Xiaomi Mi Home", "Wi-Fi/Zigbee", "Низкая", "Легко"],
                      ["Philips Hue", "Zigbee", "Высокая", "Легко"],
                      ["Home Assistant", "Все протоколы", "Средняя", "Сложно"],
                      ["KNX (профессиональный)", "Проводной", "Очень высокая", "Профессионал"],
                    ].map(([sys, proto, price, diff], i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">{sys}</td>
                        <td className="p-4 text-center text-gray-600">{proto}</td>
                        <td className="p-4 text-center text-gray-600">{price}</td>
                        <td className="p-4 text-right text-gray-600">{diff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Роль электрика при монтаже умного дома</h2>
              <p className="mb-4">
                Простые умные лампочки и розетки можно подключить самостоятельно. Но для серьёзной автоматизации нужен профессиональный электрик, который:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Установит реле управления освещением в подрозетники",
                  "Проложит дополнительные кабели для датчиков",
                  "Установит умный щит с управляемыми автоматами",
                  "Подключит систему управления климатом через термостаты",
                  "Настроит интеграцию всех устройств",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Часто задаваемые вопросы</h2>
              <div className="space-y-5 mb-8">
                {[
                  { q: "Можно ли сделать умный дом без переделки проводки?", a: "Да. Начните с умных лампочек и Wi-Fi розеток — они работают с любой существующей проводкой. Реле Sonoff/Tuya встраивается в стандартный подрозетник." },
                  { q: "Работают ли умные устройства без интернета?", a: "Большинство устройств на Zigbee и Z-Wave работают через локальный хаб без интернета. Wi-Fi устройства требуют облака, но многие поддерживают локальное управление." },
                  { q: "Сколько стоит базовая автоматизация квартиры?", a: "Умное освещение в 3-комнатной квартире (10–15 ламп + датчики) обойдётся в 80 000–150 000 тенге включая монтаж. Это окупится за 3–5 лет за счёт экономии." },
                ].map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <Home size={40} className="text-indigo-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-700 mb-4">Хотите умный дом в Алматы?</h3>
              <p className="text-gray-600 mb-6">Помогаем с выбором оборудования и монтажом систем автоматизации. Бесплатная консультация.</p>
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

export default BlogPostSmartHome;
