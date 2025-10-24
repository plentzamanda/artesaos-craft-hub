import { useParams, useNavigate } from "react-router-dom";
import { conversations, chatMessages } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Paperclip, MoreVertical } from "lucide-react";
import { ChatBubble } from "@/components/ChatBubble";
import { useState } from "react";

const ChatDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const conversation = conversations.find(c => c.id === id);
  const [message, setMessage] = useState("");

  if (!conversation) {
    return <div>Conversa não encontrada</div>;
  }

  const handleSend = () => {
    if (message.trim()) {
      // Here would be the logic to send message
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <img 
              src={conversation.participant.avatar} 
              alt={conversation.participant.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-semibold">{conversation.participant.name}</h2>
              <p className="text-xs opacity-80">online</p>
            </div>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatMessages.map((msg) => (
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
    </div>
  );
};

export default ChatDetail;
