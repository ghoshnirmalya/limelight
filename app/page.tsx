"use client";

import { ContentArea } from "@/components/content-area";
import { Sidebar } from "@/components/sidebar";

export default function IndexPage() {
  return (
    <div className="flex">
      <Sidebar />
      <ContentArea />
    </div>
  );
}
