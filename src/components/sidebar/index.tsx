import { cn } from "@/src/utils/tw";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BellDot, KanbanSquare } from "lucide-react";

const LINKS = [
  {
    title: "Projects",
    path: "/",
    icon: <KanbanSquare className="w-4 h-4" />,
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col text-sm">
      <div className="p-4 flex items-center space-x-2 text-lg">
        <BellDot />
        <span>Limelight</span>
      </div>
      <div className="p-4 w-full space-y-2">
        {LINKS.map((link) => {
          const isActive = pathname.startsWith(link.path);

          return (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                "px-4 py-2 cursor-pointer flex items-center space-x-2 rounded hover:shadow-sm",
                {
                  "bg-white dark:bg-gray-900 border border-border": isActive,
                }
              )}
            >
              {link.icon}
              <span>{link.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
