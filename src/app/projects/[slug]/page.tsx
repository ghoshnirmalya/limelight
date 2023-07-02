"use client";

import { ContentArea } from "@/components/content-area";
import { ContentSidebar } from "@/src/components/content-sidebar";

export default function IndexPage() {
  return (
    <div className="flex">
      <ContentSidebar />
      <ContentArea />
    </div>
  );
}
