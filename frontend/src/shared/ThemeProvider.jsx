import React from "react";
import { themeToggle } from "../context/themeToggle";
import { useRecoilState } from "recoil";

const ThemeProvider = () => {
  const [toggle, setToggle] = useRecoilState(themeToggle);
  toggle === "dark" ? "" : "";
};

export default ThemeProvider;
