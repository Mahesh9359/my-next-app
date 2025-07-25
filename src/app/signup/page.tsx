"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

type UserForm = {
    name: string;
    email: string;
    gender: string;
    password: string;
    nameError: string;
    emailError: string;
    passwordError: string;
    genderError: string;
};

const Signup: React.FC = () => {
    const [user, setUser] = useState<UserForm>({
        name: "",
        email: "",
        gender: "",
        password: "",
        nameError: "",
        emailError: "",
        passwordError: "",
        genderError: ""
    });

    const router = useRouter();
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setUser((prev) => {
            const updatedUser = { ...prev, [name]: value };

            if (name === 'name') {
                const nameValidation = /^[a-zA-Z ]+$/;
                if (!value.trim()) {
                    updatedUser.nameError = "Name is required.";
                } else if (!nameValidation.test(value.trim())) {
                    updatedUser.nameError = "Name must contain only letters and spaces.";
                } else {
                    updatedUser.nameError = "";
                }
            }

            if (name === 'email') {
                const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailValidation.test(value.trim())) {
                    updatedUser.emailError = "Invalid email address.";
                } else {
                    updatedUser.emailError = "";
                }
            }

            if (name === 'password') {
                if (value.length < 6) {
                    updatedUser.passwordError = "Password must be at least 6 characters.";
                } else {
                    updatedUser.passwordError = "";
                }
            }

            if (name === 'gender') {
                if (!value) {
                    updatedUser.genderError = "Please select your gender.";
                } else {
                    updatedUser.genderError = "";
                }
            }

            return updatedUser;
        });
    };


    const saveData = () => {
        const nameValidation = /^[a-zA-Z ]+$/;
        const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let nameError = "";
        let emailError = "";
        let passwordError = "";
        let genderError = "";

        if (!user.name.trim()) {
            nameError = "Name is required.";
        } else if (!nameValidation.test(user.name.trim())) {
            nameError = "Name must contain only letters and spaces.";
        }

        if (!emailValidation.test(user.email.trim())) {
            emailError = "Invalid email address.";
        }

        if (user.password.length < 6) {
            passwordError = "Password must be at least 6 characters.";
        }

        if (!user.gender) {
            genderError = "Please select your gender.";
        }
        setUser(prev => ({
            ...prev,
            nameError,
            emailError,
            passwordError,
            genderError
        }));

        if (nameError || emailError || passwordError || genderError) {
            return;
        }

        const { name, email, password, gender } = user;
        localStorage.setItem("userData", JSON.stringify({ name, email, password, gender }));
        toast.success('Sign up successful');
        router.push("/login");

        setUser({
            name: "",
            email: "",
            gender: "",
            password: "",
            nameError: "",
            emailError: "",
            passwordError: "",
            genderError: ""
        });

    };


    return (
        <div className="min-h-screen flex flex-col">
            <main
                className="min-h-screen bg-cover bg-center flex items-center justify-center px-5 py-16"
                style={{ backgroundImage: `url(images/login.jpg)` }}
            >
                <div className="bg-white/15 backdrop-blur-lg p-8 rounded-2xl max-w-md w-full text-center text-white shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                    <h2 className="text-2xl font-bold mb-2">Create Account ✨</h2>
                    <p className="text-gray-200 mb-6">Sign up for FoodPanda</p>
                    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name="name" placeholder="Full Name" value={user.name} onChange={handleInput} className="px-4 py-3 rounded-lg text-base outline-none bg-white/50 text-black placeholder-gray-500" required />
                        {user.nameError && <p className="text-red-500 text-sm text-left pl-2">{user.nameError}</p>}

                        <input type="email" name="email" placeholder="Email address" value={user.email} onChange={handleInput} className="px-4 py-3 rounded-lg text-base outline-none bg-white/50 text-black placeholder-gray-500" required />
                        {user.emailError && <p className="text-red-500 text-sm text-left pl-2">{user.emailError}</p>}

                        <div className="text-left px-1">
                            <label className="mr-4">
                                <input type="radio" name="gender" value="Male" checked={user.gender === "Male"} onChange={handleInput} className="mr-1" /> Male</label>
                            <label className="mr-4">
                                <input type="radio" name="gender" value="Female" checked={user.gender === "Female"} onChange={handleInput} className="mr-1" /> Female</label>
                            <label>
                                <input type="radio" name="gender" value="Other" checked={user.gender === "Other"} onChange={handleInput} className="mr-1" /> Other</label>
                            {user.genderError && <p className="text-red-500 text-sm mt-1">{user.genderError}</p>}
                        </div>

                        <input
                            type="password" name="password" placeholder="Password" value={user.password} onChange={handleInput} className="px-4 py-3 rounded-lg text-base outline-none bg-white/50 text-black placeholder-gray-500" required />
                        {user.passwordError && <p className="text-red-500 text-sm text-left pl-2">{user.passwordError}</p>}

                        <button type="submit" onClick={saveData} className="p-3 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white transition-colors">
                            Sign Up
                        </button>


                        <p className="text-sm mt-4">
                            Already have an account?{" "}
                            <a href="/login" className="underline hover:text-gray-300 text-white">
                                Login
                            </a>
                        </p>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Signup;