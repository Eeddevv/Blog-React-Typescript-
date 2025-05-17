import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import MainPage from "./pages/MainPage";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage.async";
import { Suspense, useContext, useState } from "react";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import useTheme from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>

      <Link to={"/"}>Main page</Link>
      <Link to={"/about"}>About page</Link>
    </div>
  );
};

export default App;
