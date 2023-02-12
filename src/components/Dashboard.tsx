import React from "react";
import { useFirebaseAuth } from "./FirebaseAuthProvider";

export default function Dashboard() {
  const { user: currentUser } = useFirebaseAuth();

  return <div>
    <p>{currentUser?.email}</p>
  </div>;
}
