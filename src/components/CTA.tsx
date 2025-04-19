import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-12 md:py-24 bg-accent/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                src="https://placekitten.com/200/200"
                alt="Котик приглашает скачать приложение"
                width={200}
                height={200}
                className="rounded-full border-4 border-white shadow-lg"
              />
              <div className="absolute -right-4 -bottom-4">
                <img
                  src="https://placekitten.com/100/100"
                  alt="Маленький котик"
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Готовы начать обмениваться знаниями?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Присоединяйтесь к тысячам учеников и студентов, которые уже используют наше приложение
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/download">Скачать приложение</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Связаться с нами</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <img
                src="https://placekitten.com/80/80"
                alt="Котик с телефоном"
                width={60}
                height={60}
                className="rounded-full mr-3"
              />
              <div>
                <p className="font-medium">iOS и Android</p>
                <p className="text-sm text-muted-foreground">Доступно на обеих платформах</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://placekitten.com/81/81"
                alt="Котик охраняет"
                width={60}
                height={60}
                className="rounded-full mr-3"
              />
              <div>
                <p className="font-medium">Безопасно</p>
                <p className="text-sm text-muted-foreground">Защита данных</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://placekitten.com/82/82"
                alt="Счастливый котик"
                width={60}
                height={60}
                className="rounded-full mr-3"
              />
              <div>
                <p className="font-medium">Бесплатно</p>
                <p className="text-sm text-muted-foreground">Базовая версия всегда бесплатна</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;