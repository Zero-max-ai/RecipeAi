import React, { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import Tostify from "../shared/Tostify";

const LoginPage = () => {
  const userLogin = () => {
    const ans = schema.safeParse({ email, password });
    if (!ans) {
      setTimeout(() => {
        <Tostify />;
      });
    }
  };
  const schema = z.object({
    email: z.string().email().min(1),
    password: z.string().min(6),
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-full w-full">
      <div className="h-full w-1/5 mx-auto flex flex-col gap-4 items-center justify-center">
        <h1 className="font-bold text-2xl">Login</h1>
        <Input
          labelName={"Email"}
          type={"text"}
          placeholder={"johndoe@gmail.com"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          labelName={"Password"}
          type={"password"}
          placeholder={"********"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton title={"Login"} onClick={() => userLogin()} />
        {/* signup loc route */}
        <div className="text-black text-xs">
          <span className="">
            Don't have an account?{" "}
            <Link
              to={"/signup"}
              className="underline underline-offset-1 text-green-500"
            >
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

const Input = ({ labelName, type, placeholder, value, onChange }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="w-full font-semibold text-sm">{labelName}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="ring-2 w-full rounded-md bg-slate-50 px-4 py-2 text-xs outline-none focus:bg-slate-100 focus:ring-4"
      />
    </div>
  );
};

const SubmitButton = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="ring w-full px-4 py-2 rounded-md text-sm hover:ring-4 focus:ring-4"
    >
      {title}
    </button>
  );
};
