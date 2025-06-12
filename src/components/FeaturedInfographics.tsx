import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const FeaturedInfographics = () => {
  const infographics = [
    {
      id: 1,
      title: "Статистика социальных сетей 2024",
      description:
        "Современная инфографика с актуальными данными по всем популярным платформам",
      category: "Маркетинг",
      price: 590,
      rating: 4.8,
      downloads: 1234,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Здоровое питание: гид по витаминам",
      description:
        "Красочная схема витаминов и минералов с источниками питания",
      category: "Здоровье",
      price: 450,
      rating: 4.9,
      downloads: 856,
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Финансовая грамотность для начинающих",
      description: "Пошаговое руководство по управлению личными финансами",
      category: "Финансы",
      price: 720,
      rating: 4.7,
      downloads: 2103,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Тренды веб-дизайна 2024",
      description: "Актуальные направления в UI/UX дизайне с примерами",
      category: "Технологии",
      price: 890,
      rating: 4.9,
      downloads: 945,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Методы обучения студентов",
      description: "Эффективные подходы к образованию в современном мире",
      category: "Образование",
      price: 380,
      rating: 4.6,
      downloads: 678,
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Стратегии роста бизнеса",
      description: "Проверенные методы масштабирования компании",
      category: "Бизнес",
      price: 650,
      rating: 4.8,
      downloads: 1567,
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Маркетинг: "bg-blue-100 text-blue-800",
      Здоровье: "bg-green-100 text-green-800",
      Финансы: "bg-yellow-100 text-yellow-800",
      Технологии: "bg-purple-100 text-purple-800",
      Образование: "bg-red-100 text-red-800",
      Бизнес: "bg-gray-100 text-gray-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            Популярная инфографика
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Самые скачиваемые и высоко оцененные шаблоны от наших дизайнеров
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infographics.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <Badge
                  className={`absolute top-3 left-3 ${getCategoryColor(item.category)}`}
                >
                  {item.category}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg line-clamp-2">
                  {item.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-3">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Icon
                      name="Star"
                      size={14}
                      className="text-yellow-500 fill-current"
                    />
                    <span>{item.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Download" size={14} />
                    <span>{item.downloads.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <div className="text-2xl font-bold text-purple-600">
                  {item.price}₽
                </div>
                <Button size="sm">
                  <Icon name="ShoppingCart" size={14} />
                  Купить
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Показать еще
            <Icon name="ChevronDown" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInfographics;
