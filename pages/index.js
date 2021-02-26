import LandingPage from '../components/LandingPage';
import App from '../components/app/App';

import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      {!session && <LandingPage signIn={signIn} />}
      {session && <App signOut={signOut} session={session} />}
    </>
  );
}
