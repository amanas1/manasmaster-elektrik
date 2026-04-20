import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, ShieldAlert, Phone, CheckCircle2, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostEmergency = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO
        title="Аварийное освещение: нормы, монтаж и виды систем | Мастер Манас Алматы"
        description="Почему аварийное освещение обязательно в офисах, торговых центрах и МКД. Нормы СНиП, виды аварийных светильников, стоимость монтажа в Алматы."
        keywords="аварийное освещение Алматы, монтаж аварийного освещения, эвакуационное освещение, нормы аварийного освещения, электрик Алматы офис"
        canonical="https://manasmaster.kz/blog/emergency"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Аварийное освещение: безопасность превыше всего",
          "description": "Почему важно устанавливать системы аварийного освещения в офисах и домах.",
          "datePublished": "2024-03-06",
          "dateModified": "2025-01-10",
          "author": { "@type": "Person", "name": "Манас" },
          "publisher": { "@type": "Organization", "name": "Мастер Манас" },
          "image": "https://manasmaster.kz/images/blog/emergency.png",
          "mainEntityOfPage": "https://manasmaster.kz/blog/emergency"
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
                src="/images/blog/emergency.png"
                alt="Аварийное эвакуационное освещение в офисе и торговом центре Алматы"
                title="Аварийное освещение — нормы и монтаж в Алматы"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Безопасность</span>
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Нормы</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Аварийное освещение: безопасность превыше всего
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 6 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 text-gray-700 font-medium leading-relaxed">
              <p className="text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">
                При пожаре или аварийном отключении электричества именно аварийное освещение указывает людям путь к эвакуационным выходам. Его отсутствие — грубое нарушение норм пожарной безопасности.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Что такое аварийное освещение?</h2>
              <p className="mb-4">
                Аварийное освещение — это система резервного питания световых приборов, которая автоматически включается при отключении основного электроснабжения. Оно делится на два вида:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  { title: "Эвакуационное (безопасности)", desc: "Обеспечивает минимальный уровень освещённости для безопасного выхода из здания. Освещает коридоры, лестничные клетки, выходы. Минимальная освещённость — 1 лк на уровне пола." },
                  { title: "Рабочее резервное", desc: "Поддерживает работу критически важного оборудования при аварии. Применяется в медицинских учреждениях, серверных, производстве." },
                  { title: "Указательное", desc: "Знаки «Выход», «Exit», стрелки — эти световые таблички работают автономно и указывают направление эвакуации." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                    <ShieldAlert size={20} className="text-[#DC2626] shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-gray-900">{item.title}: </span>
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Где обязательно нужно аварийное освещение?</h2>
              <p className="mb-4">
                Согласно СП 52.13330.2016 (Естественное и искусственное освещение) и требованиям ГОСТ Р 55842, аварийное освещение обязательно в:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Офисных зданиях с числом работников более 50 человек",
                  "Торговых центрах, магазинах и супермаркетах",
                  "Ресторанах, кафе, развлекательных заведениях",
                  "Подземных парковках и гаражах",
                  "Больницах, клиниках, аптеках",
                  "Промышленных предприятиях",
                  "Подъездах и коридорах МКД выше 5 этажей",
                  "Гостиницах, отелях, хостелах",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-red-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl my-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-[#DC2626] shrink-0 mt-1" size={22} />
                  <p className="m-0 font-medium">Отсутствие аварийного освещения в обязательных объектах — основание для закрытия предприятия пожарной инспекцией и штрафа до 500 МРП (около 1 700 000 тенге в 2024 году).</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Типы аварийных светильников</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-red-50">
                      <th className="text-left p-4 font-bold text-gray-900">Тип</th>
                      <th className="text-left p-4 font-bold text-gray-900">Принцип работы</th>
                      <th className="text-right p-4 font-bold text-gray-900">Автономность</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Со встроенным аккумулятором", "Зарядка от сети, работа от своей батареи", "1–3 часа"],
                      ["С централизованным питанием", "Получает питание от общего ИБП/аккумулятора здания", "1–8 часов"],
                      ["Комбинированные", "Могут работать в обоих режимах", "3+ часов"],
                      ["Знаки «Выход» (Exit)", "Постоянно горят, при аварии — от батареи", "3+ часов"],
                    ].map(([type, desc, auto], i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">{type}</td>
                        <td className="p-4 text-gray-600">{desc}</td>
                        <td className="p-4 text-right font-bold text-[#DC2626]">{auto}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Требования к размещению</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Над каждым эвакуационным выходом — обязательно",
                  "В коридорах длиннее 25 м — через каждые 12 м",
                  "На перекрёстках коридоров и лестничных площадках",
                  "Высота размещения знаков «Выход» — 2–2,5 м",
                  "Минимальная освещённость в точке 1 м от пола — 1 лк",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Стоимость монтажа аварийного освещения в Алматы</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-red-50">
                      <th className="text-left p-4 font-bold text-gray-900">Работа</th>
                      <th className="text-right p-4 font-bold text-gray-900">Стоимость</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Установка аварийного светильника (1 шт.)", "от 5 000 ₸"],
                      ["Монтаж знака «Выход»", "от 4 000 ₸"],
                      ["Подключение к централизованному ИБП", "от 15 000 ₸"],
                      ["Монтаж аварийного освещения офиса (под ключ)", "от 50 000 ₸"],
                      ["Составление схемы (документация)", "от 20 000 ₸"],
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
                  { q: "Как часто нужно проверять аварийное освещение?", a: "Ежемесячно — кратковременное испытание (10–15 сек). Ежегодно — полное испытание на номинальную автономность (1–3 часа). Результаты фиксируются в журнале." },
                  { q: "Можно ли установить аварийные светильники самостоятельно?", a: "Технически — несложно. Но для официальной сдачи объекта пожарной инспекции нужна документация (схема, акт испытания), которую составляет лицензированная организация." },
                  { q: "Сколько лет служат аккумуляторы в аварийных светильниках?", a: "Встроенные аккумуляторы (NiCd, LiFePO4) служат 4–7 лет. После этого они требуют замены — иначе светильник не обеспечит нормативную автономность." },
                ].map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <ShieldAlert size={40} className="text-[#DC2626] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-700 mb-4">Нужен монтаж аварийного освещения в Алматы?</h3>
              <p className="text-gray-600 mb-6">Монтируем аварийное и эвакуационное освещение для офисов, магазинов, МКД. Составляем документацию для пожарной инспекции.</p>
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

export default BlogPostEmergency;
