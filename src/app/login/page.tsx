"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import googleIcon from "public/icons/google.png"
import githubIcon from "public/icons/github.png"

type UserData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [input, setInput] = useState<UserData>({ email: "", password: "" });
  const [error, setError] = useState<string>("");
  const [storedUser, setStoredUser] = useState<UserData | null>(null);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      toast.success("Logged in with provider ✅");
      router.push("/");
    }
  }, [session, router]);

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) setStoredUser(JSON.parse(data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.email || !input.password) {
      setError("All fields are required.");
      return;
    }

    if (!storedUser) {
      setError("No user found. Please sign up first.");
      return;
    }

    if (
      input.email === storedUser.email &&
      input.password === storedUser.password
    ) {
      setError("");
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Login successful ✅");
      window.dispatchEvent(new Event("authChange"));
      router.push("/");
    } else {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div className="app-container">
      <main
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-5 py-16"
        style={{ backgroundImage: `url(/images/login.jpg)` }}
      >
        <div className="bg-white/15 backdrop-blur-lg p-8 rounded-2xl max-w-md w-full text-center text-white shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
          <h2 className="text-2xl font-semibold mb-2">Welcome Back! 👋</h2>
          <p className="mb-6 text-base text-gray-200">
            Login to your FoodPanda account
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={input.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg text-base outline-none bg-white/50 text-black placeholder-gray-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg text-base outline-none bg-white/50 text-black placeholder-gray-500"
            />
            {error && (
              <p className="text-red-500 text-sm font-medium text-left pl-2">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="py-3 px-6 bg-[#6a11cb] hover:bg-[#5621b3] text-white rounded-full font-semibold transition-colors duration-300"
            >
              Login
            </button>

            <div className="mt-4">
              <p className="text-gray-200 text-sm mb-2">Or login with</p>
              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => signIn("google")}
                  className="flex items-center gap-3 px-5 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white cursor-pointer hover:bg-gray-50"
                >
                  <Image
                    src={googleIcon}
                    alt="Google Logo"
                    className="w-5 h-5"
                  />
                  Sign in with Google
                </button>

                <button
                  type="button"
                  onClick={() => signIn("github")}
                  className="flex items-center gap-3 px-5 py-2 border-[#44444] rounded-md shadow-sm text-sm font-medium text-white bg-[#444444] cursor-pointer hover:bg-[#4e4e4e]"
                >
                  <Image
                    src={githubIcon}
                    alt="GitHub Logo"
                    className="w-5 h-5"
                  />
                  Sign in with GitHub
                </button>

              </div>
            </div>

            <p className="mt-5 text-sm">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="underline hover:text-gray-300 text-[#ffe] transition-colors"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
