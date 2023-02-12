import { useRef } from "react";
import { useFirebaseAuth } from "./FirebaseAuthProvider";
import { checkIfUsernameExists } from "../utils/firebase";
import Menu from "./Menu";

export default function SigninFrom() {
  const usernameRef = useRef<HTMLInputElement>(null!);
  const emailRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);
  const { Signup } = useFirebaseAuth();

  function handleSubmit(event: any): void {
    event.preventDefault();

    checkIfUsernameExists(usernameRef.current.value).then((exists) => {
      if (!exists) {
        Signup(
          usernameRef.current.value,
          emailRef.current.value,
          passwordRef.current.value
        );
      } else {
        alert("Username must be unique");
      }
    });
  }

  return (
    <div>
      <Menu />
      <form>
        <input ref={usernameRef} placeholder="username" />
        <input ref={emailRef} placeholder="email" />
        <input ref={passwordRef} placeholder="password" />
        <button type="submit" onClick={(event) => handleSubmit(event)}>
          Create Account
        </button>
      </form>
    </div>
  );
}
