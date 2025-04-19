import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold tracking-tight">УчиОбмен</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Мобильное приложение для обмена учебными материалами и заметками среди учеников
            </p>
            <div className="pt-2">
              <img 
                src="https://placekitten.com/150/90" 
                alt="Котик с книгами"
                className="rounded-md"
                width={150}
                height={90}
              />
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Продукт</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-sm hover:text-accent transition-colors">Возможности</Link></li>
              <li><Link to="/pricing" className="text-sm hover:text-accent transition-colors">Тарифы</Link></li>
              <li><Link to="/download" className="text-sm hover:text-accent transition-colors">Скачать</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Компания</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-accent transition-colors">О нас</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-accent transition-colors">Блог</Link></li>
              <li><Link to="/careers" className="text-sm hover:text-accent transition-colors">Вакансии</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-accent transition-colors">Контакты</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Юридическая информация</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-sm hover:text-accent transition-colors">Условия использования</Link></li>
              <li><Link to="/privacy" className="text-sm hover:text-accent transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="/cookies" className="text-sm hover:text-accent transition-colors">Политика использования файлов cookie</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center my-8">
          <div className="flex gap-4">
            <img 
              src="https://placekitten.com/95/95" 
              alt="Котик с телефоном" 
              className="rounded-lg" 
              width={95} 
              height={95} 
            />
            <img 
              src="https://placekitten.com/96/96" 
              alt="Котик с ноутбуком" 
              className="rounded-lg" 
              width={95} 
              height={95} 
            />
            <img 
              src="https://placekitten.com/97/97" 
              alt="Котик с планшетом" 
              className="rounded-lg" 
              width={95} 
              height={95} 
            />
          </div>
        </div>
        <div className="mt-12 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} УчиОбмен. Все права защищены.
          </p>
          <div className="flex space-x-4">
            <Link to="#" className="text-muted-foreground hover:text-accent transition-colors">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-accent transition-colors">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-accent transition-colors">
              <span className="sr-only">Telegram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;