import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "./Modal";
import SignupForm from "./SignupForm";
import { useFirebase } from "../context/Firebase";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  // email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6).required("Password is required"),
  emailOrPhone: yup
    .string()
    .required("Email or phone number is required")
    .test(
      "validEmailOrPhone",
      "Please enter a valid email or phone number",
      (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d+$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }
    ),
});

const LoginForm = () => {
  const [showModal, setShowModal] = useState(false);

  const Firebase = useFirebase();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // Perform login logic here
    console.log(data);

    await Firebase.loginUser(data.email, data.passwrod)
      .then((value) => toast.success("User Login successfully"))
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          toast.error("wrong password.");
          return;
        } else if (error.code === "auth/user-not-fount") {
          toast.error("User not found");
          return;
        }
      });
  };
  // console.log("abbas".props);

  return (
    <>
      <div className="px-4 flex flex-col items-center justify-center min-h-screen mt-8 bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-4 rounded-lg shadow-md w-[396px]"
        >
          <div>
            <input
              type="text"
              name="email"
              className="mt-1 px-4 py-3.5 text-[17px] border border-gray-300 rounded-md w-[364px] focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              // ref={register}
              {...register("emailOrPhone")}
              placeholder="Email address or phone number"
            />
            {errors.emailOrPhone && (
              <p style={{ color: "red" }}>{errors.emailOrPhone.message}</p>
            )}
          </div>

          <div className="mt-4 w-[330px]">
            <input
              type="password"
              id="password"
              className="mt-1 px-4 py-3.5 text-[17px] border border-gray-300 rounded-md w-[364px] focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              {...register("password")}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="mt-6 flex flex-col justify-center items-center">
            <button
              onClick={Firebase.loginWithEmailAndPassword}
              type="submit"
              className="w-[364px] py-[10px] px-4 text-xl border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log in
            </button>

            <div className="mt-4">
              <a
                href="/forgot-password"
                className=" text-blue-500 text-sm hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <hr className="w-full mt-4 border-gray-300" />
            <button
              type="button"
              data-modal-target="popup-modal"
              data-modal-toggle="popup-modal"
              className="mt-4 w-[216px] text-xl font-medium p-[10px] border-transparent rounded-md shadow-sm  text-white bg-[#42b72a] hover:bg-[#42b73b] focus:outline-none  border-none"
              onClick={() => setShowModal(true)}
            >
              Create new account
            </button>
          </div>
        </form>
        <p className="mt-8 text-sm whitespace-normal">
          <span className="font-semibold hover:underline">Create a Page</span>
          &nbsp; for a celebrity, brand or business.
        </p>
        ;
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <SignupForm />
      </Modal>
    </>
  );
};

export default LoginForm;
