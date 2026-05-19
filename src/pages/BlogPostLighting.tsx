import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Lightbulb, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostLighting = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Как выбрать люстру и светильники для интерьера | Советы электрика Алматы"
        description="Подробное руководство по выбору освещения для квартиры: типы ламп, мощность, цветовая температура. Как рассчитать количество светильников для комнаты. Советы электрика."
        keywords="выбор люстры, установка люстры Алматы, освещение комнаты, светодиодные лампы, электрик Алматы люстра"
        canonical="https://manasmaster.kz/blog/lighting"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Как выбрать люстру и светильники для интерьера",
          "description": "Полезные советы по выбору освещения для разных комнат.",
          "datePublished": "2024-03-15",
          "dateModified": "2025-01-10",
          "author": { "@type": "Person", "name": "Манас" },
          "publisher": { "@type": "Organization", "name": "Мастер Манас" },
          "image": "https://manasmaster.kz/images/blog/lighting.png",
          "mainEntityOfPage": "https://manasmaster.kz/blog/lighting"
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
                src="/images/blog/lighting.png" 
                alt="Выбор и установка люстры в интерьере квартиры в Алматы" 
                title="Как выбрать люстру — советы электрика"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Освещение</span>
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Советы</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Как выбрать люстру и светильники для интерьера
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 15 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 text-gray-700 font-medium leading-relaxed">
              <p className="text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">
                Правильное освещение делает комнату уютной и функциональной, а неправильное — создаёт дискомфорт и даже вредит зрению. Рассказываем, как выбрать люстру и рассчитать освещение.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Типы освещения: в чём разница</h2>
              <p className="mb-4">
                В современном дизайне интерьеров используют три типа освещения в комплексе:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  { title: "Общее (базовое)", desc: "Люстра или потолочный светильник — даёт равномерный фоновый свет во всей комнате." },
                  { title: "Акцентное", desc: "Споты, трековые системы — выделяют картины, предметы декора, рабочие зоны." },
                  { title: "Локальное (задачное)", desc: "Бра, настольные лампы, подсветки — обеспечивают свет для конкретного занятия: чтения, работы." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                    <Lightbulb size={20} className="text-amber-400 shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-gray-900">{item.title}:</span>
                      <span className="text-gray-600"> {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Как рассчитать нужную мощность освещения</h2>
              <p className="mb-4">
                Стандартная формула: <strong>30–50 Вт на 1 м² площади</strong> (для LED-ламп пересчитайте: 1 Вт LED ≈ 7–10 Вт накаливания).
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-amber-50">
                      <th className="text-left p-4 font-bold text-gray-900">Помещение</th>
                      <th className="text-center p-4 font-bold text-gray-900">Рекомендуемый поток (лм/м²)</th>
                      <th className="text-right p-4 font-bold text-gray-900">LED (Вт на 10 м²)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Спальня", "150–200", "20–30 Вт"],
                      ["Гостиная", "200–300", "25–40 Вт"],
                      ["Кухня", "300–500", "30–50 Вт"],
                      ["Ванная", "200–300", "15–25 Вт"],
                      ["Рабочий кабинет", "400–600", "40–60 Вт"],
                    ].map(([room, lux, watt], i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 text-gray-700 font-medium">{room}</td>
                        <td className="p-4 text-center text-gray-600">{lux}</td>
                        <td className="p-4 text-right font-bold text-[#DC2626]">{watt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Цветовая температура — тёплый или холодный свет?</h2>
              <p className="mb-4">
                Цветовая температура измеряется в Кельвинах (K) и сильно влияет на ощущение пространства:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  { range: "2700–3000 K", color: "bg-amber-200", name: "Тёплый белый", use: "Спальня, гостиная — создаёт уют и расслабление." },
                  { range: "3500–4000 K", color: "bg-yellow-100", name: "Нейтральный белый", use: "Кухня, детская — универсален, не искажает цвета." },
                  { range: "5000–6500 K", color: "bg-blue-100", name: "Холодный белый", use: "Рабочий кабинет, гараж, ванная — бодрит, подходит для концентрации." },
                ].map((item, i) => (
                  <li key={i} className={`flex items-start gap-3 p-4 rounded-xl ${item.color}`}>
                    <span className="font-bold text-gray-900 w-28 shrink-0">{item.range}</span>
                    <div>
                      <span className="font-bold text-gray-900">{item.name}: </span>
                      <span className="text-gray-700">{item.use}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Как выбрать люстру по размеру комнаты</h2>
              <p className="mb-4">
                Простое правило: диаметр люстры в сантиметрах ≈ сумма длины и ширины комнаты в метрах × 10. Для комнаты 4×5 м: (4+5) × 10 = 90 см — оптимальный диаметр люстры.
              </p>
              <p className="mb-4">
                Высота подвеса: расстояние от нижнего края люстры до пола — не менее 220 см. При потолке 2,7 м и люстре высотой 40 см — длина подвеса не более 10 см.
              </p>
              <p className="mb-8">
                Если потолок низкий (2,4–2,5 м) — выбирайте <strong>накладные полупотолочные светильники</strong> или точечные споты. Подвесные люстры в таком случае будут мешать и визуально занижать пространство.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Стоимость установки люстры в Алматы</h2>
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
                      ["Установка люстры (простой)", "от 5 000 ₸"],
                      ["Установка на натяжной потолок", "от 7 000 ₸"],
                      ["Сборка сложной хрустальной люстры", "от 10 000 ₸"],
                      ["Монтаж точечных светильников (10 шт.)", "от 15 000 ₸"],
                      ["Укладка светодиодной ленты (1 пог. м)", "от 1 800 ₸"],
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
                  { q: "Можно ли вешать тяжёлую люстру на гипсокартонный потолок?", a: "Да, но необходимо заранее предусмотреть закладную — деревянный брусок или металлический профиль между плитой и ГКЛ. Без закладной люстра держится только на весе до 3–5 кг." },
                  { q: "Какие лампы лучше — LED или галоген?", a: "LED однозначно выигрывает: потребляет в 5–8 раз меньше, служит 25 000+ часов против 2 000 у галогена, не нагревается. Единственный минус — стоит дороже при покупке." },
                  { q: "Как крепить люстру на натяжной потолок?", a: "На натяжном потолке люстра крепится через специальную закладную платформу, которая монтируется до натяжки плёнки. Если закладной нет — нужна платформа с уширенным кольцом. Лучше доверить это профессионалу." },
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
              <h3 className="text-2xl font-bold text-red-700 mb-4">Нужна <Link to="/uslugi/ustanovka-lyustr/almalinskij" className="underline">установка люстры в Алматы</Link>?</h3>
              <p className="text-gray-600 mb-6">Монтаж люстр и светильников, включая решения для натяжных потолков. Стоимость согласуем заранее.</p>
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

export default BlogPostLighting;
