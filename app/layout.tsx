import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ideanet Solution Inc. - Where Ideas Meet Technology",
  description:
    "Leading fintech and mobile development company specializing in innovative financial solutions, payment systems, and mobile applications. Where ideas meet technology.",
  keywords:
    "fintech, mobile development, payment solutions, financial technology, banking apps, blockchain, digital payments, ideanet",
  authors: [{ name: "Ideanet Solution Inc." }],
  openGraph: {
    title: "Ideanet Solution Inc. - Where Ideas Meet Technology",
    description: "Transform your innovative ideas into cutting-edge fintech and mobile development solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideanet Solution Inc. - Where Ideas Meet Technology",
    description: "Transform your innovative ideas into cutting-edge fintech and mobile development solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'Ideanet Solution Inc.',
  icons: {
    icon: "/images/ideanet-logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
