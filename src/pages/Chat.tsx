import { BottomNav } from "@/components/BottomNav";
import { conversations } from "@/data/mockData";
import { useNavigate } from "react-router-dom";
import { Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Chat = () => {
  const navigate = useNavigate();

  const groups = [
    {
      id: "grupo-1",
      name: "GRUPO DO TRICOT",
      members: 12,
      lastMessage: "Vocês viram o novo padrão?",
      timestamp: "14:20",
      unread: false
    },
    {
      id: "grupo-2",
      name: "ARTESÃS DE SP",
      members: 24,
      lastMessage: "Feira no domingo!",
      timestamp: "Ontem",
      unread: true
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-md">
        <div className="px-4 py-3 max-w-screen-xl mx-auto">
          <h1 className="text-xl font-bold mb-3">MENSAGENS</h1>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar conversas e grupos..."
              className="pl-10 bg-primary-foreground/20 border-none text-primary-foreground placeholder:text-primary-foreground/60"
            />
          </div>
        </div>
      </header>

      {/* Tabs for Groups and Conversations */}
      <main className="max-w-screen-xl mx-auto">
        <Tabs defaultValue="conversas" className="w-full">
          <TabsList className="w-full grid grid-cols-2 rounded-none border-b">
            <TabsTrigger value="conversas" className="rounded-none">
              Conversas
            </TabsTrigger>
            <TabsTrigger value="grupos" className="rounded-none">
              Grupos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="conversas" className="mt-0">
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
                    className="w-12 h-12 rounded-full object-cover"
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
          </TabsContent>

          <TabsContent value="grupos" className="mt-0">
            {groups.map((group) => (
              <div
                key={group.id}
                onClick={() => navigate("/grupo")}
                className="flex items-center gap-3 p-4 hover:bg-secondary/50 cursor-pointer border-b transition-colors"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  {group.unread && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-background" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold truncate">{group.name}</h3>
                    <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                      {group.timestamp}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-muted-foreground">{group.members} membros</p>
                    <span className="text-muted-foreground">•</span>
                    <p className={`text-sm truncate flex-1 ${group.unread ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                      {group.lastMessage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav />
    </div>
  );
};

export default Chat;
