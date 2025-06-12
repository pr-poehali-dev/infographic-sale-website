import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 font-montserrat">
          Создаем уникальную инфографику для вашего бизнеса
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Персональный подход к каждому проекту. Превращаем сложные данные в
          понятную и красивую инфографику, которая выделит ваш бренд среди
          конкурентов.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Icon name="Mail" size={18} />
            Заказать дизайн
          </Button>
          <Button variant="outline" size="lg">
            <Icon name="Eye" size={18} />
            Посмотреть работы
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-purple-600">200+</div>
            <div className="text-sm text-gray-600">Проектов</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">24ч</div>
            <div className="text-sm text-gray-600">Ответ на заявку</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">100%</div>
            <div className="text-sm text-gray-600">Уникальность</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
