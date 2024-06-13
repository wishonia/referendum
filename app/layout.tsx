import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ToasterProvider } from '@/components/toaster-provider'
import { ModalProvider } from '@/components/modal-provider'
//import { CrispProvider } from '@/components/crisp-provider'

import './globals.css'
import {neobrutalism} from "@clerk/themes";
import React from "react";

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wishonia',
  description: 'AI Platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
        appearance={{
          baseTheme: neobrutalism
        }}
    >
      <html lang="en" suppressHydrationWarning>
        {/* <CrispProvider /> */}
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
