import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="flex h-screen justify-center items-center">
      <SignIn />
    </main>
  );
};

export default SignInPage;
