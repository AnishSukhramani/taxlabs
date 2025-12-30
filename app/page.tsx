"use client";

import React, { useState } from "react";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { PageLayout } from "@/components/page-layout";

export function FloatingDockDemo() {
  const [isLoading, setIsLoading] = useState(true);

  const handleAnimationComplete = () => {
    // Add a small delay before hiding loading screen for better UX
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="text-center">
          <EncryptedText
            text="Welcome to the Matrix, Neo."
            encryptedClassName="text-neutral-500"
            revealedClassName="dark:text-white text-black"
            revealDelayMs={50}
            onComplete={handleAnimationComplete}
            className="text-2xl md:text-4xl font-medium"
          />
        </div>
      </div>
    );
  }

  return (
    <PageLayout>
      <div className="min-h-screen w-full pb-20 md:pb-6"></div>
    </PageLayout>
  );
}

export default function Page() {
  return <FloatingDockDemo />;
}
