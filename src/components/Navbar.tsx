import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold tracking-tight">УчиОбмен</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/features" className="text-sm font-medium transition-colors hover:text-accent">
            Возможности
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium transition-colors hover:text-accent">
            Как это работает
          </Link>
          <Link to="/pricing" className="text-sm font-medium transition-colors hover:text-accent">
            Тарифы
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-accent">
            О нас
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link to="/login">Войти</Link>
          </Button>
          <Button asChild>
            <Link to="/download">Скачать приложение</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link 
                to="/features" 
                className="text-lg font-medium py-2 transition-colors hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                Возможности
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-lg font-medium py-2 transition-colors hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                Как это работает
              </Link>
              <Link 
                to="/pricing" 
                className="text-lg font-medium py-2 transition-colors hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                Тарифы
              </Link>
              <Link 
                to="/about" 
                className="text-lg font-medium py-2 transition-colors hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                О нас
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/login" onClick={() => setIsOpen(false)}>Войти</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link to="/download" onClick={() => setIsOpen(false)}>Скачать приложение</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;