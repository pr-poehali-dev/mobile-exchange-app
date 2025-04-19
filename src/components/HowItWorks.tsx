import { cn } from "@/lib/utils";

interface StepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step = ({ number, title, description, isLast = false }: StepProps) => {
  return (
    <div className="flex items-start">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
        {number}
        {!isLast && (
          <div className="absolute left-1/2 top-10 h-full w-px -translate-x-1/2 bg-border" />
        )}
      </div>
      <div className="ml-4 pb-8">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Скачайте приложение",
      description: "Доступно для iOS и Android устройств абсолютно бесплатно"
    },
    {
      number: 2,
      title: "Создайте аккаунт",
      description: "Зарегистрируйтесь, укажите свою школу или университет и найдите своих одноклассников"
    },
    {
      number: 3,
      title: "Загрузите материалы",
      description: "Делитесь своими конспектами, заметками и учебными материалами с другими пользователями"
    }
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Как это работает
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Простой процесс в 3 шага для начала использования приложения
            </p>
            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <Step
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
          <div className="relative order-first md:order-last flex justify-center">
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-accent/20 to-primary/20 blur-2xl" />
            <div className="rounded-xl border bg-card p-2 shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Процесс работы с приложением"
                width={500}
                height={700}
                className="rounded-lg object-cover w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;