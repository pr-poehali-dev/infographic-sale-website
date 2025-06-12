import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const CategoryFilters = () => {
  const categories = [
    { name: "Все", count: 5000, icon: "Grid3X3" },
    { name: "Бизнес", count: 1200, icon: "Briefcase" },
    { name: "Маркетинг", count: 850, icon: "TrendingUp" },
    { name: "Образование", count: 900, icon: "GraduationCap" },
    { name: "Здоровье", count: 650, icon: "Heart" },
    { name: "Технологии", count: 750, icon: "Cpu" },
    { name: "Финансы", count: 540, icon: "DollarSign" },
    { name: "Путешествия", count: 320, icon: "Plane" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-montserrat">
          Популярные категории
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={`px-4 py-2 text-sm cursor-pointer transition-all hover:scale-105 ${
                index === 0
                  ? "bg-purple-600 text-white"
                  : "hover:bg-purple-50 hover:border-purple-300"
              }`}
            >
              <Icon name={category.icon as any} size={14} />
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilters;
