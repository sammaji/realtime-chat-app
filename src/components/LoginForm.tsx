import { MouseEvent, useRef } from "react";
import { useFirebaseAuth } from "./FirebaseAuthProvider";
import Menu from "./Menu";

export default function LoginForm() {
  const usernameRef = useRef<HTMLInputElement>(null!);
  const emailRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);

  const { Login } = useFirebaseAuth();

  function handleSubmit(event: any): void {
    event.preventDefault();

    Login(
      usernameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    );
  }
  return (
    <div>
      <Menu />
      <form>
        <input ref={usernameRef} placeholder="username" />
        <input ref={emailRef} placeholder="email" />
        <input ref={passwordRef} placeholder="password" />
        <button type="submit" onClick={(event) => handleSubmit(event)}>
          Login
        </button>
      </form>
    </div>
  );
}
