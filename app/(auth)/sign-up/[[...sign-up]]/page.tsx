import { SignIn, SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className="flex h-screen justify-center items-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
