import { ChatMessage } from "@/types";

interface ChatBubbleProps {
  message: ChatMessage;
}

export const ChatBubble = ({ message }: ChatBubbleProps) => {
  return (
    <div className={`flex gap-2 ${message.isOwn ? 'flex-row-reverse' : 'flex-row'}`}>
      {!message.isOwn && (
        <img 
          src={message.sender.avatar} 
          alt={message.sender.name}
          className="w-8 h-8 rounded-full flex-shrink-0"
        />
      )}
      
      <div className={`flex flex-col ${message.isOwn ? 'items-end' : 'items-start'} max-w-[75%]`}>
        {!message.isOwn && (
          <span className="text-xs text-muted-foreground mb-1">{message.sender.name}</span>
        )}
        <div 
          className={`px-4 py-2 rounded-2xl ${
            message.isOwn 
              ? 'bg-primary text-primary-foreground rounded-br-sm' 
              : 'bg-secondary text-secondary-foreground rounded-bl-sm'
          }`}
        >
          <p className="text-sm">{message.text}</p>
        </div>
        <span className="text-[10px] text-muted-foreground mt-1">{message.timestamp}</span>
      </div>
    </div>
  );
};
