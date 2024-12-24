"use client";

import { useEffect, useState, useRef } from "react";
import { socket } from "@/app/socket";
import { Button, Input, Tabs, Tab, Card, CardBody, Spinner } from "@nextui-org/react";
import { Plus, SendHorizontal, Sticker, MessageSquareText, CircleFadingPlus, Settings, MessageSquarePlus, EllipsisVertical, Video, Search, CheckCheck, UserRoundPen } from "lucide-react"

export default function ChatApp() {

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

  const [isMaster, setIsMaster] = useState(true);

  const [masterId, setMasterId] = useState('');

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
    // e.preventDefault();
    // if (message) {
    //   socket.emit('chat message', message);
    //   setMessage('');
    // }

    e.preventDefault();
    if (message && receipientId) {
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
  }, [messages]);


  const handleBlur = (e) => {
    socket.emit('stop typing', socket.id);
    setIsTyping(false);
  };

  return (
    !isClient
      ? <>

        <div className="hidden md:grid md:grid-cols-8 md:gap-0 md:w-full md:h-[100vh]" >
          {isMaster
            ? <>
              <div className="col-span-2 h-full bg-white">

                {/* <div>
                  <button onClick={() => setIsMaster(!isMaster)}>
                    {isMaster ? "Switch to User Mode" : "Switch to Master Mode"}
                  </button>
                </div> */}
                {/* <p>Status: {isConnected ? "connected" : "disconnected"}</p>
    <p>Transport: {transport}</p>

    <h2>Connected Clients:</h2>
    <ul>
      {connectedClients.map((clientId) => (
        <li key={clientId}>{clientId}</li>
      ))}
    </ul> */}
                {/* {onlineUsers.map((userId) => (
      <div key={userId}>
        {userId} is online
      </div>
    ))} */}
                {isLoading
                  ? <div>
                    <Spinner />
                  </div>
                  : <div className="grid grid-cols-12">

                    <div className="col-span-2 flex justify-center items-center bg-gray-300 h-[100vh]">
                      <div className="flex flex-col justify-between gap-4 p-5 h-full">
                        <div className="flex flex-col gap-1">
                          <Button isIconOnly className="bg-transparent"><MessageSquareText /></Button>
                          <Button isIconOnly className="bg-transparent"><CircleFadingPlus /></Button>
                        </div>
                        <div>
                          <Button isIconOnly className="bg-transparent"><Settings /></Button>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-10 flex flex-col justify-start items-center bg-white h-[100vh]">
                      <div className="w-full h-auto pr-2">

                        <div className="flex flex-row justify-between w-full">
                          <div className="flex flex-col justify-start items-start w-[60%] p-4">
                            <p className="text-xl font-bold">Chats</p>
                            <div className="text-xs text-gray-600 text-wrap">{mySenderId}</div>
                          </div>

                          <div className="flex flex-row gap-1 justify-end items-center w-[40%] py-4">
                            <Button isIconOnly className="bg-transparent"><MessageSquarePlus /></Button>
                            <Button isIconOnly className="bg-transparent"><EllipsisVertical /></Button>
                          </div>
                        </div>

                      </div>

                      <div className="flex justify-center items-center w-full h-auto px-2">
                        <div className="w-full">
                          <Input
                            placeholder="Search"
                            startContent={<Search className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            type="text" />
                        </div>
                      </div>

                      <div className="flex justify-center items-center w-full h-auto mt-2 pl-2">

                        <div className="flex w-full flex-col">
                          <Tabs variant="light" aria-label="Options" selectedKey={selected} onSelectionChange={setSelected}>
                            <Tab key="all" title="All">
                              <div className="w-full h-[76vh] bg-white overflow-y-auto custom-scrollbar">

                                {connectedClients?.map((item, index) => {
                                  if (item.id === mySenderId) {
                                  } else {
                                    return (
                                      <div key={item.id} className="flex flex-row cursor-pointer" onClick={(e) => {
                                        setCurrentSenderDetailsSelected({
                                          username: `Sender-${index + 1}`,
                                          sender_id: item.id,
                                        });
                                        setCurrentSenderIdSelected(item.id);
                                      }}>

                                        <div className="self-center">
                                          <div className="flex justify-center items-center rounded-full bg-slate-100">
                                            <div className="flex justify-center items-center p-4">
                                              <UserRoundPen />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="flex flex-col border-y-1 w-full h-full p-4">
                                          <div className="text-lg">
                                            Sender-{index + 1}
                                          </div>
                                          <div className="text-xs text-gray-600">id: {item.id}</div>
                                          <div className="text-sm text-gray-600">
                                            <div className="inline-flex gap-1 justify-center items-center">
                                              <CheckCheck className="size-4 text-center" /> message
                                            </div>
                                          </div>
                                        </div>

                                      </div>
                                    );
                                  }

                                })}






                              </div>
                            </Tab>
                            <Tab key="music" title="Music">
                              <Card>
                                <CardBody>
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                  cillum dolore eu fugiat nulla pariatur.
                                </CardBody>
                              </Card>
                            </Tab>
                            <Tab key="videos" title="Videos">
                              <Card>
                                <CardBody>
                                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                  mollit anim id est laborum.
                                </CardBody>
                              </Card>
                            </Tab>
                          </Tabs>
                        </div>

                      </div>

                    </div>

                  </div>}




              </div>
              <div className="col-span-6 h-full bg-[#d3d3d3]">

                {currentSenderIdSelected !== ''
                  ?
                  <div>
                    <div className="flex flex-row justify-between bg-slate-100">

                      <div className="flex w-[80%]">
                        <div className="flex flex-row pl-4">

                          <div className="self-center">
                            <div className="flex justify-center items-center rounded-full bg-slate-200">
                              <div className="flex justify-center items-center p-4">
                                <UserRoundPen />
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col w-full h-full p-4">
                            <div className="text-lg">
                              {currentSenderDetailsSelected.username}
                            </div>
                            <div className="text-xs text-gray-600">id: {currentSenderIdSelected}</div>
                            <div className="text-sm text-gray-600">
                              <div className="inline-flex gap-1 justify-center items-center">
                                click here for contact info
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div className="flex flex-row gap-4 justify-center items-center w-[20%]">
                        <Button isIconOnly className="bg-transparent"><Video /></Button>
                        <Button isIconOnly className="bg-transparent"><Search /></Button>
                        <Button isIconOnly className="bg-transparent"><EllipsisVertical /></Button>
                      </div>
                    </div>

                    {console.log("Messages::::::::::>", messages)}
                    <ul id="messages" className="flex flex-col gap-4 w-full p-5" style={{ listStyleType: 'none', padding: '50px', margin: 0 }}>
                      {messages?.filter((value, index, self) =>
                        index === self.findIndex((t) => (
                          t.msg === value.msg && t.senderId === value.senderId && t.receipientId === value.receipientId
                        ))
                      )?.map((msg, index) => {
                        if (msg.senderId === currentSenderIdSelected || (msg.senderId === mySenderId && msg.receipientId === currentSenderIdSelected)) {
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
                      })}
                      <div ref={messagesEndRef} />
                    </ul>




                    <form
                      id="form"
                      className="justify-center items-center"
                      style={{
                        background: 'rgba(0, 0, 0, 0.15)',
                        padding: '0.25rem',
                        position: 'fixed',
                        bottom: 0,
                        // left: 0,
                        // right: 0,
                        display: 'flex',
                        height: '4rem',
                        boxSizing: 'border-box',
                        backdropFilter: 'blur(10px)',
                        width: '75%',
                      }}
                      onSubmit={handleSubmit}
                    >
                      <Button isIconOnly className="bg-transparent p-0 m-0 flex justify-center items-center text-center h-full w-[5%]">
                        <Plus className="text-[#800000]" />
                      </Button>
                      <Input
                        id="input"
                        type="text"
                        autoComplete="off"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          handleChange(e);
                        }}
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
                        startContent={<Sticker className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />} />
                      {isTyping && typingUser && <p>{typingUser} is typing...</p>}
                      <Button
                        type="submit"
                        isIconOnly className="bg-transparent p-0 m-0 flex justify-center items-center text-center h-full w-[5%]"
                      >
                        <SendHorizontal className="text-[#800000]" />
                      </Button>
                    </form>
                  </div>
                  : ''}



              </div>
            </>
            : <div className="col-span-8 h-full bg-[#d3d3d3]">


              <div>
                {/* <div>
                  <button onClick={() => setIsMaster(!isMaster)}>
                    {isMaster ? "Switch to User Mode" : "Switch to Master Mode"}
                  </button>
                </div> */}
                <div className="flex flex-row justify-between bg-slate-100">

                  <div className="flex w-[80%]">
                    <div className="flex flex-row pl-4">

                      <div className="self-center">
                        <div className="flex justify-center items-center rounded-full bg-slate-200">
                          <div className="flex justify-center items-center p-4">
                            <UserRoundPen />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col w-full h-full p-4">
                        <div className="text-lg">
                          {"Chat Support"}
                        </div>
                        <div className="text-xs text-gray-600">
                          id: {connectedClients ? connectedClients.find((item) => item.isMaster === true)?.id : masterId}
                        </div>
                        <div className="text-sm text-gray-600">
                          <div className="inline-flex gap-1 justify-center items-center">
                            click here for contact info
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="flex flex-row gap-4 justify-center items-center w-[20%]">
                    <Button isIconOnly className="bg-transparent"><Video /></Button>
                    <Button isIconOnly className="bg-transparent"><Search /></Button>
                    <Button isIconOnly className="bg-transparent"><EllipsisVertical /></Button>
                  </div>
                </div>


                <ul id="messages" className="flex flex-col gap-4 w-full p-5" style={{ listStyleType: 'none', padding: '50px', margin: 0 }}>
                  {messages?.map((msg, index) => {
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
                  })}
                  <div ref={messagesEndRef} />
                </ul>




                <form
                  id="form"
                  className="justify-center items-center"
                  style={{
                    background: 'rgba(0, 0, 0, 0.15)',
                    padding: '0.25rem',
                    position: 'fixed',
                    bottom: 0,
                    // left: 0,
                    // right: 0,
                    display: 'flex',
                    height: '4rem',
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
                    onChange={(e) => {
                      setMessage(e.target.value);
                      handleChange(e);
                    }}
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
                    startContent={<Sticker className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />} />
                  {isTyping && typingUser && <p>{typingUser} is typing...</p>}
                  <Button
                    type="submit"
                    isIconOnly className="bg-transparent p-0 m-0 flex justify-center items-center text-center h-full w-[5%]"
                  >
                    <SendHorizontal className="text-[#800000]" />
                  </Button>
                </form>
              </div>




            </div>
          }


        </div >

      </>
      : 'Prerendered'
  );
}