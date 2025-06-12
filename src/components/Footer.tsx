import Icon from "@/components/ui/icon";

const Footer = () => {
  const footerSections = [
    {
      title: "Продукт",
      links: [
        "Каталог инфографики",
        "Новые поступления",
        "Популярное",
        "Скидки",
      ],
    },
    {
      title: "Категории",
      links: ["Бизнес", "Маркетинг", "Образование", "Здоровье", "Технологии"],
    },
    {
      title: "Поддержка",
      links: ["Центр помощи", "Контакты", "Лицензии", "API документация"],
    },
    {
      title: "Компания",
      links: ["О нас", "Блог", "Карьера", "Пресс-центр"],
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
                InfoMarket
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Премиум маркетплейс инфографики для профессионалов и творческих
              проектов.
            </p>
            <div className="flex gap-4">
              <Icon
                name="Mail"
                size={20}
                className="text-gray-400 hover:text-purple-400 cursor-pointer transition-colors"
              />
              <Icon
                name="Phone"
                size={20}
                className="text-gray-400 hover:text-purple-400 cursor-pointer transition-colors"
              />
              <Icon
                name="MessageCircle"
                size={20}
                className="text-gray-400 hover:text-purple-400 cursor-pointer transition-colors"
              />
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
            © 2024 InfoMarket. Все права защищены.
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
              Условия использования
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
