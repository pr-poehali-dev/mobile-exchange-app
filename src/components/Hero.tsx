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
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <img
                src="https://cdn.poehali.dev/files/42362eba-34c0-4fa3-b397-8df50c3b37d3.jpeg"
                alt="Котик учится с приложением"
                width={500} 
                height={350}
                className="rounded-lg border shadow-xl mx-auto object-contain bg-white max-w-[500px]"
              />
              <div className="absolute -bottom-6 right-0 md:right-[15%] lg:right-[25%] md:relative">
                <img
                  src="https://cdn.poehali.dev/files/94c63aa0-2ff5-4456-8266-f76d7270ea0b.jpeg"
                  alt="Котик с книгой"
                  width={180}
                  height={180}
                  className="rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;