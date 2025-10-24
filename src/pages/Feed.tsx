import { ProductCard } from "@/components/ProductCard";
import { BottomNav } from "@/components/BottomNav";
import { products } from "@/data/mockData";
import { MessageCircle, Bell, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-md">
        <div className="flex items-center justify-between px-4 py-3 max-w-screen-xl mx-auto">
          <h1 className="text-xl font-bold">feed</h1>
          <div className="flex gap-2">
            <Button 
              size="icon" 
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => navigate("/auth")}
            >
              <LogIn className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => navigate("/chat")}
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 py-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Feed;
