import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();

  let href = userId ? "/journal" : "/new-user";

  return (
    <main className="w-screen h-screen bg-gray-950 text-white flex justify-center items-center">
      <section className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl capitalize mb-4">The best journal app</h1>
        <p className="text-2xl text-white/60 mb-4">
          This is the best app for tracking your mood throughout your life. All
          you have to do is be honest.
        </p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 px-4 py-2 rounded-md text-xl hover:bg-blue-500 capitalize">
              Get started
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
