import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/mockData";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = products.slice(0, 2); // Mock cart items
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-md">
        <div className="flex items-center gap-3 px-4 py-3 max-w-screen-xl mx-auto">
          <Button
            size="icon"
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">Carrinho</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-screen-xl mx-auto p-4">
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">Seu carrinho está vazio</p>
            <Button onClick={() => navigate("/")}>
              Explorar Produtos
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 bg-card p-4 rounded-lg shadow-sm">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.artisan.name}</p>
                    <p className="text-lg font-bold text-primary">R$ {item.price.toFixed(2)}</p>
                  </div>
                  <Button size="icon" variant="ghost" className="text-destructive">
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md space-y-4">
              <div className="flex justify-between text-lg">
                <span>Subtotal:</span>
                <span className="font-semibold">R$ {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Frete:</span>
                <span className="font-semibold text-primary">Grátis</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-primary">R$ {total.toFixed(2)}</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                FINALIZAR COMPRA
              </Button>
            </div>
          </>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Cart;
