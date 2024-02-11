import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { ModalProvider } from "@/components/providers/modal-provider";

export const metadata: Metadata = {
  title: "Advertisment Management System",
  description: "The best way to manage your ads",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.png",
        href: "/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-boxdark-2 dark:text-bodydark">
        {children}
        <Toaster richColors position="bottom-center" />
        <ModalProvider />
      </body>
    </html>
  );
}
