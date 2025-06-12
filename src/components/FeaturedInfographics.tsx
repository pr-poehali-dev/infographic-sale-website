import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Годовой отчет IT-компании",
      description: "Визуализация роста выручки и ключевых показателей за год",
      category: "Бизнес-отчеты",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      client: "Конфиденциально",
    },
    {
      id: 2,
      title: "Инфографика о здоровом питании",
      description: "Гид по витаминам и минералам для медицинского центра",
      category: "Медицина",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop",
      client: "Клиника 'Здоровье'",
    },
    {
      id: 3,
      title: "Руководство по инвестициям",
      description: "Пошаговая инструкция для начинающих инвесторов",
      category: "Финансы",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      client: "Финансовая группа",
    },
    {
      id: 4,
      title: "Тренды веб-разработки",
      description: "Обзор актуальных технологий и инструментов разработки",
      category: "IT",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      client: "Digital-агентство",
    },
    {
      id: 5,
      title: "Образовательная программа",
      description: "Инфографика о современных методах обучения студентов",
      category: "Образование",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      client: "Университет",
    },
    {
      id: 6,
      title: "Стратегия развития бизнеса",
      description: "Визуализация этапов роста для стартапа",
      category: "Консалтинг",
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop",
      client: "Консалтинговая компания",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Бизнес-отчеты": "bg-blue-100 text-blue-800",
      Медицина: "bg-green-100 text-green-800",
      Финансы: "bg-yellow-100 text-yellow-800",
      IT: "bg-purple-100 text-purple-800",
      Образование: "bg-red-100 text-red-800",
      Консалтинг: "bg-gray-100 text-gray-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            Наши работы
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Примеры созданной нами инфографики для различных отраслей и задач
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <Badge
                  className={`absolute top-3 left-3 ${getCategoryColor(project.category)}`}
                >
                  {project.category}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg line-clamp-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
                <div className="text-sm text-gray-500 mt-2">
                  Клиент: {project.client}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <Button
                  variant="outline"
                  className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                  onClick={() =>
                    (window.location.href =
                      'mailto:info@infographics.ru?subject=Заказ похожей инфографики&body=Здравствуйте! Меня заинтересовала ваша работа "' +
                      project.title +
                      '". Хотел бы заказать похожую инфографику.')
                  }
                >
                  Заказать похожую
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              (window.location.href =
                "mailto:info@infographics.ru?subject=Запрос портфолио&body=Здравствуйте! Хотел бы увидеть больше примеров ваших работ.")
            }
          >
            Показать больше работ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
