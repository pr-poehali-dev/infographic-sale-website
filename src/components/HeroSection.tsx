import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 font-montserrat">
          Премиум инфографика для ваших проектов
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Тысячи профессиональных шаблонов инфографики. Скачивайте, редактируйте
          и используйте для презентаций, отчетов и маркетинговых материалов.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Icon name="Search" size={18} />
            Найти инфографику
          </Button>
          <Button variant="outline" size="lg">
            <Icon name="Play" size={18} />
            Как это работает
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-purple-600">5000+</div>
            <div className="text-sm text-gray-600">Шаблонов</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">100K+</div>
            <div className="text-sm text-gray-600">Скачиваний</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">24/7</div>
            <div className="text-sm text-gray-600">Поддержка</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
