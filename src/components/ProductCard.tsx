import { Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [liked, setLiked] = useState(product.liked);
  const navigate = useNavigate();

  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-all hover:shadow-lg"
      onClick={() => navigate(`/produto/${product.id}`)}
    >
      <div className="relative aspect-square">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm hover:bg-card"
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
        >
          <Heart className={`h-5 w-5 ${liked ? 'fill-primary text-primary' : ''}`} />
        </Button>
      </div>
      
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-sm line-clamp-2 min-h-[2.5rem]">
          {product.title}
        </h3>
        
        <div className="flex items-center gap-2">
          <img 
            src={product.artisan.avatar} 
            alt={product.artisan.name}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-xs text-muted-foreground">{product.artisan.name}</span>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-primary">
            R$ {product.price.toFixed(2)}
          </span>
          <Button 
            size="sm"
            className="bg-primary hover:bg-primary/90"
            onClick={(e) => e.stopPropagation()}
          >
            COMPRAR
          </Button>
        </div>
      </div>
    </Card>
  );
};
