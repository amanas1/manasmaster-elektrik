import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, ShieldCheck, Phone, CheckCircle2, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostShield = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Зачем нужен современный электрощит и УЗО: полное руководство | Мастер Манас"
        description="Что такое электрощит, для чего нужны автоматы, УЗО и дифавтоматы. Как правильно выбрать защиту для дома. Сборка и замена электрощита в Алматы от 15 000 ₸."
        keywords="электрощит Алматы, сборка щита, УЗО установка, автоматические выключатели, замена щитка, электрик Алматы щит"
        canonical="https://manasmaster.kz/blog/shield"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Зачем нужен современный электрощит и УЗО",
          "description": "Разбираем устройство современного электрического щитка и важность УЗО.",
          "datePublished": "2024-03-13",
          "dateModified": "2025-01-10",
          "author": { "@type": "Person", "name": "Манас" },
          "publisher": { "@type": "Organization", "name": "Мастер Манас" },
          "image": "https://manasmaster.kz/images/blog/shield.png",
          "mainEntityOfPage": "https://manasmaster.kz/blog/shield"
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
                src="/images/blog/shield.png" 
                alt="Современный электрический щиток с автоматами и УЗО" 
                title="Электрощит и УЗО — зачем нужны?"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Защита</span>
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Инструкция</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Зачем нужен современный электрощит и УЗО
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 13 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 text-gray-700 font-medium leading-relaxed font-sans">
              <p className="text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10 leading-relaxed">
                Электрический распределительный щит — это «командный пункт» электросистемы вашей квартиры. Это не просто коробка с рубильниками, а интеллектуальная система защиты, которая бережет ваше имущество от перегрузок и скачков напряжения, а главное — защищает жизнь вашей семьи. В этом руководстве мы разберем современные требования к сборке щитового оборудования.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Основные компоненты современного силового щита</h2>
              <p className="mb-4">
                Эпоха, когда вся защита квартиры сводилась к двум автоматическим пробкам в подъезде, безвозвратно ушла. Современный внутриквартирный распределительный щит (например, серий Hager, ABB или Schneider Electric) — это высокотехнологичный комплекс, состоящий из следующих модулей:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  { title: "Вводной автоматический выключатель", desc: "Устанавливается на входе питающего кабеля. Его задача — защитить всю внутреннюю сеть квартиры от токов короткого замыкания высокой мощности и обесточить жилье при аварии." },
                  { title: "Модульные групповые автоматы", desc: "Контролируют отдельные линии электропотребления (освещение комнат, кухонные розетки, кондиционеры). Предотвращают критический перегрев жил кабеля при локальных перегрузках." },
                  { title: "УЗО (Устройство защитного отключения)", desc: "Постоянно отслеживает ток утечки на землю. Если повреждена изоляция кабеля или человек прикоснулся к оголенному контакту, УЗО мгновенно выключает линию." },
                  { title: "Реле контроля напряжения (РКН)", desc: "Самый важный прибор для защиты от скачков напряжения в городской сети Алматы. При обрыве нуля на подстанции напряжение в розетках может подскочить до 380В — реле мгновенно отключит квартиру, сохранив технику." },
                  { title: "АВДТ (Дифференциальный автомат)", desc: "Инновационный гибридный модуль, который совмещает в себе классический автомат и высокочувствительное УЗО в одном компактном корпусе." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                    <ShieldCheck size={20} className="text-[#DC2626] shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-gray-900">{item.title}: </span>
                      <span className="text-gray-600 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Вся правда об УЗО: Почему это обязательный элемент?</h2>
              <p className="mb-4">
                Классический автомат спроектирован так, что сработает только при токе перегрузки (например, при номинале 16А ток должен превысить это значение). Но если фазный провод пробило на металлический корпус стиральной машины, а вы, стоя босиком на кафеле ванной, прикоснулись к нему — ток пойдет через ваше тело. Величина этого тока составит всего 50-100 мА. Для автомата это «мелочь», он не отключится.
              </p>
              <p className="mb-6">
                <strong>УЗО с порогом срабатывания 30 мА</strong> мгновенно заметит, что часть тока не вернулась по нулевому проводнику, а ушла в сторону. Устройство мгновенно обесточит линию за **0.03 секунды**, предотвратив опасный для жизни удар.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl my-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={22}/>
                  <p className="m-0 font-medium text-amber-950 text-sm">
                    Важное примечание: Для мокрых зон ванной комнаты мы всегда монтируем УЗО со сверхчувствительным порогом 10 мА. Риск протекания тока через воду требует максимального уровня страховки.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Почему старая щитовая автоматика опасна?</h2>
              <p className="mb-4">
                В большинстве старых домов Алматы до сих пор стоят этажные щиты со старыми черными автоматическими выключателями серии АЕ или плавкими фарфоровыми пробками. Их механические контакты со временем прикипели друг к другу («слиплись»), а время срабатывания увеличилось в разы.
              </p>
              <p className="mb-6">
                Аварийная ситуация на такой линии может длиться секундами — этого времени более чем достаточно, чтобы провода в стенах раскалились и начали тлеть, а квартира наполнилась едким дымом.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Как правильно распределить потребители по группам</h2>
              <p className="mb-4">
                Чтобы при выходе из строя одного прибора (например, чайника) вся квартира не погружалась в темноту, мы делим сеть на независимые защищаемые группы:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-red-50">
                      <th className="text-left p-4 font-bold text-gray-900 rounded-tl-lg">Целевая группа</th>
                      <th className="text-center p-4 font-bold text-gray-900">Номинал автомата</th>
                      <th className="text-right p-4 font-bold text-gray-900 rounded-tr-lg">Тип защиты</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Линии освещения (комнаты, коридор)", "10А", "Автоматический выключатель"],
                      ["Розеточные группы спальни и гостиной", "16А", "Дифавтомат 30 мА"],
                      ["Кухонная розеточная группа (чайник, СВЧ)", "16А", "Дифавтомат 30 мА"],
                      ["Электрическая варочная панель / духовка", "32А", "Автомат + УЗО 30 мА"],
                      ["Стиральная и сушильная машины", "16А", "Дифавтомат 10 мА (влажная зона)"],
                      ["Кондиционирование и сплит-системы", "16А", "Автоматический выключатель"],
                      ["Водонагреватель (бойлер)", "16А", "Дифавтомат 10 мА"],
                    ].map(([group, amp, uzo], i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 text-gray-700">{group}</td>
                        <td className="p-4 text-center font-semibold text-blue-600">{amp}</td>
                        <td className="p-4 text-right text-gray-600">{uzo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Стоимость сборки и замены электрощита в Алматы</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-red-50">
                      <th className="text-left p-4 font-bold text-gray-900 rounded-tl-lg">Вид работы</th>
                      <th className="text-right p-4 font-bold text-gray-900 rounded-tr-lg">Стоимость монтажа</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Комплексная сборка распределительного щита (до 12 модулей)", "от 15 000 ₸"],
                      ["Демонтаж старого щитка и перенос в квартиру", "от 12 000 ₸"],
                      ["Установка / замена модульного автомата", "от 1 500 ₸"],
                      ["Монтаж и настройка реле контроля напряжения", "от 5 000 ₸"],
                      ["Установка УЗО / Дифференциального автомата", "от 3 500 ₸"],
                    ].map(([name, price], i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 text-gray-700">{name}</td>
                        <td className="p-4 text-right font-bold text-[#DC2626]">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Часто задаваемые вопросы о сборке щитов</h2>
              <div className="space-y-5 mb-8">
                {[
                  { q: "Какой фирмы автоматы лучше выбрать для домашнего щита?", a: "Для максимальной надежности я рекомендую бренды первой категории: Schneider Electric (серия Acti9 или Easy9), Hager или ABB. Они гарантируют точность срабатывания и выдерживают высокие токовые нагрузки. Бюджетный сегмент (например, EKF, IEK) также можно использовать, но преимущественно для временных сетей или при строгом ограничении бюджета." },
                  { q: "Зачем нужно нажимать кнопку TEST на УЗО каждый месяц?", a: "Внутри УЗО находится сложный электромеханический механизм сравнения токов. Со временем от пыли и длительного нахождения в одном состоянии реле может заклинить. Нажатие кнопки TEST искусственно симулирует утечку тока, заставляя механизм сработать. Это простая процедура гарантирует, что при реальной угрозе прибор сработает без осечек." },
                  { q: "Дифавтомат или УЗО + автомат: что выбрать?", a: "Функционально это абсолютно одинаковая защита. Разница в компоновке: дифавтомат занимает меньше места на DIN-рейке (2 модуля вместо 3-4 модулей на связку УЗО + автомат). Если у вас мало свободного места в щите, дифавтоматы предпочтительнее. Если же место позволяет, связка УЗО + автомат обойдется дешевле при покупке комплектующих." },
                ].map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <ShieldCheck size={40} className="text-[#DC2626] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-700 mb-4">Нужна <Link to="/uslugi/sborka-schitov/almalinskij" className="underline">профессиональная сборка или замена электрощита в Алматы</Link>?</h3>
              <p className="text-gray-600 mb-6">Собираем электрощиты любой сложности с соблюдением требований ПУЭ. Подберем надежную автоматику под ваш бюджет.</p>
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

export default BlogPostShield;
