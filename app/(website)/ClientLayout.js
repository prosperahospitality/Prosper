'use client';
import "@/app/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/_components/NavBar/NavBar";
import Footer from "@/_components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { Providers } from "@/app/providers";
import WhatsappUi from "@/_components/ChatSupport/WhatsappUi";

const generateAlphanumericId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const length = 16; // Set the length of the ID
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export default function ClientLayout({ children }) {
  const [uniqueId, setUniqueId] = useState('');

  useEffect(() => {
    const newUniqueId = generateAlphanumericId();
    setUniqueId(newUniqueId);
  }, []);

  useEffect(() => {
    console.log("uniqueId:::::::>", uniqueId);
  }, [uniqueId]);

  return (
    <Providers>
      <NavBar />
      <WhatsappUi uniqueId={uniqueId}/>
      {children}
      <Footer />
    </Providers>
  );
}
