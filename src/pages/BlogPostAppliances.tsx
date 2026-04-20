import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Plug, Phone, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostAppliances = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Правильное подключение бытовой техники: электроплита, бойлер, кондиционер | Алматы"
        description="Как безопасно подключить электроплиту, духовой шкаф, бойлер и кондиционер. Почему нужна отдельная линия для мощной техники. Стоимость подключения в Алматы."
        keywords="подключение электроплиты Алматы, подключение бойлера, установка кондиционера, электрик бытовая техника Алматы"
        canonical="https://manasmaster.kz/blog/appliances"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Правильное подключение бытовой техники",
          "description": "Как безопасно подключить плиту, духовку, бойлер или стиральную машину.",
          "datePublished": "2024-03-12",
          "dateModified": "2025-01-10",
          "author": { "@type": "Person", "name": "Манас" },
          "publisher": { "@type": "Organization", "name": "Мастер Манас" },
          "image": "https://manasmaster.kz/images/blog/appliances.png",
          "mainEntityOfPage": "https://manasmaster.kz/blog/appliances"
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
                src="/images/blog/appliances.png" 
                alt="Профессиональное подключение электроплиты и духового шкафа в Алматы" 
                title="Подключение бытовой техники — советы электрика"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Техника</span>
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Подключение</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Правильное подключение бытовой техники
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 12 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 text-gray-700 font-medium leading-relaxed">
              <p className="text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">
                Неправильное подключение мощной бытовой техники — одна из главных причин пожаров в квартирах. Разбираемся, как сделать всё безопасно и правильно.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Почему мощной технике нужна отдельная линия?</h2>
              <p className="mb-4">
                Стандартная квартирная розетка рассчитана на ток 16А, что соответствует нагрузке около 3,5 кВт. Мощность электроплиты — 5–9 кВт, бойлера — 1,5–2,5 кВт, кондиционера — 2–3 кВт. Подключение таких приборов к общей розеточной линии <strong>немедленно перегружает кабель</strong>.
              </p>
              <p className="mb-6">
                Перегруженный кабель нагревается, изоляция размягчается и плавится. Это приводит к короткому замыканию и, в худшем случае, к пожару. По нормам ПУЭ, каждый мощный прибор должен подключаться <strong>к отдельной линии</strong> от щитка с защитным автоматом правильного номинала.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Электроплита и духовой шкаф</h2>
              <p className="mb-4">
                Электроплита — самый мощный потребитель в квартире: 5–9 кВт при полной нагрузке. Для неё требуется:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Отдельный кабель ВВГнг 3×6 мм² от щитка до кухни",
                  "Розетка силовая 32А + вилка 32А (или клеммная колодка вместо розетки)",
                  "Автоматический выключатель 32А в щитке",
                  "УЗО 40А/30мА или дифавтомат",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-8">
                Если плита и духовой шкаф раздельные — они могут подключаться к одной линии, но суммарная мощность не должна превышать допустимую для кабеля.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Бойлер (водонагреватель)</h2>
              <p className="mb-4">
                Бойлер потребляет 1,5–2,5 кВт. Для него нужны:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Кабель ВВГнг 3×2,5 мм²",
                  "Автомат 16А и обязательно УЗО 10 мА (во влажном помещении!)",
                  "Розетка с заземлением IP44 (влагозащищённая)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-red-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl my-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-[#DC2626] shrink-0 mt-1" size={22}/>
                  <p className="m-0 font-medium">Для бойлера в ванной УЗО с порогом 10 мА обязательно! Влажная среда создаёт условия для постоянной микроутечки тока, и УЗО 30 мА может не успеть сработать при аварии.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Кондиционер</h2>
              <p className="mb-6">
                Кондиционер мощностью 2–3 кВт требует отдельной линии с кабелем 3×2,5 мм² и автоматом 20А. Особенность: компрессор при запуске создаёт пусковой ток в 3–5 раз выше рабочего, поэтому автомат выбирается с характеристикой «C» (медленное срабатывание).
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Стоимость подключения техники в Алматы</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-red-50">
                      <th className="text-left p-4 font-bold text-gray-900">Вид подключения</th>
                      <th className="text-right p-4 font-bold text-gray-900">Стоимость работы</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Подключение электроплиты (с розеткой)", "от 8 000 ₸"],
                      ["Прокладка линии от щитка для плиты", "от 12 000 ₸"],
                      ["Подключение бойлера", "от 10 000 ₸"],
                      ["Подключение кондиционера", "от 8 000 ₸"],
                      ["Подключение стиральной машины", "от 5 000 ₸"],
                      ["Прокладка силовой линии (за пог.м)", "от 500 ₸/м"],
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
                  { q: "Можно ли подключить плиту в обычную розетку?", a: "Нет. Розетка рассчитана максимум на 3,5 кВт, плита потребляет 5–9 кВт. Это приведёт к перегреву кабеля и пожару. Обязательна отдельная силовая линия." },
                  { q: "Нужно ли заземление для плиты?", a: "Да, заземление обязательно для всей мощной техники. Без заземления при пробое изоляции корпус прибора окажется под напряжением." },
                  { q: "Как долго занимает подключение плиты?", a: "Если линия уже проложена — 40–60 минут. Если нужно тянуть кабель от щитка — 2–4 часа в зависимости от расстояния." },
                ].map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <Plug size={40} className="text-[#DC2626] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-700 mb-4">Нужно <Link to="/uslugi/podkluchenie-tehniki/almalinskij" className="underline">подключить бытовую технику в Алматы</Link>?</h3>
              <p className="text-gray-600 mb-6">Мастер приедет в течение 30 минут. Подключение плит, бойлеров, кондиционеров с гарантией 12 месяцев.</p>
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

export default BlogPostAppliances;
