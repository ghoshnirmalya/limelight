import { FileEntry } from "@tauri-apps/api/fs";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface FileState {
  files: FileEntry[];
  updateFiles: (files: FileEntry[]) => void;
}

export const useFileStore = create<FileState>()(
  devtools((set) => ({
    files: [],
    updateFiles: (files: FileEntry[]) => set({ files }),
  }))
);
