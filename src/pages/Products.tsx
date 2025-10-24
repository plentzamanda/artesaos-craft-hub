import { ProductCard } from "@/components/ProductCard";
import { BottomNav } from "@/components/BottomNav";
import { products } from "@/data/mockData";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Products = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-md">
        <div className="px-4 py-3 max-w-screen-xl mx-auto">
          <h1 className="text-xl font-bold mb-3">Produtos</h1>
          
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar produtos..."
                className="pl-10 bg-primary-foreground/20 border-none text-primary-foreground placeholder:text-primary-foreground/60"
              />
            </div>
            <Button 
              size="icon"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 py-6 max-w-screen-xl mx-auto">
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Todos os Produtos</h2>
          <p className="text-sm text-muted-foreground">{products.length} produtos encontrados</p>
        </div>

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

export default Products;
