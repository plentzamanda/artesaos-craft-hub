import { Product, Artisan, Conversation, ChatMessage } from "@/types";
import productSafari from "@/assets/product-safari.jpg";
import productCactus from "@/assets/product-cactus.jpg";
import productDonuts from "@/assets/product-donuts.jpg";
import productVeggies from "@/assets/product-veggies.jpg";
import productHearts from "@/assets/product-hearts.jpg";
import productChristmas from "@/assets/product-christmas.jpg";

export const artisans: Artisan[] = [
  {
    id: "1",
    name: "Maria Silva",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    location: "São Paulo, SP"
  },
  {
    id: "2",
    name: "João Santos",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
    location: "Rio de Janeiro, RJ"
  },
  {
    id: "3",
    name: "Ana Costa",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
    location: "Belo Horizonte, MG"
  },
  {
    id: "4",
    name: "Pedro Lima",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro",
    location: "Curitiba, PR"
  },
  {
    id: "5",
    name: "Julia Oliveira",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julia",
    location: "Porto Alegre, RS"
  }
];

export const products: Product[] = [
  {
    id: "1",
    title: "Kit com 5 animais safari baby",
    description: "Feitos à mão com materiais de alta qualidade. Acabamento delicado, ideal para decoração de festas, lembrancinhas ou quartinhos temáticos. Tamanho ideal para criar composições lindas e harmoniosas.",
    price: 150.00,
    image: productSafari,
    artisan: artisans[0],
    liked: true
  },
  {
    id: "2",
    title: "Cactos decorativos de crochê",
    description: "Perfeitos para decoração de festas, lembrancinhas ou quartinhos temáticos. Cada cacto tem expressão única e carinha fofa.",
    price: 45.00,
    image: productCactus,
    artisan: artisans[1],
    liked: false
  },
  {
    id: "3",
    title: "Kit com 6 donuts decorativos",
    description: "Donuts de crochê coloridos com cobertura e granulados. Perfeitos para decoração de festa ou presente criativo.",
    price: 80.00,
    image: productDonuts,
    artisan: artisans[2],
    liked: true
  },
  {
    id: "4",
    title: "Frutinhas e legumes kawaii",
    description: "Coleção de frutas e legumes fofos feitos em crochê. Ótimos para brincar ou decorar.",
    price: 65.00,
    image: productVeggies,
    artisan: artisans[3],
    liked: false
  },
  {
    id: "5",
    title: "Corações decorativos em feltro",
    description: "Lindos corações artesanais em feltro, perfeitos para presente ou decoração romântica.",
    price: 55.00,
    image: productHearts,
    artisan: artisans[4],
    liked: true
  },
  {
    id: "6",
    title: "Decoração de Natal em crochê",
    description: "Kit completo de decorações natalinas feitas à mão. Inclui estrelas, bonecos e enfeites diversos.",
    price: 120.00,
    image: productChristmas,
    artisan: artisans[0],
    liked: false
  }
];

export const conversations: Conversation[] = [
  {
    id: "1",
    participant: artisans[1],
    lastMessage: "Olá! Adorei seu trabalho!",
    timestamp: "10:30",
    unread: true
  },
  {
    id: "2",
    participant: artisans[2],
    lastMessage: "Obrigada pela compra!",
    timestamp: "Ontem",
    unread: false
  },
  {
    id: "3",
    participant: artisans[3],
    lastMessage: "Quando pode entregar?",
    timestamp: "Ontem",
    unread: false
  }
];

export const chatMessages: ChatMessage[] = [
  {
    id: "1",
    sender: artisans[1],
    text: "Oi! Tudo bem?",
    timestamp: "10:25",
    isOwn: false
  },
  {
    id: "2",
    sender: artisans[0],
    text: "Tudo ótimo! E você?",
    timestamp: "10:26",
    isOwn: true
  },
  {
    id: "3",
    sender: artisans[1],
    text: "Adorei seus produtos! Você faz encomendas personalizadas?",
    timestamp: "10:28",
    isOwn: false
  },
  {
    id: "4",
    sender: artisans[0],
    text: "Sim! Posso fazer com as cores que você preferir 😊",
    timestamp: "10:30",
    isOwn: true
  }
];

export const groupMessages: ChatMessage[] = [
  {
    id: "1",
    sender: artisans[1],
    text: "Alguém tem linha rosa choque?",
    timestamp: "09:15",
    isOwn: false
  },
  {
    id: "2",
    sender: artisans[2],
    text: "Eu tenho! Posso te emprestar",
    timestamp: "09:16",
    isOwn: false
  },
  {
    id: "3",
    sender: artisans[0],
    text: "Obrigada! Vou buscar hoje",
    timestamp: "09:18",
    isOwn: true
  },
  {
    id: "4",
    sender: artisans[3],
    text: "Vocês viram o novo padrão de amigurumi?",
    timestamp: "09:20",
    isOwn: false
  }
];
