import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      title: "Бизнес-отчеты",
      description: "Визуализируем финансовые данные, статистику продаж и KPI",
      icon: "TrendingUp",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Маркетинговые материалы",
      description: "Создаем инфографику для рекламных кампаний и соцсетей",
      icon: "Megaphone",
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Образовательный контент",
      description: "Делаем сложную информацию понятной и запоминающейся",
      icon: "GraduationCap",
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Визуализация данных",
      description: "Превращаем числа в наглядные графики и диаграммы",
      icon: "BarChart3",
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Контент для соцсетей",
      description: "Создаем яркие посты, которые привлекают внимание",
      icon: "Share2",
      color: "bg-pink-50 text-pink-600",
    },
    {
      title: "Презентации",
      description: "Оформляем презентации, которые запоминаются",
      icon: "Monitor",
      color: "bg-indigo-50 text-indigo-600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            Что мы создаем
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг по созданию инфографики для любых задач вашего
            бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-0 shadow-sm"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}
                >
                  <Icon name={service.icon as any} size={24} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
