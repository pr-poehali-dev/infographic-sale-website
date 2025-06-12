import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const PricingSection = () => {
  const plans = [
    {
      name: "Базовый",
      price: 990,
      period: "месяц",
      description: "Идеально для личных проектов",
      features: [
        "10 скачиваний в месяц",
        "Стандартное качество",
        "Основные форматы",
        "Email поддержка",
      ],
      popular: false,
    },
    {
      name: "Профессиональный",
      price: 2490,
      period: "месяц",
      description: "Для бизнеса и агентств",
      features: [
        "50 скачиваний в месяц",
        "Высокое качество",
        "Все форматы + исходники",
        "Приоритетная поддержка",
        "Коммерческая лицензия",
      ],
      popular: true,
    },
    {
      name: "Корпоративный",
      price: 4990,
      period: "месяц",
      description: "Для крупных команд",
      features: [
        "Безлимитные скачивания",
        "Максимальное качество",
        "Эксклюзивный контент",
        "Персональный менеджер",
        "API доступ",
        "Корпоративная лицензия",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            Выберите ваш план
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Гибкие тарифы для любых задач — от личных проектов до корпоративных
            решений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                plan.popular ? "border-purple-500 shadow-lg scale-105" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute top-4 right-4 bg-purple-600">
                  Популярный
                </Badge>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-montserrat">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-purple-600">
                    {plan.price.toLocaleString()}₽
                  </span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 flex-shrink-0"
                    />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}

                <Button
                  className={`w-full mt-6 ${
                    plan.popular
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Все планы включают 14-дневную гарантию возврата средств
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
