import { FileEntry } from "@tauri-apps/api/fs";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface FileState {
  files: FileEntry[];
  updateFiles: (files: FileEntry[]) => void;
  selectedFile: FileEntry | null;
  selectFile: (file: FileEntry) => void;
}

export const useFileStore = create<FileState>()(
  devtools((set) => ({
    files: [],
    updateFiles: (files: FileEntry[]) => set({ files }),
    selectedFile: null,
    selectFile: (file: FileEntry) => set({ selectedFile: file }),
  }))
);
