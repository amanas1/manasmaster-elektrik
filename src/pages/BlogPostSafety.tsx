import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, ShieldAlert, Phone, CheckCircle2, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostSafety = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Электробезопасность в доме: главные правила | Советы электрика Алматы"
        description="Подробное руководство по электробезопасности в квартире и доме. Правила безопасной работы с электричеством, признаки опасности, когда вызывать электрика в Алматы."
        keywords="электробезопасность дома, правила безопасности электрика, опасность электричества, электрик Алматы советы"
        canonical="https://manasmaster.kz/blog/safety"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Электробезопасность в доме: главные правила",
          "description": "Подробное руководство по электробезопасности в квартире и доме.",
          "datePublished": "2024-03-16",
          "dateModified": "2025-01-10",
          "author": { "@type": "Person", "name": "Манас" },
          "publisher": {
            "@type": "Organization",
            "name": "Мастер Манас",
            "logo": { "@type": "ImageObject", "url": "https://manasmaster.kz/favicon.png" }
          },
          "image": "https://manasmaster.kz/images/blog/safety.png",
          "mainEntityOfPage": "https://manasmaster.kz/blog/safety"
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
                src="/images/blog/safety.png" 
                alt="Соблюдение правил электробезопасности при работе с розеткой" 
                title="Электробезопасность в доме — Советы мастера"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Безопасность</span>
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Важно</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Электробезопасность в доме: главные правила
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 16 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">
                Электричество — это комфорт, но и источник повышенной опасности. Знание простых правил может спасти жизнь и имущество. Рассказываем об основных требованиях электробезопасности в жилых помещениях.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Почему электробезопасность так важна?</h2>
              <p className="mb-4">
                По статистике, около 30% всех пожаров в Казахстане возникает из-за неисправной электропроводки или нарушений правил эксплуатации электроприборов. Большинство трагедий можно было избежать, если бы жильцы знали несколько простых правил.
              </p>
              <p className="mb-6">
                Особую опасность представляют старые дома со алюминиевой проводкой советской эпохи. Такой кабель рассчитан на нагрузку 1–2 кВт, тогда как современная бытовая техника (стиральная машина, электроплита, кондиционер) потребляет в разы больше.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Никаких оголённых проводов и скруток</h2>
              <p className="mb-4">
                Любое повреждение изоляции — это прямой риск короткого замыкания или удара током. Особенно опасны так называемые «скрутки» — когда два провода просто скручивают между собой без пайки или специальных зажимов.
              </p>
              <p className="mb-4">
                Такие соединения постепенно окисляются, переходное сопротивление растёт, место скрутки нагревается и в итоге воспламеняется. Все соединения должны выполняться только в распределительных коробках с помощью клеммных колодок или пружинных зажимов (Wago).
              </p>

              <div className="bg-red-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl my-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-[#DC2626] shrink-0 mt-1" size={22}/>
                  <p className="m-0 font-medium">Заметили искрение, запах горелой пластмассы или нагрев розетки? Немедленно обесточьте помещение на щитке и вызовите электрика. Не пытайтесь самостоятельно разбирать розетку под напряжением!</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Защита от детей и влаги</h2>
              <p className="mb-4">
                Используйте специальные заглушки для розеток или устанавливайте розетки со встроенными шторками — они блокируют вставку одного контакта без одновременного введения второго. Это надёжно защищает детей от поражения током.
              </p>
              <p className="mb-6">
                В ванных комнатах, на кухне над мойкой и в других влажных зонах используйте только розетки с маркировкой IP44 и выше. Обычные розетки во влажной среде представляют смертельную опасность.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Правильная нагрузка на розетки</h2>
              <p className="mb-4">
                Не включайте несколько мощных приборов в один удлинитель. Максимальная нагрузка на стандартную розетку — 3,5 кВт (при 16А автомате). Если к одному удлинителю подключены чайник (2 кВт), микроволновка (1,5 кВт) и тостер (1 кВт) — суммарная нагрузка 4,5 кВт уже превышает допустимую.
              </p>
              <p className="mb-6">
                Для мощной техники (электроплита, духовой шкаф, бойлер, кондиционер) необходимо прокладывать <strong>отдельные электрические линии</strong> от щитка с индивидуальным автоматическим выключателем.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">УЗО — спасёт жизнь</h2>
              <p className="mb-4">
                Устройство защитного отключения (УЗО) — обязательный элемент современной электрики. Оно срабатывает за 30 миллисекунд при утечке тока всего 30 мА — за это время человек получит неприятный, но не смертельный удар.
              </p>
              <p className="mb-6">
                Установка УЗО в щитке — это инвестиция в безопасность вашей семьи. Стоимость — от 8 000–15 000 тенге вместе с работой, а защищаемая жизнь — бесценна.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10 главных правил электробезопасности</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Не ремонтируйте электроприборы под напряжением — всегда отключайте их от сети",
                  "Не используйте повреждённые шнуры и вилки — замените немедленно",
                  "Не тяните за шнур при извлечении вилки из розетки",
                  "Не оставляйте электрообогреватели без присмотра и вблизи горючих материалов",
                  "Устанавливайте УЗО на все группы в щитке",
                  "Заменяйте алюминиевую проводку на медную при первой возможности",
                  "Не подключайте три и более мощных приборов к одному удлинителю",
                  "Не прокладывайте провода под коврами и паласами",
                  "Вызывайте профессионала для любых работ в электрощите",
                  "Проводите профилактическую проверку проводки раз в 5–7 лет"
                ].map((rule, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{rule}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Когда обязательно нужен электрик?</h2>
              <p className="mb-4">
                Есть ситуации, когда нельзя откладывать вызов специалиста. Немедленно звоните, если:
              </p>
              <ul className="space-y-2 mb-8 list-disc list-inside text-gray-700">
                <li>Лампочки мигают при включении мощной техники</li>
                <li>Из розетки или выключателя слышится треск или запах гари</li>
                <li>Автоматы в щитке постоянно выбивают</li>
                <li>Розетка греется или искрит</li>
                <li>Проводка старше 20–25 лет (особенно алюминиевая)</li>
                <li>Вы делаете ремонт и хотите добавить новые точки питания</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Часто задаваемые вопросы</h2>
              <div className="space-y-5">
                {[
                  { q: "Можно ли самостоятельно менять розетки?", a: "Замену розетки в подрозетнике без вскрытия стен можно сделать самостоятельно, предварительно отключив автомат. Но если нужно добавить новую точку или перенести её — это работа для профессионала." },
                  { q: "Как часто нужно проверять проводку?", a: "Рекомендуется профессиональная диагностика раз в 5–7 лет, а для домов старше 1985 года постройки — раз в 3–5 лет." },
                  { q: "Опасна ли алюминиевая проводка?", a: "Алюминиевый провод со временем становится хрупким, в местах соединений образуется оксид с высоким сопротивлением — это вызывает перегрев. Рекомендуется заменит на медь." },
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
              <h3 className="text-2xl font-bold text-red-700 mb-4 font-extrabold">Безопасность вашего дома — наш приоритет!</h3>
              <p className="text-gray-600 mb-6">Профессиональная диагностика электропроводки в Алматы. Выявим скрытые проблемы до того, как они станут опасными.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+77055535332" className="inline-flex items-center justify-center px-8 py-4 bg-[#DC2626] text-white font-bold rounded-2xl shadow-xl hover:bg-[#B91C1C] transition-all text-lg flex-1">
                  <Phone size={20} className="mr-2" />
                  +7 (705) 553-53-32
                </a>
                <a href="tel:+77074791020" className="inline-flex items-center justify-center px-8 py-4 bg-[#DC2626] text-white font-bold rounded-2xl shadow-xl hover:bg-[#B91C1C] transition-all text-lg flex-1">
                  <Phone size={20} className="mr-2" />
                  +7 (707) 479-10-20
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostSafety;
