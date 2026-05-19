import SEO from "../components/SEO";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import seoData from "../data/seo-data.json";
import { Zap, MapPin, X } from "lucide-react";

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const filteredServices = seoData.services;

  const handleOrderClick = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleDistrictSelect = (districtId: string) => {
    if (selectedService) {
      navigate(`/uslugi/${selectedService}/${districtId}`);
      setSelectedService(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Все услуги электрика в Алматы | Мастер Манас"
        description="Полный перечень электромонтажных услуг электрика в Алматы: замена проводки, установка люстр, сборка щитов, розетки и подключение техники."
        keywords="услуги электрика Алматы, электромонтажные работы Алматы, вызов электрика, замена проводки, установка люстр, сборка электрощита"
        canonical="https://manasmaster.kz/services"
      />

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
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X size={18} className="text-gray-600" />
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} className="text-[#DC2626]" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-1">
                Выберите ваш район
              </h3>
              <p className="text-gray-500 text-sm">
                Согласуем район и удобное время выезда
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {seoData.districts.map((district) => (
                <button
                  key={district.id}
                  onClick={() => handleDistrictSelect(district.id)}
                  className="flex items-center gap-2 p-3 rounded-xl border-2 border-gray-100 hover:border-[#DC2626] hover:bg-red-50 text-left transition-all group"
                >
                  <MapPin size={16} className="text-gray-400 group-hover:text-[#DC2626] shrink-0 transition-colors" />
                  <span className="font-semibold text-sm text-gray-800 group-hover:text-[#DC2626] transition-colors">
                    {district.name}
                  </span>
                </button>
              ))}
            </div>

            <p className="text-center text-xs text-gray-400 mt-5">
              Выезд входит в стоимость заказа
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-[#DC2626] text-white py-16 relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Наши услуги</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Электромонтажные работы в Алматы: проводка, розетки, освещение, щиты и подключение техники.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Zap className="text-[#DC2626]" size={32} />
              Каталог услуг
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Выберите интересующую вас услугу, чтобы узнать подробности. Мы регулярно обновляем оборудование и используем современные технологии.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.alt} 
                    title={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {index < 3 && (
                    <div className="absolute top-4 left-4 bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full z-20 shadow-lg shadow-red-500/30">
                      Популярно
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-1 text-sm line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="block text-2xl font-extrabold text-[#DC2626]">
                          {service.price}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                          <span>⏱️ {service.time}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleOrderClick(service.id)}
                        className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors shadow-md flex items-center gap-1.5"
                      >
                        <MapPin size={14} />
                        Заказать
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg w-fit">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 22-8-4.5v-9L12 4l8 4.5v9Z"/><path d="m9 12 2 2 4-4"/></svg>
                      Гарантия на работу
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-br from-[#DC2626] to-[#991B1B] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Нужна срочная помощь мастера?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto relative z-10">
              Напишите в WhatsApp или позвоните. Уточним задачу, район и удобное время выезда.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a href="tel:+77055535332" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-[#DC2626] bg-white hover:bg-gray-50 shadow-lg transition-all hover:scale-105 flex-1">
                +7 (705) 553-53-32
              </a>
              <a href="tel:+77074791020" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-[#DC2626] bg-white hover:bg-gray-50 shadow-lg transition-all hover:scale-105 flex-1">
                +7 (707) 479-10-20
              </a>
              <a href="https://wa.me/77055535332" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 shadow-lg transition-all hover:scale-105">
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
