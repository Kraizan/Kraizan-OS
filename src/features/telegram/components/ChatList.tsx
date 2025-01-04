import { useSettings } from "@/context/SettingsContext";
import ChatItem from "./ChatItem";
import { ChatListProps } from "@/types/chat";

const ChatList = ({ conversations, onSelectChat }: ChatListProps) => {
  const { theme } = useSettings();

  return (
    <div className="p-4 flex flex-col gap-y-1">
      <h2 className="text-lg font-bold mb-4" style={{ color: theme.text }}>
        Chats
      </h2>
      {conversations.map((conversation) => (
        <ChatItem
          key={conversation.id}
          name={
            conversation.participants.find(
              (participant) => participant !== "Kraizan"
            ) || "Unknown"
          }
          message={conversation.messages[0].message}
          onClick={() => onSelectChat(conversation.id)}
        />
      ))}
    </div>
  );
};

export default ChatList;
