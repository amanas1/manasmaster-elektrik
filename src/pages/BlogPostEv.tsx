import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Zap, Phone, CheckCircle2, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostEv = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO
        title="Установка зарядной станции для электромобиля дома в Алматы | Мастер Манас"
        description="Всё о домашней зарядке для электромобиля: типы зарядок, расчёт мощности, выбор кабеля, монтаж в гараже или на парковке. Стоимость установки в Алматы."
        keywords="зарядная станция электромобиль Алматы, EV зарядка дома, монтаж зарядки электромобиля, EVSE установка, электрик Алматы электромобиль"
        canonical="https://manasmaster.kz/blog/ev"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Установка зарядной станции для электромобиля дома",
          "description": "Что нужно знать перед установкой домашней зарядки для EV. Расчёт мощности, выбор кабеля, монтаж.",
          "datePublished": "2024-03-05",
          "dateModified": "2025-01-10",
          "author": { "@type": "Person", "name": "Манас" },
          "publisher": { "@type": "Organization", "name": "Мастер Манас" },
          "image": "https://manasmaster.kz/images/blog/ev.png",
          "mainEntityOfPage": "https://manasmaster.kz/blog/ev"
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
                src="/images/blog/ev.png"
                alt="Монтаж домашней зарядной станции для электромобиля в Алматы"
                title="Установка зарядки для электромобиля — Мастер Манас"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Техника</span>
                  <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Электромобиль</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Установка зарядной станции для электромобиля дома
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 5 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 text-gray-700 font-medium leading-relaxed">
              <p className="text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">
                Количество электромобилей в Алматы растёт с каждым годом. Домашняя зарядная станция — самый удобный и выгодный способ заряжать авто. Разбираем, как правильно выбрать и установить.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Зачем устанавливать домашнее зарядное устройство?</h2>
              <p className="mb-4">
                Большинство владельцев электромобилей заряжают авто ночью дома — это удобнее и значительно дешевле, чем пользоваться публичными быстрыми зарядками. При ночном тарифе на электричество (если он доступен) стоимость «заправки» в 3–5 раз ниже бензиновой.
              </p>
              <p className="mb-6">
                Просто включить автомобиль в бытовую розетку 220В/16А — можно, но медленно: зарядка займёт 14–20 часов. Специальная зарядная станция EVSE ускоряет процесс в 2–5 раз и безопаснее для домашней электросети.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Типы домашних зарядных станций</h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Уровень 1 (Mode 2) — обычная розетка 220В",
                    desc: "Подключение через специальный адаптер (ICCB) в комплекте с авто. Мощность 1,8–3,6 кВт, скорость зарядки ~10–15 км/час. Минусы: медленно, нагружает стандартную розетку.",
                    power: "1,8–3,6 кВт",
                    speed: "~10–15 км/ч",
                  },
                  {
                    title: "Уровень 2 (Mode 3) — Настенная зарядная станция",
                    desc: "Оптимальный выбор для дома и гаража. Подключается через отдельную выделенную линию от щитка. Мощность 7,4–22 кВт, зарядка за 4–8 часов.",
                    power: "7,4–22 кВт",
                    speed: "~30–100 км/ч",
                  },
                  {
                    title: "Уровень 3 (DC Fast Charging)",
                    desc: "Быстрая зарядка постоянным током (DC). Требует трёхфазного ввода мощностью 50+ кВт. Для частного дома практически не применяется — это коммерческие станции.",
                    power: "50–350 кВт",
                    speed: "~400 км/ч",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                    <div className="flex gap-4 text-sm">
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg font-bold">⚡ {item.power}</span>
                      <span className="bg-green-50 text-green-700 px-3 py-1 rounded-lg font-bold">🚗 {item.speed}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Требования к электрической части</h2>
              <p className="mb-4">
                Для установки настенной зарядной станции 7,4 кВт (однофазная) необходимо:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Выделенная линия от щитка — кабель ВВГнг 3×6 мм²",
                  "Автоматический выключатель 40А (тип C) в щитке",
                  "УЗО тип A (для переменного и пульсирующего тока) 40А/30мА",
                  "Обязательное заземление — PE-проводник",
                  "Кабель в гараже — в металлическом рукаве или гофре",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-8">
                Для трёхфазной зарядки 11–22 кВт нужен кабель ВВГнг 5×6 мм² и соответствующий трёхфазный ввод в здание. Если у вас однофазный ввод — максимальная мощность зарядки ограничена 7,4 кВт.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl my-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={22} />
                  <p className="m-0 font-medium">Обязательно используйте УЗО типа A, а не типа AC для зарядных станций EV. Устройства типа AC не реагируют на пульсирующий постоянный ток, который создают зарядные устройства электромобилей. Это требование стандарта IEC 62955.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Популярные зарядные станции для дома — сравнение</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-green-50">
                      <th className="text-left p-4 font-bold text-gray-900">Модель</th>
                      <th className="text-center p-4 font-bold text-gray-900">Мощность</th>
                      <th className="text-center p-4 font-bold text-gray-900">Тип</th>
                      <th className="text-right p-4 font-bold text-gray-900">Цена (прибл.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Xiaomi EV Charger 7kW", "7,4 кВт", "1-фазная", "~80 000 ₸"],
                      ["Wallbox Pulsar Plus", "7,4–22 кВт", "1/3-фазная", "~250 000 ₸"],
                      ["ABB Terra AC", "7,4–22 кВт", "1/3-фазная", "~300 000 ₸"],
                      ["Autel MaxiCharger", "11–50 кВт", "3-фазная", "~500 000 ₸"],
                    ].map(([model, power, phase, price], i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">{model}</td>
                        <td className="p-4 text-center text-gray-600">{power}</td>
                        <td className="p-4 text-center text-gray-600">{phase}</td>
                        <td className="p-4 text-right font-bold text-[#DC2626]">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Стоимость монтажа зарядной станции в Алматы</h2>
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
                      ["Монтаж зарядной станции (настенный)", "от 15 000 ₸"],
                      ["Прокладка линии от щитка (до 20 м)", "от 20 000 ₸"],
                      ["Установка автомата и УЗО в щиток", "от 8 000 ₸"],
                      ["Монтаж зарядки под ключ (до 20 м кабеля)", "от 40 000 ₸"],
                      ["Проверка заземления и его монтаж", "от 25 000 ₸"],
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
                  { q: "Можно ли зарядить электромобиль от обычной розетки?", a: "Да, через адаптер из комплекта. Но это медленно (14–20 часов) и создаёт повышенную нагрузку на стандартную розетку. Для регулярного использования рекомендуется отдельная зарядная станция." },
                  { q: "Нужно ли согласовывать установку зарядки с управляющей компанией (для жильцов МКД)?", a: "Если зарядка устанавливается в паркинге или на общей территории — нужно согласование с УК и разрешение общего собрания. В собственном гараже — не требуется." },
                  { q: "Какой разъём нужен для зарядки — Type 1 или Type 2?", a: "В Казахстане большинство EV (Tesla, BYD, NIO, Hyundai/Kia EV) используют разъём Type 2 (Mennekes). Китайские авто (Lixiang, Zeekr) тоже чаще Type 2 или GB/T. Уточните тип вашего авто до покупки станции." },
                ].map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <Zap size={40} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-700 mb-4">Нужна установка зарядки для электромобиля в Алматы?</h3>
              <p className="text-gray-600 mb-6">Монтируем зарядные станции для EV в гаражах, паркингах и частных домах. Прокладка линии, установка защиты, гарантия 12 месяцев.</p>
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

export default BlogPostEv;
