"use client";

import React, { ReactNode } from "react";
import { SiteHeader } from "@/components/header";
import Footer from "@/components/footer";
import Newsletter from "@/components/news-letter";

interface LayoutProps {
  children: ReactNode;
  newsletter?: boolean;
}

export default function Layout({ children, newsletter = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow">{children}</main>
      {newsletter && <Newsletter />}
      <Footer />
    </div>
  );
}
