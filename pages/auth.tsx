import Input from "@/components/Input";
import Image from "next/image";
import axios from "axios";
import React, { useState, useCallback } from "react";

const Auth: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [variant, setvariant] = useState("login");

  const register = useCallback(async () => {
    await axios.post("/api/register", {
      name,
      password,
      email,
    });
  }, [name, password, email]);

  const toggleVariant = useCallback(() => {
    setvariant(
      (currentVariant) => (currentVariant = "login" ? "register" : "login")
    );
  }, []);

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
                {variant === "login" ? "Login" : "Register"}
              </h2>
              <div className='flex flex-col gap-4'>
                {variant === "login" ? (
                  ""
                ) : (
                  <Input
                    type='text'
                    id='username'
                    onChange={(event: any) => setName(event.target.value)}
                    value={name}
                    label='Username'
                  />
                )}
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
              <button
                onClick={register}
                className='w-full bg-red-600 hover:bg-red-700 text-white rounded-md p-3 mt-10'
              >
                {variant === "login" ? "Login" : "Register"}
              </button>
              {variant === "login" ? (
                <p className='text-neutral-500 justify-center flex mt-12'>
                  First time using Netflix?
                  {variant === "login" ? (
                    <span
                      className='text-white hover:underline cursor-pointer ml-1'
                      onClick={toggleVariant}
                    >
                      Create an account
                    </span>
                  ) : (
                    <span
                      className='text-white hover:underline cursor-pointer ml-1'
                      onClick={() => {
                        setvariant("login");
                      }}
                    >
                      Already Signed Up? Login
                    </span>
                  )}
                </p>
              ) : (
                <p className='text-neutral-500 justify-center flex mt-12'>
                  {variant === "login" ? (
                    <span
                      className='text-white hover:underline cursor-pointer ml-1'
                      onClick={toggleVariant}
                    >
                      Create an account
                    </span>
                  ) : (
                    <span
                      className='text-white hover:underline cursor-pointer ml-1'
                      onClick={() => {
                        setvariant("login");
                      }}
                    >
                      Already Signed Up? Login
                    </span>
                  )}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
