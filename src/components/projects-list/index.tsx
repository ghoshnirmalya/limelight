import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ProjectsList = () => {
  return (
    <div className="grid grid-cols-2 w-full">
      <Card>
        <CardHeader>
          <CardTitle>Project 1</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};
