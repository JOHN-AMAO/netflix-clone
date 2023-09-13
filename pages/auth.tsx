import Input from "@/components/Input";
import Image from "next/image";
import React, { useState } from "react";

const Auth: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [variant, setvariant] = useState("Login");
  return (
    <>
      <div className='relative h-full w-full bg-[url("/images/hero.jpg")]'>
        <div className='bg-black w-full h-full lg:bg-opacity-50'>
          <nav className='px-12 py-5 bg-black bg-opacity-50'>
            <Image
              width={150}
              height={50}
              src='/images/logo.png'
              alt='logo'
              className='h-12'
            />
          </nav>
          <div className='flex justify-center'>
            <div className='bg-black bg-opacity-80 px-16 py-16 self-center mt-2 lg:w-2/5 rounded-md w-full'>
              <h2 className='text-white text-3xl mb-8 font-semibold'>
                Sign Up
              </h2>
              <div className='flex flex-col gap-4'>
                <Input
                  type='text'
                  id='username'
                  onChange={(event: any) => setUsername(event.target.value)}
                  value={username}
                  label='Username'
                />
                <Input
                  type='text'
                  id='email'
                  onChange={(event: any) => setEmail(event.target.value)}
                  value={email}
                  label='Email'
                />
                <Input
                  type='password'
                  id='password'
                  onChange={(event: any) => setPassword(event.target.value)}
                  value={password}
                  label='Password'
                />
              </div>
              <button className='w-full bg-red-600 hover:bg-red-700 text-white rounded-md p-3 mt-10'>
                Login
              </button>
              <p className='text-neutral-500 justify-center flex mt-12'>
                First time using Netflix?
                <span className='text-white hover:underline cursor-pointer ml-1'>
                  Create an account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
