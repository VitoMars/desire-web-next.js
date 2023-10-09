"use client"

import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap'; // Supponendo che tu stia utilizzando Bootstrap per i componenti UI
import Form from 'react-bootstrap/Form';
import * as colors from './colors/index.js';

export default function Home() {

  // const router = useRouter();

  // Variabili di stato
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary" style={{ backgroundColor: colors.PRIMARY }}>
      <div className="max-w-md w-full p-6 space-y-6 rounded-lg" >
        <div className="text-center">
          <img
            src="/images/desire_logo.png"
            alt="Logo"
            className="w-40 h-40 mx-auto"
          />
          <img
            src="/images/desire_logo_text.png"
            alt="Logo Text"
            className="w-60 h-20 mx-auto"
          />
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block ">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md text-black focus:outline-none focus:border-secondary"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white">Password</label>
            <input
              type={securePassword ? 'password' : 'text'}
              id="password"
              className="w-full p-2 border rounded-md text-black focus:outline-none focus:border-secondary"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="mt-2 text-secondary text-black"
              onClick={() => setSecurePassword(!securePassword)}
            >
              {securePassword ? 'Show Password' : 'Hide Password'}
            </button>
          </div>

          <div>
            <button
              type="button"
              className="w-full p-2 text-black rounded-md hover:bg-opacity-80"
              style={{ backgroundColor: colors.SECONDARY }}
              // onClick={signIn}
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : "Sign In"}
            </button>
          </div>

          <div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-2 text-white bg-royalblue rounded-md"
              style={{ backgroundColor: colors.MALE }}
            // onClick={signInWithGoogle}
            >
              <img
                src="/images/google_logo.png"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
          </div>

          <div >
            <button
              type="button"
              className="w-full text-black text-center"
              style={{ color: colors.SECONDARY }}
            // onClick={() => router.push('/ResetPassword')}
            >
              "Forgot password?"
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
