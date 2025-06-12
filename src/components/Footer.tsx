import Icon from "@/components/ui/icon";

const Footer = () => {
  const footerSections = [
    {
      title: "Услуги",
      links: [
        "Бизнес-отчеты",
        "Маркетинговые материалы",
        "Образовательный контент",
        "Визуализация данных",
      ],
    },
    {
      title: "Портфолио",
      links: ["Примеры работ", "Кейсы клиентов", "Отзывы", "Награды"],
    },
    {
      title: "Процесс",
      links: ["Как мы работаем", "Сроки выполнения", "Стоимость", "Гарантии"],
    },
    {
      title: "Контакты",
      links: [
        "Оставить заявку",
        "Связаться с нами",
        "Офис в Москве",
        "Вакансии",
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="BarChart3" size={24} className="text-purple-400" />
              <span className="text-xl font-bold font-montserrat">
                InfoDesign
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Студия создания уникальной инфографики для бизнеса. Персональный
              подход к каждому проекту.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Mail" size={16} className="text-purple-400" />
                <span className="text-gray-400">info@infographics.ru</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Phone" size={16} className="text-purple-400" />
                <span className="text-gray-400">+7 (900) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Clock" size={16} className="text-purple-400" />
                <span className="text-gray-400">Ответ в течение 24 часов</span>
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 InfoDesign. Все права защищены.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Условия сотрудничества
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
