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

            <div className="p-8 md:p-12 lg:px-16 text-gray-700 font-medium leading-relaxed">
              <p className="text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">
                Электрический щиток — это «мозг» электрической системы вашего дома. Правильно собранный щит с современной защитой — это безопасность вашей семьи и сохранность дорогой техники.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Что находится в электрощите?</h2>
              <p className="mb-4">
                Распределительный щиток — это металлический или пластиковый бокс, в котором сосредоточены все защитные устройства электрической сети квартиры или дома. Основные элементы:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  { title: "Вводной автомат", desc: "Защищает всю сеть от перегрузки. Первое устройство после счётчика." },
                  { title: "Групповые автоматы", desc: "Отдельный автомат на каждую линию: освещение, розетки, кухня, плита." },
                  { title: "УЗО (Устройство защитного отключения)", desc: "Отключает линию при утечке тока — защищает от удара током." },
                  { title: "Дифавтомат", desc: "Совмещает функции автомата и УЗО — удобен и компактен." },
                  { title: "Реле напряжения", desc: "Защищает технику от скачков напряжения и слишком высокого/низкого напряжения в сети." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                    <ShieldCheck size={20} className="text-[#DC2626] shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-gray-900">{item.title}: </span>
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Зачем нужно УЗО — и почему оно спасает жизни</h2>
              <p className="mb-4">
                УЗО реагирует на токи утечки, которые обычный автомат не замечает. Представьте: вы случайно прикасаетесь к оголённому проводу — ток идёт через тело в землю. Автомат не видит перегрузки и не отключается. УЗО же фиксирует разницу между входящим и выходящим током и за <strong>0.03 секунды</strong> отключает напряжение.
              </p>
              <p className="mb-6">
                Порог срабатывания 30 мА — это неприятный, но не смертельный разряд. Смертельным считается ток от 100 мА, протекающий 0,2 секунды. УЗО не даст этому произойти.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl my-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={22}/>
                  <p className="m-0 font-medium">Особенно важно устанавливать УЗО во влажных зонах: ванная, кухня над раковиной, балкон. Именно там риск контакта с электричеством максимален.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Старый щиток — в чём опасность?</h2>
              <p className="mb-4">
                В советских квартирах щитки содержат фарфоровые «пробки» вместо автоматов. Их главная проблема — <strong>их «калибруют» гвоздями и монетами</strong>. Такая «защита» не отключается ни при каком токе — она просто перестаёт защищать.
              </p>
              <p className="mb-6">
                Старые пакетные выключатели и счётчики с дисковым ротором тоже давно устарели. Они не дают точных данных о потреблении и не поддерживают современные токи нагрузки.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Как правильно разбить квартиру на группы</h2>
              <p className="mb-4">
                Для стандартной квартиры рекомендуется не менее <strong>7–10 независимых групп</strong>:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-red-50">
                      <th className="text-left p-4 font-bold text-gray-900">Группа</th>
                      <th className="text-center p-4 font-bold text-gray-900">Автомат</th>
                      <th className="text-right p-4 font-bold text-gray-900">УЗО</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Освещение (вся квартира)", "10А", "30 мА"],
                      ["Розетки комнат", "16А", "30 мА"],
                      ["Кухня (розетки)", "16А", "30 мА"],
                      ["Электроплита", "32А", "30 мА"],
                      ["Бойлер", "16А", "10 мА"],
                      ["Кондиционер", "20А", "30 мА"],
                      ["Ванная комната", "16А", "10 мА"],
                    ].map(([group, amp, uzo], i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 text-gray-700">{group}</td>
                        <td className="p-4 text-center font-medium text-blue-600">{amp}</td>
                        <td className="p-4 text-right font-bold text-[#DC2626]">{uzo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Стоимость сборки и замены щита в Алматы</h2>
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
                      ["Сборка нового щита (без материалов)", "от 15 000 ₸"],
                      ["Замена старых пробок на автоматы", "от 8 000 ₸"],
                      ["Установка УЗО", "от 4 000 ₸"],
                      ["Установка реле напряжения", "от 5 000 ₸"],
                      ["Полная замена щита под ключ", "от 35 000 ₸"],
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
                  { q: "Можно ли самому менять автоматы в щитке?", a: "Технически — да, если щиток в квартире. Но работы в этажном щитке или на вводе — только для специалиста. Ошибка грозит коротким замыканием и пожаром." },
                  { q: "Нужно ли согласовывать замену щита?", a: "Замену щита внутри квартиры согласовывать не нужно. Если вы хотите перенести место щитка или изменить ввод — нужно согласование с УК или энергосбытом." },
                  { q: "Какой щиток выбрать — пластик или металл?", a: "Для квартиры подойдёт пластиковый встраиваемый щиток. Для дома или мокрых помещений — металлический IP65, защищённый от влаги." },
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
              <h3 className="text-2xl font-bold text-red-700 mb-4">Нужна <Link to="/uslugi/sborka-schitov/almalinskij" className="underline">сборка или замена электрощита в Алматы</Link>?</h3>
              <p className="text-gray-600 mb-6">Собираем щиты под задачу с подбором автоматов и защитных устройств.</p>
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
