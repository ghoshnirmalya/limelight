import { useFileStore } from "@/stores/files";
import { SelectDirButton } from "@/components/content-area/select-dir-button";
import { readTextFile } from "@tauri-apps/api/fs";
import frontMatter, { FrontMatterResult } from "front-matter";
import { useEffect, useState } from "react";
import { IContentFileAttributes } from "@/src/types/content-file-attributes";

export const ContentArea = ({}) => {
  const selectedFile = useFileStore((state) => state.selectedFile);
  const [attributes, setAttributes] = useState<IContentFileAttributes | null>(
    null
  );
  const [body, setBody] = useState<string>("");

  useEffect(() => {
    if (selectedFile) {
      const getFileDetails = async () => {
        const contents = await readTextFile(selectedFile.path);
        const { attributes, body } = frontMatter(
          contents
        ) satisfies FrontMatterResult<IContentFileAttributes>;

        setAttributes(attributes);
        setBody(body);
      };

      getFileDetails();
    }
  }, [selectedFile]);

  if (!attributes) {
    console.warn("No attributes found for file", selectedFile?.path);

    return null;
  }

  const selectedFileNode = () => {
    if (!selectedFile) {
      return null;
    }

    return (
      <div className="space-y-4">
        <h1 className="text-lg font-bold">{attributes.title}</h1>
        <h1 className="text-lg font-bold">{attributes.description}</h1>
        <div className="prose">
          <div dangerouslySetInnerHTML={{ __html: body }} contentEditable />
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white w-3/4 h-screen overflow-y-auto p-4">
      <div className="flex flex-col">{selectedFileNode()}</div>
      <SelectDirButton />
    </div>
  );
};
