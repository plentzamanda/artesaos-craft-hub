import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Share2, MessageCircle } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [liked, setLiked] = useState(product?.liked || false);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-md">
        <div className="flex items-center justify-between px-4 py-3 max-w-screen-xl mx-auto">
          <Button
            size="icon"
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold">produto</h1>
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setLiked(!liked)}
            >
              <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-screen-xl mx-auto">
        {/* Image */}
        <div className="aspect-square bg-secondary">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-3xl font-bold text-primary">R$ {product.price.toFixed(2)}</p>
          </div>

          <div className="flex items-center gap-3 pb-6 border-b">
            <img 
              src={product.artisan.avatar} 
              alt={product.artisan.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">{product.artisan.name}</p>
              <p className="text-sm text-muted-foreground">{product.artisan.location}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto"
              onClick={() => navigate("/chat")}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Conversar
            </Button>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Descrição</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
            size="lg"
          >
            COMPRAR
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default ProductDetail;
