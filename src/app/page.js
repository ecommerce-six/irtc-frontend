import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Link href={"/home/man"}>man part</Link> <Link href={"/home/woman"}>woman part</Link>
      <Header />
    </main>
  );
}
