'use client'
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '@/app/config';

const SenderChat = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      const userMessage = {
        message: message.trim(),
        sender: 'sender',
        timestamp: Date.now(),
      };
      addDoc(collection(database, "chats"), userMessage)
        .then(() => {
          setMessage(''); // Clear message input after sending
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  };

  return (
    <div className="chat-container">
      <div className="send-message">
        <input
          type="text"
          placeholder="Type your message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default SenderChat;
