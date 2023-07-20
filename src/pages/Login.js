import React from "react";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const LoginPage = () => {
  const navigate = useNavigate();
  const firebase = useFirebase();

  if (firebase.isLoggedIn) {
    console.log("Hello, Mr User is Logged in");
    navigate("/");
  }

  return (
    <>
      <div className="bg-[#f0f2f5] shadow-xl">
        <div className="flex justify-center items-center pl-12 pr-36">
          <div className="w-3/5 pl-28 -mt-32">
            <div>
              <img
                className="w-[300px] mb-[-12px]"
                src="/assest/login/login.svg"
                alt="facebook"
              />
            </div>
            <div>
              <h2 className="ml-8 text-[28px] leading-8 w-[500px]">
                Facebook helps you connect and share with the people in your
                life
              </h2>
            </div>
          </div>
          <div className="w-2/5">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
