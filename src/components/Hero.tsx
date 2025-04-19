import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Обменивайтесь знаниями, <span className="text-accent">учитесь вместе</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Мобильное приложение для быстрого и удобного обмена учебными материалами и заметками между одноклассниками и студентами
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/download">Скачать приложение</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/how-it-works">Узнать больше</Link>
            </Button>
          </div>
          <div className="mt-8 md:mt-12 relative">
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 blur-3xl" />
            <img
              src="/placeholder.svg"
              alt="Мобильное приложение УчиОбмен"
              width={800}
              height={500}
              className="rounded-lg border shadow-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;