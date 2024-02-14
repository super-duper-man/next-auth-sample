import { getServerAuthSession } from "@/auth";
import UserInfo from "./components/UserInfo";
import Link from "next/link";

export default async function Home() {
  const authSession = await getServerAuthSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {authSession?.user && <UserInfo user={authSession?.user} />}
      {!authSession?.user && ( //(3)
        <Link
          className="font-medium mt-2 text-blue-600 hover:underline"
          href="/login"
        >
          Login
        </Link>
      )}
    </main>
  );
}
