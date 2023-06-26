import { useFileStore } from "@/stores/files";
import { ContentFile } from "@/components/sidebar/content-file";

export const Sidebar = () => {
  const files = useFileStore((state) => state.files);

  return (
    <div className="bg-white w-1/4 h-screen overflow-y-auto border-r">
      {files.map((file) => {
        return <ContentFile key={file.path} file={file} />;
      })}
    </div>
  );
};
