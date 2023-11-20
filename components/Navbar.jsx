import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-slate-600 items-center px-8 py-3 ">
      <Link href={"/"} className="text-white font-bold">
        Todo App
      </Link>
      <Link href={"/addTopic"} className="bg-white p-2 border rounded-md">
        Add Topic
      </Link>
    </nav>
  );
}
