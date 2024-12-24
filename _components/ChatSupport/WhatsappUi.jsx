
"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, SendHorizontal, MessageCircle, Sticker } from 'lucide-react';
import { CheckboxGroup, Checkbox, Button, Input } from '@nextui-org/react';
import IMAGES from '@/public/index';
import Image from 'next/image';
import prosperaLogo from "@/app/favicon.ico"
import { socket } from "@/app/socket";

const Chat = ({ isOpen, onClose }) => {

  /////////////////////////////Socket.io////////////////////////////////////////////////////////////////////////////

  const [isLoading, setIsLoading] = useState(false)
  const [currentSenderIdSelected, setCurrentSenderIdSelected] = useState('')
  const [currentSenderDetailsSelected, setCurrentSenderDetailsSelected] = useState({})
  const [isClient, setIsClient] = useState(false)
  const [mySenderId, setMySenderId] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  const [connectedClients, setConnectedClients] = useState([]);

  const [selected, setSelected] = useState("photos");

  const [isTyping, setIsTyping] = useState(false);
  const [typingUser, setTypingUser] = useState(null);

  const [onlineUsers, setOnlineUsers] = useState([]);

  const [isMaster, setIsMaster] = useState(false);

  const [masterId, setMasterId] = useState('');

  const [selectedServices, setSelectedServices] = useState([]);
  const [cwe, setCWE] = useState(false);
  const chatRef = useRef(null);

  const handleTyping = () => {
    socket.emit('typing', socket.id);
    setIsTyping(true);
  };


  function onConnect() {

    setIsConnected(true);
    setTransport(socket.io.engine.transport.name);

    socket.io.engine.on("upgrade", (transport) => {
      setTransport(transport.name);
    });

    setMySenderId(socket.id)

  }

  function onDisconnect() {
    setIsConnected(false);
    setTransport("N/A");
  }


  const restartSocket = () => {
    if (socket) {
      console.log("Disconnecting socket...");
      socket.disconnect();
      onDisconnect()

      console.log("ISmaster::::::>", isMaster)

      if (isMaster) {

        console.log("Reconnecting socket...");
        socket.connect();
        onConnect()
        socket.emit("register master");
        socket.on("test messagee", (message) => {
          console.log(message);
        });
        socket.on("master id", (masterid) => {
          console.log(masterid);
          setMasterId(masterid)
        });

      } else {
        console.log("Reconnecting socket...");
        socket.connect();
        onConnect()
      }

    }
  };


  useEffect(() => {

    setIsLoading(true)

    try {
      if (socket.connected) {
        setMySenderId(socket.id);
        onConnect();
      }

      socket.on("connect_error", (err) => {
        // the reason of the error, for example "xhr poll error"
        console.log(err.message);
      
        // some additional description, for example the status code of the initial HTTP response
        console.log(err.description);
      
        // some additional context, for example the XMLHttpRequest object
        console.log(err.context);
      });

      socket.on('connected clients', (clients) => {
        console.log("Connected::::::::>", clients)
        setConnectedClients(clients);
        setOnlineUsers(clients);
      });

      socket.on('disconnected client', (clientId) => {
        setOnlineUsers((prevUsers) => prevUsers.filter((id) => id !== clientId));  // Remove disconnected user
      });

      if (connectedClients.length === 0) {
        restartSocket()
      }

      socket.on('chat message', (msg) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { msg: msg.msg, senderId: msg.senderId, receipientId: currentSenderIdSelected },
        ]);
      });


      socket.on('typing', (senderId) => {
        setTypingUser(senderId);
        setIsTyping(true);
      });

      socket.on('stop typing', () => {
        setTypingUser(null);
        setIsTyping(false);
      });

      socket.on("connect", onConnect);
      socket.on("disconnect", onDisconnect);

      return () => {
        socket.off("connect", onConnect);
        socket.off("disconnect", onDisconnect);
        socket.off('typing');
        socket.off('stop typing');
        socket.off('connected clients');
        socket.off('disconnected client');
      };
    } catch (error) {

    } finally {
      setIsLoading(false)
    }

  }, []);

  useEffect(() => {


    restartSocket()


  }, [isMaster])


  const handleChange = (e) => {
    console.log("evente", e.target.value)
    handleTyping();
  };

  const handleSubmitt = (e, receipientId) => {

    e.preventDefault()

    console.log("ABCD:::::::::>", receipientId)

    if (message && receipientId === undefined && selectedServices.includes("Chat with an executive")) {
      setCWE(true)
      socket.emit('private message', {
        recipientId: receipientId,
        message,
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        { msg: message, senderId: mySenderId, receipientId: receipientId },
      ]);
      setMessage('');

      socket.emit('stop typing', socket.id);
      setIsTyping(false);

      const abc = async () => {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            operation: "notifyOnline",
            mySenderId: mySenderId,
            msg: message
          }),
        });
      }
      abc()
    }

    if (message && receipientId && selectedServices.includes("Chat with an executive")) {
      socket.emit('private message', {
        recipientId: receipientId,
        message,
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        { msg: message, senderId: mySenderId, receipientId: receipientId },
      ]);
      setMessage('');

      socket.emit('stop typing', socket.id);
      setIsTyping(false);

    } else if (!selectedServices.includes("Chat with an executive")) {
      setCWE(false);
      const phoneNumber = '917021719016'; // e.g., 15551234567 for US number
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // if (message) {
    //   socket.emit('chat message', message);
    //   setMessage('');
    // }

    e.preventDefault();
    if (message && currentSenderIdSelected) {
      socket.emit('private message', {
        recipientId: currentSenderIdSelected,
        message,
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        { msg: message, senderId: mySenderId, receipientId: currentSenderIdSelected },
      ]);
      setMessage('');

      socket.emit('stop typing', socket.id);
      setIsTyping(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (messages.length > 1) {
      setCWE(false)
    }
  }, [messages]);


  const handleBlur = (e) => {
    socket.emit('stop typing', socket.id);
    setIsTyping(false);
  };

  useEffect(() => {
    console.log('Connetcted clients:::::::::>', connectedClients, messages)
  }, [connectedClients, messages])



  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  // const [messages, setMessages] = useState([]);

  // Close chat if clicked outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleCheckboxChange = (values) => {
    setSelectedServices(values);
    setMessages([])

    const message = `Hey Prospera, I'm interested in: ${values.join(', ')}`;
    setMessage(message);
  };

  useEffect(() => {
    if (selectedServices.length === 0) {
      console.log("selectedServices::::::::>", selectedServices)
      setMessage('')
      setMessages([])
      setCWE(false);
    }
  }, [selectedServices])

  const sendMessage = (message) => {
    setMessage('')
    messages.push(message)
    if (selectedServices.includes("Chat with an executive")) {
      setCWE(true);
      const abc = async () => {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            operation: "notifyOnline",
          }),
        });
      }
      abc()

    } else {
      setCWE(false);
      const phoneNumber = '917021719016'; // e.g., 15551234567 for US number
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  };


  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center z-50 mt-24 md:justify-end md:items-end md:mr-4 md:mb-4"
        >
          <motion.div
            ref={chatRef}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="bg-white rounded-lg p-2 shadow-2xl shadow-black-500 w-full max-w-md md:max-w-sm"
          >
            {/* New Chat Section */}
            <div className="flex flex-col h-[600px] md:h-auto">
              {/* Chat header section */}
              <div className="flex justify-center h-[8%] w-[100%] bg-white items-center gap-5">
                <div className='flex justify-center items-center w-[10%] cursor-pointer'>
                  <Back onClick={onClose} />
                </div>
                <div className='flex justify-start items-center w-[65%]'>
                  <div className='w-[36px] h-[36px] md:h-[30px] md:w-[30px] bg-gray-200 rounded-full mr-[10px]'>
                    <Image src={prosperaLogo} alt='prospera-logo' width={300} height={300} className='w-full h-full object-cover' />
                  </div>
                  <div className='flex justify-start items-center flex-col leading-4'>
                    <div className='w-full text-[16px] text-black font-semibold'>Prospera Hospitality</div>
                    <div className='w-full text-[12px] text-gray-400'>online</div>
                  </div>
                </div>
                <div className='flex justify-center items-center gap-5 w-[25%]'>
                  <div><CallBtn /></div>
                  <div><VideoBtn /></div>
                </div>
              </div>

              {/* Chat section */}
              <div className="flex justify-start items-center h-auto bg-cover bg-center relative" style={{ backgroundImage: `url(${IMAGES.Whatsappwal})` }}>
                <div className="flex items-start relative w-full flex-col gap-5 h-[25rem] overflow-y-auto">
                  <div className="relative p-[10px] bg-white rounded-xl text-black self-start ml-2  w-[80%]">
                    <div>
                      <p>Hello There ! 👋🏼</p>
                    </div>
                    <div
                      style={{
                        content: '""',
                        position: 'absolute',
                        bottom: '-6px',
                        left: '8px',
                        width: '10px',
                        height: '10px',
                        backgroundColor: 'white',
                        borderBottomRightRadius: '14px 10px',
                      }}
                    />
                  </div>
                  <div className="relative p-[10px] bg-white rounded-xl  self-start ml-2 z-2 w-[80%]">
                    <div className='flex flex-col relative'>
                      <CheckboxGroup
                        label="Need help with any of the following services?"
                        value={selectedServices}
                        onChange={handleCheckboxChange}
                      >
                        <Checkbox value="Digital Marketing"><h6 className='text-black'>Digital Marketing</h6></Checkbox>
                        <Checkbox value="Web Development"><h6 className='text-black'>Web Development</h6></Checkbox>
                        <Checkbox value="Revenue Management"><h6 className='text-black'>Revenue Management</h6></Checkbox>
                        <Checkbox value="Chat with an executive"><h6 className='text-black'>Chat with an executive</h6></Checkbox>
                      </CheckboxGroup>
                    </div>
                    <div
                      style={{
                        content: '""',
                        position: 'absolute',
                        bottom: '-6px',
                        left: '8px',
                        width: '10px',
                        height: '10px',
                        backgroundColor: 'white',
                        borderBottomRightRadius: '14px 10px',
                      }}
                    />
                  </div>
                  {selectedServices.includes("Chat with an executive") && messages.length > 0
                    ?
                    <ul id="messages" className="flex flex-col gap-0 w-full" style={{ listStyleType: 'none', padding: '0 15px 0 15px', margin: 0 }}>
                      <li
                        className={`relative shadow-md max-w-max px-4 py-2 bg-gray-200 text-black self-end`}
                        style={{
                          borderRadius: '7px 0px 7px 7px'
                        }}>
                        {messages[0].msg}
                        <span
                          className="absolute top-0 right-[-8px] h-[12px] w-[12px] bg-gray-200"
                          style={{
                            rotate: '-90deg',
                            clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                          }} />
                      </li>

                    </ul>

                    : ""
                  }
                  {messages.length > 1
                    ?
                    <>
                      <ul id="messages" className="flex flex-col gap-[17px] w-full" style={{ listStyleType: 'none', padding: '0 15px 0 15px', margin: 0 }}>
                        {selectedServices.includes("Chat with an executive") && messages?.filter((value, index, self) => index === self.findIndex((t) => (
                          t.msg === value.msg && t.senderId === value.senderId && t.receipientId === value.receipientId
                        ))
                        )?.map((msg, index) => {
                          if (index === 0) {
                          } else {
                            if (msg.senderId === (connectedClients ? connectedClients.find((item) => item.isMaster === true)?.id : masterId) || (msg.senderId === mySenderId && msg.receipientId === (connectedClients ? connectedClients.find((item) => item.isMaster === true)?.id : masterId))) {
                              return (
                                <li
                                  key={index}
                                  className={`relative shadow-md max-w-max px-4 py-2 ${msg.senderId !== mySenderId ? 'bg-blue-500 text-white self-start' : 'bg-gray-200 text-black self-end'}`}
                                  style={index % 2 === 0 ? {
                                    borderRadius: '0 7px 7px 7px'
                                  } : {
                                    borderRadius: '7px 0px 7px 7px'
                                  }}
                                >
                                  {msg.msg}
                                  {msg.senderId !== mySenderId ? (
                                    <span
                                      className="absolute top-0 left-[-8px] h-[12px] w-[12px] bg-blue-500"
                                      style={{
                                        rotate: '90deg',
                                        clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                                      }} />
                                  ) : (
                                    <span
                                      className="absolute top-0 right-[-8px] h-[12px] w-[12px] bg-gray-200"
                                      style={{
                                        rotate: '-90deg',
                                        clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                                      }} />
                                  )}
                                </li>
                              );
                            }
                          }

                        })}
                      </ul><div ref={messagesEndRef} /></>
                    : ""}
                  {cwe
                    ?
                    <ul id="messages" className="flex flex-col gap-[40px] w-full" style={{ listStyleType: 'none', padding: '0 15px 0 15px', margin: 0 }}>
                      <li
                        className={`relative shadow-md max-w-max px-4 py-2 bg-blue-500 text-white self-start`}
                        style={{
                          borderRadius: '0 7px 7px 7px'
                        }}>
                        {"Wait! while we connecting to one of our executive..."}
                        <span
                          className="absolute top-0 left-[-8px] h-[12px] w-[12px] bg-blue-500"
                          style={{
                            rotate: '90deg',
                            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                          }} />
                      </li>
                      <li>

                      </li>

                    </ul>
                    : ""}

                </div>
              </div>

              {/* Send button section */}
              {/* <div className="h-[18%] w-full bg-white flex items-center justify-center">
                <div className='flex justify-center items-center w-[12%] h-full'>
                  <Plus className='text-blue-500' />
                </div>
                <div className='flex justify-center items-center w-[70%] h-full '>
                  <textarea
                    type="text"
                    className="w-full h-[80%] resize-none px-2 border-1 border-black-400 rounded-xl blink-cursor text-black bg-white"
                    placeholder="Hey Prospera, I'm interested in: "
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className='flex justify-center items-center w-[18%] h-full '>
                  <div className='flex justify-center items-center p-2 rounded-full bg-blue-500 cursor-pointer'>
                    <Button
                      type="submit"
                      onClick={(e) => handleSubmitt(e, connectedClients ? connectedClients.find((item) => item.isMaster === true)?.id : masterId)}
                      isIconOnly className="bg-transparent p-0 m-0 flex justify-center items-center text-center h-full w-[5%]"
                    >
                      <SendHorizontal strokeWidth={2} className='text-white' />
                    </Button>

                  </div>
                </div>
              </div> */}



