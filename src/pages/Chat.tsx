import { BottomNav } from "@/components/BottomNav";
import { conversations } from "@/data/mockData";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Chat = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-md">
        <div className="px-4 py-3 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Button
              size="icon"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">CONVERSAS</h1>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar conversas..."
              className="pl-10 bg-primary-foreground/20 border-none text-primary-foreground placeholder:text-primary-foreground/60"
            />
          </div>
        </div>
      </header>

      {/* Conversations List */}
      <main className="max-w-screen-xl mx-auto">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            onClick={() => navigate(`/chat/${conv.id}`)}
            className="flex items-center gap-3 p-4 hover:bg-secondary/50 cursor-pointer border-b transition-colors"
          >
            <div className="relative">
              <img 
                src={conv.participant.avatar} 
                alt={conv.participant.name}
                className="w-12 h-12 rounded-full"
              />
              {conv.unread && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-background" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-semibold truncate">{conv.participant.name}</h3>
                <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                  {conv.timestamp}
                </span>
              </div>
              <p className={`text-sm truncate ${conv.unread ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                {conv.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </main>

      <BottomNav />
    </div>
  );
};

export default Chat;
