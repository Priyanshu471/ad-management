import LogIn from "@/components/login";

export default function Home() {
  return (
    <main className="min-h-full flex flex-col bg-slate-50 items-center">
      <div className="w-full h-screen grid place-items-center">
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 grid my-auto w-[50%]">
          <LogIn />
        </div>
      </div>
    </main>
  );
}
