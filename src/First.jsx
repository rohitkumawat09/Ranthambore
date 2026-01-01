import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Modal from "./components/Modal";
import Login from "./auth/Login";
import Register from "./auth/Register";

export const First = () => {
  const [authType, setAuthType] = useState(null); // login | register

  return (
    <>
      <Header openLogin={() => setAuthType("login")} />

      <Outlet />

      <Footer />

      {authType && (
        <Modal onClose={() => setAuthType(null)}>
          {authType === "login" && (
            <Login switchToRegister={() => setAuthType("register")} />
          )}
          {authType === "register" && (
            <Register switchToLogin={() => setAuthType("login")} />
          )}
        </Modal>
      )}
    </>
  );
};
