"use client";

import { open } from "@tauri-apps/api/dialog";
import { readBinaryFile, readDir } from "@tauri-apps/api/fs";
import { useFileStore } from "@/app/stores/files";

export default function Home() {
  const files = useFileStore((state) => state.files);
  const updateFiles = useFileStore((state) => state.updateFiles);

  console.log(files);

  return (
    <>
      <button
        onClick={async () => {
          const selected = await open({
            directory: true,
            title: "Select a directory",
          });

          if (Array.isArray(selected)) {
          } else if (selected === null) {
            console.log("No directory selected");
          } else {
            console.log(`Selected file: ${selected}`);

            const entries = await readDir(selected, {
              recursive: true,
            });

            updateFiles(entries);

            // for (const entry of entries) {
            //   if (entry.children) {
            //     console.log(entry.children);
            //   }
            // }

            // const contents = await readBinaryFile(entries[0].path);
            // const string = new TextDecoder().decode(contents);

            // console.log(string);
          }
        }}
      >
        Click here
      </button>
      {files.map((file) => {
        return <div key={file.path}>{file.name}</div>;
      })}
    </>
  );
}
