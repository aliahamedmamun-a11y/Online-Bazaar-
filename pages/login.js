import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <h1>Welcome, {session.user.name}</h1>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Login to Online Bazaar</h1>
      <button onClick={() => signIn("github")}>Login with GitHub</button>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
}
