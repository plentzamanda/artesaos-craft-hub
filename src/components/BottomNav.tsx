import { Home, Package, MessageCircle, ShoppingCart, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Feed", path: "/" },
    { icon: Package, label: "Produtos", path: "/produtos" },
    { icon: MessageCircle, label: "Chat", path: "/chat" },
    { icon: ShoppingCart, label: "Carrinho", path: "/carrinho" },
    { icon: User, label: "Perfil", path: "/perfil" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground shadow-lg z-50">
      <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-all ${
                isActive ? 'opacity-100' : 'opacity-70 hover:opacity-90'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'scale-110' : ''}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
