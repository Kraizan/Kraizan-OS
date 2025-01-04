export interface Message {
  sender: string;
  message: string;
}

export interface Conversation {
  id: string;
  participants: string[];
  messages: Message[];
}

export interface ChatListProps {
  conversations: Conversation[];
  onSelectChat: (id: string) => void;
}

export interface ChatItemProps {
  name: string;
  message: string;
  onClick: () => void;
}