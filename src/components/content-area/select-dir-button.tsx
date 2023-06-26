import { Button } from "@/components/ui/button";
import { useFileStore } from "@/stores/files";
import { open } from "@tauri-apps/api/dialog";
import { readDir } from "@tauri-apps/api/fs";

export const SelectDirButton = () => {
  const updateFiles = useFileStore((state) => state.updateFiles);
  const files = useFileStore((state) => state.files);

  if (files.length) {
    return null;
  }

  return (
    <Button
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
        }
      }}
    >
      Click here
    </Button>
  );
};
