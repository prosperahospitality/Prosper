"use client";

import { io } from "socket.io-client";

export const socket = io('https://prosperaahospitality.com', {
  path: '/socket.io',
  transports: ['websocket', 'polling'],
});