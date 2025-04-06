import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Sidebar } from "./Sidebar";
import { AuthRoute } from "../auth/AuthRoute";

export const UserLayout = () => {
  return (
    <AuthRoute>
      {/* navbar  */}
      <Header />

      <div className="d-flex">
        <div className="bg-dark text-white p-3 " style={{ width: "200px" }}>
          <div className="p-3">
            <div>Welcome Back</div>
            <h4>Prem Acharya</h4>
          </div>
          <hr />
          <Sidebar />
        </div>

        {/* main body  */}
        <main className="user-main">
          <Outlet />
        </main>
      </div>

      {/* Footer  */}
      <Footer />
    </AuthRoute>
  );
};
