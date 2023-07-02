"use client";

import { ProjectsList } from "@/components/projects-list";

export default function IndexPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold py-4">Projects</h1>
      <ProjectsList />
    </div>
  );
}
