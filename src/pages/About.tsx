import SEO from "../components/SEO";
import { Users, Calendar, ShieldCheck, Star, CheckCircle2, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col pt-24 md:pt-32 pb-20">
      <SEO 
        title="О мастере | Электрик в Алматы — Мастер Манас"
        description="Мастер Манас выполняет электромонтажные работы в Алматы: проводка, розетки, освещение, электрощиты и подключение техники."
        keywords="электрик Алматы, о компании, Мастер Манас, электрики Алматы"
        canonical="https://manasmaster.kz/about"
      />
      
      {/* Hero Section */}
      <section className="bg-red-50 py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex gap-2 text-sm text-slate-500 font-medium mb-6">
            <Link to="/" className="hover:text-[#DC2626] transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-slate-900">О компании</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">О мастере Манасе</h1>
        </div>
      </section>

      {/* Наша история */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Наша история</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Мастер Манас занимается электромонтажными работами в Алматы. Основная задача — аккуратно и безопасно решить проблему с электричеством в квартире, доме или офисе.
                </p>
                <div className="my-8 rounded-[2rem] overflow-hidden shadow-lg aspect-video md:aspect-[16/9]">
                  <img 
                src="/images/services/vyzov-elektrika.png" 
                alt="Мастер Манас за работой — профессиональный электрик в Алматы" 
                title="Мастер Манас: электрик в Алматы"
                className="w-full h-full object-cover rounded-2xl shadow-lg border border-gray-100"
              />
                </div>
                <p>
                  Выполняются разные задачи: от замены перегоревшей розетки до прокладки новой линии, установки освещения и сборки электрощита.
                </p>
                <p>
                  В работе используется профессиональный инструмент, а стоимость и порядок работ согласуются до начала.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <Users size={32} strokeWidth={1.5} className="text-[#DC2626] mb-4" />
                <span className="text-3xl font-extrabold text-slate-900 block mb-1">Алматы</span>
                <span className="text-[15px] text-slate-500 font-medium">выезд</span>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <Calendar size={32} strokeWidth={1.5} className="text-[#DC2626] mb-4" />
                <span className="text-3xl font-extrabold text-slate-900 block mb-1">2</span>
                <span className="text-[15px] text-slate-500 font-medium">телефона</span>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <ShieldCheck size={32} strokeWidth={1.5} className="text-[#DC2626] mb-4" />
                <span className="text-[17px] font-extrabold text-slate-900 block mb-1">Гарантия</span>
                <span className="text-[15px] text-slate-500 font-medium">на работы</span>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <Star size={32} strokeWidth={1.5} className="text-[#DC2626] mb-4" />
                <span className="text-[17px] font-extrabold text-slate-900 block mb-1">Отзывы</span>
                <span className="text-[15px] text-slate-500 font-medium">мнения клиентов</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Наши принципы */}
      <section className="py-16 md:py-24 bg-red-50/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Наши принципы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Безопасность", desc: "Перед работой оцениваем задачу и проверяем соединения." },
              { title: "Качество материалов", desc: "Подбираем кабель, автоматы и комплектующие под нагрузку." },
              { title: "Выезд по Алматы", desc: "Согласуем район, адрес и удобное время приезда мастера." },
              { title: "Прозрачность", desc: "Точная смета до начала работ без скрытых расходов." },
              { title: "Гарантия", desc: "Условия гарантии зависят от вида работы и материалов." },
              { title: "Порядок", desc: "Всегда убираем за собой строительный мусор." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                <CheckCircle2 size={28} strokeWidth={2} className="text-green-500 mb-4" />
                <h3 className="text-[17px] font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-[15px] text-slate-500 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Сертификаты и лицензии */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Подход к работе</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Диагностика", desc: "Сначала уточняем проблему и проверяем основные узлы." },
              { title: "Безопасность", desc: "Подбираем решение с учётом нагрузки и состояния проводки." },
              { title: "Аккуратность", desc: "Стараемся выполнять работу чисто и без лишних повреждений." },
              { title: "Качественный инструмент", desc: "Использование профессионального измерительного оборудования и инструмента." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-red-50 text-[#DC2626] rounded-full flex items-center justify-center mb-6">
                  <Award size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-[14px] text-slate-500 font-medium leading-loose">{item.desc}</p>
                <div className="mt-4 inline-block px-3 py-1 bg-green-50 text-green-600 text-[11px] font-bold uppercase tracking-wider rounded-md border border-green-100">
                  Рабочий подход
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
