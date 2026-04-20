import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Zap, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostAutomation = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO
        title="Автоматизация освещения в доме: датчики, реле, ПЛК | Мастер Манас Алматы"
        description="Как автоматизировать освещение в квартире, доме и офисе. Датчики движения, таймеры, DALI-системы и ПЛК для управления светом. Монтаж в Алматы."
        keywords="автоматизация освещения Алматы, датчики движения свет, управление освещением, ПЛК освещение, электрик автоматизация Алматы"
        canonical="https://manasmaster.kz/blog/automation"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Автоматизация освещения и промышленных процессов",
          "description": "Обзор современных систем управления светом и автоматизации для частных домов.",
          "datePublished": "2024-03-08",
          "dateModified": "2025-01-10",
          "author": { "@type": "Person", "name": "Манас" },
          "publisher": { "@type": "Organization", "name": "Мастер Манас" },
          "image": "https://manasmaster.kz/images/blog/automation.png",
          "mainEntityOfPage": "https://manasmaster.kz/blog/automation"
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
                src="/images/blog/automation.png"
                alt="Автоматизация освещения с датчиками движения в Алматы"
                title="Автоматизация управления освещением — Мастер Манас"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Технологии</span>
                  <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Автоматика</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Автоматизация освещения и промышленных процессов
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 8 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 text-gray-700 font-medium leading-relaxed">
              <p className="text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">
                Автоматическое управление светом — это не только удобство, но и реальная экономия электроэнергии до 40%. Рассказываем о современных способах автоматизации освещения для дома, офиса и производства.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Зачем автоматизировать освещение?</h2>
              <p className="mb-4">
                По статистике, до 30% потребления электроэнергии в жилых домах приходится на освещение. Значительная часть этой энергии тратится впустую — свет горит в пустых комнатах, в подъездах днём, на парковках в солнечную погоду.
              </p>
              <p className="mb-6">
                Автоматизация решает эту проблему: свет включается только тогда, когда он нужен, и выключается сам. Кроме экономии, это повышает комфорт и безопасность.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Методы автоматизации освещения</h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Датчики движения (PIR)",
                    desc: "Инфракрасный датчик реагирует на тепловое излучение человека. Включает свет при появлении и выключает через заданное время после ухода. Идеально для коридоров, санузлов, подъездов.",
                    price: "от 3 500 ₸",
                  },
                  {
                    title: "Датчики присутствия (Microwave/HF)",
                    desc: "В отличие от PIR, реагируют на малейшее движение — дыхание, жест. Подходят для офисов и переговорных, где человек сидит неподвижно.",
                    price: "от 8 000 ₸",
                  },
                  {
                    title: "Сумеречные реле (фотореле)",
                    desc: "Включают уличное освещение при наступлении темноты и выключают на рассвете. Незаменимы для фасадного, дворового и паркового освещения.",
                    price: "от 4 000 ₸",
                  },
                  {
                    title: "Таймеры и астрономические реле",
                    desc: "Управляют освещением по расписанию. Астрономическое реле знает время восхода/заката и автоматически подстраивается под сезон.",
                    price: "от 6 000 ₸",
                  },
                  {
                    title: "DALI / KNX системы",
                    desc: "Профессиональные шинные системы управления освещением. Позволяют создавать сценарии, диммировать каждый светильник отдельно, интегрироваться с HVAC и охраной.",
                    price: "под проект",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                    <div className="shrink-0 font-extrabold text-[#DC2626] text-sm">{item.price}</div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Как правильно установить датчик движения</h2>
              <p className="mb-4">
                Угол обзора большинства PIR-датчиков — 120–180°, дальность — 6–12 метров. Для правильной работы важно:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Монтировать датчик на высоте 2–2,4 м от пола",
                  "Не направлять в сторону нагревательных приборов и окон (ложные срабатывания)",
                  "Настроить выдержку времени: для коридора — 1–2 мин, для туалета — 5–8 мин",
                  "Установить порог освещённости (Lux) — чтобы не включался при достаточном дневном свете",
                  "Для помещений с высокими потолками выбирать потолочные (360°) модели",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Автоматизация в подъездах и общих зонах МКД</h2>
              <p className="mb-6">
                Управление освещением в многоквартирных домах — особая задача. Датчики движения устанавливаются на каждом этаже и в тамбурах. Сумеречное реле управляет входной группой. Правильно спроектированная система в доме на 100 квартир экономит 15 000–25 000 кВт·ч в год — это 375 000–625 000 тенге ежегодно.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Стоимость автоматизации освещения в Алматы</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-red-50">
                      <th className="text-left p-4 font-bold text-gray-900">Работа</th>
                      <th className="text-right p-4 font-bold text-gray-900">Стоимость (работа)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Установка датчика движения (1 шт.)", "от 3 500 ₸"],
                      ["Подключение фотореле для улицы", "от 4 500 ₸"],
                      ["Монтаж таймера в щиток", "от 5 000 ₸"],
                      ["Настройка сценариев умного освещения", "от 10 000 ₸"],
                      ["Проектирование системы автоматизации", "по запросу"],
                    ].map(([name, price], i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 text-gray-700">{name}</td>
                        <td className="p-4 text-right font-bold text-[#DC2626]">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Часто задаваемые вопросы</h2>
              <div className="space-y-5 mb-8">
                {[
                  { q: "Можно ли установить датчик движения вместо обычного выключателя?", a: "Да. Большинство датчиков подключаются вместо выключателя и не требуют дополнительной проводки. Главное — соблюдать требование по нейтральному проводу (N)." },
                  { q: "Работают ли датчики движения с LED-лампами?", a: "Да, но не все. Некоторые датчики рассчитаны на минимальную нагрузку от 60 Вт, а мощность LED-лампы может быть 5–9 Вт. Выбирайте датчики с пометкой «LED compatible»." },
                  { q: "Нужно ли согласовывать установку датчиков в подъезде?", a: "Для МКД — нужно согласование с управляющей компанией или решение общего собрания собственников. Для частного дома — никаких согласований не требуется." },
                ].map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <Zap size={40} className="text-[#DC2626] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-700 mb-4">Хотите автоматизировать освещение в Алматы?</h3>
              <p className="text-gray-600 mb-6">Установим датчики движения, фотореле и таймеры. Проектирование и монтаж под ключ. Гарантия 12 месяцев.</p>
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

export default BlogPostAutomation;
