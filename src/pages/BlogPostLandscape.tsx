import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Lightbulb, Phone, CheckCircle2, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostLandscape = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO
        title="Ландшафтное освещение: уличный свет для сада и двора | Мастер Манас Алматы"
        description="Как спланировать и смонтировать ландшафтное освещение. Типы уличных светильников, степени защиты IP, управление. Монтаж наружного освещения в Алматы от 5000 ₸."
        keywords="ландшафтное освещение Алматы, уличные светильники, освещение сада двора, монтаж наружного освещения, электрик Алматы улица"
        canonical="https://manasmaster.kz/blog/landscape"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Ландшафтное освещение: магия света в саду",
          "description": "Как правильно спланировать и смонтировать уличное освещение для участка.",
          "datePublished": "2024-03-07",
          "dateModified": "2025-01-10",
          "author": { "@type": "Person", "name": "Манас" },
          "publisher": { "@type": "Organization", "name": "Мастер Манас" },
          "image": "https://manasmaster.kz/images/blog/landscape.png",
          "mainEntityOfPage": "https://manasmaster.kz/blog/landscape"
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
                src="/images/blog/landscape.png"
                alt="Ландшафтное освещение дорожки и сада в частном доме Алматы"
                title="Уличное и ландшафтное освещение — монтаж в Алматы"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Освещение</span>
                  <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Улица</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Ландшафтное освещение: магия света в саду
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 7 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 text-gray-700 font-medium leading-relaxed">
              <p className="text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">
                Грамотное ландшафтное освещение превращает двор в настоящее произведение искусства, повышает безопасность участка и увеличивает стоимость недвижимости. Рассказываем, как всё сделать правильно.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Зачем нужно ландшафтное освещение?</h2>
              <p className="mb-4">
                Правильно спланированное уличное освещение решает сразу несколько задач: освещает дорожки и въезд во двор, повышая безопасность ночью; подчёркивает архитектурные элементы фасада и декоративные посадки; создаёт атмосферу уюта и защищает от нежелательных гостей (тёмный двор — приглашение для воров).
              </p>
              <p className="mb-6">
                Современные LED-светильники для улицы потребляют в 5–8 раз меньше старых ламп накаливания и служат 30 000–50 000 часов без замены.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Типы уличных светильников</h2>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Грунтовые (наземные) светильники", desc: "Монтируются заподлицо с землёй или дорожкой. Идеальны для освещения снизу деревьев, кустов, скульптур. Требуют высокой степени защиты IP67.", tag: "IP67" },
                  { title: "Настенные бра и прожекторы", desc: "Крепятся на стену, забор, беседку. Самый распространённый тип. Могут управляться датчиком движения или фотореле.", tag: "IP44–54" },
                  { title: "Фонари на столбах", desc: "Классика для дорожек и въезда. Высота столба — 0,5–4 м в зависимости от назначения. Кабель прокладывается в земле.", tag: "IP44" },
                  { title: "Светодиодная лента (наружная)", desc: "Для подсветки ступеней, бордюров, заборов. Используйте только ленту с маркировкой IP65 (в силиконе) или IP67 (в трубке).", tag: "IP65–67" },
                  { title: "Прожекторы направленного света", desc: "Для акцентного освещения фасада или крупных деревьев. Выбирайте угол луча: 10–15° (узкий акцент) или 40–60° (заливная подсветка).", tag: "IP65" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">{item.tag}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Степени защиты IP — что это значит?</h2>
              <p className="mb-4">
                IP (Ingress Protection) — стандарт защиты оборудования от влаги и пыли. Всегда смотрите на маркировку при выборе уличных светильников:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-green-50">
                      <th className="text-left p-4 font-bold text-gray-900">Маркировка</th>
                      <th className="text-left p-4 font-bold text-gray-900">Защита</th>
                      <th className="text-right p-4 font-bold text-gray-900">Применение</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["IP44", "От брызг", "Навесы, крытые террасы"],
                      ["IP54", "От любых брызг", "Открытые стены, заборы"],
                      ["IP65", "От струй воды", "Прожекторы, открытые дорожки"],
                      ["IP67", "Погружение до 1 м", "Грунтовые светильники"],
                      ["IP68", "Постоянное погружение", "Подводная подсветка бассейна"],
                    ].map(([ip, desc, use], i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-bold text-blue-700">{ip}</td>
                        <td className="p-4 text-gray-600">{desc}</td>
                        <td className="p-4 text-right text-gray-700">{use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl my-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={22} />
                  <p className="m-0 font-medium">Кабель для уличного освещения прокладывайте только в ПНД-трубе на глубине не менее 50–70 см. Это защитит его от повреждений при земляных работах и перепадах температур.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Планирование ландшафтного освещения</h2>
              <p className="mb-4">Перед монтажом составьте план освещения:</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Определите зоны: въезд/ворота, дорожки, фасад, деревья и кустарники, зона отдыха",
                  "Нарисуйте схему расположения светильников на плане участка",
                  "Рассчитайте длину кабельных трасс и суммарную нагрузку",
                  "Заложите трубы для кабеля до того, как будет уложено твёрдое покрытие",
                  "Предусмотрите управление: ручной выключатель + фотореле + датчики движения на въезде",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Стоимость монтажа уличного освещения в Алматы</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-red-50">
                      <th className="text-left p-4 font-bold text-gray-900">Работа</th>
                      <th className="text-right p-4 font-bold text-gray-900">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Монтаж настенного светильника", "от 5 000 ₸"],
                      ["Монтаж грунтового светильника (с разработкой)", "от 8 000 ₸/шт."],
                      ["Прокладка кабеля в трубе (1 пог.м)", "от 500 ₸/м"],
                      ["Установка фонаря на столбе", "от 7 000 ₸"],
                      ["Подключение системы управления", "от 8 000 ₸"],
                      ["Монтаж освещения участка под ключ", "от 50 000 ₸"],
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
                  { q: "Какой кабель использовать для уличного освещения?", a: "ВВГнг-LS или NYM — для прокладки в трубе в земле. Сечение для освещения — 2×1,5 мм² (220В). Никогда не используйте ПВС (шнур) на улице." },
                  { q: "Нужно ли заземление для уличных светильников?", a: "Да, обязательно. Металлические светильники на улице должны быть заземлены. Это базовое требование электробезопасности. Для этого нужен трёхжильный кабель." },
                  { q: "Можно ли использовать обычные LED-лампы снаружи?", a: "Нет. Обычные лампы рассчитаны на комнатную температуру. На улице при морозе Алматы (-20°C) и выше они быстро выходят из строя. Используйте лампы с маркировкой -40°C." },
                ].map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <Lightbulb size={40} className="text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-700 mb-4">Нужен монтаж уличного освещения в Алматы?</h3>
              <p className="text-gray-600 mb-6">Проектируем и монтируем ландшафтное освещение любой сложности. Бесплатный выезд и расчёт, гарантия 12 месяцев.</p>
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

export default BlogPostLandscape;
