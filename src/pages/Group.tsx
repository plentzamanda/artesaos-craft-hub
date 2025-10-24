import { BottomNav } from "@/components/BottomNav";
import { groupMessages } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Paperclip, Users } from "lucide-react";
import { ChatBubble } from "@/components/ChatBubble";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Group = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (message.trim()) {
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-secondary/30 pb-16">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Users className="h-8 w-8" />
            <div>
              <h2 className="font-semibold">GRUPO DO TRICOT</h2>
              <p className="text-xs opacity-80">12 membros</p>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {groupMessages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}
      </main>

      {/* Input */}
      <div className="bg-card border-t p-4">
        <div className="flex items-center gap-2 max-w-screen-xl mx-auto">
          <Button size="icon" variant="ghost">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1"
          />
          <Button 
            size="icon"
            className="bg-primary hover:bg-primary/90"
            onClick={handleSend}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Group;
