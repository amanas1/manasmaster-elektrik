import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Zap, Phone, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostWiring = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Признаки неисправной проводки: когда вызывать электрика | Мастер Манас Алматы"
        description="Как распознать неисправную электропроводку в квартире или доме? Основные признаки: мигание ламп, нагрев розеток, запах гари. Советы профессионального электрика Алматы."
        keywords="неисправная проводка, признаки плохой проводки, ремонт проводки Алматы, замена электропроводки, электрик Алматы проводка"
        canonical="https://manasmaster.kz/blog/wiring"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Признаки неисправной проводки: когда звать мастера",
          "description": "Как понять, что ваша проводка требует ремонта или замены.",
          "datePublished": "2024-03-14",
          "dateModified": "2025-01-10",
          "author": { "@type": "Person", "name": "Манас" },
          "publisher": { "@type": "Organization", "name": "Мастер Манас" },
          "image": "https://manasmaster.kz/images/blog/wiring.png",
          "mainEntityOfPage": "https://manasmaster.kz/blog/wiring"
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
                src="/images/blog/wiring.png" 
                alt="Диагностика неисправной электропроводки в квартире Алматы" 
                title="Признаки неисправности проводки — Мастер Манас"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Ремонт</span>
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Опасно</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Признаки неисправной проводки: когда звать мастера
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 14 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 text-gray-700 font-medium leading-relaxed">
              <p className="text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">
                Скрытая проводка часто напоминает о себе только тогда, когда становится слишком поздно. Умение распознать первые признаки неисправности — это навык, который может спасти вашу квартиру и жизнь.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Почему важно вовремя диагностировать проводку?</h2>
              <p className="mb-4">
                В большинстве многоквартирных домов Алматы, построенных до 1990-х годов, используется <strong>алюминиевая проводка</strong> с сечением 1,5–2,5 мм². Такая проводка рассчитана на нагрузку 2–4 кВт, тогда как современная бытовая техника одной квартиры может потреблять 10–15 кВт.
              </p>
              <p className="mb-6">
                Перегруженная алюминиевая проводка перегревается, изоляция плавится, а это прямой путь к пожару. По данным МЧС РК, более 25% пожаров в жилом секторе связаны с неисправной электропроводкой.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Первый признак: мигающий свет</h2>
              <p className="mb-4">
                Если лампочки мигают или заметно тускнеют при включении мощных приборов (чайник, стиральная машина, фен), это сигнализирует о <strong>недостаточном сечении кабеля</strong> или плохом контакте в распределительной коробке.
              </p>
              <p className="mb-6">
                Мигание может также указывать на проблемы с автоматическим выключателем, который не справляется с нагрузкой. В любом случае — это повод вызвать электрика для диагностики.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Признак №2: Странные звуки и запахи</h2>
              <p className="mb-4">
                Треск, гудение или жужжание внутри розетки или выключателя — это <strong>критические сигналы</strong>. Они говорят о плохом контакте, дуговом разряде или начале пробоя изоляции.
              </p>
              <p className="mb-6">
                Запах горелой пластмассы или палёной резины — особенно опасный признак. Нередко он появляется, когда внутри стены уже идёт тление. Немедленно отключите автомат этой линии в щитке и вызовите специалиста.
              </p>

              <div className="bg-red-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl my-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-[#DC2626] shrink-0 mt-1" size={22}/>
                  <p className="m-0 font-medium">Ваша проводка старше 20 лет? Стоит провести профилактическую диагностику. Алюминиевые провода имеют ограниченный срок службы. При заказе ремонта выезд входит в стоимость работ.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Признак №3: Тёплые или искрящие розетки</h2>
              <p className="mb-4">
                Розетка должна оставаться холодной при работе. Если она тёплая или горячая — <strong>это аварийная ситуация</strong>. Причина: ослабленный контакт, перегруженная линия или начало разрушения внутренней клеммы.
              </p>
              <p className="mb-6">
                Искра при вставке вилки — небольшая и кратковременная — это нормальная реакция при подключении. Но если искра большая, щёлкает или чувствуется разряд в пальцы — розетку нужно немедленно заменить.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Признак №4: Из строя выбивает автоматы</h2>
              <p className="mb-4">
                Автоматический выключатель срабатывает при перегрузке или коротком замыкании. Если он выбивает регулярно — это не «капризы автомата», а сигнал о реальной проблеме в сети.
              </p>
              <p className="mb-6">
                Опасная практика — заменить автомат на более мощный. Например, поставить автомат 25А на линию с кабелем 1,5 мм² (который рассчитан на 16А). В этом случае кабель будет гореть раньше, чем автомат успеет сработать.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Признак №5: Тёмные пятна вокруг розеток</h2>
              <p className="mb-6">
                Почернение или оплавление пластика вокруг розетки или выключателя — явный признак того, что там уже было возгорание или сильный перегрев. Такую розетку нужно заменить незамедлительно, а причину — устранить.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Сколько стоит ремонт проводки в Алматы?</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-red-50">
                      <th className="text-left p-4 font-bold text-gray-900 rounded-tl-lg">Вид работы</th>
                      <th className="text-right p-4 font-bold text-gray-900 rounded-tr-lg">Стоимость</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Диагностика проводки", "Бесплатно при заказе работ"],
                      ["Поиск обрыва/замыкания", "от 8 000 ₸"],
                      ["Замена розетки/выключателя", "от 1 500 ₸"],
                      ["Частичная замена проводки (1 линия)", "от 10 000 ₸"],
                      ["Полная замена проводки (1 комн.)", "от 45 000 ₸"],
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
                  { q: "Можно ли жить в квартире с неисправной проводкой?", a: "Можно, но крайне рискованно. Если проводка перегружена или есть явные признаки неисправности — старайтесь минимизировать нагрузку и как можно скорее вызовите электрика." },
                  { q: "Сколько служит медная проводка?", a: "Качественная медная проводка в нормальных условиях служит 40–50 лет. Регулярная диагностика и соблюдение нагрузок продлевают этот срок." },
                  { q: "Как проверить состояние скрытой проводки?", a: "Профессиональная диагностика включает замер сопротивления изоляции мегомметром и трассировку кабелей специальным детектором. Самостоятельно это сделать качественно невозможно." },
                ].map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 rounded-2xl p-8 text-white mt-10">
                <h3 className="font-bold text-xl mb-3">Нужна <Link to="/uslugi/remont-provodki/almalinskij" className="text-red-400 hover:underline">замена или ремонт проводки в Алматы</Link>?</h3>
                <p className="text-slate-300 text-sm">Мастер проверит проблему, объяснит возможное решение и согласует стоимость до начала работ. Выезд по районам Алматы.</p>
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-red-700 mb-4 font-extrabold">Проверьте безопасность своей проводки сегодня!</h3>
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

export default BlogPostWiring;
