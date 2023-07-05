import { useFileStore } from "@/stores/files";
import { ContentFile } from "@/src/components/content-sidebar/content-file";

export const ContentSidebar = () => {
  const files = useFileStore((state) => state.files);

  return (
    <div className="w-1/4 h-screen overflow-y-auto border-r text-sm">
      {files.map((file) => {
        return <ContentFile key={file.path} file={file} />;
      })}
    </div>
  );
};
