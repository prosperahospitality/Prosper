'use client'
import { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { database } from '@/app/config';

const AdminChat = () => {
  const [messages, setMessages] = useState([]);
  const [senderMessage, setSenderMessage] = useState('');

  // Real-time listener for messages
  useEffect(() => {
    const q = query(collection(database, "chats"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

  const handleAdminReply = (messageId, replyMessage) => {
    if (replyMessage.trim()) {
      const adminReply = {
        message: replyMessage.trim(),
        sender: 'admin', // Mark as 'admin' message
        replyTo: messageId, // Reference to the message the admin is replying to
        timestamp: Date.now(),
      };
      addDoc(collection(database, "chats"), adminReply)
        .then(() => {
          setSenderMessage('');
        })
        .catch((error) => {
          console.error("Error replying to message: ", error);
        });
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className={msg.sender === 'admin' ? 'admin-message' : 'sender-message'}>
            <p>{msg.message}</p>
            {msg.sender === 'sender' && (
              <div>
                <input
                  type="text"
                  placeholder="Type your reply"
                  onChange={(e) => setSenderMessage(e.target.value)}
                  value={senderMessage}
                />
                <button onClick={() => handleAdminReply(msg.id, senderMessage)}>Send Reply</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminChat;
