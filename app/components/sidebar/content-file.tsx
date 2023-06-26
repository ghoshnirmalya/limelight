import { useFileStore } from "@/app/stores/files";
import { cn } from "@/app/utils/tw";
import { FileEntry, readTextFile } from "@tauri-apps/api/fs";
import frontMatter from "front-matter";
import { useEffect, useState } from "react";

interface IContentFileProps {
  file: FileEntry;
}

export const ContentFile = ({ file }: IContentFileProps) => {
  const selectFile = useFileStore((state) => state.selectFile);
  const selectedFile = useFileStore((state) => state.selectedFile);
  const [attributes, setAttributes] = useState<unknown>({});

  useEffect(() => {
    const getFileDetails = async () => {
      const contents = await readTextFile(file.path);
      const { attributes } = frontMatter(contents);

      setAttributes(attributes);
    };

    getFileDetails();
  }, [file.path]);

  return (
    <div
      key={file.path}
      className={cn(
        "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900",
        {
          "bg-blue-50 dark:bg-blue-950": selectedFile?.path === file.path,
        }
      )}
      onClick={() => {
        selectFile(file);
      }}
    >
      {attributes["title"]}
    </div>
  );
};
