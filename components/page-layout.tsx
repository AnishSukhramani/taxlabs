"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { DOCK_LINKS } from "@/lib/constants";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      {children}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center px-4 pb-4 md:pb-6">
        <FloatingDock items={DOCK_LINKS} />
      </div>
    </>
  );
}

