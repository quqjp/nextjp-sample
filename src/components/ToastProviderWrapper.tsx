"use client";
import { ReactNode } from "react";
import { ToastProvider } from "@zenkigen-inc/component-ui"

export default function ToastProviderWrapper({ children }: { children: ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}