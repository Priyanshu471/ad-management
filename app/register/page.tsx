import Register from "../../components/register";
export default function RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-slate-50">
      <div className="w-full h-screen grid place-items-center">
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 grid my-auto w-[50%]">
          <Register />
        </div>
      </div>
    </main>
  );
}