<form
                      id="form"
                      className="justify-center items-center"
                      style={{
                        background: 'rgba(0, 0, 0, 0.15)',
                        padding: '0.25rem',
                        position: 'relative',
                        bottom: 0,
                        // left: 0,
                        // right: 0,
                        display: 'flex',
                        // height: '4rem',
                        boxSizing: 'border-box',
                        backdropFilter: 'blur(10px)',
                        width: '100%',
                      }}
                      onSubmit={(e) => handleSubmitt(e, connectedClients ? connectedClients.find((item) => item.isMaster === true)?.id : masterId)}
                    >
                      <Button isIconOnly className="bg-transparent p-0 m-0 flex justify-center items-center text-center h-full w-[5%]">
                        <Plus className="text-[#800000]" />
                      </Button>
                      <Input
                        id="input"
                        type="text"
                        autoComplete="off"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{
                          border: 'none',
                          padding: '1rem',
                          flexGrow: 1,
                          borderRadius: '1rem',
                          margin: '0.25rem',
                        }}
                        onBlur={(e) => {
                          handleBlur(e);
                        }}
                        startContent={<Sticker className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />} 
                        />
                      {isTyping && typingUser && <p>{typingUser} is typing...</p>}
                      <Button
                        type="submit"
                        isIconOnly className="bg-transparent p-0 m-0 flex justify-center items-center text-center h-full w-[5%]"
                      >
                        <SendHorizontal className="text-[#800000]" />
                      </Button>
                    </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

