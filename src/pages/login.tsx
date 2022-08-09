import Head from 'next/head';
import {FormEvent, useState} from 'react';

import {auth, firestore} from '@/firebaseApp/init';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {doc, getDoc} from 'firebase/firestore';

import {useRouter} from 'next/router';
import {Spinner} from '@/components/shared/spinner';

const Login = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitting(true);

    const docRef = doc(firestore, 'admin', emailAddress);
    const docSnap = await getDoc(docRef);

    //Check if the User who is signing in is an Admin
    if (docSnap.exists()) {
      signInWithEmailAndPassword(auth, emailAddress, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          router.push('/');
        })
        .catch((error) => {
          setMessage('Email and/or password is invalid');
          setSubmitting(false);
        });
    } else {
      setMessage('Email and/or password is invalid');
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In | vABi Admin</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="/logo.jpg" alt="" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to Admin Portal</h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(event) => {
                    setEmailAddress(event.currentTarget.value);
                  }}
                  value={emailAddress}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md  focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(event) => {
                    setPassword(event.currentTarget.value);
                  }}
                  value={password}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={submitting}
                className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-app-dark-purple  focus:outline-none focus:ring-2 focus:ring-offset-2 gap-2">
                Sign in
                {submitting && <Spinner className="text-white" />}
              </button>
              <p className="text-center text-red-600 my-2">{message}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
