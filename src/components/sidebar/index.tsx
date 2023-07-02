import { cn } from "@/src/utils/tw";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  {
    title: "Projects",
    path: "/",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col text-sm">
      <div className="py-4 px-4 bg-blue-50 dark:bg-blue-950 font-semibold border-b">
        Logo
      </div>
      {LINKS.map((link) => {
        const isActive = pathname.startsWith(link.path);

        return (
          <Link
            key={link.path}
            href={link.path}
            className={cn(
              "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900",
              {
                "bg-gray-100 dark:bg-gray-900": isActive,
              }
            )}
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};