function WhatsappUi() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <div className="fixed bottom-[60px] md:bottom-8 right-8 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openPopup}
        className="bg-[#800000] hover:bg-red-950 text-gray-300 font-extralight p-3 rounded-full cursor-pointer "
      >
        <MessageCircle width={30} height={30} className="cursor-pointer" />
      </motion.button>

      <Chat isOpen={showPopup} onClose={closePopup} />
    </div>
  );
}

export default WhatsappUi;

const Back = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#007AFF"
      d="m3.602 10.5 7.804-7.95a1.5 1.5 0 0 0-2.14-2.1l-8.836 9a1.5 1.5 0 0 0 0 2.1l8.835 9a1.5 1.5 0 0 0 2.141-2.1L3.602 10.5Z"
    />
  </svg>
);

const CallBtn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#007AFF"
      fillRule="evenodd"
      d="M8.18 4.457 6.373 1.404A2.86 2.86 0 0 0 1.801.93C.445 2.414-.163 3.826.037 5.165c.41 2.745 2.339 5.88 5.767 9.439l.298.294.294.298.006-.004c3.553 3.432 6.688 5.362 9.433 5.77 1.339.2 2.751-.407 4.235-1.763a2.862 2.862 0 0 0-.474-4.572l-3.053-1.807-.151-.082a2.399 2.399 0 0 0-2.275.073l-.952.553-.11.057a1.292 1.292 0 0 1-1.452-.26L7.84 9.396l-.084-.092c-.34-.413-.393-1-.12-1.47l.553-.952a2.399 2.399 0 0 0-.01-2.426Zm11.08 13.856c-1.255 1.148-2.331 1.6-3.248 1.463-2.357-.352-5.172-2.039-8.426-5.113l-.56-.537-.379-.376c-3.264-3.39-5.06-6.322-5.423-8.762-.137-.917.315-1.993 1.463-3.248a1.66 1.66 0 0 1 2.57.149l.084.126 1.806 3.053c.22.373.223.837.005 1.212l-.553.952a2.492 2.492 0 0 0 .231 2.836l.122.136 3.803 3.805a2.492 2.492 0 0 0 2.8.502l.163-.082 1.002-.58c.349-.203.776-.217 1.136-.037l.114.063 3.015 1.784a1.66 1.66 0 0 1 .275 2.654Z"
      clipRule="evenodd"
    />
  </svg>
);

