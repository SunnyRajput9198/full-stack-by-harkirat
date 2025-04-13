// "use client";
import { getServerSession } from "next-auth";
import { SessionProvider,signIn,signOut,useSession } from "next-auth/react";

export default async function Home() {
  const session2=await getServerSession();
  return (
    <div>
      {JSON.stringify(session2)}
    </div>
  );
}
// export default function Home() {
//   return (
//     <SessionProvider>
//       <Realhome />
//     </SessionProvider>
//   );
// }

function Realhome() {
  const session=useSession();// the session provider has to be wraaped the SessionProvider hook
  return (
    <div>
{session.status === "authenticated" && <button onClick={() => signOut()}>Sign out</button>}
{session.status === "unauthenticated" && <button onClick={() =>signIn()}>Sign in</button>}
{JSON.stringify(session)}
    </div>
  );
}