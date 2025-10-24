import { BottomNav } from "@/components/BottomNav";
import { ProductCard } from "@/components/ProductCard";
import { products, artisans } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Settings, MapPin, Heart, Package, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const currentUser = artisans[0];
  const userProducts = products.filter(p => p.artisan.id === currentUser.id);
  const likedProducts = products.filter(p => p.liked);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="flex items-center justify-between px-4 py-3 max-w-screen-xl mx-auto">
          <h1 className="text-xl font-bold">perfil</h1>
          <Button
            size="icon"
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Profile Info */}
      <div className="bg-gradient-to-b from-primary/10 to-transparent p-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col items-center text-center mb-6">
            <img 
              src={currentUser.avatar} 
              alt={currentUser.name}
              className="w-24 h-24 rounded-full border-4 border-card shadow-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-1">{currentUser.name}</h2>
            <div className="flex items-center gap-1 text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span>{currentUser.location}</span>
            </div>
            
            <div className="flex gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">{userProducts.length}</p>
                <p className="text-sm text-muted-foreground">Produtos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">24</p>
                <p className="text-sm text-muted-foreground">Vendas</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">4.8</p>
                <p className="text-sm text-muted-foreground">Avaliação</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="flex-1 bg-primary hover:bg-primary/90">
              Editar Perfil
            </Button>
            <Button 
              className="flex-1 bg-secondary hover:bg-secondary/90 text-primary"
              onClick={() => navigate("/adicionar-produto")}
            >
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Produto
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 max-w-screen-xl mx-auto">
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="products" className="gap-2">
              <Package className="h-4 w-4" />
              Meus Produtos
            </TabsTrigger>
            <TabsTrigger value="liked" className="gap-2">
              <Heart className="h-4 w-4" />
              Favoritos
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="products">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {userProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="liked">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {likedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
