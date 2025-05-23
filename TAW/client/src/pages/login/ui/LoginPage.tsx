import { LoginForm } from "@features/auth/ui/LoginForm";

export const LoginPage = () => {
  return (
    <>
    <h1>Login</h1>
    <div className='card'>
      <LoginForm />
    </div>
    </>
  );
};