const VideoBtn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#007AFF"
      fillRule="evenodd"
      d="M17 4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v7.5a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4V4ZM4 1.2h9A2.8 2.8 0 0 1 15.8 4v7.5a2.8 2.8 0 0 1-2.8 2.8H4a2.8 2.8 0 0 1-2.8-2.8V4A2.8 2.8 0 0 1 4 1.2Zm20.293.721a1 1 0 0 1 .207.61v10.18a1 1 0 0 1-1.524.851l-4.024-2.476A2 2 0 0 1 18 9.382V6.485a2 2 0 0 1 .78-1.585l4.11-3.162a1 1 0 0 1 1.403.183Zm-4.78 3.93L23.3 2.937v9.415l-3.72-2.288a.8.8 0 0 1-.38-.682V6.485a.8.8 0 0 1 .312-.634Z"
      clipRule="evenodd"
    />
  </svg>
);

const WhatsappLogo = ({ fill, size, width, height, ...props }) => (
  <svg
    fill="none"
    height={size || height}
    width={size || width}
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#BFC8D0"
      fillRule="evenodd"
      d="M16 31c7.732 0 14-6.268 14-14S23.732 3 16 3 2 9.268 2 17c0 2.51.661 4.867 1.818 6.905L2 31l7.315-1.696A13.938 13.938 0 0 0 16 31Zm0-2.154c6.543 0 11.846-5.303 11.846-11.846 0-6.542-5.303-11.846-11.846-11.846C9.458 5.154 4.154 10.458 4.154 17c0 2.526.79 4.867 2.138 6.79L5.23 27.77l4.049-1.013a11.791 11.791 0 0 0 6.72 2.09Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#a)"
      d="M28 16c0 6.627-5.373 12-12 12-2.528 0-4.873-.782-6.807-2.116L5.09 26.909l1.075-4.03A11.945 11.945 0 0 1 4 16C4 9.373 9.373 4 16 4s12 5.373 12 12Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16c0 2.51.661 4.867 1.818 6.905L2 30l7.315-1.696A13.938 13.938 0 0 0 16 30Zm0-2.154c6.543 0 11.846-5.303 11.846-11.846 0-6.542-5.303-11.846-11.846-11.846C9.458 4.154 4.154 9.458 4.154 16c0 2.526.79 4.867 2.138 6.79L5.23 26.77l4.049-1.013a11.791 11.791 0 0 0 6.72 2.09Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M12.5 9.5c-.333-.669-.844-.61-1.36-.61-.921 0-2.359 1.105-2.359 3.16 0 1.684.742 3.528 3.243 6.286 2.414 2.662 5.585 4.039 8.218 3.992 2.633-.047 3.175-2.313 3.175-3.078 0-.339-.21-.508-.356-.554-.897-.43-2.552-1.233-2.928-1.384-.377-.15-.573.054-.695.165-.342.325-1.019 1.284-1.25 1.5-.232.215-.578.106-.721.024-.53-.212-1.964-.85-3.107-1.958-1.415-1.371-1.498-1.843-1.764-2.263-.213-.336-.057-.542.021-.632.305-.351.726-.894.914-1.164.189-.27.04-.679-.05-.934-.387-1.097-.715-2.015-.981-2.55Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={26.5}
        x2={4}
        y1={7}
        y2={28}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5BD066" />
        <stop offset={1} stopColor="#27B43E" />
      </linearGradient>
    </defs>
  </svg>
)
