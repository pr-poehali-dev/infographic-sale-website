import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    const emailSubject = `Заказ инфографики от ${data.name}`;
    const emailBody = `
Имя: ${data.name}
Email: ${data.email}
Компания: ${data.company}
Тип проекта: ${data.projectType}
Бюджет: ${data.budget}
Срок: ${data.deadline}

Описание проекта:
${data.description}
    `;

    window.location.href = `mailto:info@infographics.ru?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-montserrat">
              Оставьте заявку на создание инфографики
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Расскажите о своем проекте, и мы свяжемся с вами в течение 24
              часов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Форма заказа</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Имя *</Label>
                        <Input id="name" name="name" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Компания</Label>
                      <Input id="company" name="company" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Тип проекта *</Label>
                        <Select name="projectType" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите тип" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="business-report">
                              Бизнес-отчет
                            </SelectItem>
                            <SelectItem value="marketing">
                              Маркетинговые материалы
                            </SelectItem>
                            <SelectItem value="education">
                              Образовательный контент
                            </SelectItem>
                            <SelectItem value="data-viz">
                              Визуализация данных
                            </SelectItem>
                            <SelectItem value="social-media">
                              Контент для соцсетей
                            </SelectItem>
                            <SelectItem value="presentation">
                              Презентация
                            </SelectItem>
                            <SelectItem value="other">Другое</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Бюджет</Label>
                        <Select name="budget">
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите бюджет" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5000-15000">
                              5 000 - 15 000 ₽
                            </SelectItem>
                            <SelectItem value="15000-30000">
                              15 000 - 30 000 ₽
                            </SelectItem>
                            <SelectItem value="30000-50000">
                              30 000 - 50 000 ₽
                            </SelectItem>
                            <SelectItem value="50000+">50 000+ ₽</SelectItem>
                            <SelectItem value="discuss">Обсудим</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="deadline">Желаемый срок</Label>
                      <Input
                        id="deadline"
                        name="deadline"
                        placeholder="Например: 2 недели, к 15 числу"
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">Описание проекта *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        rows={4}
                        placeholder="Расскажите подробнее о вашем проекте: цели, аудитория, стиль, количество элементов..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                      <Icon name="Send" size={18} />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" size={20} className="text-purple-600" />
                    Контакты
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600">info@infographics.ru</div>
                  </div>
                  <div>
                    <div className="font-medium">Телефон</div>
                    <div className="text-gray-600">+7 (900) 123-45-67</div>
                  </div>
                  <div>
                    <div className="font-medium">Время ответа</div>
                    <div className="text-gray-600">В течение 24 часов</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" size={20} className="text-purple-600" />
                    Процесс работы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div className="text-sm">Обсуждение задач и сроков</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div className="text-sm">Создание концепции</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div className="text-sm">Дизайн и согласование</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div className="text-sm">Доработка и передача</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
