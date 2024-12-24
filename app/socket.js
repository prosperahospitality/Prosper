"use client";

import { io } from "socket.io-client";

export const socket = io('https://prosperaahospitality.com/', {
  withCredentials: true, // Enable sending cookies/auth headers
  extraHeaders: {
    "my-custom-header": "abcd", // Add custom headers if needed
  },
});