import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Thermometer, Phone, CheckCircle2, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostFloorHeating = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Электрический тёплый пол: плюсы, минусы, монтаж и стоимость в Алматы"
        description="Всё об электрическом тёплом поле: виды систем, расчёт мощности, сравнение с водяным, стоимость монтажа в Алматы. Советы профессионального электрика."
        keywords="тёплый пол Алматы, монтаж тёплого пола, электрический тёплый пол, терморегулятор, электрик тёплый пол Алматы"
        canonical="https://manasmaster.kz/blog/floorheating"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Мифы и правда об электрических тёплых полах",
          "description": "Разбираем плюсы и минусы электрического тёплого пола.",
          "datePublished": "2024-03-10",
          "dateModified": "2025-01-10",
          "author": { "@type": "Person", "name": "Манас" },
          "publisher": { "@type": "Organization", "name": "Мастер Манас" },
          "image": "https://manasmaster.kz/images/blog/floorheating.png",
          "mainEntityOfPage": "https://manasmaster.kz/blog/floorheating"
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
                src="/images/blog/floorheating.png" 
                alt="Монтаж электрического тёплого пола в квартире Алматы" 
                title="Электрический тёплый пол — монтаж в Алматы"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Комфорт</span>
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Монтаж</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Электрический тёплый пол: плюсы, минусы и монтаж
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 10 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 text-gray-700 font-medium leading-relaxed">
              <p className="text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">
                Тёплый пол поднимает комфорт в квартире на новый уровень. Но стоит ли он своих денег? Разбираем все плюсы, минусы и тонкости монтажа электрического тёплого пола в Алматы.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Виды электрического тёплого пола</h2>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Нагревательный кабель", desc: "Укладывается в стяжку. Мощный и долговечный вариант, но требует минимум 3–5 см стяжки. Идеален для нового строительства или капремонта.", price: "от 2 500 ₸/м²" },
                  { title: "Нагревательный мат (плёнка)", desc: "Тонкий (5–7 мм), укладывается под плитку или ламинат без стяжки. Быстрый монтаж, подходит для готовых полов.", price: "от 3 500 ₸/м²" },
                  { title: "Инфракрасная плёнка", desc: "Укладывается под ламинат, паркет, линолеум. Самый простой монтаж, но не подходит под плитку.", price: "от 3 000 ₸/м²" },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <span className="shrink-0 font-bold text-[#DC2626] text-sm">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Как рассчитать мощность тёплого пола?</h2>
              <p className="mb-4">
                Стандартная расчётная мощность:
              </p>
              <ul className="space-y-2 mb-6 list-disc list-inside text-gray-700">
                <li>Для дополнительного обогрева (комфортный пол) — <strong>100–150 Вт/м²</strong></li>
                <li>Для основного отопления — <strong>180–200 Вт/м²</strong></li>
                <li>Для ванной — <strong>150–180 Вт/м²</strong></li>
              </ul>
              <p className="mb-8">
                Пример: ванная 5 м², основной обогрев. 5 × 180 = 900 Вт. Для этого достаточно одной обычной линии 16А. Для гостиной 20 м² в качестве дополнительного обогрева: 20 × 120 = 2400 Вт — тоже вписывается в стандартную линию.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Плюсы и минусы электрического тёплого пола</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="font-bold text-green-700 mb-4">✅ Плюсы</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Простой и быстрый монтаж",
                      "Равномерный прогрев по всей площади",
                      "Автоматическое управление через терморегулятор",
                      "Не нужна система водоснабжения",
                      "Долговечность — 30+ лет у качественного кабеля",
                      "Безопасность при неисправности",
                    ].map((item, i) => <li key={i} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500 shrink-0" />{item}</li>)}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-2xl p-6">
                  <h3 className="font-bold text-red-700 mb-4">❌ Минусы</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Потребляет электроэнергию",
                      "Дороже в эксплуатации, чем водяной",
                      "Нельзя перекрывать мебелью",
                      "Требует терморегулятор",
                      "При укладке под стяжку — поднимает пол на 5–7 см",
                    ].map((item, i) => <li key={i} className="flex items-center gap-2"><span className="text-red-400 shrink-0 text-lg leading-none">•</span>{item}</li>)}
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Стоимость монтажа тёплого пола в Алматы</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-red-50">
                      <th className="text-left p-4 font-bold text-gray-900">Вид работы</th>
                      <th className="text-right p-4 font-bold text-gray-900">Цена (работа)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Укладка нагревательного мата", "от 3 500 ₸/м²"],
                      ["Укладка кабеля в стяжку", "от 2 500 ₸/м²"],
                      ["Установка терморегулятора", "от 4 000 ₸"],
                      ["Прокладка линии от щитка", "от 8 000 ₸"],
                      ["Диагностика тёплого пола", "от 7 000 ₸"],
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
                  { q: "Сколько электроэнергии потребляет тёплый пол?", a: "Ванная 5 м² × 180 Вт = 0,9 кВт. При работе 8 часов в сутки — 7,2 кВт·ч. По тарифу ~25 тенге/кВт·ч — около 180 тенге в день. Терморегулятор сокращает потребление на 30–40%." },
                  { q: "Можно ли укладывать тёплый пол под ламинат?", a: "Да, но только инфракрасную плёнку или маты с температурой нагрева до 27°C. Обычный кабельный мат может повредить ламинат из-за высокой температуры." },
                  { q: "Нужна ли отдельная линия для тёплого пола?", a: "Для ванной и мощных систем отопления — желательно. Для дополнительного обогрева мощностью до 2 кВт — можно подключить к существующей розеточной линии." },
                ].map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <Thermometer size={40} className="text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-700 mb-4">Хотите монтаж тёплого пола в Алматы?</h3>
              <p className="text-gray-600 mb-6">Устанавливаем электрические тёплые полы разных видов. Поможем рассчитать мощность и материалы.</p>
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

export default BlogPostFloorHeating;
