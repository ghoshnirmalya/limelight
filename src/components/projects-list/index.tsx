import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const ProjectsList = () => {
  return (
    <div className="grid grid-cols-3 w-full gap-4">
      {[...Array(10)].map((_, index) => {
        return (
          <Link key={index} href={`/projects/${index}`}>
            <Card>
              <CardHeader>
                <CardTitle>Project 1</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
