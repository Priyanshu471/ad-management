import Login from "@/components/login";

export default function Home() {
  return (
    <main className="min-h-full flex flex-col bg-slate-50 items-center">
      <div className="w-full">
        <Login />
      </div>
    </main>
  );
}
