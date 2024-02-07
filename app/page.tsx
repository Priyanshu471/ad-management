import Login from "@/components/login";

export default function Home() {
  return (
    <main className="min-h-full flex flex-col bg-slate-50 items-center">
      <h1 className=" text-3xl text-primary absolute top-10">
        Advertisment Management System
      </h1>
      <div className="w-full">
        <Login />
      </div>
    </main>
  );
}
