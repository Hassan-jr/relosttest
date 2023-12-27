"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [user, setUser] = useState({
    UserName: "",
    Email: "",
    Password: "",
    IsActive: 1
  });

  const handlechange = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await axios.post(
        "http://relsofttimsthree-001-site1.atempurl.com/api/Test/registration",
        user
      );
      console.log("Login successful", response.data);
      alert(response.data);
     
    } catch (error) {
      console.error("Login failed", error);
      alert(error);
    }
  };

  return (
    <main>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Relsoft Tims
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={submit}>
                {/* user name */}
                <div>
                  <label
                    htmlFor="UserName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    UserName
                  </label>
                  <input
                    type="text"
                    name="UserName"
                    id="UserName"
                    onChange={handlechange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="UserName"
                    required=""
                  />
                </div>

                {/* emain */}
                <div>
                  <label
                    htmlFor="Email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    id="Email"
                    onChange={handlechange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email@gmail.com"
                    required=""
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="Password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="Password"
                    id="Password"
                    placeholder="••••••••"
                    onChange={handlechange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                {/* button */}
                <button
                  type="submit"
                  // onSubmit={submit}
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                {/* Register */}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already Have an Account?{" "}
                  <Link
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="/"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
