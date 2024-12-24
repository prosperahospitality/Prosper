'use client';

import "@/app/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/_components/NavBar/NavBar";
import Footer from "@/_components/Footer/Footer";
import React from "react";
import { Providers } from "@/app/providers";
import WhatsappUi from "@/_components/ChatSupport/WhatsappUi";

export default function ClientLayout({ children }) {
  return (
    <Providers>
      <NavBar />
      <WhatsappUi />
      {children}
      <Footer />
    </Providers>
  );
}