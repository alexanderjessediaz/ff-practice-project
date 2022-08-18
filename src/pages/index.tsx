import Head from 'next/head';
import {withAuthUser, AuthAction} from 'next-firebase-auth';

// import {SplashScreen} from '@/components/home/desktop/';
import {PageLoader} from '@/components/shared/pageloader';

function HomePage() {
  return (
    <>
      <Head>
        <title>Practice Project </title>
      </Head>
    </>
  );
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP, //if user is authenticated, go to Dashboard
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER, //if jdk isn't fully loaded yet, return null
  whenUnauthedAfterInit: AuthAction.RENDER, //if user isn't, render the Home page
  LoaderComponent: PageLoader,
})(HomePage);

