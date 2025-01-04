import { useSettings } from '@/context/SettingsContext';
import { ChatItemProps } from '@/types/chat'

const ChatItem = ({ name, message, onClick }: ChatItemProps) => {
  const { theme } = useSettings();

  return (
    <div
      className="p-2 mb-2 rounded cursor-pointer transition-all duration-200 transform hover:scale-[103%] active:scale-[98%] hover:bg-opacity-20"
      style={{ backgroundColor: theme.primary + 'cc', color: theme.text }}
      onClick={onClick}
    >
      <div className="font-bold">{name}</div>
      <div className="text-sm text-gray-400">{message}</div>
    </div>
  );
};

export default ChatItem;