import { useState } from 'react';
import ChatList from './components/ChatList';
import { useSettings } from '@/context/SettingsContext';
import { chatHistory } from '@/data/chatHistory';

const Telegram = () => {
  const { theme } = useSettings();
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const selectedConversation = chatHistory.find(chat => chat.id === selectedChat);
  const selectedUser = selectedConversation?.participants.find(participant => participant !== 'Kraizan');

  return (
    <div className="w-full h-full flex theme-transition" style={{ backgroundColor: theme.background + '99' }}>
      <div className="w-1/3 border-r border-gray-700">
        <ChatList conversations={chatHistory} onSelectChat={setSelectedChat} />
      </div>
      <div className="w-2/3 p-4">
        {selectedConversation ? (
          <>
            <div className="text-lg font-bold mb-4" style={{ color: theme.text }}>{selectedUser}</div>
            <div className="text-gray-300">
              {selectedConversation.messages.map((chat, index) => (
                <div key={index} className={`mb-2 ${chat.sender === 'Kraizan' ? 'text-right' : 'text-left'}`}>
                  <div className="font-bold">{chat.sender}</div>
                  <div>{chat.message}</div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-gray-300">Select a chat to view the message</div>
        )}
      </div>
    </div>
  );
};

export default Telegram;