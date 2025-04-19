import { 
  Bookmark, 
  FileText, 
  Users, 
  Search, 
  Share2, 
  Shield 
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
}

const Feature = ({ icon, title, description, image }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      {image && (
        <div className="mt-3 w-full">
          <img
            src={image}
            alt={`Котик демонстрирует: ${title}`}
            className="rounded-md w-full h-36 object-cover"
          />
        </div>
      )}
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Обмен конспектами",
      description: "Делитесь заметками, конспектами и учебными материалами с одноклассниками или сокурсниками",
      image: "https://placekitten.com/400/300"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Умный поиск",
      description: "Быстро находите нужные материалы по предметам, темам или авторам",
      image: "https://placekitten.com/401/300"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Совместная работа",
      description: "Создавайте группы по предметам и работайте над материалами вместе",
      image: "https://placekitten.com/402/300"
    },
    {
      icon: <Bookmark className="h-6 w-6" />,
      title: "Сохранение на устройстве",
      description: "Сохраняйте нужные материалы для доступа офлайн в любое время",
      image: "https://placekitten.com/403/300"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Простой обмен",
      description: "Обменивайтесь материалами в один клик с помощью генерации QR-кода",
      image: "https://placekitten.com/404/300"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Безопасность",
      description: "Ваши материалы надежно защищены и доступны только тем, кому вы их разрешили",
      image: "https://placekitten.com/405/300"
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Возможности приложения
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Наше приложение предлагает множество полезных функций для удобного обмена учебными материалами
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;