export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  artisan: Artisan;
  liked: boolean;
}

export interface Artisan {
  id: string;
  name: string;
  avatar: string;
  location: string;
}

export interface ChatMessage {
  id: string;
  sender: Artisan;
  text: string;
  timestamp: string;
  isOwn: boolean;
}

export interface GroupMessage extends ChatMessage {
  groupName: string;
}

export interface Conversation {
  id: string;
  participant: Artisan;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}
