import { useEffect } from "react";
import { useFirebaseAuth } from "./FirebaseAuthProvider";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const { user: currentUser } = useFirebaseAuth();

  const { id } = useParams();

  useEffect(() => {
    alert(id)
  })

  useEffect(() => {}, []);

  return (
    <div>
      <p>{currentUser?.displayName}</p>
    </div>
  );
}
