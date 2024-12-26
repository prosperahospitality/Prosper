"use client";

import { useState, useEffect } from "react";
import {
  Button,
  Input,
  Tabs,
  Tab,
  Card,
  CardBody,
  Spinner,
} from "@nextui-org/react";
import {
  Plus,
  SendHorizontal,
  Sticker,
  MessageSquareText,
  CircleFadingPlus,
  Settings,
  MessageSquarePlus,
  EllipsisVertical,
  Video,
  Search,
  CheckCheck,
  UserRoundPen,
} from "lucide-react";
import { collection, addDoc, query, orderBy, onSnapshot, deleteDoc, getDocs, where } from 'firebase/firestore';
import { database } from '@/app/config';

export default function ChatApp() {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState("all");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentSenderIdSelected, setCurrentSenderIdSelected] = useState("");
  const [currentSenderDetailsSelected, setCurrentSenderDetailsSelected] =
    useState({});
  const [mySenderId, setMySenderId] = useState("jvPXRzyOjSgnPERAa123");
  const [connectedClients, setConnectedClients] = useState([]);


  const processPendingDeletions = async () => {
    try {
      // Retrieve the list of pending deletions
      const pendingDeletion = (JSON.parse(localStorage.getItem("pendingDeletion")) || []).filter(
        (id) => id && id.trim() !== ""
      );

      console.log("pendingDeletion::::::::>", pendingDeletion)

      for (const id of pendingDeletion) {
        console.log(`Processing deletion for ${id}...`);

        const chatCollection = collection(database, "chats");

        // Query for senderId === id
        const senderQuery = query(chatCollection, where("senderId", "==", id));
        const senderSnapshot = await getDocs(senderQuery);

        // Query for recipientId === id
        const recipientQuery = query(chatCollection, where("receipientId", "==", id));
        const recipientSnapshot = await getDocs(recipientQuery);

        // Combine both queries' results
        const allDocs = [...senderSnapshot.docs, ...recipientSnapshot.docs];

        // Perform deletion for all matching documents
        const deletePromises = allDocs.map((doc) => deleteDoc(doc.ref));
        await Promise.all(deletePromises);

        console.log(`Messages for ${id} deleted successfully.`);
      }

      // Clear the pending deletions after processing
      localStorage.removeItem("pendingDeletion");
    } catch (error) {
      console.error("Error processing pending deletions: ", error);
    }
  };


  const getDbData = () => {
    const q = query(collection(database, "chats"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }

  useEffect(() => {
    processPendingDeletions()
    getDbData()
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {

      const userMessage = { message: message.trim(), sender: 'admin', senderId: mySenderId, receipientId: currentSenderIdSelected, timestamp: Date.now() };

      addDoc(collection(database, "chats"), userMessage)
        .then(() => {
          setMessage('');
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });

      processPendingDeletions()
      getDbData()

      setMessage("");
    }
  };

  useEffect(() => {
    console.log("Messages:::::::>", messages)
    const uniqueSenderIds = [
      ...new Set(messages.map((message) => message.senderId)),
    ];

    const uniqueClients = uniqueSenderIds.map((senderId) => ({ senderId }));

    setConnectedClients(uniqueClients);
  }, [messages]);


  const handleBlur = (e) => {

  };

  return !isClient ? (
    <>
      <div className="hidden md:grid md:grid-cols-8 md:gap-0 md:w-full md:h-[100vh]">
        <div className="col-span-2 h-full bg-white">
          {isLoading ? (
            <div>
              <Spinner />
            </div>
          ) : (
            <div className="grid grid-cols-12">
              <div className="col-span-2 flex justify-center items-center bg-gray-300 h-[100vh]">
                <div className="flex flex-col justify-between gap-4 p-5 h-full">
                  <div className="flex flex-col gap-1">
                    <Button isIconOnly className="bg-transparent">
                      <MessageSquareText />
                    </Button>
                    <Button isIconOnly className="bg-transparent">
                      <CircleFadingPlus />
                    </Button>
                  </div>
                  <div>
                    <Button isIconOnly className="bg-transparent">
                      <Settings />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-span-10 flex flex-col justify-start items-center bg-white h-[100vh]">
                <div className="w-full h-auto pr-2">
                  <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col justify-start items-start w-[60%] p-4">
                      <p className="text-xl font-bold">Chats</p>
                      <div className="text-xs text-gray-600 text-wrap">
                        {mySenderId}
                      </div>
                    </div>

                    <div className="flex flex-row gap-1 justify-end items-center w-[40%] py-4">
                      <Button isIconOnly className="bg-transparent">
                        <MessageSquarePlus />
                      </Button>
                      <Button isIconOnly className="bg-transparent">
                        <EllipsisVertical />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center w-full h-auto px-2">
                  <div className="w-full">
                    <Input
                      placeholder="Search"
                      startContent={
                        <Search className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center w-full h-auto mt-2 pl-2">
                  <div className="flex w-full flex-col">
                    <Tabs
                      variant="light"
                      aria-label="Options"
                      selectedKey={selected}
                      onSelectionChange={setSelected}
                    >
                      <Tab key="all" title="All">
                        <div className="w-full h-[76vh] bg-white overflow-y-auto custom-scrollbar">
                          {connectedClients?.map((item, index) => {
                            if (item.senderId !== mySenderId) {
                              return (
                                <div
                                  key={item.senderId || index}
                                  className="flex flex-row cursor-pointer"
                                  onClick={() => {
                                    setCurrentSenderDetailsSelected({
                                      username: `Sender-${index + 1}`,
                                      sender_id: item.senderId,
                                    });
                                    setCurrentSenderIdSelected(item.senderId);
                                  }}
                                >
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
                                    <div className="text-xs text-gray-600">
                                      id: {item.senderId}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      <div className="inline-flex gap-1 justify-center items-center">
                                        <CheckCheck className="size-4 text-center" />{" "}
                                        message
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
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                          </CardBody>
                        </Card>
                      </Tab>
                      <Tab key="videos" title="Videos">
                        <Card>
                          <CardBody>
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </CardBody>
                        </Card>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="col-span-6 h-full bg-[#d3d3d3]">
          {currentSenderIdSelected !== "" ? (
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
                      <div className="text-xs text-gray-600">
                        id: {currentSenderIdSelected}
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
                  <Button isIconOnly className="bg-transparent">
                    <Video />
                  </Button>
                  <Button isIconOnly className="bg-transparent">
                    <Search />
                  </Button>
                  <Button isIconOnly className="bg-transparent">
                    <EllipsisVertical />
                  </Button>
                </div>
              </div>

              <ul
                id="messages"
                className="flex flex-col gap-4 w-full p-5"
                style={{
                  listStyleType: "none",
                  padding: "50px",
                  margin: 0,
                }}
              >
                {messages.map((msg, index) => {
                  if (
                    msg.senderId === currentSenderIdSelected ||
                    (msg.senderId === mySenderId &&
                      msg.receipientId === currentSenderIdSelected)
                  ) {
                    return (
                      <li
                        key={index}
                        className={`relative shadow-md max-w-max px-4 py-2 ${msg.senderId !== mySenderId ? 'bg-blue-500 text-white self-start' : 'bg-gray-200 text-black self-end'}`}
                        style={{
                          borderRadius: '7px 7px 7px 7px'
                        }}
                      >
                        {msg.message}
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
                onSubmit={(e) => handleSubmit(e)}
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
                    setMessage(e.target.value)
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
                <Button
                  type="submit"
                  isIconOnly className="bg-transparent p-0 m-0 flex justify-center items-center text-center h-full w-[5%]"
                >
                  <SendHorizontal className="text-[#800000]" />
                </Button>
              </form>
            </div>
          ) : (
            <div className="flex justify-center items-center w-full h-[100vh]">
              <div className="bg-white p-4 rounded shadow-lg">
                <h3>No Sender Selected</h3>
                <p>Select a sender to start chatting.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
