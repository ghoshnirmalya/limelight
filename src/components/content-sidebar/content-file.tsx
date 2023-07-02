import { IContentFileAttributes } from "@/types/content-file-attributes";
import { useFileStore } from "@/stores/files";
import { cn } from "@/utils/tw";
import { FileEntry, readTextFile } from "@tauri-apps/api/fs";
import frontMatter, { FrontMatterResult } from "front-matter";
import { useEffect, useState } from "react";

interface IContentFileProps {
  file: FileEntry;
}

export const ContentFile = ({ file }: IContentFileProps) => {
  const selectFile = useFileStore((state) => state.selectFile);
  const selectedFile = useFileStore((state) => state.selectedFile);
  const [attributes, setAttributes] = useState<IContentFileAttributes | null>(
    null
  );

  useEffect(() => {
    const getFileDetails = async () => {
      const contents = await readTextFile(file.path);
      const { attributes } = frontMatter(
        contents
      ) satisfies FrontMatterResult<IContentFileAttributes>;

      setAttributes(attributes);
    };

    getFileDetails();
  }, [file.path]);

  if (!attributes) {
    console.warn("No attributes found for file", file.path);

    return null;
  }

  return (
    <div
      key={file.path}
      className={cn(
        "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900",
        {
          "bg-gray-100 dark:bg-gray-900": selectedFile?.path === file.path,
        }
      )}
      onClick={() => {
        selectFile(file);
      }}
    >
      {attributes.title}
    </div>
  );
};
