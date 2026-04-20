import { Link, useNavigate } from "react-router-dom";
import seoData from "../data/seo-data.json";
import SEO from "../components/SEO";
import { Clock, ShieldCheck, ThumbsUp, Zap, MapPin, Star, ArrowRight, CheckCircle2, Calendar, Phone, Award } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Заявка с сайта!\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nУслуга: ${formData.service}${formData.message ? `\nСообщение: ${formData.message}` : ""}`
    );
    window.open(`https://wa.me/77055535332?text=${msg}`, "_blank");
  };

  const handleDistrictSelect = (districtId: string) => {
    if (selectedService) {
      navigate(`/uslugi/${selectedService}/${districtId}`);
      setSelectedService(null);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Электрик Алматы | Вызвать электрика 24/7 — Услуги электрика и электромонтажные работы"
        description="Профессиональные услуги электрика в Алматы. Срочный выезд электрика на дом 24/7 за 30 минут. Электромонтажные работы любой сложности: ремонт проводки, установка люстры, сборка щита."
        keywords="Электрик Алматы, электрик, электромонтажные работы, вызвать электрика, электрик круглосуточно, услуги электрика в Алматы, ремонт проводки, установка люстр, монтаж розеток, электрик на дом, аварийный электрик"
        canonical="https://manasmaster.kz/"
      />

      {/* Schema.org for Electrician */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Electrician",
          "name": "Мастер Манас — Электрик Алматы",
          "image": "https://manasmaster.kz/images/hero_electrician.png",
          "url": "https://manasmaster.kz",
          "telephone": ["+77055535332", "+77074791020"],
          "priceRange": "₸₸",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "мкр. Аксай 4-11",
            "addressLocality": "Almaty",
            "addressCountry": "KZ"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 43.238949,
            "longitude": 76.889709
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги электрика",
            "itemListElement": seoData.services.map(s => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": s.title,
                "description": s.description
              },
              "price": s.price.replace(/[^0-9]/g, ''),
              "priceCurrency": "KZT"
            }))
          }
        })}
      </script>

      {/* Hero Section */}
      <section className="relative min-h-[650px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero_electrician.png')" }}
          title="Мастер Манас выполняет электромонтажные работы"
        >
          <div className="absolute inset-0 bg-gray-900/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Профессиональные услуги <br /> электрика в Алматы
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed font-medium">
              Профессиональные электромонтажные работы с гарантией до 12 месяцев. Выезд во все районы Алматы.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+77055535332" className="bg-gradient-to-r from-[#DC2626] to-[#E11D48] text-white px-10 py-5 rounded-[1.5rem] font-bold text-lg shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 hover:-translate-y-1 active:scale-95 transition-all duration-300">
            Вызвать мастера
          </a>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-6 py-4 rounded-xl flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"></span>
                Выезд и диагностика БЕСПЛАТНО!
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl">
            {[
              { value: "1000+", label: "клиентов" },
              { value: "10 лет", label: "на рынке" },
              { value: "24/7", label: "работаем" },
              { value: "127", label: "отзывов" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center text-white">
                <div className="text-3xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-[13px] font-medium opacity-80 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* District Selection Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div
            className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 text-xl font-bold"
            >
              ✕
            </button>
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} className="text-[#DC2626]" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-1">Выберите ваш район</h3>
              <p className="text-gray-500 text-sm">Мастер приедет в течение 30–40 минут</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {seoData.districts.map((district) => (
                <button
                  key={district.id}
                  onClick={() => handleDistrictSelect(district.id)}
                  className="flex items-center gap-2 p-3 rounded-xl border-2 border-gray-100 hover:border-[#DC2626] hover:bg-red-50 text-left transition-all group"
                >
                  <MapPin size={16} className="text-gray-400 group-hover:text-[#DC2626] shrink-0 transition-colors" />
                  <span className="font-semibold text-sm text-gray-800 group-hover:text-[#DC2626] transition-colors">{district.name}</span>
                </button>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-5">
              Выезд и диагностика — <span className="font-bold text-[#DC2626]">бесплатно</span> при заказе работ
            </p>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Популярные услуги</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoData.services.slice(0, 8).map((service, index) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className="bg-white rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.alt} 
                    title={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {index < 4 && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#DC2626] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Популярно
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[#DC2626] mb-3">
                    <Zap size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{service.title}</h3>
                  <p className="text-[13px] text-slate-500 font-medium leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-50">
                    <span className="text-[#DC2626] font-extrabold">от {service.price}</span>
                    <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#DC2626] group-hover:text-white transition-colors">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-3.5 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors">
              Все услуги
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Почему выбирают нас</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Быстрый приезд", desc: "Мастер будет у вас в течение 30-45 минут после звонка." },
              { icon: ShieldCheck, title: "Гарантия качества", desc: "Даем официальную гарантию до 12 месяцев на все работы." },
              { icon: ThumbsUp, title: "Опытные мастера", desc: "Стаж работы наших специалистов не менее 7 лет." },
              { icon: CheckCircle2, title: "Честные цены", desc: "Озвучиваем стоимость до начала работ, никаких скрытых доплат." },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-[1.5rem] border border-slate-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white text-[#DC2626] rounded-2xl flex items-center justify-center shadow-sm mb-5">
                  <item.icon size={26} strokeWidth={2} />
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-[14px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional History / About Short */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">О компании "Мастер Манас"</h2>
              <div className="space-y-4 text-[16px] text-slate-600 font-medium leading-relaxed mb-8">
                <p>Мы работаем на рынке Алматы более 10 лет. За это время мы сформировали команду профессиональных электриков, которые обожают свое дело и ценят доверие клиентов.</p>
                <p>Наша цель — качественный электромонтаж по разумной цене, где вы получаете надежность и безопасность для своего дома.</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Только сертифицированные материалы",
                  "Свой профессиональный инструмент",
                  "Чистота и порядок после работы",
                  "Работаем круглосуточно, без выходных"
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-[15px] font-bold text-slate-800">
                    <CheckCircle2 size={20} className="text-green-500" />
                    {li}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center gap-2 text-[#DC2626] font-bold text-[15px] hover:gap-3 transition-all">
                Подробнее о нас <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg">
                <img 
                  src="/images/hero_electrician.png" 
                  alt="Мастер Манас - профессиональный электрик с опытом более 10 лет" 
                  title="Опытный электрик Манас - стаж более 10 лет"
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-6 -left-8 bg-[#f8f9fc] px-8 py-5 rounded-[1.5rem] shadow-xl border border-white hidden md:block z-10">
                <div className="flex items-center gap-5">
                  <div className="w-[52px] h-[52px] bg-red-50 text-[#DC2626] rounded-full flex items-center justify-center shrink-0">
                    <Award size={26} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[22px] font-extrabold text-slate-900 leading-none mb-1">№1</div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Выбор клиентов Алматы</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Отзывы клиентов</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { bg: "bg-[#DC2626]", letter: "А", name: "Айгуль С.", date: "15 янв 2025", text: "Вызывала электрика для замены проводки и установки новых розеток. Мастер приехал через 25 минут, всё сделал аккуратно и быстро. Цены адекватные. Рекомендую!", rating: 5 },
              { bg: "bg-green-500", letter: "К", name: "Кайрат М.", date: "10 фев 2025", text: "Отличный мастер! Собрал электрощит в коттедже и подключил всё оборудование. Работает чисто, всё объяснил. Гарантию дал на год. Очень доволен.", rating: 5 },
              { bg: "bg-purple-500", letter: "Н", name: "Наталья П.", date: "28 фев 2025", text: "Срочно нужно было повесить люстры и бра после ремонта в выходной. Манас приехал за 30 минут, всё закрепил надежно. Мастер на все руки!", rating: 5 },
            ].map((review) => (
              <div key={review.name} className="bg-slate-50 rounded-[1.5rem] p-8 border border-slate-100">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${review.bg} rounded-full flex items-center justify-center text-white font-bold`}>
                      {review.letter}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-[15px]">{review.name}</div>
                      <div className="text-[12px] text-slate-400 font-medium">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 text-[14px] leading-relaxed">"{review.text}"</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews" className="inline-flex items-center justify-center border-2 border-slate-200 text-slate-700 font-bold px-8 py-3 rounded-xl hover:bg-slate-50 transition-colors btn-floating-white">
              Все отзывы
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Form (Вызвать мастера Form) */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#DC2626] rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#DC2626] rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Нужен грамотный специалист?</h2>
              <p className="text-lg text-slate-300 font-medium mb-10 leading-relaxed">
                Оставьте заявку, и наш менеджер свяжется с вами в течение 5 минут для уточнения деталей. 
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone size={24} className="text-[#FB7185]" />
                  </div>
                  <div>
                    <div className="text-[13px] text-slate-400 font-medium mb-1">Звоните круглосуточно</div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                      <a href="tel:+77055535332" className="text-xl font-extrabold block hover:text-[#FB7185] transition-colors">+7 705 553 53 32</a>
                      <a href="tel:+77074791020" className="text-xl font-extrabold block hover:text-[#FB7185] transition-colors">+7 707 479 10 20</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin size={24} className="text-[#FB7185]" />
                  </div>
                  <div>
                    <div className="text-[13px] text-slate-400 font-medium mb-1">Наш адрес</div>
                    <div className="text-[15px] font-bold">г. Алматы, мкр. Аксай 4-11</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl text-slate-900">
              <h3 className="text-2xl font-extrabold mb-6">Оставить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1.5">Ваше имя</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#DC2626] font-medium text-sm transition-all" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1.5">Телефон</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#DC2626] font-medium text-sm transition-all" required />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-1.5">Услуга</label>
                  <select id="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#DC2626] font-medium text-sm transition-all" required>
                    <option value="" disabled>Что нужно сделать?</option>
                    <option value="wiring">Замена проводки</option>
                    <option value="shield">Сборка щита</option>
                    <option value="lighting">Освещение</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-4 bg-[#DC2626] text-white font-bold rounded-xl hover:bg-[#B91C1C] transition-colors mt-2">
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Часто задаваемые вопросы</h2>
            <p className="text-slate-500 mt-3 text-lg">Ответы на самые популярные вопросы наших клиентов</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { q: "Сколько стоит вызов электрика в Алматы?", a: "Стоимость вызова электрика начинается от 3 500 ₸. Выезд и диагностика — бесплатно при заказе работ. Точная цена озвучивается до начала работ после осмотра." },
              { q: "Как быстро приедет мастер?", a: "Мастер приедет в любой район Алматы в течение 30–40 минут после звонка. Работаем круглосуточно, 7 дней в неделю, без выходных и праздников." },
              { q: "Даёте ли гарантию на электромонтажные работы?", a: "Да, мы предоставляем официальную письменную гарантию до 12 месяцев на все виды выполненных электромонтажных работ." },
              { q: "Какие районы Алматы вы обслуживаете?", a: "Обслуживаем все 8 районов: Алатауский, Алмалинский, Ауэзовский, Бостандыкский, Жетысуский, Медеуский, Наурызбайский и Турксибский." },
              { q: "Можно ли вызвать электрика ночью?", a: "Да! Работаем 24/7, включая ночные часы и праздники. Аварийный выезд — в течение 30 минут. Дополнительная наценка за ночное время не взимается." },
              { q: "Какие материалы вы используете?", a: "Только сертифицированные кабели и комплектующие от проверенных производителей: ABB, Schneider Electric, Legrand, IEK. На материалы предоставляем гарантию производителя." },
              { q: "Подключаете ли электроплиты и бойлеры?", a: "Да, подключаем все виды мощной бытовой техники: электроплиты, духовые шкафы, бойлеры, кондиционеры. При необходимости прокладываем отдельную силовую линию." },
              { q: "Выписываете ли вы чек или договор?", a: "Да, по желанию клиента предоставляем договор на выполнение работ и кассовый чек. Работаем официально, с гарантийным талоном." },
              { q: "Нужно ли убирать после работы самому?", a: "Нет. После завершения все работ мастер самостоятельно убирает строительный мусор и пыль. Мы оставляем квартиру в чистоте." },
              { q: "Можно ли вызвать электрика на дачу или в частный дом?", a: "Да, выезжаем не только по Алматы, но и в пригород: Алатау, Каскелен, Талгар, Есик. Стоимость выезда за город уточняется индивидуально." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
                <h3 className="font-bold text-slate-900 text-[16px] mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-red-50 text-[#DC2626] rounded-full flex items-center justify-center text-sm font-extrabold">{i + 1}</span>
                  {item.q}
                </h3>
                <p className="text-slate-600 text-[14px] leading-relaxed pl-10">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Text Block — expanded */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 text-center">
            Электрик в Алматы — вызов мастера 24/7 | Мастер Манас
          </h2>
          <p className="text-center text-slate-500 text-[15px] mb-10 max-w-2xl mx-auto">
            Профессиональные электромонтажные работы с гарантией 12 месяцев. Работаем по всем районам Алматы.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[14px] text-slate-600 leading-relaxed">

            {/* Left column — services */}
            <div className="space-y-4">
              <h3 className="text-[17px] font-bold text-slate-900">Электромонтажные работы в Алматы</h3>
              <p>
                Если вам нужно <strong>вызвать электрика в Алматы</strong> срочно — мастер приедет за 30–40 минут в любой район.
                Компания «Мастер Манас» выполняет полный спектр <strong>электромонтажных работ</strong>: от замены розетки и
                установки люстры до монтажа новой проводки под ключ и сборки электрощита.
              </p>
              <p>
                Наши <strong>услуги электрика в Алматы</strong> включают подключение мощной бытовой техники (электроплиты, бойлеры,
                кондиционеры), монтаж тёплых полов, установку зарядных станций для электромобилей и систем аварийного освещения.
                Все работы выполняются по нормам ПУЭ с официальной гарантией до 12 месяцев.
              </p>
              <p>
                Мы работаем с 2015 года и выполнили более <strong>1 000 объектов</strong> — квартиры, частные дома, офисы и
                коммерческие помещения. <strong>Выезд и диагностика — бесплатно</strong> при заказе работ.
              </p>
              <h3 className="text-[16px] font-bold text-slate-900 pt-2">Популярные услуги электрика</h3>
              <ul className="space-y-1.5">
                {[
                  { label: "Вызов электрика на дом в Алматы", to: "/uslugi/vyzov-elektrika/medeuski" },
                  { label: "Замена и ремонт электропроводки", to: "/uslugi/zamena-provodki/bostandykski" },
                  { label: "Установка люстр и светильников", to: "/uslugi/ustanovka-lyustr/almalinskij" },
                  { label: "Монтаж и замена электрощита", to: "/uslugi/sborka-schitov/auezovskyj" },
                  { label: "Установка розеток и выключателей", to: "/uslugi/rozetki-vyklyuchateli/zhetysuski" },
                  { label: "Подключение бытовой техники", to: "/uslugi/podkluchenie-tehniki/bostandykski" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-[#DC2626] hover:underline font-medium">→ {item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column — districts */}
            <div className="space-y-4">
              <h3 className="text-[17px] font-bold text-slate-900">Электрик по районам Алматы</h3>
              <p>
                Наши мастера работают во всех 8 районах Алматы без исключения.
                <strong> Электрик в Медеуском районе</strong>, <strong>Бостандыкском</strong>, <strong>Алмалинском</strong> и других —
                приедет к вам за 30–45 минут после звонка. Мы знаем особенности застройки каждого района:
                от старых хрущёвок в центре с алюминиевой проводкой до новостроек в Наурызбайском и частного
                сектора в Алатауском.
              </p>
              <p>
                Независимо от района, вы получаете одинаково высокое качество: опытный мастер-<strong>электрик</strong>,
                качественные материалы, честный прайс и гарантия на работу. Позвоните нам:{" "}
                <a href="tel:+77055535332" className="text-[#DC2626] font-bold">+7 (705) 553-53-32</a>{" или "}
                <a href="tel:+77074791020" className="text-[#DC2626] font-bold">+7 (707) 479-10-20</a>.
              </p>
              <h3 className="text-[16px] font-bold text-slate-900 pt-2">Выбрать район</h3>
              <ul className="grid grid-cols-2 gap-1.5">
                {[
                  { label: "Медеуский район", to: "/uslugi/vyzov-elektrika/medeuski" },
                  { label: "Бостандыкский", to: "/uslugi/vyzov-elektrika/bostandykski" },
                  { label: "Алмалинский", to: "/uslugi/vyzov-elektrika/almalinskij" },
                  { label: "Ауэзовский", to: "/uslugi/vyzov-elektrika/auezovskyj" },
                  { label: "Жетысуский", to: "/uslugi/vyzov-elektrika/zhetysuski" },
                  { label: "Алатауский", to: "/uslugi/vyzov-elektrika/alatauski" },
                  { label: "Наурызбайский", to: "/uslugi/vyzov-elektrika/nauryzbaiski" },
                  { label: "Турксибский", to: "/uslugi/vyzov-elektrika/turksibski" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-[#DC2626] hover:underline font-medium text-[13px]">→ {item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full relative">
        <iframe 
          src="https://yandex.ru/map-widget/v1/?ll=76.928610%2C43.238949&z=11" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          allowFullScreen={true}
          className="absolute inset-0 grayscale contrast-125 opacity-90 sepia-[.2]"
          title="Карта обслуживания электрика в Алматы"
        ></iframe>
      </section>
      
    </div>
  );
};

export default Index;
