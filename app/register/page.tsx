import RegisterForm from "@/components/registerForm";

export default async function Register() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-slate-50">
      <div className="text-primary absolute top-10 flex flex-col items-center justify-center gap-y-10">
        <h1 className=" text-3xl">Welcome to Advertisment Management System</h1>
        <h3 className="text-xl">Create an account</h3>
      </div>
      <div className="w-full">
        <RegisterForm />
      </div>
    </main>
  );
}
