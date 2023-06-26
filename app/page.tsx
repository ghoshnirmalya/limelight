"use client";

import { open } from "@tauri-apps/api/dialog";
import { readBinaryFile, readDir } from "@tauri-apps/api/fs";

export default function Home() {
  return (
    <button
      onClick={async () => {
        const selected = await open({
          directory: true,
          title: "Select a directory",
        });

        if (Array.isArray(selected)) {
          const entries = await readDir(selected[0], {
            recursive: true,
          });

          for (const entry of entries) {
            console.log(`Entry: ${entry.path}`);

            if (entry.children) {
              console.log(entry.children);
            }
          }

          const contents = await readBinaryFile(entries[0].path);
          const string = new TextDecoder().decode(contents);

          console.log(string);
        } else if (selected === null) {
          console.log("No directory selected");
        } else {
          console.log(`Selected file: ${selected}`);
        }
      }}
    >
      Click here
    </button>
  );
}
