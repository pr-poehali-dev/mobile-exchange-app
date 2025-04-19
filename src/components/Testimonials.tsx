import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  content: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
}

const Testimonial = ({ content, author }: TestimonialProps) => {
  return (
    <Card className="bg-card border shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="space-y-4">
          <p className="text-lg">{content}</p>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback className="bg-accent text-accent-foreground">
                {author.name.split(' ').map(part => part[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{author.name}</p>
              <p className="text-sm text-muted-foreground">{author.role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "Это приложение серьезно помогло мне в подготовке к экзаменам. Возможность обмениваться конспектами и заметками с одноклассниками сэкономила мне много времени.",
      author: {
        name: "Анна Смирнова",
        role: "Ученица 11 класса",
      },
    },
    {
      content: "Я всегда пропускаю пары из-за работы, но благодаря этому приложению у меня всегда есть доступ к лекциям и материалам от других студентов.",
      author: {
        name: "Дмитрий Петров",
        role: "Студент университета",
      },
    },
    {
      content: "Как учитель, я рекомендую это приложение своим ученикам. Оно помогает им сотрудничать и учиться друг у друга.",
      author: {
        name: "Елена Иванова",
        role: "Учитель математики",
      },
    },
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Что говорят наши пользователи
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Тысячи студентов и учеников уже используют наше приложение
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index} 
              content={testimonial.content} 
              author={testimonial.author} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;