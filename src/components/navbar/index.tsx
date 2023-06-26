import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/projects/1">Slug</Link>
    </div>
  );
};
