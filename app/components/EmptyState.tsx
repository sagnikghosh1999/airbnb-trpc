"use client";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

import { useRouter } from "next/navigation";
import React from "react";

import Heading from "./Heading";
import Button from "./Button";
import Footer from "./Footer";

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No Exact Matches!",
  subtitle = "Try changing or removing some of your filters",
  showReset,
}) => {
  const router = useRouter();

  return (
    <>
      <div className="h-[70vh] pb-20 flex flex-col justify-center items-center gap-2 ">
        <Heading title={title} subtitle={subtitle} center />
        <div className="w-48 mt-4">
          {showReset && (
            <Button
              outline
              label="Remove all filters"
              onClick={() => router.push("/")}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmptyState;
